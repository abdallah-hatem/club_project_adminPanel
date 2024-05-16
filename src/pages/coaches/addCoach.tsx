import { Form, message } from 'antd';

import { ADD_COACH } from '@/api/coaches';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function AddCoach() {
  const [form] = Form.useForm();

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    console.log(value);
    ADD_COACH(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} form={form} layout="inline">
      <MyForm.Item label="Coach name" required name="name" type="input" />

      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
