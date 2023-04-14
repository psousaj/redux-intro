var logo = document.getElementById("svg2");
var stroke = document.getElementById("svg1");
var redu = document.getElementById("redu");
var redu_vetor = document.getElementById("redu_vetor");
const before = document.querySelector(".wrapper_before");
var nome = document.getElementById("name");

function show() {
  out(logo);
  out(redu);
  out(nome);
  // out(before);

  dynamics.setTimeout(out_animate, 1600);
  dynamics.setTimeout(enter, 1700);
  dynamics.setTimeout(enter_name, 2200);
}

function slide() {
  dynamics.setTimeout(out, 2525);
  dynamics.animate(
    [logo, stroke],
    {
      translateX: 230,
    },
    {
      type: dynamics.easeOut,
      duration: 2525,
      friction: 37,
    }
  );
}

function enter(el = [logo, redu]) {
  dynamics.animate(el, {
    opacity: 1,
  });
}
function enter_name(el = nome) {
  dynamics.animate(
    el,
    {
      opacity: 1,
    },
    {
      duration: 800,
    }
  );
}
function lights(el = before) {
  dynamics.animate(
    el,
    {
      opacity: 1,
    },
    {
      duration: 600,
    }
  );
}

function setAnimation(el = nome, animation = myAnim, duration = 1.5) {
  el.style.animation = `${animation} 0.5s linear 0s 1 normal none;`;
  el.style.opacity = 1;
}

function out_animate(el = [stroke, redu_vetor]) {
  dynamics.animate(el, {
    opacity: 0,
  });
}

function out(el) {
  window.addEventListener("DOMContentLoaded", () => {
    el.style.opacity = 0;
  });
}

show();
