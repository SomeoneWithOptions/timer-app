import Button from "./Button";
import { useContext } from "react";
import { AppContext } from "./AppContext";

function StartButton() {

  const { setWDisplay,w } = useContext(AppContext);
  
  const click = () => {
    setWDisplay (w)
  };

  return <Button color={"var(--neutral-200)"} onClick={click}>START</Button>;
  
}

export default StartButton;
