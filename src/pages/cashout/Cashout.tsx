import { Button } from "antd";
import FormInput from "../../components/forms/FormInputField";
import Form from "../../components/forms/Form";
import { SubmitHandler } from "react-hook-form";
import { ITransationFormProps } from "../../types";
import BreadCrumb from "../../components/breadcrumb/BreadCrumb";

const Cashout = () => {
  const onSubmit: SubmitHandler<ITransationFormProps> = async (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="w-full lg:w-[35%] mb-10 mx-auto mt-20">
      <div className="my-5 ml-0">
        <BreadCrumb
          items={[
            {
              label: "Home",
              link: "/",
            },
            {
              label: "Transation",
              link: "/transation",
            },
            {
              label: "Cash out",
              link: "/cash-out",
            },
          ]}
        />
      </div>
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
        }}
        className="p-5"
      >
        <p className="text-md text-center mb-3">Cash Withdrawal Request Form</p>
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

            <div className="mb-2">
              <FormInput
                name="pin"
                type="password"
                size="large"
                placeholder="Enter pin"
              />
            </div>
            <div className="mb-5">
              <FormInput
                name="amount"
                type="text"
                size="large"
                placeholder="Enter Amount"
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Button className="w-full" type="primary" htmlType="submit">
              Cash out
            </Button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default Cashout;
