"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import User from "@/components/common/icons/user";
import Back from "@/components/common/icons/back";
import { HOME_ROUTE, PRODUCTDETAILS_ROUTE } from "@/constant/routes";
import { useRouter } from "next/navigation";
import CustomFooter from "@/components/common/customFooter";

export default function Wishlist() {
  const navigate = useRouter();
  const handleSelectedProduct = () => {
    navigate.push(PRODUCTDETAILS_ROUTE);
  };
  return (
    <div className={"flex justify-between flex-col h-screen"}>
      <div className={"p-4 w-full flex justify-between items-center"}>
        <Link href={HOME_ROUTE}>
          <button
            className={
              "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
            }
          >
            <Back />
          </button>
        </Link>
        <div className={"font-bold text-2xl"}>Wishlist</div>
        <Link href={"#"}>
          <button
            className={
              "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
            }
          >
            <User />
          </button>
        </Link>
      </div>
      <div className={"p-4 overflow-y-scroll"}>
        <div className={"flex justify-between items-center"}>
          <div>
            <div className={"text-lg font-bold "}>365 Items</div>
            <div className={"text-sm text-[#8F959E]"}>Available in stock</div>
          </div>
          <div>
            <button
              className={
                "bg-[#F5F6FA] rounded-xl p-2 gap-2 flex justify-center items-center"
              }
            >
              <Image
                src={"/Edit.svg"}
                alt={"No Image"}
                width={20}
                height={20}
              />
              <span className={"font-medium"}>Edit</span>
            </button>
          </div>
        </div>
        <div className={"pt-4 grid grid-cols-2 gap-3"}>
          <div onClick={handleSelectedProduct}>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
          <div>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
          <div>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
          <div>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
          <div>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
          <div>
            <div className={"flex justify-center items-center w-full"}>
              <div className={"relative"}>
                <Image
                  src={"/product.png"}
                  width={180}
                  height={80}
                  alt={"No Image"}
                  className={"bg-[#f4f5f8] rounded-2xl"}
                ></Image>
                <div className={"absolute top-4 right-4"}>
                  <Image
                    src={"/Heart.svg"}
                    alt={"No Image"}
                    width={20}
                    height={20}
                    // onClick={addToWishlist}
                  ></Image>
                </div>
              </div>
            </div>
            <div className={"text-sm font-medium px-1"}>
              Nike Sportswear Club Fleece
            </div>
            <div className={"font-bold px-1"}>$99</div>
          </div>
        </div>
      </div>
      <CustomFooter />
    </div>
  );
}
