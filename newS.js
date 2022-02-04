let block1 = document.getElementById('block1')
let block2 = document.getElementById('block2')
let close = document.getElementById('close')
let back = document.getElementById('back')

button2.addEventListener('click', function () {
    block1.className = 'd-none';
    block2.className = 'containerP';

})

close.addEventListener('click', function () {
    block2.className = 'd-none'
    block1.className = 'container'
})

back.addEventListener('click', function (){
    block1.className = 'container'
    block2.className = 'container bText'
})