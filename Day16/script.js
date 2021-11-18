const small = document.querySelectorAll('.small');
const big = document.querySelector('.big');
const mainair = document.querySelector('.mainair');
const air = document.querySelectorAll('.air');
const newday = document.querySelector('.newday');

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

newday.addEventListener('click', () => {
    
    air.forEach((air, id2) => {
        air.classList.remove('active')
        mainair.style.height =  98 + "%"
    }) 
})




