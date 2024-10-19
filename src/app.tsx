import { css } from "./css";

export const App = () => {
  return (
    <p
      style={css({
        "--margin": -5,
      })}
    >
      Negative grid doesn't work
    </p>
  );
};
