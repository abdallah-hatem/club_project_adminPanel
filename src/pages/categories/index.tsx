import type { MyPageTableOptions } from '@/components/business/page';
import type { CategoriesDto } from '@/interface/categories';

import { message, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_CATEGORY, GET_CATEGORIES } from '@/api/categories';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

export default function Categories() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Name', dataIndex: 'name', key: 'id' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton
            style={{ color: 'blue' }}
            type="text"
            onClick={() => router(`/categories/updateCategory/${record.id}`)}
          >
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_CATEGORY(record.id);
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
      pageApi={GET_CATEGORIES}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
