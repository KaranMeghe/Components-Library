import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
const Dropdown = ({ options, value, onChange }) => {
  const [isExpand, setIsExpand] = useState(false);

  const handleClick = () => {
    setIsExpand(!isExpand);
  };

  const handleOptionClick = (option) => {
    setIsExpand(false);
    onChange(option);
  };

  const renderedItems = options.map((item) => {
    return (
      <div
        key={item.value}
        className="hover:bg-sky-100 rounded p-1"
        onClick={() => handleOptionClick(item)}
      >
        {item.label}
      </div>
    );
  });

  return (
    <div className="w-32 relative cursor-pointer m-2">
      <div
        className="flex justify-between items-center border"
        onClick={handleClick}
      >
        <div>{value?.label || "Select...."}</div>
        <div>
          <FaChevronCircleDown />
        </div>
      </div>
      {isExpand && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {renderedItems}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
