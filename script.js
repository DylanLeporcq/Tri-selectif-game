let scorept = document.getElementById('scorept');
let clickspt = document.getElementById('clickspt');
let bins = document.getElementById('bins');
let litters = document.getElementById('litters');
let description = document.getElementById('description');
let right_answer = document.getElementById('right_answer');
let wrong_answer = document.getElementById('wrong_answer');
let cache = document.getElementById('cache');
let wanswer = document.getElementById('Wanswer');

score = 0;
scorept.innerHTML=score;

clicks = 0;
clickspt.innerHTML=clicks;

binScore = 0;
rank = 'none';

function randomise () {
    x = 1+Math.floor(Math.random()*23);
    {
        if (x === 1) {
            litters.style.backgroundImage="url(pics/baby.jpg)";
            binScore = 4;
            description.innerHTML='Couche pour bébé (sale)';
        }else if (x === 2) {
            litters.style.backgroundImage="url(pics/beer.png)";
            binScore = 2;
            description.innerHTML='Bouteille de bière';
        }else if (x === 3) {
            litters.style.backgroundImage="url(pics/box.jpg)";
            binScore = 1;
            description.innerHTML='Carton';
        }else if (x === 4) {
            litters.style.backgroundImage="url(pics/can.png)";
            binScore = 1;
            description.innerHTML='Boite de conserve';
        }else if (x === 5) {
            litters.style.backgroundImage="url(pics/deo.png)";
            binScore = 1;
            description.innerHTML='Déodorant';
        }else if (x === 6) {
            litters.style.backgroundImage="url(pics/dust.png)";
            binScore = 4;
            description.innerHTML='Poussières / Cendres';
        }else if (x === 7) {
            litters.style.backgroundImage="url(pics/food.png)";
            binScore = 4;
            description.innerHTML='Restes du repas';
        }else if (x === 8) {
            litters.style.backgroundImage="url(pics/gel.png)";
            binScore = 1;
            description.innerHTML='Gel douche';
        }else if (x === 9) {
            litters.style.backgroundImage="url(pics/glasscleaner.jpg)";
            binScore = 1;
            description.innerHTML='Bouteille de lave-vitre';
        }else if (x === 10) {
            litters.style.backgroundImage="url(pics/hairs.png)";
            binScore = 1;
            description.innerHTML='Bouteille de laque';
        }else if (x === 11) {
            litters.style.backgroundImage="url(pics/juice.png)";
            binScore = 1;
            description.innerHTML='Brique de jus d`orange';
        }else if (x === 12) {
            litters.style.backgroundImage="url(pics/jul.jpg)";
            binScore = 4;
            description.innerHTML='Disque de "musique" merdique';
        }else if (x === 13) {
            litters.style.backgroundImage="url(pics/magazine.jpg)";
            binScore = 3;
            description.innerHTML='Magasines et catalogues';
        }else if (x === 14) {
            litters.style.backgroundImage="url(pics/mayo.png)";
            binScore = 2;
            description.innerHTML='Pot de mayonnaise';
        }else if (x === 15) {
            litters.style.backgroundImage="url(pics/milk_box.png)";
            binScore = 1;
            description.innerHTML='Brique de lait';
        }else if (x === 16) {
            litters.style.backgroundImage="url(pics/milk_glass.png)";
            binScore = 2;
            description.innerHTML='Bouteille de lait';
        }else if (x === 17) {
            litters.style.backgroundImage="url(pics/newspaper.png)";
            binScore = 3;
            description.innerHTML='Journaux';
        }else if (x === 18) {
            litters.style.backgroundImage="url(pics/poop.png)";
            binScore = 4;
            description.innerHTML='Merde';
        }else if (x === 19) {
            litters.style.backgroundImage="url(pics/shampoo.jpg)";
            binScore = 1;
            description.innerHTML='Bouteille de shampoing';
        }else if (x === 20) {
            litters.style.backgroundImage="url(pics/vodka.png)";
            binScore = 2;
            description.innerHTML='Bouteille de vodka';
        }else if (x === 21) {
            litters.style.backgroundImage="url(pics/water.png)";
            binScore = 1;
            description.innerHTML='Bouteille d`eau';
        }else if (x === 22) {
            litters.style.backgroundImage="url(pics/wine.png)";
            binScore = 2;
            description.innerHTML='Bouteille de vin';
        }else if (x === 23) {
            litters.style.backgroundImage="url(pics/yoghurt.jpg)";
            binScore = 4;
            description.innerHTML='Pot de yaourt';
        }
    }
}

function beginGame() {
    document.getElementById('begin').style.display='none';
    document.getElementById('score').style.display='inline-block';
    document.getElementById('clicks').style.display='inline-block';
    bins.style.display='block';
    litters.style.display='inline-block';
    randomise();
}

function rightAnswer() {
    right_answer.style.display='block';
    cache.style.display='block';
    score = score+1;
    scorept.innerHTML = score;
    clicks = clicks+1;
    clickspt.innerHTML = clicks;
    randomise();
    endGame();
}

function wrongAnswer() {
    wrong_answer.style.display='block';
    cache.style.display='block';
    score = score-1;
    scorept.innerHTML = score;
    clicks = clicks+1;
    clickspt.innerHTML = clicks;
    randomise();
    endGame();
}

function yellowBin() {
    {
        if (binScore === 1) {
            rightAnswer();
        } else {
            wrongAnswer();
            wanswer.innerHTML='La poubelle jaune contient le carton, la plastique, les emballages, l`aluminium, [...], tout ce qui est recyclable.';
        }
    }
}

function blueBin() {
    {
        if (binScore === 3) {
            rightAnswer();
        } else {
            wrongAnswer();
            wanswer.innerHTML='La poubelle bleue contient tout ce qui concerne les journaux, les prospectus , ...';
        }
    }
}

function greenBin() {
    {
        if (binScore === 2) {
            rightAnswer();
        } else {
            wrongAnswer();
            wanswer.innerHTML='La poubelle verte comprend tout les déchets en verre comme les bouteilles, les bocaux, [...]. Bordel, vert et verre, tu trouves pas que ça se ressemble ?';
        }
    }
}

function brownBin() {
    {
        if (binScore === 4) {
            rightAnswer();
        } else {
            wrongAnswer();
            wanswer.innerHTML='La poubelle marron (ou poubelle ménagère) contient tout les déchets de la maison et les non recyclables comme la nourriture, la saleté, et autre petits emballages.';

        }
    }
}

function endGame() {
    {
        if (clicks === 10) {
            right_answer.style.display='none';
            wrong_answer.style.display='none';
            cache.style.display='none';
            document.getElementById('consigne').style.display='none';
            document.getElementById('begin').style.display='none';
            document.getElementById('score').style.display='none';
            document.getElementById('clicks').style.display='none';
            bins.style.display='none';
            litters.style.display='none';
            document.getElementById('endScore').style.display='block';
            guessRank();
            document.getElementById('result').innerHTML=
                'Fin du game. Vous avez trié dix déchets aléatoire pour un ' +
                'total de ' + score + ' points. Ce qui vous attribue au rang de ' + rank + '. Tu peux toujours réessayer si tu' +
                ' n`est pas satisfait de ton score.';
        }
    }
}

function guessRank() {
    {
        if (score<!0) {
            rank='DECHET HUMAIN';
        }else if (score===0) {
            rank='SOUILLON';
        }else if (score >= 1 && score<=4) {
            rank='CRADO';
        }else if (score >= 5 && score<=7) {
            rank='ECOLO';
        }else if (score >= 8 && score<=9) {
            rank='HOMME DE LA NATURE';
        }else if (score === 10) {
            rank='MAITRE DU RECYCLAGE';
        }
    }
}

function retryGame() {
    document.getElementById('endScore').style.display='none';
    document.getElementById('begin').style.display='none';
    document.getElementById('score').style.display='inline-block';
    document.getElementById('clicks').style.display='inline-block';
    bins.style.display='block';
    litters.style.display='inline-block';
    clicks=0;
    clickspt.innerHTML = clicks;
    score=0;
    scorept.innerHTML = score;
    randomise();
}

function nextQuestion() {
    right_answer.style.display='none';
    wrong_answer.style.display='none';
    cache.style.display='none';
}