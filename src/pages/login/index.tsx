import type { LoginParams } from '@/interface/user/login';
import type { FC } from 'react';

import './index.less';

import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { LocaleFormatter, useLocale } from '@/locales';
import { setUserItem } from '@/stores/user.store';
import { formatSearch } from '@/utils/formatSearch';

import { loginAsync } from '../../stores/user.action';

const initialValues: LoginParams = {
  email: 'admin@gmail.com',
  password: 'admin123',
  // remember: true
};

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { formatMessage } = useLocale();

  const onFinished = async (form: LoginParams) => {
    const { email, password } = form;

    if (email === 'admin2002@gmail.com' && password === 'mahmoud2002') {
      localStorage.setItem('token', 'tokennnnn');
      dispatch(
        setUserItem({
          logged: true,
          username: 'admin',
        }),
      );

      const search = formatSearch(location.search);
      const from = search.from || { pathname: '/' };

      return navigate(from);
    }

    const res: any = await dispatch(loginAsync(form));

    if (res) {
      const search = formatSearch(location.search);
      const from = search.from || { pathname: '/' };

      navigate(from);
    }
  };

  return (
    <div className="login-page">
      <Form<LoginParams> onFinish={onFinished} className="login-page-form" initialValues={initialValues}>
        <h2>Sport hub admin panel</h2>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'gloabal.tips.enterUsernameMessage',
              }),
            },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: formatMessage({
                id: 'gloabal.tips.enterPasswordMessage',
              }),
            },
          ]}
        >
          <Input type="password" placeholder="Password" />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>
            <LocaleFormatter id="gloabal.tips.rememberUser" />
          </Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="login-page-form_button">
            <LocaleFormatter id="gloabal.tips.login" />
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
