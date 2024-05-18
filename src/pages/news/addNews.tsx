import { Form, message } from 'antd';

import { ADD_NEWS } from '@/api/news';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function AddNews() {
  const [form] = Form.useForm();

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    console.log(value);
    ADD_NEWS(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} form={form} layout="horizontal" labelCol={{ span: 2 }} labelAlign="left">
      <MyForm.Item label="Title" required name="title" type="input" />

      <MyForm.Item label="Image url" required name="imageUrl" type="input" />

      <MyForm.Item label="Date" required name="date" type="input" />

      <MyForm.Item label="Description" required name="description" type="textarea" />

      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
