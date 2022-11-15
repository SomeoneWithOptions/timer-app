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
          height: 200px;
          padding: 1rem;
          box-shadow: var(--shadow);
        }
      `}</style>
    </div>
  );
}

export default Box;
