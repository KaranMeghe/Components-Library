import Dropdown from "./Components/Dropdown";

const App = () => {
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Yellow", value: "yellow" },
    { label: "Blue", value: "blue" },
  ];
  return <Dropdown options={options} />;
};

export default App;
