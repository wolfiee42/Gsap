gsap.from("#page2 h1", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 h1",
    scroller: "body",
    markers: true,
    start: "top 60%",
  },
});
gsap.from("#page2 h2", {
  scale: 0,
  duration: 1,
  scrollTrigger: {
    trigger: "#page2 h2",
    scroller: "body",
    markers: true,
    start: "top 50%",
  },
});
