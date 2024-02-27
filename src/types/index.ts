export type ISignupProps = {
    name: string;
    number:string;
    email: string;
    pin: string;
    account_type:string;
    nid:number;
};

export type ILoginProps = {
    number: string;
    pin: string;
  };