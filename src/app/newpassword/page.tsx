"use client";
import Link from "next/link";
import { LOGIN_ROUTE } from "@/constant/routes";
import Back from "@/components/common/icons/back";
import CustomInput from "@/components/common/customInput";
import CustomButton from "@/components/common/customButton";

export default function Newpassword() {
  const handleReset = () => {
    console.log("Reset Your password");
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
          <div className={"pt-20 text-center"}>
            <div className={"text-4xl font-bold"}>New Password</div>
          </div>
        </div>
        <div className={"px-4 flex flex-col gap-4"}>
          <CustomInput
            label="Password"
            name={"password"}
            type={"text"}
            placeholder={"Enter Password"}
            // onChange={handleInput}
            // value={userInfo.password}
          />
          <CustomInput
            label="Confirm Password"
            name={"confirmpassword"}
            type={"password"}
            placeholder={"Enter Confirm Password"}
            // onChange={handleInput}
            // value={userInfo.password}
          />
        </div>
        <div className={"flex flex-col gap-3"}>
          <div
            className={
              "flex justify-center items-center text-[#8F959E] text-sm"
            }
          >
            Please write your new password
          </div>
          <CustomButton label={"Reset Password"} onClick={handleReset} />
        </div>
      </div>
    </div>
  );
}
