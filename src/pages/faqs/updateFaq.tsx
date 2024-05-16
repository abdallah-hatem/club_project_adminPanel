import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_FAQS_BY_ID, UPDATE_FAQS } from '@/api/faqs';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function UpdateFaq() {
  const { id } = useParams();
  const router = useNavigate();

  const [form] = MyForm.useForm();

  const [data, setdata] = useState<any | null>(null);

  useEffect(() => {
    id && GET_FAQS_BY_ID(id).then((res: any) => setdata(res.result));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    UPDATE_FAQS(Number(id), value).then(() => {
      message.success('Updated successfully');
      router('/faqs');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="horizontal" form={form} labelCol={{ span: 3 }} labelAlign="left">
        <MyForm.Item label="Question" required name="question" type="input" initialValue={data?.question} />

        <MyForm.Item label="Answer" required name="answer" type="textarea" initialValue={data?.answer} />
        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
