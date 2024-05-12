import type { CategoriesDto } from '@/interface/categories';

import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_CATEGORIES_BY_ID, UPDATE_CATEGORY } from '@/api/categories';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function UpdateCategory() {
  const { id } = useParams();
  const router = useNavigate();

  const [form] = MyForm.useForm();

  const [data, setdata] = useState<CategoriesDto | null>(null);
  const [disabled, setDisabled] = useState<boolean>(false);

  useEffect(() => {
    id && GET_CATEGORIES_BY_ID(id).then((res: any) => setdata(res.data));
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
    UPDATE_CATEGORY(Number(id), value).then(() => {
      message.success('Updated successfully');
      router('/categories');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="inline" form={form} onValuesChange={handleFormChange}>
        <MyForm.Item label="Category name" required name="name" type="input" initialValue={data?.name} />
        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit" disabled={disabled}>
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
