/* eslint-disable @typescript-eslint/no-unused-vars */

import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small" | "middle";
  value?: string | string[] | undefined;
  defaultValue?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
}

const FormInput = ({
  name,
  type,
  size = "large",
  defaultValue,
  placeholder,
  label,
}: IInput) => {
  const {
    control,
  } = useFormContext();


  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
              type={type}
              size={size}
              className="hover:border-primary focus:border-primary"
              placeholder={placeholder}
              {...field}
              defaultValue={defaultValue ? defaultValue : field.value}
            />
          ) : (
            <Input
              type={type}
              size={size}
              className="hover:border-primary mt-2 focus:border-primary"
              placeholder={placeholder}
              {...field}
              defaultValue={defaultValue ? defaultValue : field.value}
            />
          )
        }
      />
    </>
  );
};

export default FormInput;