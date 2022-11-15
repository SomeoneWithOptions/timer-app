import NewTimerIcon from "./components/NewTimerIcon";
import AddTimerMenu from "./components/AddTimerMenu";
import MinutesBox from "./components/MinutesBox";
import SecondsBox from "./components/SecondsBox";
import { useEffect, useState } from "react";

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <MinutesBox />
      <SecondsBox />
      <AddTimerMenu menuIsVisible={menuIsVisible} />
      <NewTimerIcon setMenuIsVisible={setMenuIsVisible} />
    </>
  );
}
