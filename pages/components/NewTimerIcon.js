

function NewTimerIcon() {
  return (
    <div className="add-container">
      <img src="/add.png" alt="add icon" />

      <style jsx>{`
       .add-container {
          width: 80px;
          height: 80px;
          position : fixed;
          bottom: 20px;
          right: 20px;
        
          border-radius : 50%;
          box-shadow: var(--shadow-high);
        }
        img {
          width: 100%;
          height: 100%;
          filter: invert(85%) saturate(200%);
          cursor: pointer;
          color : red ; 
        }

        img:hover {
          animation : rotate 1s ease ; 
        }
        
        @keyframes rotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
       

      `}</style>
    </div>
  );
}

export default NewTimerIcon;
