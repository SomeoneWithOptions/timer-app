function Button({ children, color, fontColor }) {
  return (
    <button>
      {children}

      <style jsx>{`
        button {
          background-color: var(--neutral-200);
          color: black;
          padding: 0.8rem 1.5rem;
          border: none;
          border-radius: 1rem;
          font-size: 1.3rem;
          box-shadow: var(--shadow);
          border-bottom: 2px solid var(--primary);
          font-family: 'Rubik', sans-serif;
          font-weight: 200;
        }

        button:hover {
          border-top: 2px solid var(--primary);
        }
      `}</style>
    </button>
  );
}

export default Button;
