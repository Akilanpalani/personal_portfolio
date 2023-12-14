import { Html, useProgress } from "react";

const Loader = () => {
  const { progress } = useProgress();

  return (
    <Html>
      <span className="loader" style={{ width: `${progress}%` }}></span>
      <p
        style={{
          fontSize: 14,
          color: "#f1f1f1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
