window.onload = function () {
  document.querySelector("#credit").onchange = function () {
    let graduation_req = 132;
    let acquisition = document.getElementById("credit").value - 0;
    let remaining;
    if (acquisition > 132) {
      remaining = 0;
    } else {
      remaining = graduation_req - acquisition;
    }
    document.getElementById("husoku").innerHTML = remaining;
  };

  console.log(document.getElementById("header").innerText);

  document.getElementById("intro").innerHTML = new Date();

  const introduction = document.querySelector("#intro");

  const keyframes = {
    opacity: [0, 1],
    translate: ["0 50px", 0],
  };
  const options = {
    duration: 2000,
    easing: "ease",
  };
  introduction.animate(keyframes, options);
};
