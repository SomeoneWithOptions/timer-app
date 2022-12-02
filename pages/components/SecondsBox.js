import Box from "./Box";
import { useContext } from "react";
import { AppContext } from "./AppContext";
function SecondsBox() {
  const { wDisplay } = useContext(AppContext);

  return (
    <Box>
      <p className='seconds-number'>{wDisplay}</p>
      <p className='seconds-text'>Seconds</p>
      <style jsx>{`
        p {
          text-align: center;
        }
        .seconds-number {
          font-size: 8rem;
        }
        .seconds-text {
          font-size: 2rem;
        }
      `}</style>
    </Box>
  );
}

export default SecondsBox;
