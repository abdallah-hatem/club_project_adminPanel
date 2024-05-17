import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space, Tag } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_PRACTICE, GET_PRACTICES } from '@/api/practice';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

export default function Practices() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Coach name', dataIndex: 'coach', key: 'id', render: (val: any) => <>{val.name}</> },
    { title: 'Sport name', dataIndex: 'sports', key: 'id', render: (val: any) => <Tag>{val.name}</Tag> },
    { title: 'From', dataIndex: 'from', key: 'id' },
    { title: 'To', dataIndex: 'to', key: 'id' },
    {
      title: 'Days',
      dataIndex: 'days',
      key: 'id',
      render: (val: any) => val.split(',').map((item: any) => <Tag>{item}</Tag>),
    },
    { title: 'Price', dataIndex: 'price', key: 'id' },

    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {/* <MyButton style={{ color: 'blue' }} type="text" onClick={() => router(`/practice/update/${record.id}`)}>
            update
          </MyButton> */}
          <MyButton
            type="text"
            onClick={() => {
              DELETE_PRACTICE(record.id);
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
      pageApi={GET_PRACTICES}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
