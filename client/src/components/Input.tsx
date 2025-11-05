import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputName: string;
  labelContent: string;
  error?: string;
  classNameInput?: string;
  color?: string;
}

// 👇 forwardRef es necesario para que react-hook-form pueda registrar el input
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputName, labelContent, error, classNameInput = "", color="pink", ...props }, ref) => {
    return (
      <div className="flex flex-col w-full mb-4">
        <label
          htmlFor={inputName}
          className="font-paloseco text-base mb-2 "
        >
          {labelContent}
        </label>

        {
          color === "pink" ?
            <input
              id={inputName}
              ref={ref} 
              {...props}
              className={`bg-buttons-color text-white  p-2 px-5 rounded-4xl w-full outline-none focus:ring-2  transition-all duration-150 ${
                error ? "ring-2 ring-red-500" : ""
              } ${classNameInput}`}
            />
            : 
            <input
              id={inputName}
              ref={ref} 
              {...props}
              className={`w-full px-4 py-2 rounded-lg border-2 border-pink-200 
           focus:border-pink-400 outline-none focus:ring-2 focus:ring-pink-200 
           bg-white/80 text-black placeholder:text-[#201d1d4f] ${
                error ? "ring-2 ring-red-500" : ""
              } ${classNameInput}`}
            />
        }

        {error && (
          <span className="text-red-500 text-xs mt-1 ">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
