import { useState, useEffect, useRef } from "react";
import { FaChevronCircleDown } from "react-icons/fa";
import Panel from "./Panel";
const Dropdown = ({ options, value, onChange }) => {
  const [isExpand, setIsExpand] = useState(false);
  const divEl = useRef();
  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsExpand(false);
      }
    };
    document.addEventListener("click", handler, true);

    return () => {
      document.removeEventListener("click", handler);
    };
  }, []);

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
    <div ref={divEl} className="w-32 relative cursor-pointer m-2">
      <Panel
        className="flex justify-between items-center border"
        onClick={handleClick}
      >
        <div>{value?.label || "Select...."}</div>
        <div>
          <FaChevronCircleDown />
        </div>
      </Panel>
      {isExpand && <Panel className="absolute top-full">{renderedItems}</Panel>}
    </div>
  );
};

export default Dropdown;
