import type { CategoriesDto } from '@/interface/categories';

import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { GET_ACTIVITIES_BY_ID } from '@/api/activities';
import { GET_CONTACT_US, UPDATE_CONTACT_US } from '@/api/contactUs';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function ContactUs() {
  // const { id } = useParams();
  // const router = useNavigate();

  const [form] = MyForm.useForm();

  const [data, setdata] = useState<any | null>(null);

  useEffect(() => {
    GET_CONTACT_US().then((res: any) => setdata(res.result[0]));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    UPDATE_CONTACT_US(Number(data.id), value).then(() => {
      message.success('Updated successfully');
      // router('/contact-us');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="horizontal" form={form} labelCol={{ span: 3 }} labelAlign="left">
        <MyForm.Item label="phone number" required name="phone_number" type="input" initialValue={data?.phone_number} />

        <MyForm.Item label="email" required name="email" type="input" initialValue={data?.email} />

        <MyForm.Item label="description" required name="description" type="input" initialValue={data?.description} />

        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
