import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_COACH_BY_ID, UPDATE_COACH } from '@/api/coaches';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function UpdateCoach() {
  const { id } = useParams();
  const router = useNavigate();

  const [form] = MyForm.useForm();

  const [data, setdata] = useState<any | null>(null);

  useEffect(() => {
    id && GET_COACH_BY_ID(id).then((res: any) => setdata(res.result));
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    UPDATE_COACH(Number(id), {
      ...value,
      age: Number(value.age),
      years_of_experience: Number(value.years_of_experience),
    }).then(() => {
      message.success('Updated successfully');
      router('/coaches');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="horizontal" form={form} labelCol={{ span: 3 }} labelAlign="left">
        <MyForm.Item label="Coach name" required name="name" type="input" initialValue={data?.name} />

        <MyForm.Item
          label="Age"
          required
          name="age"
          type="input"
          innerProps={{ type: 'number' }}
          initialValue={data?.age}
        />
        <MyForm.Item
          label="Years of experience"
          required
          name="years_of_experience"
          type="input"
          innerProps={{ type: 'number' }}
          initialValue={data?.years_of_experience}
        />
        <MyForm.Item label="Brief" required name="brief" type="textarea" initialValue={data?.brief} />

        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit">
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
