// export default function VideoSection() {
//   return (
//     <section style={styles.section} id="video">
//       <div style={styles.box}>
//         {/* VIDEO */}
//         <div style={styles.videoOuter}>
//           <div style={styles.videoWrap}>
//             <iframe
//               src="https://www.youtube.com/embed/zVQ1FA_ZR8M"
//               title="Just a career shift and a random video"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//               referrerPolicy="strict-origin-when-cross-origin"
//               allowFullScreen
//               style={styles.iframe}
//             />
//           </div>
//         </div>

//         {/* CAPTION */}
//         <p style={styles.caption}>
//           The Most <span style={styles.emphasis}>Funniest</span> Guy On Earth
//         </p>
//       </div>
//     </section>
//   );
// }

// /* ---------------- STYLES ---------------- */

// const styles = {
//   section: {
//     margin: "48px 0",
//   },

//   box: {
//     margin: "0 16px",
//     width: "calc(100vw - 32px)",
//     maxWidth: "1400px",
//     marginInline: "auto",
//     background: "#F3F3F6",
//     borderRadius: "32px",
//     padding: "clamp(20px, 4vw, 56px)",
//     border: "6px solid #f2f2f5",
//   },

//   /* centers the video */
//   videoOuter: {
//     display: "flex",
//     justifyContent: "center",
//   },

//   /* actual video size */
//   videoWrap: {
//     width: "100%",
//     maxWidth: "1000px", // 👈 THIS makes it feel smaller
//     aspectRatio: "16 / 9",
//     borderRadius: "20px",
//     overflow: "hidden",
//     background: "#000",
//   },

//   iframe: {
//     width: "100%",
//     height: "100%",
//     border: "none",
//   },

//   caption: {
//     marginTop: "clamp(18px, 3vw, 28px)",
//     textAlign: "center",
//     fontSize: "clamp(18px, 3vw, 30px)",
//     fontWeight: 400,
//     color: "#9CA3AF",
//   },

//   emphasis: {
//     color: "#111",
//     fontWeight: 500,
//   },
// };
