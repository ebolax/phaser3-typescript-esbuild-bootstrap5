import Phaser from "phaser";
import IntroScene from "./scenes/Intro";
import GameScene from "./scenes/Game";
import EndScene from "./scenes/End";
import VirtualJoystickPlugin from "phaser3-rex-plugins/plugins/virtualjoystick-plugin.js";

export default {
    type: Phaser.AUTO,
    backgroundColor: "#000000",
    scale: {
        parent: "game", // #game
        mode: Phaser.Scale.ScaleModes.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080,
        resizeInterval: 250,
        fullscreenTarget: "gamecontainer"
    },
    plugins: {
        global: [
            {
                key: "rexVirtualJoystick",
                plugin: VirtualJoystickPlugin,
                start: true
            }
        ]
    },
    scene: [IntroScene, GameScene, EndScene]
};

export type GameData = {
    score: number;
};
