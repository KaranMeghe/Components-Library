import Dropdown from "./Components/Dropdown";

const App = () => {
  const options = [
    { label: "red", value: "red" },
    { label: "green", value: "green" },
    { label: "yellow", value: "yellow" },
    { label: "blue", value: "blue" },
  ];
  return <Dropdown options={options} />;
};

export default App;
