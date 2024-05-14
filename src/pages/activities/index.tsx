import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import GET_ACTIVITIES, { DELETE_ACTIVITY } from '@/api/activities';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

export default function Activities() {
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
            onClick={() => router(`/activities/updateActivity/${record.id}`)}
          >
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_ACTIVITY(record.id);
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
      pageApi={GET_ACTIVITIES}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
