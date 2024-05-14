import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space, Tag } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_FIELD, GET_FIELDS } from '@/api/fields';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

export default function Fields() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Name', dataIndex: 'name', key: 'id' },
    { title: 'Activity', dataIndex: 'activity', key: 'id', render: (text: any) => <Tag>{text.name}</Tag> },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton style={{ color: 'blue' }} type="text" onClick={() => router(`/fields/updateField/${record.id}`)}>
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_FIELD(record.id);
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

  return (
    <MyPage
      pageApi={GET_FIELDS}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
