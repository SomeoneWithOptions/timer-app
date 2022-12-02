import Box from "./Box";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";

function WorkBox() {
  const { workDisplay, setWorkDisplay } = useContext(AppContext);

  useEffect(() => {
    const interval = setInterval(() => {
      if (workDisplay > 0) {
        setWorkDisplay(workDisplay - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [workDisplay]);
  return (
    <Box>
      <p className='work-number'>{workDisplay}</p>
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
