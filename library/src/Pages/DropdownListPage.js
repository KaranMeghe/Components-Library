import { useState } from "react";
import Dropdown from "../Components/Dropdown";

const DropdownListPage = () => {
  const [selection, setSelection] = useState(null);

  const handleClick = (item) => {
    setSelection(item);
  };

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <Dropdown value={selection} onChange={handleClick} options={options} />
  );
};

export default DropdownListPage;
