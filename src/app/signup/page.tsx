"use client";
import CustomInput from "../../components/common/customInput";
import Back from "@/components/common/icons/back";
import Link from "next/link";
import { LOGIN_ROUTE } from "@/constant/routes";
import CustomButton from "@/components/common/customButton";
import { useState } from "react";
// import { getAuth } from "firebase/auth";
import { auth } from "@/services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import CustomErrorMsg from "@/components/common/customErrorMsg";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const navigate = useRouter();
  const defaultUser = {
    name: "",
    password: "",
    email: "",
    mobile: "",
  };
  const [userInfo, setUserInfo] = useState(defaultUser);
  const [errorMsgShow, setErrorMsgShow] = useState(false);
  const handleInput = (e) => {
    let name, value;
    name = e.target.name;
    value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  console.log(auth);
  const handleSignUp = () => {
    if (
      userInfo.name !== "" &&
      userInfo.password !== "" &&
      userInfo.email !== "" &&
      userInfo.mobile !== ""
    ) {
      console.log("Register from values");
      createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
        .then((response) => {
          console.log("firebase user ", response);
          setUserInfo(defaultUser);
          navigate.push(LOGIN_ROUTE);
        })
        .catch((e) => {
          console.log("catch ", e.message);
        });
    } else {
      console.log(" error ");
    }
  };

  console.log(userInfo);

  return (
    <div className={"flex justify-center items-center h-screen"}>
      <div className={"w-full md:w-1/3 h-full flex flex-col justify-between"}>
        <div>
          <div className={"pt-4 pl-4"}>
            <Link href={LOGIN_ROUTE}>
              <button className={"bg-[#F5F6FA] rounded-full p-2"}>
                <Back />
              </button>
            </Link>
          </div>
          <div className={"pt-20 text-center"}>
            <div className={"text-4xl font-bold"}>Sign Up</div>
            <CustomErrorMsg show={errorMsgShow} />
          </div>
        </div>
        <div className={"px-4 flex flex-col gap-4"}>
          <CustomInput
            label="Fullname"
            name={"name"}
            type={"text"}
            placeholder={"Enter fullname"}
            onChange={handleInput}
            value={userInfo.name}
          />
          <CustomInput
            label="Password"
            name={"password"}
            type={"password"}
            placeholder={"Enter Password"}
            onChange={handleInput}
            value={userInfo.password}
          />
          <CustomInput
            label="Email Address"
            name={"email"}
            type={"email"}
            value={userInfo.email}
            placeholder={"Enter E-mail"}
            onChange={handleInput}
          />
          <CustomInput
            label="Mobile"
            name={"mobile"}
            type={"number"}
            value={userInfo.mobile}
            placeholder={"Enter mobile"}
            onChange={handleInput}
          />
        </div>
        <div className={"flex flex-col gap-3"}>
          <div className={"flex justify-center items-center text-sm gap-1"}>
            <p className={"text-[#8F959E]"}>Already have an account?</p>
            <Link href={LOGIN_ROUTE}> SignIn </Link>
          </div>
          <CustomButton label={"Sign Up"} onClick={handleSignUp} />
        </div>
      </div>
    </div>
  );
}
