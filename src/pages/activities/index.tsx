import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_ACTIVITY, GET_ACTIVITIES } from '@/api/activities';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';
import { ActivityDto } from '@/interface/activities';

export default function Activities() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Title', dataIndex: 'title', key: 'id' },
    { title: 'Short Description', dataIndex: 'short_description', key: 'id' },
    { title: 'Full Description', dataIndex: 'full_description', key: 'id' },
    { title: 'Know Before You Go', dataIndex: 'know_before_you_go', key: 'id', width: 150 },
    { title: 'Type', dataIndex: '_type', key: 'id', width: 120 },
    {
      title: 'Include hotel pickup',
      dataIndex: 'includes_hotel_pickup',
      key: 'id',
      width: 150,
      render: value => (value ? 'Yes' : 'No'),
    },
    { title: 'Category Id', dataIndex: 'category_id', key: 'id', width: 100 },
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
              DELETE_ACTIVITY(Number(record.id));
              setAction((prev: any) => !prev);
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
