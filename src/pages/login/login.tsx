import { Button, Card, Checkbox, Flex, Form, Input, Layout, Space } from "antd";
import { LockFilled, UserOutlined, LockOutlined } from "@ant-design/icons";
import React from "react";
import Logo from "../../components/icons/Logo";

const LoginPage = () => {
  return (
    <>
      <Layout
        style={{
          height: "100vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Space direction="vertical" size={"large"}>
          <Layout.Content style={{ display: "flex", justifyContent: "center" }}>
            <Logo />
          </Layout.Content>
          <Card
            bordered={false}
            style={{ width: 300 }}
            title={
              <Space
                style={{
                  width: "100%",
                  fontSize: 16,
                  justifyContent: "center",
                }}
              >
                <LockFilled /> Sign in
              </Space>
            }
          >
            <Form
              initialValues={{
                remember: true,
              }}
            >
              <Form.Item
                name={"username"}
                rules={[
                  { required: true, message: "Please input your Username" },
                  { type: "email", message: "Email is not valid" },
                ]}
              >
                <Input placeholder="Username" prefix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                name={"password"}
                rules={[
                  { required: true, message: "Please input your password" },
                ]}
              >
                <Input.Password
                  placeholder="Password"
                  prefix={<LockOutlined />}
                />
              </Form.Item>
              <Flex justify="space-between" align="">
                <Form.Item name={"remember"} valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <a href="" id="forgot-password">
                  Forgot password
                </a>
              </Flex>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Space>
      </Layout>
    </>
  );
};

export default LoginPage;
