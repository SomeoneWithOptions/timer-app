import Box from "./Box";
function SecondsBox() {
  return (
    <Box>
      <p className='seconds-number'>0</p>
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
