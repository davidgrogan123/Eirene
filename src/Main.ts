const canvas: HTMLCanvasElement  = document.getElementById("gameCanvas") as HTMLCanvasElement;
const context = canvas.getContext("2d")
canvas.width = 800
canvas.height = 3 * canvas.width / 4

let physicsSystem = new PhysicsSystemImpl(9.8 /* The gravity amount */);
let renderSystem = new RenderSystem();
let userInputSystem = new UserInputSystem();

let game = new Game(physicsSystem, renderSystem, userInputSystem);

window.onload = function() {
  if (context) {
    setInterval(game.onFrame, 1000)
  }
}