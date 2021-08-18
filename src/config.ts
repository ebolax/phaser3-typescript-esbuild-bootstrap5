import Phaser from "phaser";
import GameScene from "./scenes/Game";
import VirtualJoystickPlugin from "phaser3-rex-plugins/plugins/virtualjoystick-plugin.js";

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
    plugins: {
        global: [{
            key: 'rexVirtualJoystick',
            plugin: VirtualJoystickPlugin,
            start: true
        }]
    },
    scene: GameScene
};
