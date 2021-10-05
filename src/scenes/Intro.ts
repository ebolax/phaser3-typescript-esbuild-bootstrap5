import Phaser from "phaser";

export default class GameScene extends Phaser.Scene
{
    width = 0;
    height = 0
    centerx = 0;
    centery = 0;
    gamedata = {
        score: 0
    };

    constructor()
    {
        super("IntroScene");
    }

    preload(): void
    {
        this.width = this.cameras.main.width;
        this.height = this.cameras.main.height;
        this.centerx = this.width / 2;
        this.centery = this.height / 2;

        // PRELOADER
        const progressBar = this.add.graphics();
        const progressBox = this.add.graphics();
        progressBox.fillStyle(0x222222, 0.8);
        progressBox.fillRect(this.centerx - 100, this.centery - 20, 200, 40);

        const loadingText = this.make.text({
            x: this.centerx,
            y: this.centery - 50,
            text: "Loading...",
            style: {
                font: "20px Open Sans"
            }
        });
        loadingText.setOrigin(0.5);

        const percentText = this.make.text({
            x: this.centerx,
            y: this.centery,
            text: "0%",
            style: {
                font: "18px monospace"
            }
        });
        percentText.setOrigin(0.5);

        const assetText = this.make.text({
            x: this.centerx,
            y: this.centery + 50,
            text: "",
            style: {
                font: "18px monospace"
            }
        });
        assetText.setOrigin(0.5);

        this.load.on("progress", (value: number) =>
        {
            percentText.setText(Math.round(value * 100) + "%");
            progressBar.clear();
            progressBar.fillStyle(0xffffff, 1);
            progressBar.fillRect(this.centerx - 90, this.centery - 20 + 5, 180 * value, 30);
        });

        this.load.on("fileprogress", (file: Phaser.Loader.File) =>
        {
            assetText.setText("Loading asset: " + file.key);
        });

        this.load.on("complete", () =>
        {
            progressBar.destroy();
            progressBox.destroy();
            loadingText.destroy();
            percentText.destroy();
            assetText.destroy();
        });

        // set main assets path
        this.load.path = "assets/";

        // load assets
        this.load.image("logo", "images/phaser3-logo.png");
        this.load.image("startbtn", "images/startbtn.png");
    }

    create(): void
    {
        // create logo image
        const logo = this.add.image(this.centerx, this.centery - 100, "logo").setOrigin(0.5);
        if (this.width < logo.width) logo.setScale(0.5); // mobile scale

        // tween logo image
        this.tweens.add({
            targets: logo,
            y: { from: logo.y - 50, to: logo.y + 50 },
            duration: 1500,
            ease: "Sine.inOut",
            yoyo: true,
            repeat: -1
        });

        // create start button and go to scene on mouse up
        const btn_start = this.add.image(this.centerx, this.centery + 200, "startbtn");
        btn_start.setInteractive({
            useHandCursor: true
        });
        btn_start.on("pointerup", () =>
        {
            this.scene.start("GameScene"); // name from config.ts
        });
    }
}