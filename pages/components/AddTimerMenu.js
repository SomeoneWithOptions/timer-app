function AddTimerMenu({ menuIsVisible }) {
  return (
    <div className={menuIsVisible ? "animationIn" : "animationOut"}>
      Timer
      <style jsx>{`
        div {
          display: flex;
          align-items: center;
          justify-content: center;

          width: 200px;
          height: 150px;
          position: fixed;
          right: 20px;
          bottom: 120px;

          border-radius: 1rem;
          background-color: var(--secondary);
          box-shadow: var(--shadow);

          font-size: 3rem;
          color: var(--neutral-200);
        }

        .animationOut {
          animation: slideOut 0.5s ease forwards;
        }

        .animationIn {
          animation: slideIn 0.5s ease forwards;
        }

        @keyframes slideIn {
          0% {
            transform: translateX(100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0%);
            opacity: 1;
          }
        }
        @keyframes slideOut {
          0% {
            transform: translateX(0%);
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}

export default AddTimerMenu;
