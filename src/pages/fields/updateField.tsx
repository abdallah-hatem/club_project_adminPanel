import type { CategoriesDto } from '@/interface/categories';

import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_FIELDS_BY_ID, UPDATE_FIELD } from '@/api/fields';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function UpdateField() {
  const { id } = useParams();
  const router = useNavigate();

  const [form] = MyForm.useForm();

  const [data, setdata] = useState<CategoriesDto | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    id && GET_FIELDS_BY_ID(id).then((res: any) => setdata(res.result));
    data?.name === form.getFieldValue('name') ? setDisabled(true) : setDisabled(false);
  }, []);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  function handleFormChange(e: any) {
    const { name } = e;

    data?.name.trim() === name.trim() ? setDisabled(true) : setDisabled(false);
  }

  const onFinish = (value: any) => {
    UPDATE_FIELD(Number(id), value).then(() => {
      message.success('Updated successfully');
      router('/fields');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="inline" form={form} onValuesChange={handleFormChange}>
        <MyForm.Item label="Field name" required name="name" type="input" initialValue={data?.name} />
        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit" disabled={disabled}>
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
