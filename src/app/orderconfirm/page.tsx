"use client";
import Link from "next/link";
import { HOME_ROUTE, ORDERLIST_ROUTE } from "@/constant/routes";
import Back from "@/components/common/icons/back";
import React from "react";
import CustomButton from "@/components/common/customButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function OrderConfirm() {
  const navigate = useRouter();
  const handleContinueShopping = () => {
    console.log("continue shopping clicked");
    navigate.push(HOME_ROUTE);
  };

  const handleOrderList = () => {
    navigate.push(ORDERLIST_ROUTE);
  };

  return (
    <div className={"flex justify-between items-center flex-col h-screen"}>
      <div className={"p-4 w-full flex justify-between items-center "}>
        <Link
          href={HOME_ROUTE}
          className={
            "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
          }
        >
          <Back />
        </Link>
      </div>
      <div className={"h-screen"}>
        <div
          className={
            "bg-top bg-cover bg-no-repeat bg-[url(/orderConfirmBack.svg)]"
          }
        >
          <div className={"relative p-12"}>
            <Image
              src={"/orderConfirmMobile.svg"}
              alt={"No Image"}
              width={500}
              height={20}
            ></Image>
            <Image
              src={"/confirmDone.svg"}
              alt={"No Image"}
              width={75}
              height={75}
              className={"absolute"}
              style={{ top: "calc(50% - 37.5px)", left: "calc(50% - 37.5px)" }}
            />
          </div>
        </div>
        <div className={"flex flex-col justify-between items-center p-4 h-1/2"}>
          <div>
            <h1 className={"font-semibold text-2xl text-center"}>
              Order Confirmed!
            </h1>
            <h1 className={"text-[#8F959E] text-center"}>
              Your order has been confirmed, we will send you confirmation email
              shortly
            </h1>
          </div>
          <div className={"w-full"}>
            <button
              className={
                "w-full bg-[#F5F5F5] text-[#8F959E] rounded-xl text-center h-[50px] p-4 flex items-center justify-center"
              }
              onClick={handleOrderList}
            >
              {"Go to Order"}
            </button>
          </div>
        </div>
      </div>
      <CustomButton
        label={"Continue Shopping"}
        onClick={handleContinueShopping}
      />
    </div>
  );
}
