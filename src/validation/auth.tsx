import { yupResolver } from "@hookfrom/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

const logIn = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please fill this field"),
  password: Yup.string()
    .min(8, "Please enter minimum 6 characters for password.")
    .required("Please fill this field"),
});

// eslint-disable-next-line react-hooks/rules-of-hooks
export const logInValidation = () =>
  useForm({
    resolver: yupResolver(logIn),
  });
