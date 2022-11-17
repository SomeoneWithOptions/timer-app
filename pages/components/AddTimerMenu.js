import StartButton from "./StartButton";
import StopButton from "./StopButton";

function AddTimerMenu({ menuIsVisible }) {
  return (
    <div className={menuIsVisible ? "animationIn main" : "animationOut main"}>
      <div className='minutes input'>
        <label htmlFor='minutes-input'>Minutes </label>
        <input type='number' id='minutes-input' />
      </div>
      <div className='seconds input'>
        <label htmlFor='minutes-input'>Seconds </label>
        <input type='number' id='minutes-input' />
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

        div {
          // border : 1px solid red ;
        }

        input {
          background-color: var(--neutral-200);
          border: none;
          outline: none;
          border-radius: 1rem;
          width: 80px;
          font-size: 3rem;
          text-align: center;
          border-bottom: 2px solid var(--primary);
          box-shadow: var(--shadow);
          font-family: "Rubik", sans-serif;
          font-weight: 200;
        }
      `}</style>
    </div>
  );
}

export default AddTimerMenu;
