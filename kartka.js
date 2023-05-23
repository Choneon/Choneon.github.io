import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";

kaboom();

loadSprite("kartka","kartka.sw.png")
loadSprite("postac","Kartkaswiatecznapostac.png")

loadSound("muzyka","cicha_noc.mp3")

add([
    sprite("kartka")
])

const mikolaj = add([
    sprite("postac"),
    pos (0,0)
])

let wprawo = true

mikolaj.onUpdate (() => {

    if(wprawo && mikolaj.pos.x < 600)
mikolaj.pos.x += 1

else if(!wprawo && mikolaj.pos.x >50)
mikolaj.pos.x -= 1

else wprawo ^= true

})

onMouseRelease(()=>play("muzyka"))