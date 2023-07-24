import { Button, Input, InputRef, Row, Space, Typography } from 'antd';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { FormEvent } from 'react';
import { signIn, signOut } from 'next-auth/react';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (result?.status === 200) {
      router.replace('/');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '0 auto' }}>
      <form onSubmit={submitHandler} autoComplete="on">
        <Row gutter={[8, 8]}>
          <Typography.Title level={3}>Login</Typography.Title>

          <Input
            placeholder="Enter your email"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
          <Input.Password
            placeholder="Enter your password"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Row>
      </form>
    </div>
  );
};

export default Login;
