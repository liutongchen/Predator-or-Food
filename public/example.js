var game = new Phaser.Game(800, 600, Phaser.AUTO, 'n', { preload: preload, create: create, update: update });

function preload () {

    game.load.image('player', 'turtle.png');
    game.load.atlas('seaCreature', 'seaCreatures.png', 'seaCreatures.json');
    game.load.image('coral', 'seabed.png');
    game.load.image('undersea', 'undersea.jpg');
    game.load.image('shark', 'shark.png');
}

var seaCreatures;
var player;
var cursors;
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

    player = game.add.sprite(100, 300, 'player');
    player.scale.setTo(0.1,0.1);
    player.anchor.x = 0.5;

    game.camera.follow(player, Phaser.Camera.FOLLOW_LOCKON, 0.1);

    game.add.image(0, 466, 'coral');

    cursors = game.input.keyboard.createCursorKeys();

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

    prevCamX = game.camera.x;

}
