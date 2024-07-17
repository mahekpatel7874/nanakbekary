export default function CustomInput({
  label,
  type,
  placeholder,
  name,
  onChange,
  value,
}) {
  return (
    <div className={"w-full"}>
      <label className={"text-[#8F959E] text-xs"}>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={
          "!bg-transparent border-b-2 !border-b-[#E7E8EA] h-[45px] w-full p-2.5 outline-0 !autofill:bg-primary"
        }
        name={name}
        onChange={onChange}
        value={value}
        required
      />
    </div>
  );
}
