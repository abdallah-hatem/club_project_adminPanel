import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_EVENT_BY_ID, UPDATE_EVENT } from '@/api/events';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function UpdateEvent() {
  const { id } = useParams();
  const router = useNavigate();

  const [form] = MyForm.useForm();

  const [data, setdata] = useState<any | null>(null);

  useEffect(() => {
    id && GET_EVENT_BY_ID(id).then((res: any) => setdata(res.result));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    UPDATE_EVENT(Number(id), value).then(() => {
      message.success('Updated successfully');
      router('/events');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="horizontal" form={form} labelCol={{ span: 3 }} labelAlign="left">
        <MyForm.Item label="Title" required name="title" type="input" initialValue={data?.title} />

        <MyForm.Item label="Image url" required name="imageUrl" type="input" initialValue={data?.imageUrl} />

        <MyForm.Item label="Date" required name="date" type="input" initialValue={data?.date} />

        <MyForm.Item label="Description" required name="description" type="textarea" initialValue={data?.description} />

        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
