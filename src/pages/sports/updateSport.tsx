import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_SPORT_BY_ID, UPDATE_SPORT } from '@/api/sport';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function UpdateSport() {
  const { id } = useParams();
  const router = useNavigate();

  const [form] = MyForm.useForm();

  const [data, setdata] = useState<any | null>(null);

  useEffect(() => {
    id && GET_SPORT_BY_ID(id).then((res: any) => setdata(res.result));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    UPDATE_SPORT(Number(id), value).then(() => {
      message.success('Updated successfully');
      router('/sports');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="horizontal" form={form} labelCol={{ span: 3 }} labelAlign="left">
        <MyForm.Item label="Sport name" required name="name" type="input" initialValue={data?.name} />

        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
