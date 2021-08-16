import Phaser from "phaser";
import GameScene from "./scenes/Game";

export default {
    type: Phaser.AUTO,
    backgroundColor: "#000000",
    scale: {
        parent: "game", // #game
		mode: Phaser.Scale.RESIZE,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: "100%",
		height: "100%"
	},
    scene: GameScene
};
