import type { CategoriesDto } from '@/interface/categories';

import { Form, message } from 'antd';
import { useEffect, useState } from 'react';

import { ADD_ACTIVITY } from '@/api/activities';
import { GET_CATEGORIES } from '@/api/categories';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';
import { typesEnum } from '@/interface/types';

export default function AddActivity() {
  const [categories, setCategories] = useState<CategoriesDto[] | null>(null);
  const [form] = Form.useForm();

  const boolOptions = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' },
  ];

  useEffect(() => {
    GET_CATEGORIES().then((res: any) => setCategories(res));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    ADD_ACTIVITY(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} form={form} layout="horizontal" labelCol={{ span: 3 }} labelAlign="left">
      <MyForm.Item label="Activity title" required name="title" type="input" />
      <MyForm.Item label="Short description" required name="short_description" type="input" />
      <MyForm.Item label="Full description" required name="full_description" type="input" />
      <MyForm.Item label="Know before you go" required name="know_before_you_go" type="input" />
      <MyForm.Item label="Type" required name="_type" type="select" options={typesEnum} />
      <MyForm.Item label="Includes hotel pickup ?" name="includes_hotel_pickup" type="radio" options={boolOptions} />
      <MyForm.Item
        label="Category"
        required
        name="category_id"
        type="select"
        options={categories?.map(item => ({ label: item.name, value: item.id }))}
      />
      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
