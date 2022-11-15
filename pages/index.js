import NewTimerIcon from "./components/NewTimerIcon";
import AddTimerMenu from "./components/AddTimerMenu";
import MinutesBox from "./components/MinutesBox";
import SecondsBox from "./components/SecondsBox";
import { useEffect, useState } from "react";
import Head from "next/head";

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <Head>
        <title>Timer App</title>
        <link rel="preconnect" href="/rubik.ttf" />
      </Head>
      
      <MinutesBox />
      <SecondsBox />
      <AddTimerMenu menuIsVisible={menuIsVisible} />
      <NewTimerIcon setMenuIsVisible={setMenuIsVisible} />
    </>
  );
}
