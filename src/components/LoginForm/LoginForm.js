import { Form, Input, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import {
  SubmitButton,
  SignInForm,
  ForgotPasswordLink,
} from "./LoginForm.style";

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <SignInForm
      name="normal_login"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input prefix={<UserOutlined />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input
          prefix={<LockOutlined />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <ForgotPasswordLink href="">Forgot password</ForgotPasswordLink>
      </Form.Item>

      <Form.Item>
        <SubmitButton type="primary" htmlType="submit">
          Log in
        </SubmitButton>
        Or <a href="">register now!</a>
      </Form.Item>
    </SignInForm>
  );
};

export default LoginForm;
