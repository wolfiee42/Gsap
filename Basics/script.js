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
