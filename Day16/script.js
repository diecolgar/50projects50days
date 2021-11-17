const small = document.querySelectorAll('.small');
const big = document.querySelector('.big');
const mainair = document.querySelector('.mainair');
const air = document.querySelectorAll('.air');

const smalllenght = small.length

big.addEventListener('click', () => {
    console.log('Big')
})

small.forEach((small, id) => {

    small.addEventListener('click', () => {
        air.forEach((air, id2) => {

            if((id) >= id2) {
                air.classList.add('active')
            } else {
                air.classList.remove('active')
            }
        })

        mainair.style.height =  (90 - (id/smalllenght)*100) + "%"
    })

})



