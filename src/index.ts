import Phaser from "phaser";
import config from "./config";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const game: Phaser.Game = new Phaser.Game(config);
console.log(game);