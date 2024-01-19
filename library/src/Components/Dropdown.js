import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
const Dropdown = ({ options }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [option, setOption] = useState("Select...");

  const handleClick = () => {
    setIsExpand(!isExpand);
  };

  const handleOptionClick = (item) => {
    setIsExpand(false);
    setOption(item.label);
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
        <div>{option}</div>
        <div>
          <FaChevronCircleDown />
        </div>
      </div>
      {isExpand && <div>{renderedItems}</div>}
    </div>
  );
};

export default Dropdown;
