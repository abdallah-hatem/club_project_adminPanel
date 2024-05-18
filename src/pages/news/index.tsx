import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_NEWS, GET_NEWS } from '@/api/news';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

export default function News() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'id',
    },
    {
      title: 'Image url',
      dataIndex: 'imageUrl',
      key: 'id',
      ellipsis: true,
      render: text => (text.length > 50 ? `${text.slice(0, 50)}...` : text),
    },
    { title: 'Date', dataIndex: 'date', key: 'id' },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'id',
      ellipsis: true,
      render: text => (text.length > 50 ? `${text.slice(0, 50)}...` : text),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton style={{ color: 'blue' }} type="text" onClick={() => router(`/news/update/${record.id}`)}>
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_NEWS(record.id);
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
      pageApi={GET_NEWS}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
