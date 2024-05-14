import { Form, message } from 'antd';
import { useEffect, useState } from 'react';

import GET_ACTIVITIES from '@/api/activities';
import { ADD_FIELD } from '@/api/fields';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function AddField() {
  const [form] = Form.useForm();

  const [activities, setActivities] = useState<any[] | null>(null);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  useEffect(() => {
    GET_ACTIVITIES().then((res: any) => setActivities(res.result));
  }, []);

  const onFinish = (value: any) => {
    console.log(value);
    ADD_FIELD(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} labelCol={{ span: 3 }} labelAlign="left" form={form} layout="horizontal">
      <MyForm.Item label="Field name" required name="name" type="input" />

      <MyForm.Item
        label="choose activity"
        name="activity_id"
        type="select"
        options={activities?.map((item: any) => ({ label: item.name, value: item.id }))}
        required
      />

      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
