const closeicon = document.querySelector('.closeicon')
const navigation = document.querySelector('.navigation')

closeicon.addEventListener('click', () => {
    navigation.classList.toggle('closed')
    closeicon.classList.toggle('closed')
    console.log('Holaaaa')
})