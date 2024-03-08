export interface signUpForm {
    name: string;
    email: string;
    number: string;
    password: string;
    ConfirmPassword: string;
    city: string;
    address: string;
    createdAt: Date;
}

export interface userDetailsType {
    name: string;
    email: string;
    number: string;
    city: string;
    address: string;
    createdAt: Date;
}

export interface LoginType {
    email:string;
    password:string;
}