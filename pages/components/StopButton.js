import Button from "./Button";
function StopButton({ children }) {
  const click = () => {
    console.log("stop");
  };

  return (
    <Button color={"var(--neutral-100)"} onClick={click}>
      STOP
    </Button>
  );
}

export default StopButton;
