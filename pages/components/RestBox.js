import Box from "./Box";
import { useContext, useEffect } from "react";
import { AppContext } from "./AppContext";
function RestBox() {

  const { restDisplay,workDisplay,setRestDisplay } = useContext(AppContext);
  
  useEffect(() => {
    if (workDisplay === 0) { 

      const restInterval = setInterval(() => {
        if (restDisplay > 0) {
          setRestDisplay(restDisplay - 1);
        }
      }, 1000);
      return () => clearInterval(restInterval);
    }
  }, [workDisplay,restDisplay]);

  return (
    <Box>
      <p className='rest-number'>{restDisplay }</p>
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
