export default function CustomErrorMsg({ show }) {
  return (
    <div className={`p-4 ${show ? "block" : "hidden"}`}>
      <div
        className="relative flex justify-center items-center w-full p-4 bg-[#fee2e2] border border-[#f87171] text-[#b91c1c] rounded-lg shadow top-5 mx-auto"
        role="alert"
      >
        <strong className="font-bold">Something went wrong !</strong>
        {/*<span className="block sm:inline">Something seriously bad happened.</span>*/}
        <span className="absolute right-0 px-4 py-3">
          <svg
            className="fill-current h-6 w-6"
            fill="#ef4444"
            role="button"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <title>Close</title>
            <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
          </svg>
        </span>
      </div>
    </div>
  );
}
