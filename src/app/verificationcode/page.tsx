"use client";
import Link from "next/link";
import { HOME_ROUTE, LOGIN_ROUTE, NEWPASSWORD_ROUTE } from "@/constant/routes";
import Back from "@/components/common/icons/back";
import CustomButton from "@/components/common/customButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Forgotpassword() {
  const navigate = useRouter();
  const handleConfirmation = () => {
    navigate.push(NEWPASSWORD_ROUTE);
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
            <div className={"text-4xl font-bold"}>Verification Code</div>
            <Image
              src={"/forgotPasswordCloudLock.svg"}
              alt={"No Image"}
              width={500}
              height={500}
            />
          </div>
          <div className={"px-4 pt-10 flex gap-2"}>
            <input
              type={"number"}
              className={
                "rounded-2xl text-3xl text-[#1D1E20] font-semibold text-center !bg-transparent border-2 !border-[#E7E8EA] h-28 w-full outline-0"
              }
              name={"one"}
              // onChange={onChange}
              // value={value}
            />
            <input
              type={"number"}
              className={
                "rounded-2xl text-3xl text-[#1D1E20] font-semibold text-center !bg-transparent border-2 !border-[#E7E8EA] h-28 w-full outline-0"
              }
              name={"two"}
              // onChange={onChange}
              // value={value}
            />
            <input
              type={"number"}
              className={
                "rounded-2xl text-3xl text-[#1D1E20] font-semibold text-center !bg-transparent border-2 !border-[#E7E8EA] h-28 w-full outline-0"
              }
              name={"three"}
              // onChange={onChange}
              // value={value}
            />
            <input
              type={"number"}
              className={
                "rounded-2xl text-3xl text-[#1D1E20] font-semibold text-center !bg-transparent border-2 !border-[#E7E8EA] h-28 w-full outline-0"
              }
              name={"four"}
              // onChange={onChange}
              // value={value}
            />
          </div>
        </div>
        <div className={"flex flex-col gap-5"}>
          <div
            className={
              "flex justify-center items-center gap-2 text-center w-8/12 self-center"
            }
          >
            <span className={"font-bold"}>00:20</span>
            <span className={"text-sm text-[#8F959E]"}>
              resend confirmation code.
            </span>
          </div>
          <CustomButton
            label={"Confirmation Code"}
            onClick={handleConfirmation}
          />
        </div>
      </div>
    </div>
  );
}
