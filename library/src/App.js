import Button from "./Button";

const App = () => {
  const handleClick = () => {
    console.log("Collecting Rest");
  };
  const handleMouseOverIn = () => {
    console.log("in");
  };
  const handleMouseOverOut = () => {
    console.log("out");
  };
  return (
    <div>
      <div>
        <Button primary onClick={handleClick}>
          Primary
        </Button>
      </div>

      <div>
        <Button
          secondary
          rounded
          onMouseOver={handleMouseOverIn}
          onMouseLeave={handleMouseOverOut}
        >
          Secondary
        </Button>
      </div>

      <div>
        <Button success outline>
          Success
        </Button>
      </div>

      <div>
        <Button warning outline>
          Warning
        </Button>
      </div>

      <div>
        <Button danger outline rounded>
          Danger
        </Button>
      </div>
    </div>
  );
};

export default App;
