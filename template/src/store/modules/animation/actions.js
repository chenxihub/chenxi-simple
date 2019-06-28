import {RIGHTLAYOUTANIME} from "../../mutation-types";
import anime from "animejs";

export function set({commit}, {data}) {
  commit(RIGHTLAYOUTANIME, {data});
}

export function layoutTransformByX({state}, {el, x}) { // eslint-disable-line
  anime({
    targets: el,
    translateX: x,
    easing: "easeInOutQuad",
    duration: 500,
  });
}
