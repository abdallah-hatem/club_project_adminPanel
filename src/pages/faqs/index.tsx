import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_FAQS, GET_FAQS } from '@/api/faqs';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

export default function Faqs() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Question', dataIndex: 'question', key: 'id' },
    {
      title: 'Answer',
      dataIndex: 'answer',
      key: 'id',
      ellipsis: true,
      render: text => (text.length > 50 ? `${text.slice(0, 50)}...` : text),
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton style={{ color: 'blue' }} type="text" onClick={() => router(`/faqs/update/${record.id}`)}>
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_FAQS(record.id);
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
      pageApi={GET_FAQS}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
