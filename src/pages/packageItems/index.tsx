import type { MyPageTableOptions } from '@/components/business/page';

import { message, Space } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { DELETE_CATEGORY } from '@/api/categories';
import { DELETE_PACKAGE_ITEM, GET_PACKAGE_ITEM } from '@/api/packageItems';
import MyButton from '@/components/basic/button';
import MyPage from '@/components/business/page';

export default function PackageItems() {
  const [action, setAction] = useState<boolean>(false);

  const router = useNavigate();

  const tableColums: MyPageTableOptions<any> = [
    { title: 'Title', dataIndex: 'title', key: 'id' },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <MyButton
            style={{ color: 'blue' }}
            type="text"
            onClick={() => router(`/packageItems/updatePackageItem/${record.id}`)}
          >
            update
          </MyButton>
          <MyButton
            type="text"
            onClick={() => {
              DELETE_PACKAGE_ITEM(record.id);
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
      pageApi={GET_PACKAGE_ITEM}
      // onRowClick={(record: any) => router(`/categories/updateCategory/${record.id}`)}
      action={action}
      tableOptions={tableColums}
    ></MyPage>
  );
}
