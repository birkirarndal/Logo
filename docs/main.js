"use strict"
let candle = document.getElementById("candle");


let animation = anime({
    targets: '.flame',
    d: [
      {value: ["M50 25 C 50 36 73 36 73 25 L 70 10 C 70 5 60 0 55 10 L 50 26",
      "M50 25 C 50 36 73 36 73 25 L 65 10 C 60 5 50 0 50 10 L 50 26"]
    },
    {value: "M50 25 C 50 36 73 36 73 25 L 70 7 C 70 5 65 0 60 5 L 50 26"},
    {value: "M50 25 C 50 36 73 36 73 25 L 65 10 C 60 5 60 0 53 10 L 50 26"},
    {value: "M50 25 C 50 36 73 36 73 25 L 70 10 C 70 5 60 0 55 10 L 50 26"},
    ],
    easing: 'linear',
    autoplay: false,
    direction: 'alternate',
    duration: 3000,
    loop: true
});

candle.onmouseenter = animation.play;
candle.onmouseleave = animation.pause;
