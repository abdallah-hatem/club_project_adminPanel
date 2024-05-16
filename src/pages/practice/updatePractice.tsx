import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_PRACTICES_BY_ID, UPDATE_PRACTICE } from '@/api/practice';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function UpdatePractice() {
  const { id } = useParams();
  const router = useNavigate();

  const [form] = MyForm.useForm();

  const [data, setdata] = useState<any | null>(null);

  useEffect(() => {
    id && GET_PRACTICES_BY_ID(id).then((res: any) => setdata(res.result));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    UPDATE_PRACTICE(Number(id), value).then(() => {
      message.success('Updated successfully');
      router('/practices');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="inline" form={form}>
        <MyForm.Item label="Activity name" required name="name" type="input" initialValue={data?.name} />
        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
