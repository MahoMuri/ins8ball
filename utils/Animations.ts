import anime from "animejs";

export class Animations {
  static shake() {
    return anime({
      targets: ".eightball",
      translateX: [0, -40, 40, 0],
      direction: "alternate",
      duration: 100,
      loop: true,
    });
  }
}
