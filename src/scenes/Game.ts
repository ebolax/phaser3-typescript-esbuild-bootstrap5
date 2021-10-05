import Phaser from "phaser";
import { GameData } from "../config";
import VirtualJoystick from "phaser3-rex-plugins/plugins/virtualjoystick.js";

export default class GameScene extends Phaser.Scene
{
    width = 0;
    height = 0
    centerx = 0;
    centery = 0;
    gamedata: GameData = {
        score: 0
    }

    constructor()
    {
        super("GameScene");
    }

    preload(): void
    {
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
        this.centerx = this.width / 2;
        this.centery = this.height / 2;

        // set main assets path
        this.load.path = "assets/";

        // load assets
        this.load.image("endbtn", "images/endbtn.png");
    }

    create(): void
    {
        // create joystick from rex plugins
        const joystick = new VirtualJoystick(this,
            {
                x: this.centerx,
                y: this.height - 120,
                radius: 100
            });
        joystick.enable = true;

        // create end button and go to scene on mouse up
        const btn_end = this.add.image(this.centerx, this.centery - 200, "endbtn");
        btn_end.setInteractive({
            useHandCursor: true
        });
        btn_end.on("pointerup", () =>
        {
            this.gamedata.score = 100;

            this.scene.start("EndScene", this.gamedata); // name from config.ts
        });
    }
}