import { Sono } from "@next/font/google";

const sonoFont = Sono();

function Box({ children }) {
  return (
    <div className={`box ${sonoFont.className}`}>
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
          display: flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}

export default Box;
