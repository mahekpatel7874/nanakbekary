"use client";
import Link from "next/link";
import { LOGIN_ROUTE, VERIFICATIONCODE_ROUTE } from "@/constant/routes";
import Back from "@/components/common/icons/back";
import CustomInput from "@/components/common/customInput";
import CustomButton from "@/components/common/customButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Forgotpassword() {
  const navigate = useRouter();
  const handleCountinue = () => {
    navigate.push(VERIFICATIONCODE_ROUTE);
  };
  return (
    <div className={"flex justify-center items-center h-screen"}>
      <div className={"w-full md:w-1/3 h-full flex flex-col justify-between"}>
        <div>
          <div className={"pt-4 pl-4"}>
            <Link
              href={LOGIN_ROUTE}
              className={
                "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
            >
              <Back />
            </Link>
          </div>
          <div className={"pt-10 text-center"}>
            <div className={"text-4xl font-bold"}>Forgot Password</div>
            <Image
              src={"/forgotPasswordCloudLock.svg"}
              alt={"No Image"}
              width={500}
              height={500}
            />
          </div>
          <div className={"px-4 pt-10 flex flex-col gap-4"}>
            <CustomInput
              label="Email Address"
              name={"email"}
              type={"email"}
              // value={userInfo.email}
              placeholder={"Enter E-mail"}
              // onChange={handleInput}
            />
          </div>
        </div>
        <div className={"flex flex-col gap-5"}>
          <div
            className={"text-sm text-[#8F959E] text-center w-8/12 self-center"}
          >
            Please write your email to receive a confirmation code to set a new
            password
          </div>
          <CustomButton label={"Continue"} onClick={handleCountinue} />
        </div>
      </div>
    </div>
  );
}
