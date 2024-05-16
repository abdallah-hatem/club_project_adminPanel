import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_SPORT, GET_SPORTS } from '@/api/sport';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

export default function Sports() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Sport name', dataIndex: 'name', key: 'id' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton style={{ color: 'blue' }} type="text" onClick={() => router(`/sport/update/${record.id}`)}>
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_SPORT(record.id);
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
      pageApi={GET_SPORTS}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
