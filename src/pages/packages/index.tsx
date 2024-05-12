import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space, Tag } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_PACKAGE, GET_PACKAGES, GET_PACKAGES2 } from '@/api/packages';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';
import { formatDate } from '@/helpers/date';

export default function Packages() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Title', dataIndex: 'title', key: 'id' },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'id',
      width: 180,
    },
    { title: 'Package type', dataIndex: 'package_type', key: 'id', width: 120 },
    { title: 'Price', dataIndex: 'price', key: 'id', width: 100 },
    { title: 'Minimum participants', dataIndex: 'minimum_participants', key: 'id', width: 100 },
    { title: 'Maximum participants', dataIndex: 'maximum_participants', key: 'id', width: 100 },
    { title: 'Activity', dataIndex: 'activity_id', key: 'id', width: 100 },
    {
      title: 'clients ages',
      dataIndex: 'clients_ages',
      key: 'id',
      width: 100,
      render(value, record, index) {
        return value.map((el: any) => <Tag>{el.name}</Tag>);
      },
    },
    {
      title: 'Package items',
      dataIndex: 'items',
      key: 'id',
      width: 100,
      render(value, record, index) {
        return value.map((el: any) => <Tag>{el.name}</Tag>);
      },
    },
    {
      title: 'Meeting point',
      dataIndex: 'meeting_point',
      key: 'id',
      width: 100,
      render(value, record, index) {
        if (value === null) return 'N/A';
      },
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'id',
      render(value, record, index) {
        return formatDate(value);
      },
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton
            style={{ color: 'blue' }}
            type="text"
            onClick={() => router(`/packages/updatePackage/${record.id}`)}
          >
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_PACKAGE(record.id);
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
      pageApi={GET_PACKAGES2}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
