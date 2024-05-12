import type { PermissonsDto } from '@/interface/admin';

import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ADD_PERMISSIONS_BY_ROLE_ID, GET_PERMISSIONS_BY_ROLE_ID, GET_ROLES_BY_ID, UPDATE_ROLE } from '@/api/admin';
import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

import CollapseSwitch from './components/collapseSwitch';

export default function UpdateRole() {
  const { id } = useParams();
  const [form] = MyForm.useForm();

  const [roles, setRoles] = useState<any>(null);
  const [permissions, setPermissions] = useState<PermissonsDto[] | null>(null);

  console.log(roles);
  console.log(permissions);

  useEffect(() => {
    id && GET_ROLES_BY_ID(String(id)).then((res: any) => setRoles(res));
    GET_PERMISSIONS_BY_ROLE_ID(String(id)).then((res: any) => setPermissions(res));
  }, []);

  const onChangeSwitch = (checked: boolean, data: any) => {
    const { action } = data;

    ADD_PERMISSIONS_BY_ROLE_ID(String(id), { permission_action: action, value: checked })
      .then(() => GET_PERMISSIONS_BY_ROLE_ID(String(id)).then((res: any) => setPermissions(res)))
      .then(() => message.success('Updated successfully'));
  };

  const onFinish = (value: any) => {
    UPDATE_ROLE(Number(id), value).then(() => {
      message.success('Updated successfully');
    });
  };

  return (
    roles && (
      <div style={{ padding: 20 }}>
        <MyForm<any> onFinish={onFinish} layout="horizontal" form={form}>
          <MyForm.Item label="Role name" required name="name" type="input" initialValue={roles?.name} />

          <MyForm.Item
            label="Description"
            required
            name="description"
            type="textarea"
            initialValue={roles?.description}
          />

          <MyForm.Item>
            <MyButton type="primary" htmlType="submit" style={{ float: 'right' }}>
              Update
            </MyButton>
          </MyForm.Item>
        </MyForm>

        <h2>Permissons</h2>
        {permissions && <CollapseSwitch data={permissions} onChangeSwitch={onChangeSwitch} />}
      </div>
    )
  );
}
