/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */

import { Button } from "antd";
import { Link} from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { ILoginProps } from "../../types";
import Form from "../../components/forms/Form";
import FormInput from "../../components/forms/FormInputField";

// @ts-ignore

const Login = () => {
  // const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const onSubmit: SubmitHandler<ILoginProps> = async (data) => {
    try {
      console.log(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-white border-2 border-gray-200 mt-24">
      <div className="">
        <div
          className="w-full lg:w-[30%] mx-auto bg-white drop-shadow-2xl p-5 rounded-lg"
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
          <p className="text-center mb-2">Please Login into your account</p>
          <Form submitHandler={onSubmit}>
            <div className="">
              <div className="mb-3">
                <FormInput
                  name="number"
                  type="text"
                  size="large"
                  placeholder="Enter Number"
                />
              </div>

              <div className="mb-5">
                <FormInput
                  name="pin"
                  type="password"
                  size="large"
                  placeholder="Enter pin"
                />
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="w-full" type="primary" htmlType="submit">
                Log In
              </Button>
            </div>
            <div className="mt-5 flex justify-center">
              <p className="text-[12px] font-semibold">
                Have No Account?{" "}
                <Link to="/signup" className="text-primary underline">
                  Register
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
