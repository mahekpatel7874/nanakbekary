"use client";
import CustomInput from "../../components/common/customInput";
import Link from "next/link";
import { HOME_ROUTE, LOGIN_ROUTE, SIGNUP_ROUTE } from "@/constant/routes";
import CustomButton from "@/components/common/customButton";
import { auth } from "@/services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const navigate = useRouter();
  const defaultEmailPass = { email: "", password: "" };
  const [userEmailPass, setUserEmailPass] = useState(defaultEmailPass);
  const handleInput = (e) => {
    console.log("change : ", e);
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUserEmailPass({ ...userEmailPass, [name]: value });
  };

  const handleLogin = () => {
    console.log("LogIn Clicked", userEmailPass);
    signInWithEmailAndPassword(
      auth,
      userEmailPass.email,
      userEmailPass.password,
    )
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("logedIn User Data : ", user);
        navigate.push(HOME_ROUTE);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className={"flex justify-center items-center h-screen"}>
      <div className={"w-full md:w-1/3 h-full flex flex-col justify-between"}>
        <div className={"pt-32 text-center"}>
          <div className={"text-4xl font-bold"}>Welcome</div>
          <div className={"text-[#8F959E]"}>
            Please enter your data to continue
          </div>
        </div>
        <div className={"px-4 flex flex-col gap-4"}>
          <CustomInput
            label="Email"
            name={"email"}
            type={"email"}
            placeholder={"Enter E-mail"}
            onChange={handleInput}
            value={userEmailPass.email}
          />
          <CustomInput
            label="Password"
            name={"password"}
            type={"password"}
            placeholder={"Enter Password"}
            onChange={handleInput}
            value={userEmailPass.password}
          />
          <div className={"text-[#EA4335] text-right"}>
            <a href={"#"}>Forgot password ?</a>
          </div>
        </div>
        <div className={"flex flex-col gap-3"}>
          <div className={"flex justify-center items-center text-sm gap-1"}>
            <p className={"text-[#8F959E]"}>Don't have an account?</p>
            <Link href={SIGNUP_ROUTE}> Signup </Link>
          </div>
          <CustomButton label={"Login"} onClick={handleLogin} />
        </div>
      </div>
    </div>
  );
}
