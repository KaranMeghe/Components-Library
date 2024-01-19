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
      <div key={item.value} onClick={() => handleOptionClick(item)}>
        {item.label}
      </div>
    );
  });

  return (
    <div className="w-32 cursor-pointer">
      <div className="flex justify-between items-center" onClick={handleClick}>
        <div>{value?.label || "Select...."}</div>
        <div>
          <FaChevronCircleDown />
        </div>
      </div>
      {isExpand && <div>{renderedItems}</div>}
    </div>
  );
};

export default Dropdown;
