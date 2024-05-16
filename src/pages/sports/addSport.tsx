import { Form, message } from 'antd';

import { ADD_SPORT } from '@/api/sport';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function AddSport() {
  const [form] = Form.useForm();

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    console.log(value);
    ADD_SPORT(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} form={form} layout="inline">
      <MyForm.Item label="Sport name" required name="name" type="input" />

      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
