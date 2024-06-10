// gsap.from("#page2 h1", {
//   scale: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//   },
// });
// gsap.from("#page2 h2", {
//   scale: 0,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#page2 h2",
//     scroller: "body",
//     markers: true,
//     start: "top 50%",
//   },
// });

// gsap.from("#page3 #box", {
//   scale: 0,
//   opacity: 0,
//   rotate: 720,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "#page3 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 60%",
//     end: "top 30%",
//     scrub: 2,
//   },
// });

gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -150%",
    scrub: 2,
    pin: true,
  },
});
