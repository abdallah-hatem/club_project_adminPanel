import { Form, message } from 'antd';

import { ADD_AGE } from '@/api/ages';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function AddAge() {
  const [form] = Form.useForm();

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    ADD_AGE(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} form={form} layout="inline">
      <MyForm.Item label="Client type name" required name="client_type" type="input" />
      <MyForm.Item label="Minimum age" required name="minimum_age" type="input-number" />
      <MyForm.Item label="Maximum age" required name="maximum_age" type="input-number" />

      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
