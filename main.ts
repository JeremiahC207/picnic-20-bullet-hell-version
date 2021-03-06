namespace SpriteKind {
    export const Heart = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    projectile.destroy()
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Heart, function (sprite, otherSprite) {
    info.changeLifeBy(1)
    heart.destroy(effects.spray, 500)
})
info.onLifeZero(function () {
    Cherry.destroy(effects.spray, 500)
    pause(1000)
    info.changeScoreBy(-1)
    game.over(false)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    projectile.destroy(effects.halo, 500)
})
let big_boi: Sprite = null
let project_out = 0
let heart: Sprite = null
let projectile: Sprite = null
let Cherry: Sprite = null
Cherry = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Player)
Cherry.setPosition(26, 45)
controller.moveSprite(Cherry)
let Chicken = sprites.create(img`
    ..........bbbbbb.....f..........
    .......bbb444444bb..ff..........
    .....2224444ddd444b.f...........
    ....242224444dddd44e............
    ...244242444422ddd4be.......f...
    ..244244244442444d44be...fff....
    .2b442444244424444d4be..ff......
    .2b44244442442444444bbef........
    2bbb2444442424444444bbe.........
    2bbb2444442442444444bbe.........
    2bb424444424424444444bbe........
    2bb4244444424244444444be...ff...
    2bb42444444244244444444e.ff.ff..
    2bbb244bbb4244244444444eff......
    22bbb244bb42b442444444bef.......
    .2bbb2b44bb2b44424444bbe........
    .22bbb2bbbb42bbb424442bbe.......
    ..eeebb222bb42bbb422224be.......
    .f.eeeeebb222b2244b4424be.......
    .f...eeeeee22222222224bbe.......
    ff....feeeee222bb44bbbbee.......
    f....ff.....ef22bbbbbbbec.......
    f...ff......f.ee2bbbbeebdb......
    f...f......ff....eeeeecdddb.2...
    f...f......f...........cd21bb2b.
    f...f......f............cd2112bb
    ....f.....ff.............b21221c
    ....f.....ff.............c12221c
    .........................cd222c.
    .........................cb2122.
    ..........................c2c...
    ................................
    `, SpriteKind.Enemy)
Chicken.setPosition(120, 80)
pause(1000)
Chicken.say("Hello", 2000)
pause(2000)
Chicken.say("I see you there", 2000)
pause(2000)
Chicken.say("Are you sure you want to be here", 2000)
pause(2000)
Chicken.say(".........", 5000)
pause(5000)
Chicken.say("Well you asked for it", 2000)
info.setLife(3)
let Speech_finnished = 1
forever(function () {
    pause(5000)
    heart = sprites.create(assets.image`Heart`, SpriteKind.Heart)
})
forever(function () {
    project_out = 1
    projectile = sprites.createProjectileFromSprite(img`
        . . 2 2 b b b b b . . . . . . . 
        . 2 b 4 4 4 4 4 4 b . . . . . . 
        2 2 4 4 4 4 d d 4 4 b . . . . . 
        2 b 4 4 4 4 4 4 d 4 b . . . . . 
        2 b 4 4 4 4 4 4 4 d 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 b . . . . 
        2 b 4 4 4 4 4 4 4 4 4 e . . . . 
        2 2 b 4 4 4 4 4 4 4 b e . . . . 
        . 2 b b b 4 4 4 b b b e . . . . 
        . . e b b b b b b b e e . . . . 
        . . . e e b 4 4 b e e e b . . . 
        . . . . . e e e e e e b d b b . 
        . . . . . . . . . . . b 1 1 1 b 
        . . . . . . . . . . . c 1 d d b 
        . . . . . . . . . . . c 1 b c . 
        . . . . . . . . . . . . c c . . 
        `, Chicken, 50, 50)
    projectile.follow(Cherry, 67)
    pause(1000)
    project_out = 0
})
forever(function () {
    pause(5000)
    for (let index = 0; index < 5; index++) {
        big_boi = sprites.createProjectileFromSprite(img`
            ..........bbbbbb................
            .......bbb444444bb..............
            .....2244444ddd444b.............
            ....244444444dddd44e............
            ...244444444444ddd4be...........
            ..244444444444444d44be..........
            .2b444444444444444d4be..........
            .2b44444444444444444bbe.........
            2bbb4444444444444444bbe.........
            2bbb4444444444444444bbe.........
            2bb4b4444444444444444bbe........
            2bb4444444444444444444be........
            2bb44444444444444444444e........
            2bbb444bbb4444444444444e........
            22bbb444bb4bb444444444be........
            .2bbbbb44bbbb44444444bbe........
            .22bbbbbbbb44bbb444444bbe.......
            ..eeebbbbbbb44bbb444444be.......
            ...eeeeebbbbbbbb44b4444be.......
            .....eeeeee222bb44bbb4bbe.......
            .......eeeee222bb44bbbbee.......
            ............e222bbbbbbbec.......
            ..............ee2bbbbeebdb......
            .................eeeeecdddb.....
            .......................cd11bbbb.
            ........................cd111dbb
            .........................b11111c
            .........................c11dd1c
            .........................cd1dbc.
            .........................cb11c..
            ..........................ccc...
            ................................
            `, Chicken, -1009999999, -1009999999)
        big_boi = sprites.createProjectileFromSprite(img`
            ..........bbbbbb................
            .......bbb444444bb..............
            .....2244444ddd444b.............
            ....244444444dddd44e............
            ...244444444444ddd4be...........
            ..244444444444444d44be..........
            .2b444444444444444d4be..........
            .2b44444444444444444bbe.........
            2bbb4444444444444444bbe.........
            2bbb4444444444444444bbe.........
            2bb4b4444444444444444bbe........
            2bb4444444444444444444be........
            2bb44444444444444444444e........
            2bbb444bbb4444444444444e........
            22bbb444bb4bb444444444be........
            .2bbbbb44bbbb44444444bbe........
            .22bbbbbbbb44bbb444444bbe.......
            ..eeebbbbbbb44bbb444444be.......
            ...eeeeebbbbbbbb44b4444be.......
            .....eeeeee222bb44bbb4bbe.......
            .......eeeee222bb44bbbbee.......
            ............e222bbbbbbbec.......
            ..............ee2bbbbeebdb......
            .................eeeeecdddb.....
            .......................cd11bbbb.
            ........................cd111dbb
            .........................b11111c
            .........................c11dd1c
            .........................cd1dbc.
            .........................cb11c..
            ..........................ccc...
            ................................
            `, Chicken, -1009999999, -1009999999)
        big_boi = sprites.createProjectileFromSprite(img`
            ..........bbbbbb................
            .......bbb444444bb..............
            .....2244444ddd444b.............
            ....244444444dddd44e............
            ...244444444444ddd4be...........
            ..244444444444444d44be..........
            .2b444444444444444d4be..........
            .2b44444444444444444bbe.........
            2bbb4444444444444444bbe.........
            2bbb4444444444444444bbe.........
            2bb4b4444444444444444bbe........
            2bb4444444444444444444be........
            2bb44444444444444444444e........
            2bbb444bbb4444444444444e........
            22bbb444bb4bb444444444be........
            .2bbbbb44bbbb44444444bbe........
            .22bbbbbbbb44bbb444444bbe.......
            ..eeebbbbbbb44bbb444444be.......
            ...eeeeebbbbbbbb44b4444be.......
            .....eeeeee222bb44bbb4bbe.......
            .......eeeee222bb44bbbbee.......
            ............e222bbbbbbbec.......
            ..............ee2bbbbeebdb......
            .................eeeeecdddb.....
            .......................cd11bbbb.
            ........................cd111dbb
            .........................b11111c
            .........................c11dd1c
            .........................cd1dbc.
            .........................cb11c..
            ..........................ccc...
            ................................
            `, Chicken, -1009999999, -1009999999)
    }
    pause(5000)
})
forever(function () {
    if (project_out == 1) {
        pause(2000)
        projectile.destroy()
    }
})
forever(function () {
    pause(1000)
    info.changeScoreBy(1)
})
