import Phaser from "phaser";

export default class GameScene extends Phaser.Scene
{
    width: number = 0;
    height: number = 0
    centerx: number = 0;
    centery: number = 0;

    constructor()
    {
        super("GameScene");
    }

    preload()
    {
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
        this.centerx = this.width / 2;
        this.centery = this.height / 2;

        // set main assets path
        this.load.path = "assets/";

        // load assets
        this.load.image("logo", "images/phaser3-logo.png");
    }

    create()
    {
        const logo = this.add.image(this.centerx, this.centery, "logo").setOrigin(0.5);
        if (this.width < logo.width) logo.setScale(0.5); // mobile scale

        this.tweens.add({
            targets: logo,
            y: {from: logo.y - 100, to: logo.y + 100},
            duration: 1500,
            ease: "Sine.inOut",
            yoyo: true,
            repeat: -1
        });
    }
}
