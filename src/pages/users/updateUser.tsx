import type { UserDto } from '@/interface/admin';

import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_USER_BY_ID, UPDATE_USER } from '@/api/user.api';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function UpdateUser() {
  const { id } = useParams();
  const router = useNavigate();

  const [form] = MyForm.useForm();

  const [data, setdata] = useState<UserDto | null>(null);

  useEffect(() => {
    id && GET_USER_BY_ID(id).then((res: any) => setdata(res.user));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    UPDATE_USER(Number(id), value).then(() => {
      message.success('Updated successfully');
      router('/users');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="inline" form={form}>
        <MyForm.Item label="User name" required name="name" type="input" initialValue={data?.name} />

        <MyForm.Item
          label="User role"
          required
          name="role"
          type="select"
          initialValue={data?.role}
          options={[
            { label: 'admin', value: 'ADMIN' },
            { label: 'user', value: 'USER' },
          ]}
          style={{ width: '200px' }}
        />

        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
