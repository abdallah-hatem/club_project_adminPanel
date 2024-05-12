import type { ActivityDto } from '@/interface/activities';
import type { AgesDto } from '@/interface/ages';
import type { CategoriesDto } from '@/interface/categories';
import type { PackageDto } from '@/interface/package';
import type { PackageItemDto } from '@/interface/packageItem';

import { Form, message } from 'antd';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_ACTIVITIES, GET_ACTIVITIES_BY_ID } from '@/api/activities';
import { GET_AGES } from '@/api/ages';
import { UPDATE_CATEGORY } from '@/api/categories';
import { GET_PACKAGE_ITEM } from '@/api/packageItems';
import { GET_PACKAGE_BY_ID, UPDATE_PACKAGE } from '@/api/packages';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';
import { packageTypes } from '@/interface/package';

export default function UpdatePackage() {
  const { id } = useParams();
  const router = useNavigate();

  const [data, setdata] = useState<PackageDto | null>(null);
  const [activities, setActivities] = useState<ActivityDto[] | null>(null);
  const [ages, setAges] = useState<AgesDto[] | null>(null);
  const [packageItems, setPackageItems] = useState<PackageItemDto[] | null>(null);

  console.log(data);
  console.log(activities);
  console.log(ages);
  console.log(packageItems);

  useEffect(() => {
    id && GET_PACKAGE_BY_ID(id).then((res: any) => setdata(res.data));
    GET_ACTIVITIES().then((res: any) => setActivities(res));
    GET_AGES().then((res: any) => setAges(res));
    GET_PACKAGE_ITEM().then((res: any) => setPackageItems(res));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    console.log(value);

    UPDATE_PACKAGE(Number(id), value).then(() => {
      message.success('Updated successfully');
      // router('/packages');
    });
  };

  const [form] = Form.useForm();

  return (
    data && (
      <MyForm<any> form={form} onFinish={onFinish} layout="horizontal" labelCol={{ span: 4 }} labelAlign="left">
        <MyForm.Item label="Title" required name="title" type="input" initialValue={data?.title} />
        <MyForm.Item label="Description" required name="description" type="input" initialValue={data?.description} />
        <MyForm.Item
          label="Minimum participants"
          required
          name="minimum_participants"
          type="input"
          initialValue={data?.minimum_participants}
        />

        <MyForm.Item
          label="Maximum participants"
          required
          name="maximum_participants"
          type="input"
          initialValue={data?.maximum_participants}
        />

        <MyForm.Item
          label="Activity"
          required
          name="activity_id"
          type="select"
          options={activities?.map(item => ({ label: item.title, value: item.id }))}
          initialValue={String(data?.activity_id)}
        />

        <MyForm.Item
          label="Age"
          required
          name="ages_ids"
          type="select"
          options={ages?.map(item => ({ label: item.client_type, value: item.id }))}
          initialValue={data?.clients_ages.map((item: any) => String(item.id))}
          innerProps={{ mode: 'multiple' }}
        />

        <MyForm.Item label="Price" required name="price" type="input" initialValue={data?.price} />

        <MyForm.Item
          label="Package type"
          required
          name="package_type"
          type="select"
          options={packageTypes?.map(item => ({ label: item, value: item }))}
          initialValue={data?.package_type}
        />

        <MyForm.Item
          label="Items"
          required
          name="items_ids"
          type="select"
          options={packageItems?.map(item => ({ label: item.title, value: item.id }))}
          initialValue={data?.items.map((item: any) => String(item.id))}
          innerProps={{ mode: 'multiple' }}
        />

        <MyForm.Item label="Date" required name="date" type="date-picker" initialValue={dayjs(data?.date)} />

        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
