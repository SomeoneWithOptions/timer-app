import Box from "./Box";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

function WorkBox() {
  const { wDisplay, setWDisplay } = useContext(AppContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if (wDisplay > 0) {
        setWDisplay(wDisplay - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [wDisplay]);
  return (
    <Box>
      <p className='work-number'>{ wDisplay}</p>
      <p className='work-text'>Work</p>
      <style jsx>{`
        p {
          text-align: center;
        }
        .work-number {
          font-size: 8rem;
        }
        .work-text {
          font-size: 2rem;
        }
      `}</style>
    </Box>
  );
}

export default WorkBox;
