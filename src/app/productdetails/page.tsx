"use client";
import Link from "next/link";
import Image from "next/image";
import Back from "@/components/common/icons/back";
import Cart from "@/app/cart/page";
import CustomButton from "@/components/common/customButton";
import { HOME_ROUTE } from "@/constant/routes";

export default function productDetails() {
  const handleAddToCart = () => {
    console.log("add to cart clicked");
  };
  return (
    <div
      className={
        "flex justify-between flex-col items-center overflow-hidden h-screen"
      }
    >
      <div className={"w-full flex flex-col gap-3"}>
        <div className={"relative bg-[#F5F6FA] flex justify-center pt-4"}>
          <Image
            src={"/productBig.png"}
            width={350}
            height={500}
            alt={"No Image"}
          />
          <div
            className={
              "absolute top-4 px-4 w-full flex justify-between items-center"
            }
          >
            <Link href={HOME_ROUTE}>
              <button
                className={
                  "bg-[#fff] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
                }
              >
                <Back />
              </button>
            </Link>
            <Link href={"#"}>
              <button
                className={
                  "bg-[#fff] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
                }
              >
                <Image
                  src={"/Cart.svg"}
                  width={25}
                  height={25}
                  alt={"No Image"}
                />
              </button>
            </Link>
          </div>
        </div>
        <div className={"px-6 flex justify-between items-center"}>
          <div>
            <div className={"text-base text-[#8F959E]"}>
              Men's Printed Pullover Hoodie
            </div>
            <div className={"text-lg font-medium"}>Nike club Fleece</div>
          </div>
          <div>
            <div className={"text-base text-[#8F959E]"}>Price</div>
            <div className={"text-lg font-medium"}>$99</div>
          </div>
        </div>
        <div className={"px-6 text-[#8F959E]"}>
          The Nike Throwback Pullover Hoodie is made from premium French terry
          fabric that blends a performance feel with{" "}
          <span className={"font-bold text-[#000]"}>Read More..</span>
        </div>
      </div>
      <CustomButton label={"Add to Cart"} onClick={handleAddToCart} />
    </div>
  );
}
