(function(){
    window.addEventListener('scroll', positionImage)

    const dataParalax = [...document.querySelectorAll('[data-paralax]')]

    function isGettinOut(img){
        return img.getBoundingClientRect().top <= 0 
    }
    function getNewPosition(img){
        const velocity = parseFloat(img.getAttribute("[data-p-velocity]")) || .2
        return img.getBoundingClientRect().top * velocity * -1

    }
    function positionImage(){
        dataParalax.forEach(img=>{
            let positionImageX = getComputedStyle(img).backgroundPositionX
            let positionImageY = getComputedStyle(img).backgroundPositionY

            console.log(positionImageX, positionImageY)
            if(isGettinOut(img)){
                img.style.backgroundPosition = `${positionImageX} ${getNewPosition(img)}px`
            }
        })
    }
    positionImage() 

})()