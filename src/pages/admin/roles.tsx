import type { MyPageTableOptions } from '@/components/business/page';

import { PlusOutlined } from '@ant-design/icons';
import { Form, message, Modal, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { ADD_ROLE, DELETE_ROLE, GET_ROLES } from '@/api/admin';
import { DELETE_CATEGORY } from '@/api/categories';
import MyButton from '@/components/basic/button';
import MyModal from '@/components/basic/modal';
import MyPage from '@/components/business/page';
import MyForm from '@/components/core/form';

export default function Roles() {
  const [action, setAction] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);

  const [form] = Form.useForm();

  const triggerModal = () => setOpened(prev => !prev);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Name', dataIndex: 'name', key: 'id' },
    { title: 'No. users', dataIndex: 'n_users', width: 100, key: 'id' },
    { title: 'Creation date', dataIndex: 'inserted_at', key: 'id' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton style={{ color: 'blue' }} type="text" onClick={() => router(`/role/${record.id}`)}>
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_ROLE(record.id);
              setAction(prev => !prev);
              message.success('Deleted successfully');
            }}
            style={{ color: 'red' }}
          >
            Delete
          </MyButton>
        </Space>
      ),
    },
  ];

  const onFinish = (value: any) => {
    console.log(value);
    ADD_ROLE(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
      setAction((prev: any) => !prev);
      triggerModal();
    });
  };

  return (
    <>
      <div style={{ maxHeight: '50px' }}>
        <MyButton icon={<PlusOutlined />} style={{ float: 'right' }} onClick={triggerModal}>
          Create a new role
        </MyButton>
      </div>

      <MyPage
        pageApi={GET_ROLES}
        // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
        action={action}
        tableOptions={tableColums}
      ></MyPage>

      <MyModal title="Create a new role" open={opened} footer={[]} onCancel={triggerModal}>
        <MyForm<any> onFinish={onFinish} form={form} layout="horizontal" labelCol={{ span: 5 }} labelAlign="left">
          <MyForm.Item label="Name" required name="name" type="input" />
          <MyForm.Item label="Description" name="description" type="textarea" style={{ minHeight: '100px' }} />

          <MyForm.Item>
            <MyButton type="primary" htmlType="submit">
              Submit
            </MyButton>
          </MyForm.Item>
        </MyForm>
      </MyModal>
    </>
  );
}
