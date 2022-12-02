import Box from "./Box";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
function IntervalsBox() {

  return (
    <Box>
      <p className='intervals-number'>10</p>
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
