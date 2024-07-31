"use client";
import Link from "next/link";
import Image from "next/image";
import Back from "@/components/common/icons/back";
import React from "react";
import CustomButton from "@/components/common/customButton";
import { HOME_ROUTE, ORDERCONFIRM_ROUTE } from "@/constant/routes";
import { useRouter } from "next/navigation";

export default function Cart() {
  const navigate = useRouter();
  const handlePlaceOrder = () => {
    console.log("place order clicked");
    navigate.push(ORDERCONFIRM_ROUTE);
  };
  return (
    <div
      className={
        "flex justify-between items-center flex-col h-screen overflow-hidden"
      }
    >
      <div className={"p-4 w-full flex justify-between items-center "}>
        <Link
          href={HOME_ROUTE}
          className={
            "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
          }
        >
          <Back />
        </Link>
        <div className={"font-bold text-2xl w-full text-center"}>Cart</div>
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
                {"Men's Tie-Dye T-Shirt Nike Sportswear"}
              </div>
              <div className={"text-[#8F959E] text-sm"}>$99 (+$4.00 Tax)</div>
              <div className={"flex justify-between items-center"}>
                <div className={"flex"}>
                  <button
                    className={"p-0.5 rounded-full border border-[#8F959E]"}
                  >
                    <Image
                      src={"/ArrowDown.svg"}
                      alt={""}
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className={"px-4 text-base font-medium"}>1</div>
                  <button
                    className={"p-0.5 rounded-full border border-[#8F959E]"}
                  >
                    <Image
                      src={"/ArrowUp.svg"}
                      alt={""}
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
                <div>
                  <button
                    className={"p-0.5 rounded-full border border-[#8F959E]"}
                  >
                    <Image
                      src={"/Delete.svg"}
                      alt={""}
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                {"Men's Tie-Dye T-Shirt Nike Sportswear"}
              </div>
              <div className={"text-[#8F959E] text-sm"}>$99 (+$4.00 Tax)</div>
              <div className={"flex justify-between items-center"}>
                <div className={"flex"}>
                  <button
                    className={"p-0.5 rounded-full border border-[#8F959E]"}
                  >
                    <Image
                      src={"/ArrowDown.svg"}
                      alt={""}
                      width={20}
                      height={20}
                    />
                  </button>
                  <div className={"px-4 text-base font-medium"}>1</div>
                  <button
                    className={"p-0.5 rounded-full border border-[#8F959E]"}
                  >
                    <Image
                      src={"/ArrowUp.svg"}
                      alt={""}
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
                <div>
                  <button
                    className={"p-0.5 rounded-full border border-[#8F959E]"}
                  >
                    <Image
                      src={"/Delete.svg"}
                      alt={""}
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"w-full"}>
        <div className={"p-4"}>
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
        <CustomButton label={"Place Order"} onClick={handlePlaceOrder} />
      </div>
    </div>
  );
}
