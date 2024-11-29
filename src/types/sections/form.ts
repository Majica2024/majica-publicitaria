export interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface SubmitStatus {
  message: string;
  isError: boolean;
}
