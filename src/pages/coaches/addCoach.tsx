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
    ADD_COACH({ ...value, age: Number(value.age), years_of_experience: Number(value.years_of_experience) }).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} form={form} layout="horizontal" labelCol={{ span: 3 }} labelAlign="left">
      <MyForm.Item label="Coach name" required name="name" type="input" />
      <MyForm.Item label="Age" required name="age" type="input" innerProps={{ type: 'number' }} />
      <MyForm.Item
        label="Years of experience"
        required
        name="years_of_experience"
        type="input"
        innerProps={{ type: 'number' }}
      />
      <MyForm.Item label="Brief" required name="brief" type="textarea" />

      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
