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
          font-size: 1.2rem;
          box-shadow: var(--shadow);
          border-bottom: 2px solid var(--primary);
        }

        button:hover {
          border-top: 2px solid var(--primary);
        }
      `}</style>
    </button>
  );
}

export default Button;
