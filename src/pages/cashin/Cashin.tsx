import { Button } from "antd";
import FormInput from "../../components/forms/FormInputField";
import Form from "../../components/forms/Form";
import { SubmitHandler } from "react-hook-form";
import { ITransationFormProps } from "../../types";



const Cashin = () => {

    const onSubmit: SubmitHandler<ITransationFormProps> = async (data) => {
        try {
          console.log(data);
        } catch (error) {
          console.error(error);
        }
      };
    

    return (
        <div  style={{
            border: "1px solid #d9d9d9",
            borderRadius: "5px",
            padding: "15px",
            marginBottom: "10px",
          }} className="w-full lg:w-[35%] mb-10 p-5 mx-auto mt-20">

            <p className="text-md text-center mb-3">Cash Deposit Form</p>
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
    );
};

export default Cashin;