gsap.to("#box1", {
  x: 1200,
  delay: 1,
  duration: 1.5,
  borderRadius: "50%",
  rotate: 360,
  backgroundColor: "yellow",
  scale: 0.5,
});

gsap.from("h1", {
  y: 40,
  opacity: 0,
  delay: 1,
  duration: 0.5,
  stagger: 1,
});

gsap.to("#box", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 260,
  repeat: -1,
  yoyo: true,
  borderRadius: "50%",
});

// without Timeline

// gsap.to("#box4", {
//   x: 1500,
//   rotate: 360,
//   duration: 1.5,
//   delay: 1,
// });

// gsap.to("#box5", {
//   x: 1500,
//   borderRadius: "50%",
//   duration: 1.5,
//   delay: 4,
// });

// gsap.to("#box6", {
//   x: 1500,
//   rotate: -360,
//   duration: 1.5,
//   delay: 2.5,
// });

// navigation bar
const tl = gsap.timeline();

tl.from("h2", {
  y: -20,
  duration: 1,
  delay: 0.3,
  opacity: 0,
});

tl.from("h4", {
  y: -20,
  duration: 1,
  opacity: 0,
  stagger: 0.3,
});

tl.from("h1", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  scale: 0.2,
});
// with timeline
// const timeline = gsap.timeline();

// timeline.to("#box4", {
//   x: 1500,
//   duration: 1.5,
//   delay: 1,
//   rotate: 360,
// });

// timeline.to("#box5", {
//   x: 1500,
//   duration: 1.5,
//   rotate: 360,
// });

// timeline.to("#box6", {
//   x: 1500,
//   duration: 1.5,
//   rotate: 360,
// });
