import type { CategoriesDto } from '@/interface/categories';

import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { GET_PACKAGE_ITEM_BY_ID, UPDATE_PACKAGE_ITEM } from '@/api/packageItems';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function UpdatePackageItem() {
  const { id } = useParams();
  const router = useNavigate();

  const [form] = MyForm.useForm();

  const [data, setdata] = useState<CategoriesDto | null | any>('');
  const [disabled, setDisabled] = useState<boolean>(false);

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  useEffect(() => {
    id && GET_PACKAGE_ITEM_BY_ID(id).then((res: any) => setdata(res.data));
    data?.name === form.getFieldValue('title') ? setDisabled(true) : setDisabled(false);
  }, []);

  function handleFormChange(e: any) {
    const { title } = e;

    String(data?.title).trim() === title.trim() ? setDisabled(true) : setDisabled(false);
  }

  const onFinish = (value: any) => {
    UPDATE_PACKAGE_ITEM(Number(id), value).then(() => {
      message.success('Updated successfully');
      // router('/categories');
    });
  };

  return (
    data && (
      <MyForm<any> onFinish={onFinish} layout="inline" form={form} onValuesChange={handleFormChange}>
        <MyForm.Item label="Package item name" required name="title" type="input" initialValue={data?.title} />
        <MyForm.Item {...tailLayout}>
          <MyButton type="primary" htmlType="submit" disabled={disabled}>
            Update
          </MyButton>
        </MyForm.Item>
      </MyForm>
    )
  );
}
