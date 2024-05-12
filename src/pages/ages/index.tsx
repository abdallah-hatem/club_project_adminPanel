import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_ACTIVITY } from '@/api/activities';
import { DELETE_AGE, GET_AGES } from '@/api/ages';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

export default function Ages() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Title', dataIndex: 'client_type', key: 'id' },
    { title: 'Minimum Age', dataIndex: 'minimum_age', key: 'id' },
    { title: 'Maximum Age', dataIndex: 'maximum_age', key: 'id' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton style={{ color: 'blue' }} type="text" onClick={() => router(`/ages/updateAge/${record.id}`)}>
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_AGE(Number(record.id));
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
      pageApi={GET_AGES}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
