import React from "react";

interface Opts {
    id: number;
    nombre: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  selectName: string;
  labelContent: string;
  error?: string;
  classNameSelect?: string;
  color?: string;
  opts: Opts[];
}

// 👇 forwardRef es necesario para que react-hook-form pueda registrar el input
const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ selectName, labelContent, error, classNameSelect = "", color="pink", opts, ...props }, ref) => {
    return (
      <div className="flex flex-col w-full mb-4">
        <label
          htmlFor={selectName}
          className="font-paloseco text-sm sm:text-base mb-2"
        >
          {labelContent}
        </label>

        {
          color === "pink" ?
            <select
              id={selectName}
              ref={ref} 
              {...props}
              className={`bg-buttons-color text-white text-sm sm:text-base p-2 px-5 rounded-4xl w-full outline-none focus:ring-2  transition-all duration-150 ${
                error ? "ring-2 ring-red-500" : ""
              } ${classNameSelect}`}
            >
                {
                    opts?.map((item: Opts) => (
                        <option className="text-sm sm:text-base" key={item.id} value={item.id}>{item.nombre}</option>
                    ))
                }
            </select>
            : 
            <select
              id={selectName}
              ref={ref} 
              {...props}
              className={`w-full px-4 py-2 rounded-lg border-2 border-pink-200 
           focus:border-pink-400 outline-none focus:ring-2 focus:ring-pink-200 
           bg-white/80 text-black placeholder:text-[#201d1d4f] text-sm sm:text-base ${
                error ? "ring-2 ring-red-500" : ""
              } ${classNameSelect}`}
            >
                {
                    opts?.map((item: Opts) => (
                        <option className="text-sm sm:text-base" key={item.id} value={item.id}>{item.nombre}</option>
                    ))
                }
            </select>
        }

        {error && (
          <span className="text-red-500 text-xs mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
