export type ISignupProps = {
  name: string;
  number: string;
  email: string;
  pin: string;
  account_type: string;
  nid: number;
};

export type ILoginProps = {
  number: string;
  pin: string;
};

export type ITransationItems = {
  name: string;
  image: string;
  href:string
};

export type ITransationFormProps = {
    number :string;
    pin:string;
    amount:number
    }
