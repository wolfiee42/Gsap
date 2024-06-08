var initialPath = `M 10 250 Q 950 250 1880 250`;

var finalPath = `M 10 250 Q 950 250 1880 250`;

const string = document.querySelector("#string");

string.addEventListener("mousemove", (dets) => {
  path = `M 10 250 Q ${dets.x} ${dets.y} 1880 250`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power3.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: finalPath },
    duration: 0.5,
    ease: "elastic.out(1,0.2)",
  });
});
