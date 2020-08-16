const randNumber1 = Math.floor(Math.random()*6)+1;
console.log(randNumber1);

const diceNum = `dice$(randNumber1).png`
console.log(diceNum);

const diceImg = `images/$(diceNum)`;
console.log(diceImg);

const image = document.querySelector('.img1');
image.setAttribute("src" ,diceImg);

//dice 2

const randNumber2 = Math.floor(Math.random()*6)+1;
console.log(randNumber2);

const diceNum2 = `dice$(randNumber2).png`
console.log(diceNum2);

const diceImg2= `images/$(diceNum2)`;
console.log(diceImg2);

const image2= document.querySelector('.img2');
image2.setAttribute("src" ,diceImg2);