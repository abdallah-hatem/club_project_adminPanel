import type { MyPageTableOptions } from '@/components/business/page';

import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';
import { Form, message, Space, Tag } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  ADD_USER,
  ARCHIVE_USER,
  GET_ACTIVE_USERS,
  GET_ROLES_2,
  GET_USERS,
  GET_USERS_BY_ID,
  UPDATE_USER,
} from '@/api/admin';
import { DELETE_CATEGORY } from '@/api/categories';
import MyButton from '@/components/basic/button';
import MyModal from '@/components/basic/modal';
import MyPage from '@/components/business/page';
import MyForm from '@/components/core/form';

export default function Users() {
  const router = useNavigate();

  const [form] = Form.useForm();
  const [formUpdate] = Form.useForm();

  const [action, setAction] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);
  const [openedUpdate, setOpenedUpdate] = useState<boolean>(false);
  const [roles, setRoles] = useState<any[] | null>(null);
  const [currentUser, setCurrentUser] = useState<any | null>(null);

  console.log(currentUser, 'currentUser');

  useEffect(() => {
    GET_ROLES_2().then((res: any) => setRoles(res));
  }, []);

  useEffect(() => {
    if (currentUser) {
      formUpdate.setFieldsValue({
        first_name: currentUser.first_name,
        last_name: currentUser.last_name,
        username: currentUser.username,
        email: currentUser.email,
        role_ids: currentUser.role_ids,
      });

      triggerModalUpdate();
    }
  }, [currentUser]);

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Name', dataIndex: 'name', key: 'id' },
    { title: 'Email', dataIndex: 'email', key: 'id' },
    {
      title: 'Roles',
      dataIndex: 'roles',
      render(value, record, index) {
        return value.map((el: any) => <Tag>{el}</Tag>);
      },
    },
    { title: 'Creation date', dataIndex: 'inserted_at', key: 'id' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton
            style={{ color: 'blue' }}
            type="text"
            onClick={() => {
              setCurrentUser(record);
              // triggerModalUpdate();
            }}
          >
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              ARCHIVE_USER(record.id);
              setAction(prev => !prev);
              message.success('Archived successfully');
            }}
            style={{ color: 'red' }}
          >
            Archive
          </MyButton>
        </Space>
      ),
    },
  ];

  const triggerModal = () => setOpened(prev => !prev);

  const triggerModalUpdate = () => setOpenedUpdate(prev => !prev);

  const onFinish = (value: any) => {
    console.log(value);

    ADD_USER(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
      setAction((prev: any) => !prev);
      triggerModal();
    });
  };

  const onFinishUpdate = (value: any) => {
    UPDATE_USER(currentUser?.id, value).then(() => {
      message.success('Added successfully');
      setAction((prev: any) => !prev);
      // triggerModal();
    });
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'end',
          minHeight: '50px',
        }}
      >
        <MyButton icon={<PlusOutlined />} onClick={triggerModal}>
          Create a new user
        </MyButton>

        <MyButton icon={<ReloadOutlined />} onClick={() => setAction((prev: any) => !prev)}>
          Refresh
        </MyButton>
      </div>

      <MyPage
        pageApi={GET_ACTIVE_USERS}
        // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
        action={action}
        tableOptions={tableColums}
      ></MyPage>

      <MyModal title="Create a new user" open={opened} footer={[]} onCancel={triggerModal} width={800}>
        <MyForm<any> onFinish={onFinish} form={form} layout="horizontal" labelCol={{ span: 5 }} labelAlign="left">
          <MyForm.Item label="First name" required name="first_name" type="input" />
          <MyForm.Item label="Surname" required name="last_name" type="input" />
          <MyForm.Item label="User name" required name="username" type="input" />
          <MyForm.Item label="Email" required name="email" type="input" />

          <MyForm.Item
            label="Roles"
            required
            name="role_ids"
            type="select"
            options={roles?.map(item => ({ label: item.suggestion, value: item.id }))}
            innerProps={{ mode: 'multiple' }}
          />

          <MyForm.Item>
            <MyButton type="primary" htmlType="submit" style={{ float: 'right' }}>
              Submit
            </MyButton>
          </MyForm.Item>
        </MyForm>
      </MyModal>

      <MyModal
        title="Update user"
        open={openedUpdate}
        footer={[]}
        onCancel={() => {
          triggerModalUpdate();
          setCurrentUser(null);
        }}
        width={800}
      >
        <MyForm<any>
          onFinish={onFinishUpdate}
          layout="horizontal"
          labelCol={{ span: 5 }}
          form={formUpdate}
          labelAlign="left"
        >
          <MyForm.Item label="First name" required name="first_name" type="input" />
          <MyForm.Item label="Surname" required name="last_name" type="input" />
          <MyForm.Item label="User name" required name="username" type="input" />
          <MyForm.Item label="Email" required name="email" type="input" />

          <MyForm.Item
            label="Roles"
            required
            name="role_ids"
            type="select"
            options={roles?.map(item => ({ label: item.suggestion, value: item.id }))}
            innerProps={{ mode: 'multiple' }}
          />

          <MyForm.Item>
            <MyButton type="primary" htmlType="submit" style={{ float: 'right' }}>
              Submit
            </MyButton>
          </MyForm.Item>
        </MyForm>
      </MyModal>
    </>
  );
}
