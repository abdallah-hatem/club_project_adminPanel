import type { AgesDto } from '@/interface/ages';

import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_AGES_BY_ID, UPDATE_AGE } from '@/api/ages';
import { UPDATE_CATEGORY } from '@/api/categories';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function UpdateAge() {
  const { id } = useParams();
  const router = useNavigate();

  const [data, setdata] = useState<AgesDto | null>(null);

  useEffect(() => {
    id && GET_AGES_BY_ID(id).then((res: any) => setdata(res.data));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    UPDATE_AGE(Number(id), value).then(() => {
      message.success('Updated successfully');
      // router('/ages');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="inline">
        <MyForm.Item label="Client type" required name="client_type" type="input" initialValue={data?.client_type} />

        <MyForm.Item
          label="Minimum age"
          required
          name="minimum_age"
          type="input-number"
          initialValue={data?.minimum_age}
        />
        <MyForm.Item
          label="Maximum age"
          required
          name="maximum_age"
          type="input-number"
          initialValue={data?.maximum_age}
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
