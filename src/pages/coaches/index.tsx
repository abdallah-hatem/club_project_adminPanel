import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_COACH, GET_COACHES } from '@/api/coaches';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

export default function Coaches() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Coach name', dataIndex: 'name', key: 'id', width: 120 },
    { title: 'Age', dataIndex: 'age', key: 'id' },
    { title: 'Years of experience', dataIndex: 'years_of_experience', key: 'id', width: 140 },
    {
      title: 'Brief',
      dataIndex: 'brief',
      key: 'id',
      ellipsis: true,
      render: text => (text.length > 50 ? `${text.slice(0, 50)}...` : text),
      width: 210,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton style={{ color: 'blue' }} type="text" onClick={() => router(`/coach/update/${record.id}`)}>
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_COACH(record.id);
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
      pageApi={GET_COACHES}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
