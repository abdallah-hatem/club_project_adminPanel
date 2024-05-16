import { Form, message } from 'antd';
import { useEffect, useState } from 'react';

import { GET_COACHES } from '@/api/coaches';
import { ADD_PRACTICE } from '@/api/practice';
import { GET_SPORTS } from '@/api/sport';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';
import { days, times } from '@/helpers/times';

export default function AddPractice() {
  const [form] = Form.useForm();

  const [coaches, setCoaches] = useState<any[]>([]);

  const [sports, setSports] = useState<any[]>([]);

  useEffect(() => {
    GET_COACHES().then((res: any) => setCoaches(res.result));
    GET_SPORTS().then((res: any) => setSports(res.result));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    const { days, price } = value;

    ADD_PRACTICE({ ...value, days: days.join(), price: Number(price) }).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} form={form} layout="horizontal" labelCol={{ span: 2 }} labelAlign="left">
      <MyForm.Item
        label="Sport"
        required
        name="sport_id"
        type="select"
        options={sports?.map((item: any) => ({ label: item.name, value: item.id }))}
      />

      <MyForm.Item
        label="Coach"
        required
        name="coach_id"
        type="select"
        options={coaches?.map((item: any) => ({ label: item.name, value: item.id }))}
      />

      <MyForm.Item
        label="From"
        required
        name="from"
        type="select"
        options={times?.map((item: any) => ({ label: item, value: item }))}
      />

      <MyForm.Item
        label="To"
        required
        name="to"
        type="select"
        options={times?.map((item: any) => ({ label: item, value: item }))}
      />
      <MyForm.Item
        label="Days"
        required
        name="days"
        type="select"
        innerProps={{ mode: 'multiple' }}
        options={days?.map((item: any) => ({ label: item.label, value: item.value }))}
      />

      <MyForm.Item label="Price" required name="price" type="input" innerProps={{ type: 'number' }} />

      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
