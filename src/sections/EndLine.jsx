export default function EndLine() {
  return (
    <div style={styles.wrap}>
      <p style={styles.text}>It’s not a template mfkers, I built it 😭</p>
    </div>
  );
}

const styles = {
  wrap: {
    width: "100%",
    padding: "10px 16px 20px", // close to footer
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
  },

  text: {
    fontSize: "24px",
    lineHeight: 1.5,
    color: "rgba(0,0,0,0.5)", // 50% opacity
    textAlign: "center",
    margin: 0,
  },
};
