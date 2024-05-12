import { Form, message } from 'antd';

import { Add_PACKAGE_ITEM } from '@/api/packageItems';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

export default function AddPackageItem() {
  const [form] = Form.useForm();

  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (value: any) => {
    console.log(value);
    Add_PACKAGE_ITEM(value).then(() => {
      message.success('Added successfully');
      form.resetFields();
    });
  };

  return (
    <MyForm<any> onFinish={onFinish} form={form} layout="inline">
      <MyForm.Item label="Package item name" required name="title" type="input" />
      <MyForm.Item {...tailLayout}>
        <MyButton type="primary" htmlType="submit">
          Submit
        </MyButton>
      </MyForm.Item>
    </MyForm>
  );
}
