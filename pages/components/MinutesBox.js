import Box from "./Box";
import { useContext } from "react";
import { AppContext } from "./AppContext";
function MinutesBox() {

  // const { workInput } = useContext(AppContext);
  return (
    <Box>
      <p className="minutes-number">0</p>
      <p className="minutes-text">Minutes</p>
      <style jsx>{`
        p {
          text-align: center;
        }
        .minutes-number {
          font-size: 8rem;
        }
        .minutes-text {
          font-size: 2rem;
        }
      `}</style>
    </Box>
  );
}

export default MinutesBox;
