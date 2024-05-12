import type { ActivityDto } from '@/interface/activities';
import type { AgesDto } from '@/interface/ages';
import type { PackageItemDto } from '@/interface/packageItem';

import { Form, message } from 'antd';
import { useEffect, useState } from 'react';

import { GET_ACTIVITIES } from '@/api/activities';
import { GET_AGES } from '@/api/ages';
import { GET_PACKAGE_ITEM } from '@/api/packageItems';
import { Add_PACKAGE } from '@/api/packages';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';
import { packageTypes } from '@/interface/package';

export default function AddPackage() {
  const [form] = Form.useForm();
  const [packageItems, setPackageItems] = useState<PackageItemDto[] | null>(null);
  const [activities, setActivities] = useState<ActivityDto[] | null>(null);
  const [ages, setAges] = useState<AgesDto[] | null>(null);

  useEffect(() => {
    GET_PACKAGE_ITEM().then((res: any) => setPackageItems(res));
    GET_ACTIVITIES().then((res: any) => setActivities(res));
    GET_AGES().then((res: any) => setAges(res));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    console.log(value);
    Add_PACKAGE(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} form={form} layout="horizontal" labelCol={{ span: 3 }} labelAlign="left">
      <MyForm.Item label="Package title" required name="title" type="input" />
      <MyForm.Item label="Description" name="description" type="input" />
      <MyForm.Item label="Minimum participants" required name="minimum_participants" type="input-number" />
      <MyForm.Item label="Maximum participants" required name="maximum_participants" type="input-number" />
      <MyForm.Item label="Price" required name="price" type="input-number" />
      <MyForm.Item label="Date" required name="date" type="date-picker" />
      <MyForm.Item
        label="Package items"
        required
        name="items_ids"
        type="select"
        options={packageItems?.map(item => ({ label: item.title, value: item.id }))}
        innerProps={{ mode: 'multiple' }}
      />

      <MyForm.Item
        label="Activities"
        required
        name="activity_id"
        type="select"
        options={activities?.map(item => ({ label: item.title, value: item.id }))}
      />
      <MyForm.Item
        label="package type"
        required
        name="package_type"
        type="select"
        options={packageTypes?.map(item => ({ label: item, value: item }))}
      />

      <MyForm.Item
        label="Ages"
        required
        name="ages_ids"
        type="select"
        options={ages?.map(item => ({ label: item.client_type, value: item.id }))}
        innerProps={{ mode: 'multiple' }}
      />

      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
