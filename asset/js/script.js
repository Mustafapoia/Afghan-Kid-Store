var card = document.querySelector('#card')
var img1 = document.querySelector('#one')
var img2 = document.querySelector('#two')


card.addEventListener('mouseover',(e)=>{
    img1.style.display = 'none'
    img2.style.display = 'block'
})
card.addEventListener('mouseout',(e)=>{
    img1.style.display = 'block'
    img2.style.display = 'none'
})

