import NewTimerIcon from "./components/NewTimerIcon";
import AddTimerMenu from "./components/AddTimerMenu";
import Box from "./components/Box";
import { useEffect, useState } from "react";

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  useEffect(() => {
    console.log(menuIsVisible);
  }, [menuIsVisible]);

  return (
    <>
      <Box/>
      <AddTimerMenu menuIsVisible={menuIsVisible} />
      <NewTimerIcon setMenuIsVisible={setMenuIsVisible} />
    </>
  );
}
