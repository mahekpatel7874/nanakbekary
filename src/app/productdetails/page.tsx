"use client";
import Link from "next/link";
import Image from "next/image";
import Back from "@/components/common/icons/back";
import Cart from "@/app/cart/page";
import CustomButton from "@/components/common/customButton";
import { CART_ROUTE, HOME_ROUTE } from "@/constant/routes";
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "@/services/firebase";
import { useEffect, useState } from "react";

export default function ProductDetails({ prId }) {
  // console.log("prId : ", prId.params.homeId);
  const [product, setProduct] = useState<any>({});

  const getProductById = async () => {
    const productById = doc(db, "products", prId?.params?.homeId);
    if (productById) {
      await getDoc(productById)
        .then(async (p) => {
          const prod: object = p.data();
          setProduct(prod);
          if (prod.category) {
            const categoryById = doc(db, "categories", `${prod.category}`);
            await getDoc(categoryById)
              .then((c) => {
                const cat = c.data();
                console.log("category : ", cat);
              })
              .catch((e) => console.log("category error : ", e));
          }
        })
        .catch((e) => console.log("e - - - - - - - >", e));
      // try {
      //   const product = await getDoc(productById);
      //   let prod: object = product.data();
      //   setProduct(prod);
      //   console.log("HERe---->", typeof prod);
      //   console.log("product  == = = >", product.data());
      //   if (prod.category) {
      //     const categoryById = doc(db, "categories", prod.category);
      //     try {
      //       const category = await getDoc(categoryById);
      //       let cat = category.data();
      //       console.log("category : ", cat);
      //     } catch (e) {
      //       console.log("category error : ", e);
      //     }
      //   }
      // } catch (e) {
      //   console.log("error : ", e);
      // }
    }
  };
  const handleAddToCart = () => {
    console.log("add to cart clicked");
  };

  useEffect(() => {
    getProductById();
  }, []);

  // console.log("product : ", product);

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
            <Link
              href={HOME_ROUTE}
              className={
                "bg-[#fff] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
              }
            >
              <Back />
            </Link>
            <Link href={CART_ROUTE}>
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
              {product?.category}
            </div>
            <div className={"text-lg font-medium"}>{product?.name}</div>
          </div>
          <div>
            <div className={"text-base text-[#8F959E]"}>Price</div>
            <div className={"text-lg font-medium"}>
              {" "}
              &#x20b9;&nbsp;{product?.price}
            </div>
          </div>
        </div>
        <div className={"px-6 text-[#8F959E]"}>
          {product?.qty}&nbsp;
          {product?.qtytype}
          <span className={"font-bold text-[#000]"}>&nbsp;Read More..</span>
        </div>
      </div>
      <CustomButton label={"Add to Cart"} onClick={handleAddToCart} />
    </div>
  );
}
