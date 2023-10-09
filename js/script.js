let active = 1

window.addEventListener('load', () => {
    document.getElementById(`item-${active}`).classList.add('active')
    document.getElementById('project-image').style.backgroundImage = `url(image/frame-${active}.png)`
    document.getElementById('project-image-mobile').style.backgroundImage = `url(image/frame-${active}-mobile.png)`
})

const handleChange = (num) => {
    document.getElementById(`item-${active}`).classList.remove('active')
    document.getElementById(`item-${num}`).classList.add('active')
    active = num
    document.getElementById('project-image').style.backgroundImage = `url(image/frame-${active}.png)`
    document.getElementById('project-image-mobile').style.backgroundImage = `url(image/frame-${active}-mobile.png)`
}

document.getElementById('item-1').addEventListener('click', () => {
    handleChange(1)
})

document.getElementById('item-2').addEventListener('click', () => {
    handleChange(2)
})

document.getElementById('item-3').addEventListener('click', () => {
    handleChange(3)
})

document.getElementById('item-4').addEventListener('click', () => {
    handleChange(4)
})

document.getElementById('item-5').addEventListener('click', () => {
    handleChange(5)
})