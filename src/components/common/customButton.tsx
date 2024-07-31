export default function CustomButton({ label, onClick }) {
  return (
    <div className={"w-full"}>
      <button
        className={"bg-primary w-full h-[65px] text-[#fff] font-normal text-lg"}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}
