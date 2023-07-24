import { Button, Input, InputRef, Space, Typography } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import { FormEvent } from "react";

const Login = () => {
  const router = useRouter();
  const [isPhoneRegistered, setIsPhoneRegistered] = useState<boolean>(false);

  const register = async (phone: FormData) => {
    const res = await fetch(
      "https://ott.durbar.live/api/v1/web/phone-register",
      {
        method: "POST",
        body: phone,
      }
    );

    const data = await res.json();
    if (data.status) {
      setIsPhoneRegistered(true);
    }
  };

  const otpVerify = async (formData: FormData) => {
    const res = await fetch("https://ott.durbar.live/api/v1/web/otp-verify", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();

    if (data?.data?.access_token) {
      localStorage.setItem("token", data?.data?.access_token);
      router.replace("/");
    }
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("phone", "01713443743");
    await register(formData);
  };

  const handleOtp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("phone", "01713443743");
    formData.append("otp", "123456");
    formData.append("device_name", "windows 101 432434");
    formData.append("deviceuniqueid", "1234");

    await otpVerify(formData);
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      {!isPhoneRegistered ? (
        <form onSubmit={submitHandler}>
          <Typography.Title level={3}>Register your phone</Typography.Title>
          <Input placeholder="Enter your phone number" />
          <Button
            htmlType="submit"
            type="primary"
            style={{ marginTop: "10px" }}
          >
            Submit
          </Button>
        </form>
      ) : (
        <form onSubmit={handleOtp}>
          <Typography.Title level={3}>Verify OTP</Typography.Title>
          <Space>
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
            <Input />
          </Space>
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginTop: "10px" }}
          >
            Verify
          </Button>
        </form>
      )}
    </div>
  );
};

export default Login;
