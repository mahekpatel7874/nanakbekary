export default function ProfileModal({ show, type, onClose }) {
  return (
    <div
      className={`flex fixed inset-0 bg-[#000] bg-opacity-25 backdrop-blur-[2px] justify-center items-center ${
        show ? "block" : "hidden"
      }`}
    >
      <div className={"bg-[#fff] rounded-3xl flex flex-col gap-4 w-[380px]"}>
        <div className={"w-full flex justify-end items-center"}>
          <button className={"pt-4 pr-5"} onClick={() => onClose()}>
            X
          </button>
        </div>
        {type === "name" ? (
          <div className={"w-full px-4"}>
            <label className={"text-[#8F959E] text-xs"}>{"Name"}</label>
            <input
              type={"text"}
              className={
                "bg-transparent border-b-2 !border-b-[#E7E8EA] h-[50px] w-full p-2.5 outline-0 !autofill:bg-primary"
              }
              name={"name"}
              value={"John Doe"}
              required
            />
          </div>
        ) : type === "email" ? (
          <div className={"w-full px-4"}>
            <label className={"text-[#8F959E] text-xs"}>{"Email"}</label>
            <input
              type={"email"}
              className={
                "bg-transparent border-b-2 !border-b-[#E7E8EA] h-[50px] w-full p-2.5 outline-0 !autofill:bg-primary"
              }
              name={"email"}
              value={"johndoe@gmail.com"}
              required
            />
          </div>
        ) : (
          <div className={"w-full px-4"}>
            <label className={"text-[#8F959E] text-xs"}>{"Password"}</label>
            <input
              type={"password"}
              className={
                "bg-transparent border-b-2 !border-b-[#E7E8EA] h-[50px] w-full p-2.5 outline-0 !autofill:bg-primary"
              }
              name={"password"}
              value={"1234"}
              required
            />
            <label className={"text-[#8F959E] text-xs"}>
              {"Confirm Password"}
            </label>
            <input
              type={"password"}
              className={
                "bg-transparent border-b-2 !border-b-[#E7E8EA] h-[50px] w-full p-2.5 outline-0 !autofill:bg-primary"
              }
              name={"password"}
              value={"1234"}
              required
            />
          </div>
        )}
        <div className={"w-full"}>
          <button
            className={
              "bg-primary rounded-b-3xl w-full h-[60px] text-[#fff] font-normal text-lg"
            }
            // onClick={onClick}
          >
            {"Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
