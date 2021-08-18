import Phaser from "phaser";
import VirtualJoystick from 'phaser3-rex-plugins/plugins/virtualjoystick.js';

export default class GameScene extends Phaser.Scene
{
    width = 0;
    height = 0
    centerx = 0;
    centery = 0;

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
        this.load.image("logo", "images/phaser3-logo.png");
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

        // create logo image
        const logo = this.add.image(this.centerx, this.centery - 100, "logo").setOrigin(0.5);
        if (this.width < logo.width) logo.setScale(0.5); // mobile scale

        // tween logo image
        this.tweens.add({
            targets: logo,
            y: {from: logo.y - 50, to: logo.y + 50},
            duration: 1500,
            ease: "Sine.inOut",
            yoyo: true,
            repeat: -1
        });
    }
}
