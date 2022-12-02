import Box from "./Box";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
function RestBox() {

  return (
    <Box>
      <p className='rest-number'>0</p>
      <p className='rest-text'>Rest</p>
      <style jsx>{`
        p {
          text-align: center;
        }
        .rest-number {
          font-size: 8rem;
        }
        .rest-text {
          font-size: 2rem;
        }
      `}</style>
    </Box>
  );
}

export default RestBox;
