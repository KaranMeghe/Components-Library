import { useState } from "react";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (index) => {
    setExpandedIndex(index);
  };

  const renderdItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    const icon = (
      <span>
        {isExpanded ? <FaChevronCircleUp /> : <FaChevronCircleDown />}
      </span>
    );

    return (
      <div key={item.id} className="w-96">
        <div
          onClick={() => handleClick(index)}
          className="flex items-center justify-between p-3 bg-gray-50 border-b border-1 cursor-pointer"
        >
          <h2>{item.label}</h2>
          <div>{icon}</div>
        </div>

        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded"> {renderdItems}</div>;
};

export default Accordion;
