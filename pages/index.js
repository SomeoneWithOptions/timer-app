import NewTimerIcon from "./components/NewTimerIcon";
import AddTimerMenu from "./components/AddTimerMenu";
import MinutesBox from "./components/MinutesBox";
import SecondsBox from "./components/SecondsBox";
import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <Head>
        <meta charset='UTF-8' />
        <meta http-equiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta
          name='description'
          content='Interval Timer App for Exercise'
        ></meta>
        <title>Timer App</title>
        <link rel='preconnect' href='/rubik.ttf' />
      </Head>
      <div className="dataContainer">
        <MinutesBox />
        <SecondsBox />
      </div>
      <AddTimerMenu menuIsVisible={menuIsVisible} />
      <NewTimerIcon setMenuIsVisible={setMenuIsVisible} />
    </>
  );
}
