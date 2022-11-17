import { GiftsController } from "./Controllers/giftsController.js";

class App {
  giftsController = new GiftsController()
}

window["app"] = new App();
