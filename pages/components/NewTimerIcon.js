import Image from "next/image";
import { useEffect, useRef } from "react";

function NewTimerIcon({ setMenuIsVisible }) {
  const buttonRef = useRef(null);


  const toggleMenu = () => {
    setMenuIsVisible((p) => !p);
    buttonRef.current.blur();
  };

  return (
    <div className='add-container'>
      <img src='/add.png' alt='add icon' onClick={toggleMenu} ref={buttonRef} />

      <style jsx>{`
        .add-container {
          width: 80px;
          height: 80px;
          position: fixed;
          bottom: 20px;
          right: 20px;

          border-radius: 50%;
          box-shadow: var(--shadow-high);
        }
        img {
          width: 100%;
          height: 100%;
          filter: invert(90%) sepia(8%) saturate(577%) hue-rotate(352deg)
            brightness(107%) contrast(103%);
          cursor: pointer;
          color: red;
          border-radius: 50%;
          background-color: transparent;
        }

        img:hover {
          animation: rotate 1s ease;
          border-radius: 50%;
          background-color: transparent;
        }
      `}</style>
    </div>
  );
}

export default NewTimerIcon;
