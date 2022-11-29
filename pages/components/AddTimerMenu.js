import { useEffect } from "react";
import StartButton from "./StartButton";
import StopButton from "./StopButton";

function AddTimerMenu({ menuIsVisible }) {

 

  return (
    <div className={menuIsVisible ? "animationIn main" : "animationOut main"}>
      <div className='work input'>
        <label htmlFor='work-input'>Work </label>
        <input type='number' id='work-input' />
      </div>
      <div className='rest input'>
        <label htmlFor='rest-input'>Rest </label>
        <input type='number' id='rest-input' />
      </div>
      <div className='minutes input'>
        <label htmlFor='minutes-input'>Intervals </label>
        <input type='number' id='rest-input' />
      </div>
      <div className='button-container'>
        <StartButton />
        <StopButton />
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;

          width: 300px;
          height: 400px;
          position: fixed;
          right: 20px;
          bottom: 120px;

          border-radius: 1rem;
          background-color: var(--secondary);
          box-shadow: var(--shadow);

          font-size: 3rem;
          color: var(--neutral-200);
          opacity: 0;
        }

        .button-container {
          margin: 0 0.5rem;
          width: 100%;

          display: flex;
          justify-content: space-evenly;
        }

        input {
          background-color: var(--neutral-200);
          border: none;
          outline: none;
          border-radius: 1rem;
          width: 80px;
          font-size: 2.5rem;
          text-align: center;
          border-bottom: 2px solid var(--primary);
          box-shadow: var(--shadow);
          font-family: "Rubik", sans-serif;
          font-weight: 200;
        
        }

        .rest, .minutes, .work {
          padding : 1rem;
          display: flex;
          width: 100%;
          // border : solid 1px red;
          justify-content: space-between;
        }
      `}</style>
    </div>
  );
}

export default AddTimerMenu;
