import Button from "./Button";

const App = () => {
  return (
    <div>
      <div>
        <Button primary>Primary</Button>
      </div>

      <div>
        <Button secondary rounded>
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
