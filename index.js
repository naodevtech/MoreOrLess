var prompt = require('prompt');
 
var min = 1;
var max = 100;
var random = Math.floor(Math.random() * (max - min)) + min;
var numberSuprise = random;
var count = 10
console.log(`Le nombre mystère est : ${numberSuprise} 🎁`)


function moreOrLess(){
    prompt.start();
    console.log(`Donnez un chiffre entre ${min} et ${max}`)
    prompt.get(['nombre'], (err, result) => {
        if(result.nombre < numberSuprise){
            console.log(`🎯 Vous avez joué le nombre : ${result.nombre}`);
            console.log(" ❌ C'est plus !");
            count--
           counter()
        } else if(result.nombre > numberSuprise){
            console.log(`🎯 Vous avez joué le nombre : ${result.nombre}`);
            console.log("❌ C'est moins !");
            count--
            counter()
        }
        else if(result.nombre == numberSuprise){
            console.log(`🎯 Vous avez joué le nombre : ${result.nombre}`);
            console.log('✅ Bravo! Vous avez trouvé le nombre mystère ! 🎊');
            console.log(`👀 Il vous restait ${count} coups!`);
        }
    });
}

moreOrLess()

function counter(){
    if(count > 0){
        console.log(`Il ne vous reste que ${count} coups!`)
        moreOrLess()
    } 
    else{
        console.log("Vous avez épuisé tous vos coups 😭")
    }
}

