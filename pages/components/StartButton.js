import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function StartButton() {
  const {
    setWorkDisplay,
    workInput,
    setWorkInput,
    setRestDisplay,
    restInput,
    setRestInput,
    setIntervalsDisplay,
    intervalsInput,
    setIntervalsInput,
  } = useContext(AppContext);

  const click = () => {
    setWorkDisplay(workInput || 0);
    setWorkInput("");

    setRestDisplay(restInput || 0);
    setRestInput("");
    
    setIntervalsDisplay(intervalsInput || 0);
    setIntervalsInput("");
  };

  return (
    <Button color={"var(--neutral-200)"} onClick={click}>
      START
    </Button>
  );
}

export default StartButton;
