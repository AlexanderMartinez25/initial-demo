export const DarkLayout = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.56)",
        padding: "10px",
        padding: "10px",
      }}
    >
      <h3>Dark-Layout</h3>
      <div>{children}</div>
    </div>
  );
};
