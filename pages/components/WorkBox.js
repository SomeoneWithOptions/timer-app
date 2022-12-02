import Box from "./Box";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
import StartButton from "./StartButton";

function WorkBox() {
  const { workDisplay, setWorkDisplay,restInterval } = useContext(AppContext);

  useEffect(() => {
 
    const workInterval = setInterval(() => {
      if (workDisplay > 0) {
        setWorkDisplay(workDisplay - 1);
      }
    }, 1000);

    if (workDisplay === 0) {
      clearInterval(workInterval);
    }
    return () => clearInterval(workInterval);
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
