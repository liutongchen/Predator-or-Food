var game = new Phaser.Game(800, 600, Phaser.AUTO, 'n', { preload: preload, create: create, update: update });

function preload () {

    game.load.image('player', 'assets/turtle.png');
    //game.load.atlas('lazer', 'assets/laser.png', 'assets/laser.json');
    game.load.atlas('seaCreature', 'assets/seaCreatures.png', 'assets/seaCreatures.json');
    game.load.image('coral', 'assets/seabed.png');
    game.load.image('undersea', 'assets/undersea.jpg');
    game.load.image('shark', 'assets/shark.png');
}

var seaCreatures;
//var lazers;
var player;
var cursors;
//var fireButton;
//var bulletTime = 0;
var frames;
var prevCamX = 0;

var jellyfish;
var crab;
var greenJellyfish;
var octopus;
var purpleFish;
var seahorse;
var squid;
var stingray;
var flyingfish;

//helper functions
function createJellyFish() {
    //TODO: ADD OTHER KINDS OF CREATURES
    seaCreatures = game.add.group();
    for (var i = 0; i < 6; i++) {
        sprite = seaCreatures.create(120 * i, game.rnd.integerInRange(100, 400), 'seaCreature', 'blueJellyfish');
        sprite.scale.setTo(0.6, 0.6);
    }

    var frameNames = Phaser.Animation.generateFrameNames('blueJellyfish', 0, 24, '', 4);
    seaCreatures.callAll('animations.add', 'animations', 'swim', frameNames, 30, true, false);
    seaCreatures.callAll('play', null, 'swim');
}

function createSeahorse() {
    seaCreatures = game.add.group();
    for (var i = 0; i < 6; i++) {
        sprite = seaCreatures.create(120 * i, game.rnd.integerInRange(200, 500), 'seaCreature', 'seahorse');
        sprite.scale.setTo(0.4, 0.4)
    }

    var frameNames = Phaser.Animation.generateFrameNames('seahorse', 0, 24, '', 4);
    seaCreatures.callAll('animations.add', 'animations', 'swim', frameNames, 30, true, false);
    seaCreatures.callAll('play', null, 'swim');
}

function createShark() {
    shark = game.add.sprite(420, 100, 'shark');
    shark.scale.setTo(0.08,0.08);
}

function create () {

    game.world.setBounds(0, 0, 800*4, 600);

    frames = Phaser.Animation.generateFrameNames('frame', 2, 30, '', 2);
    frames.unshift('frame02');

    game.add.sprite(0, 0, 'undersea');

    createJellyFish();
    createSeahorse();
    createShark();

    //lazers = game.add.group();

    player = game.add.sprite(100, 300, 'player');
    player.scale.setTo(0.1,0.1);
    player.anchor.x = 0.5;

    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1);

    game.add.image(0, 466, 'coral');

    cursors = game.input.keyboard.createCursorKeys();
    //fireButton = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

    prevCamX = game.camera.x;

}

function update () {

    if (cursors.left.isDown)
    {
        player.x -= 8;
        player.scale.x = -0.1;
    }
    else if (cursors.right.isDown)
    {
        player.x += 8;
        player.scale.x = 0.1;
    }

    if (cursors.up.isDown)
    {
        player.y -= 8;
    }
    else if (cursors.down.isDown)
    {
        player.y += 8;
    }

   /* if (fireButton.isDown)
    {
        fireBullet();
    }
*/
    //lazers.forEachAlive(updateBullets, this);

    prevCamX = game.camera.x;

}

/*
function updateBullets (lazer) {

    // if (game.time.now > frameTime)
    // {
    //     frameTime = game.time.now + 500;
    // }
    // else
    // {
    //     return;
    // }

    //  Adjust for camera scrolling
    var camDelta = game.camera.x - prevCamX;
    lazer.x += camDelta;

    if (lazer.animations.frameName !== 'frame30')
    {
        lazer.animations.next();
    }
    else
    {
        if (lazer.scale.x === 1)
        {
            lazer.x += 16;

            if (lazer.x > (game.camera.view.right - 224))
            {
                lazer.kill();
            }
        }
        else
        {
            lazer.x -= 16;

            if (lazer.x < (game.camera.view.left - 224))
            {
                lazer.kill();
            }
        }
    }

}

function fireBullet () {

    if (game.time.now > bulletTime)
    {
        //  Grab the first bullet we can from the pool
        lazer = lazers.getFirstDead(true, player.x + 24 * player.scale.x, player.y + 8, 'lazer');

        lazer.animations.add('fire', frames, 60);
        lazer.animations.frameName = 'frame02';

        lazer.scale.x = player.scale.x;

        if (lazer.scale.x === 1)
        {
            // lazer.anchor.x = 1;
        }
        else
        {
            // lazer.anchor.x = 0;
        }

        //  Lazers start out with a width of 96 and expand over time
        // lazer.crop(new Phaser.Rectangle(244-96, 0, 96, 2), true);

        bulletTime = game.time.now + 250;
    }

}*/
