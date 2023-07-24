import { Button, Input, Typography } from "antd";

const PhoneRegister = () => {
  return (
    <div>
      <Typography.Title level={3}>Register your phone</Typography.Title>
      <form>
        <Input placeholder="Enter your phone number" />
        <Button htmlType="submit" type="primary" style={{ marginTop: "10px" }}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default PhoneRegister;
