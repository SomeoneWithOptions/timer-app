function Box({ children }) {
  return (
    <div className="box">
      <p>{children}</p>
      <style jsx>{`
        .box {
          border: solid 1px var(--neutral-200);
          margin: 0.5rem;
          background-color: var(--neutral-200);
          border-radius: 1rem;
          height: 250px;
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
