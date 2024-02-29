/* eslint-disable @typescript-eslint/no-explicit-any */
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

    export interface IMeta {
      limit: number;
      page: number;
      size: number;
    }
    
    export type IGenericErrorMessage = {
      path: string | number;
      message: string;
    };

    export type ResponseSuccessType = {
      data: any;
      meta?: IMeta;
    };
    
    export type IGenericErrorResponse = {
      statusCode?: number;
      message: string;
      success?:string;
      errorMessages: IGenericErrorMessage[];
    };
