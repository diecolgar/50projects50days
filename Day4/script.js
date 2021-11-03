// GENERAL
    const body = document.querySelector("body")
    const separator = document.querySelector(".separator")
    const header = document.querySelectorAll(".header")
    const title = document.querySelector(".title")
// PAGE 1
    const page1 = document.querySelector(".one")
    const separator1 = document.querySelector(".uno")
    const clicker = document.querySelector(".clicker")
    const minipeopleheader = document.querySelector(".minipeopleheader")
    const minipeoplespan = document.querySelectorAll(".minipeoplespan")
    const option = document.querySelector(".option")
    const optionno = document.querySelector(".no")
    const optionyes = document.querySelector(".yes")
    const option_border = document.querySelector(".option span")
// PAGE 2
    const page2 = document.querySelector(".two")
    const separator2 = document.querySelector(".dos")
    const questionmark = document.querySelector(".questionmark")
    const firstpoem = document.querySelectorAll(".firstpoem")
    const secondpoem = document.querySelectorAll(".secondpoem")


// THINGS THAT HAPPEN WHEN CLICKING

    // first click (first page display)
        clicker.addEventListener('click', () => {

            clicker.style.position = "absolute"
            clicker.style.cursor = "auto"
            clicker.style.animation = "fadebox 1s forwards"
            setTimeout(function(){
                clicker.style.display = "none"
            }, 1000);

            title.style.display = "flex"
            title.style.animation = "delayedfadein 1s forwards"

            setTimeout(function(){
                optionyes.style.display = "flex"
                optionyes.style.animation = "fadein 1s forwards"
            }, 1000);

            setTimeout(function(){
                optionno.style.display = "flex"
                optionno.style.animation = "fadein 1s forwards"
            }, 2000);
        })

    // second click (either yes or no)
            option.addEventListener('click', () => {
            console.log("helloooo")
            document.querySelector(".one").style.transform = "translateY(-50vh)"
            document.querySelector(".one").style.height = "0"
            separator1.style.height = "100vh"

            minipeoplespan.forEach((minipeoplespan, id) => {
                minipeoplespan.style.transitionDelay = `${id + 1}s`
                setTimeout(function(){
                    minipeoplespan.style.opacity = "1"
                }, 4000);    
            })
           
            setTimeout(function(){
                body.style.overflow = "visible"
            }, 15000);
        })     




// THINGS THAT HAPPEN WHEN SCROLLING
window.addEventListener("scroll", () => {

    // parallax effect for second image
    const scrolled_distance = scrollY;
    console.log(scrolled_distance)

    firstpoem.forEach(firstpoem => {
        firstpoem.style.transform = `translateY(-${scrolled_distance * 0.5}px)`
    })

    secondpoem.forEach(secondpoem => {
            secondpoem.style.transform = `translateY(${-scrolled_distance * 0.5 + screen.height * 0.7}px)`
    })
    // first sentence fadeout animation
    const title_hitbox_bottom = title.getBoundingClientRect().bottom

    if(title_hitbox_bottom < 200) {
        title.style.animation = "fadeout 5s forwards"
    }


    // headers fade effect
    header.forEach((header, id) => {

        // console.log(header.getBoundingClientRect().top)
        // console.log("    ")

        if(header.getBoundingClientRect().top < (screen.height * 0.75)) {
            header.style.animation = "fadein 10s forwards"
        }

    })


})



