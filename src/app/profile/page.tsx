"use client";
import Link from "next/link";
import { HOME_ROUTE } from "@/constant/routes";
import Back from "@/components/common/icons/back";
import React, { useState } from "react";
import CustomInput from "@/components/common/customInput";
import Image from "next/image";
import ProfileModal from "@/components/common/profileModal";
import { bgBlue } from "next/dist/lib/picocolors";

export default function Profile() {
  const [modalType, setModalType] = useState("");
  const [showModal, setShowModal] = useState(false);
  const handleInput = () => {
    console.log("profile change");
  };

  const hadleEditFieldsModal = (type) => {
    console.log("type : ", type);
    setModalType(type);
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className={"flex justify-between items-center flex-col h-screen"}>
        <div className={"p-4 pb-0 w-full flex justify-between items-center "}>
          <Link
            href={HOME_ROUTE}
            className={
              "bg-[#F5F6FA] rounded-full p-2 w-[50px] h-[50px] flex justify-center items-center"
            }
          >
            <Back />
          </Link>
          <div className={"font-bold text-2xl w-full text-center"}>Profile</div>
        </div>
        <div
          className={
            "flex flex-col justify-center items-center h-screen w-full p-4 pt-0 gap-4 "
          }
        >
          <div className={"w-full"}>
            <label
              className={
                "flex justify-between items-center border-b-2 !border-b-[#E7E8EA] px-2"
              }
            >
              <Image
                src={"/profileInfo.svg"}
                alt={"no image"}
                width={20}
                height={20}
                className={"w-8 h-8"}
              />
              <input
                type={"text"}
                placeholder={"Enter Name"}
                className={"!bg-transparent h-[50px] w-full pl-4 p-2 outline-0"}
                name={"name"}
                onChange={handleInput}
                value={"John Doe 1"}
                required
                readOnly
              />
              <button onClick={(e) => hadleEditFieldsModal("name")}>
                <Image
                  src={"/editPen.svg"}
                  alt={"no image"}
                  width={20}
                  height={20}
                  className={"w-8 h-8"}
                />
              </button>
            </label>
          </div>
          <div className={"w-full"}>
            <label
              className={
                "flex justify-between items-center border-b-2 !border-b-[#E7E8EA] px-2"
              }
            >
              <Image
                src={"/profileMail.svg"}
                alt={"no image"}
                width={20}
                height={20}
                className={"w-8 h-8"}
              />
              <input
                type={"text"}
                placeholder={"Enter Name"}
                className={"!bg-transparent pl-4 h-[50px] w-full p-2 outline-0"}
                name={"name"}
                onChange={handleInput}
                value={"John Doe 2"}
                required
                readOnly
              />
              <button onClick={(e) => hadleEditFieldsModal("email")}>
                <Image
                  src={"/editPen.svg"}
                  alt={"no image"}
                  width={20}
                  height={20}
                  className={"w-8 h-8"}
                />
              </button>
            </label>
          </div>
          <div className={"w-full"}>
            <label
              className={
                "flex justify-between items-center border-b-2 !border-b-[#E7E8EA] px-2"
              }
            >
              <Image
                src={"/profilePSW.svg"}
                alt={"no image"}
                width={20}
                height={20}
                className={"w-8 h-8"}
              />
              <input
                type={"text"}
                placeholder={"Enter Name"}
                className={"!bg-transparent pl-4 h-[50px] w-full p-2 outline-0"}
                name={"name"}
                onChange={handleInput}
                value={"John Doe 3"}
                required
                readOnly
              />
              <button onClick={(e) => hadleEditFieldsModal("password")}>
                <Image
                  src={"/editPen.svg"}
                  alt={"no image"}
                  width={20}
                  height={20}
                  className={"w-8 h-8"}
                />
              </button>
            </label>
          </div>
        </div>
      </div>
      <ProfileModal
        show={showModal}
        type={modalType}
        onClose={() => setShowModal(false)}
      />
    </div>
  );
}
