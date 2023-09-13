//console.log(image)
const image = document.querySelector('img');


const toss = document.querySelector('.bbb')
console.log(toss)

let showdice = document.querySelector('.toss');
//  showdice.classList.add('showdice')
toss.addEventListener('click',()=>{
  let tossing = Math.trunc(Math.random()*6 +1);
console.log(tossing)
//image.classList.remove('showdice')
    image.src =`dice-${tossing}.png`;
    console.log('hjjnnnhas',image.src);

})

