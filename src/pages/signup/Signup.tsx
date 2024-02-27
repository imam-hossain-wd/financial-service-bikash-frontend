/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Button } from "antd";
import FormInput from "../../components/forms/FormInputField";
import Form from "../../components/forms/Form";
import { SubmitHandler } from "react-hook-form";
import { FormValues } from "../../types";
import { Link } from "react-router-dom";
import FormSelectField from "../../components/forms/FormSelectField";
import { AccountOptions } from "../../constants/global";

const Signup = () => {
  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error("Error creating user:", error);
    }
  };

  return (
    <div className="bg-white border-2 border-gray-200 mt-10">
      <div className="flex flex-col lg:flex-row justify-around">
        <div
          className="w-full lg:w-[35%] bg-white drop-shadow-2xl p-5 rounded-lg"
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }}
        >
          <h3 className="text-center text-lg  py-1 rounded mx-auto mb-3 ">
            Welcome Back
          </h3>
          <p className="text-center mb-2">Please Sign up into your account</p>
          <Form submitHandler={onSubmit}>
            <div className="">
              <div className="mb-3">
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  placeholder="Enter Name"
                />
              </div>
              <div className="mb-3">
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  placeholder="Enter Mobile Number"
                />
              </div>
              <div className="mb-3">
                <FormInput
                  name="email"
                  type="text"
                  size="large"
                  placeholder="Email"
                />
              </div>

              <div className="mb-5">
                <FormInput
                  name="pin"
                  type="password"
                  size="large"
                  placeholder="Enter Pin"
                />
              </div>
              <div className="mb-5">
                <FormSelectField
                  name="account_type"
                  options={AccountOptions}
                  size="large"
                  placeholder="Select Account "
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button htmlType="submit" type="primary" className="w-full">
                Sign up
              </Button>
            </div>
          </Form>

          <div className="mt-5 flex justify-center">
            <p className="text-[12px] font-semibold">
              New to CarDev?{" "}
              <Link to="/login" className="text-primary underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
