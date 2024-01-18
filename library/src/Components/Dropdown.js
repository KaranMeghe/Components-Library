import { useState } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
const Dropdown = ({ options }) => {
  const [isExpand, setIsExpand] = useState(false);

  const renderedItems = options.map((item) => {
    return <div key={item.value}>{item.label}</div>;
  });

  const handleClick = () => {
    setIsExpand(!isExpand);
  };

  return (
    <div className="w-32">
      <div className="flex justify-between items-center" onClick={handleClick}>
        <div>Select....</div>
        <div>
          <FaChevronCircleDown />
        </div>
      </div>
      {isExpand && <div>{renderedItems}</div>}
    </div>
  );
};

export default Dropdown;
