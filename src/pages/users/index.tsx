import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space, Tag } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_USER, GET_USERS } from '@/api/user.api';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';
import { formatDate, isDatePassed } from '@/helpers/date';

export default function Users() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Name', dataIndex: 'name', key: 'id' },
    { title: 'Email', dataIndex: 'email', key: 'id' },
    { title: 'Role', dataIndex: 'role', key: 'id', render: (val: any) => <Tag>{val}</Tag> },
    {
      title: 'Subscribtion end date',
      dataIndex: 'subscribtion_end_date',
      key: 'id',
      render: (val: any) => <Tag color={isDatePassed(val) ? 'red' : 'green'}>{formatDate(val)}</Tag>,
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton style={{ color: 'blue' }} type="text" onClick={() => router(`/users/updateUser/${record.id}`)}>
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_USER(record.id);
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

  return <MyPage pageApi={GET_USERS} action={action} tableOptions={tableColums}></MyPage>;
}
