import Link from "next/link";
import Image from "next/image";
import Back from "@/components/common/icons/back";
import React from "react";
import { HOME_ROUTE } from "@/constant/routes";

export default function OrderDetails() {
  return (
    <div
      className={
        "flex justify-between items-center h-screen flex-col overflow-hidden"
      }
    >
      <div className={"p-4 w-full"}>
        <Link
          href={HOME_ROUTE}
          className={
            "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
          }
        >
          <Back />
        </Link>
      </div>

      <div className={"p-4 overflow-y-scroll flex flex-col gap-3 h-screen"}>
        <div
          className={"grid gap-3 p-4 rounded-2xl "}
          style={{ boxShadow: "2px 4px 8px 2px rgb(0 0 0 / 0.09)" }}
        >
          <div className={"flex justify-between items-center "}>
            <div>
              <Image
                src={"/product.png"}
                width={130}
                height={50}
                alt={"No Image"}
                className={"bg-[#f4f5f8] rounded-2xl"}
              ></Image>
            </div>
            <div className={"flex flex-col justify-between p-4 gap-2"}>
              <div className={"text-base font-medium"}>
                Men's Tie-Dye T-Shirt Nike Sportswear
              </div>
              <div className={"text-[#8F959E] text-sm"}>$99 (+$4.00 Tax)</div>
              <div className={"text-base pt-4 font-medium"}>Qty: 1</div>
            </div>
          </div>
        </div>
      </div>

      <div className={"p-4 w-full absolute bottom-0"}>
        <div className={"flex justify-between items-center py-0.5"}>
          <div className={"font-medium text-lg pb-1"}>Date</div>
          <div className={"text-[#8F959E]"}>21/12/2023 12:30 PM</div>
        </div>
        <div className={"font-medium text-lg pb-1"}>Order Info</div>
        <div className={"flex justify-between items-center py-0.5"}>
          <div className={"text-[#8F959E]"}>Subtotal</div>
          <div className={"font-bold"}>$110</div>
        </div>
        <div className={"flex justify-between items-center py-0.5"}>
          <div className={"text-[#8F959E]"}>Discount</div>
          <div className={"font-bold"}>-$10</div>
        </div>
        <div className={"flex justify-between items-center py-0.5"}>
          <div className={"text-[#8F959E]"}>Total</div>
          <div className={"font-bold"}>$100</div>
        </div>
      </div>
    </div>
  );
}
