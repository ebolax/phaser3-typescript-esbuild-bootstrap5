import Phaser from "phaser";
import { GameData } from "../config";

export default class GameScene extends Phaser.Scene
{
    width = 0;
    height = 0
    centerx = 0;
    centery = 0;
    gamedata?: GameData;

    constructor()
    {
        super("EndScene");
    }

    init(data: GameData): void
    {
        console.log("init", data);
        this.gamedata = data;
    }

    preload(): void
    {
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
        this.centerx = this.width / 2;
        this.centery = this.height / 2;

        // set main assets path
        this.load.path = "assets/";
    }

    create(): void
    {
        // create text
        const txt = this.add.text(this.centerx, this.centery, "Your Score: " + this.gamedata?.score, {
            fontFamily: "Open Sans",
            fontSize: "20px",
            fontStyle: "bold"
        });
        txt.setOrigin(0.5);
    }
}