import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const spring = { damping: 28, stiffness: 120, mass: 1.4 };

export default function TiltedCard({
  imageSrc,
  altText = "Work image",
  captionText = "",
  rotateAmplitude = 14,
  scaleOnHover = 1.08,
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(0, spring);
  const rotateY = useSpring(0, spring);
  const scale = useSpring(1, spring);
  const opacity = useSpring(0, spring);

  const [lastY, setLastY] = useState(0);

  function onMove(e) {
    if (!ref.current || window.innerWidth < 900) return;

    const r = ref.current.getBoundingClientRect();
    const ox = e.clientX - r.left - r.width / 2;
    const oy = e.clientY - r.top - r.height / 2;

    rotateX.set((-oy / r.height) * rotateAmplitude);
    rotateY.set((ox / r.width) * rotateAmplitude);

    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);

    setLastY(oy);
  }

  function onEnter() {
    if (window.innerWidth < 900) return;
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function onLeave() {
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    opacity.set(0);
  }

  return (
    <figure
      ref={ref}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={styles.card}
    >
      <motion.div
        style={{
          ...styles.inner,
          rotateX,
          rotateY,
          scale,
        }}
      >
        <img src={imageSrc} alt={altText} style={styles.image} />
      </motion.div>

      {captionText && (
        <motion.figcaption style={{ ...styles.caption, x, y, opacity }}>
          {captionText}
        </motion.figcaption>
      )}
    </figure>
  );
}

const styles = {
  card: {
    width: "100%",
    aspectRatio: "1 / 1",
    perspective: "900px",
    position: "relative",
  },

  inner: {
    width: "100%",
    height: "100%",
    borderRadius: "18px",
    overflow: "hidden",
    transformStyle: "preserve-3d",
    background: "#000",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  caption: {
    position: "absolute",
    top: 0,
    left: 0,
    background: "#fff",
    color: "#000",
    fontSize: "11px",
    padding: "4px 8px",
    borderRadius: "6px",
    pointerEvents: "none",
  },
};
