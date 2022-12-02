import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function StartButton() {

  const { setWorkDisplay, workInput } = useContext(AppContext);
  
  const click = () => {
    setWorkDisplay (workInput)
  };

  return <Button color={"var(--neutral-200)"} onClick={click}>START</Button>;
  
}

export default StartButton;
