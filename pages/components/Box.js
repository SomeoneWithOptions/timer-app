function Box({ children }) {
  return (
    <div className="box">
      <span>{children}</span>
      <style jsx>{`
        .box {
          margin: 0.5rem;
          background-color: var(--neutral-200);
          border-radius: 1rem;
          height: 200px;
          padding: 1rem;
          box-shadow: var(--shadow);
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default Box;
