import type { ActivityDto } from '@/interface/activities';
import type { CategoriesDto } from '@/interface/categories';

import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_ACTIVITIES_BY_ID, UPDATE_ACTIVITY } from '@/api/activities';
import { GET_CATEGORIES } from '@/api/categories';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';
import { typesEnum } from '@/interface/types';

export default function UpdateActivity() {
  const { id } = useParams();
  const router = useNavigate();

  const [data, setdata] = useState<ActivityDto | null>(null);
  const [categories, setCategories] = useState<CategoriesDto[] | null>(null);

  const { _type, includes_hotel_pickup, category_id, full_description, know_before_you_go, short_description, title } =
    data ?? {};

  useEffect(() => {
    GET_CATEGORIES().then((res: any) => setCategories(res));
    id && GET_ACTIVITIES_BY_ID(id).then((res: any) => setdata(res.data));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    // console.log(value, 'val');
    UPDATE_ACTIVITY(Number(id), value).then(() => {
      message.success('Updated successfully');
      // router('/activities');
    });
  };

  const boolOptions = [
    { value: true, label: 'Yes' },
    { value: false, label: 'No' },
  ];

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="horizontal">
        <MyForm.Item label="Activity title" required name="title" type="input" initialValue={title} />
        <MyForm.Item
          label="Short description"
          required
          name="short_description"
          type="input"
          initialValue={short_description}
        />
        <MyForm.Item
          label="Full description"
          required
          name="full_description"
          type="input"
          initialValue={full_description}
        />
        <MyForm.Item
          label="Know before you go"
          required
          name="know_before_you_go"
          type="input"
          initialValue={know_before_you_go}
        />
        <MyForm.Item label="Type" required name="_type" type="select" options={typesEnum} initialValue={_type} />
        <MyForm.Item
          label="Includes hotel pickup ?"
          name="includes_hotel_pickup"
          type="radio"
          options={boolOptions}
          initialValue={includes_hotel_pickup}
        />
        <MyForm.Item
          label="Category"
          required
          name="category_id"
          type="select"
          initialValue={category_id}
          options={categories?.map(item => ({ label: item.name, value: item.id }))}
        />
        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
