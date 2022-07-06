import Phaser from "phaser";
import { GameData } from "../config";
import VirtualJoystick from "phaser3-rex-plugins/plugins/virtualjoystick.js";

export default class GameScene extends Phaser.Scene {
    width = 0;
    height = 0;
    centerx = 0;
    centery = 0;
    gamedata: GameData = {
        score: 0
    };

    constructor() {
        super("GameScene");
    }

    preload(): void {
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
        this.centerx = this.width / 2;
        this.centery = this.height / 2;

        // set main assets path
        this.load.path = "assets/";

        // load assets
        this.load.image("end_btn", "images/endbtn.png");
        this.load.image("fullscreen_btn", "images/fullscreen.png");
    }

    create(): void {
        // create joystick from rex plugins
        const joystick = new VirtualJoystick(this, {
            x: this.centerx,
            y: this.height - 120,
            radius: 100
        });
        joystick.enable = true;

        // create end button and go to scene on mouse up
        const btn_end = this.add.image(
            this.centerx,
            this.centery - 200,
            "end_btn"
        );
        btn_end.setInteractive({
            useHandCursor: true
        });
        btn_end.on("pointerup", () => {
            this.gamedata.score = 100;

            this.scene.start("EndScene", this.gamedata); // name from config.ts
        });

        const fullscreen_btn = this.add.image(this.width - 20, 25, "fullscreen_btn").setOrigin(1, 0);
        fullscreen_btn.setInteractive({ useHandCursor: true });
        fullscreen_btn.on("pointerover", () => {
            fullscreen_btn.setTint(0xacacac);
        });
        fullscreen_btn.on("pointerout", () => {
            fullscreen_btn.clearTint();
        });
        fullscreen_btn.on("pointerup", () => {
            this.scale.toggleFullscreen();
        });
    }
}
