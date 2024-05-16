import { Form, message } from 'antd';

import { ADD_FAQ } from '@/api/faqs';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function AddFaq() {
  const [form] = Form.useForm();

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    console.log(value);
    ADD_FAQ(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} form={form} layout="horizontal" labelCol={{ span: 2 }} labelAlign="left">
      <MyForm.Item label="Question" required name="question" type="input" />

      <MyForm.Item label="Answer" required name="answer" type="textarea" />

      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
