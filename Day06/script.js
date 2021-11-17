const images = document.querySelectorAll('.image')

window.addEventListener('scroll', update)

update()

function update() {
    const windowHeight = window.innerHeight
    
    images.forEach((image, id) => {
        const imageTopPosition = image.getBoundingClientRect().top

        if( (windowHeight * 0.8) > imageTopPosition) {
            image.classList.add("shown")
        } else {
            image.classList.remove("shown")
        }
    })
}