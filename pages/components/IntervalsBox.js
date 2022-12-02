import Box from "./Box";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
function IntervalsBox() {
  const { intervalsDisplay } = useContext(AppContext);

  return (
    <Box>
      <p className='intervals-number'>{intervalsDisplay}</p>
      <p className='intervals-text'>Intervals</p>
      <style jsx>{`
        p {
          text-align: center;
        }
        .intervals-number {
          font-size: 8rem;
        }
        .intervals-text {
          font-size: 2rem;
        }
      `}</style>
    </Box>
  );
}

export default IntervalsBox;
