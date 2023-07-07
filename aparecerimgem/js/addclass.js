(function(){
    window.addEventListener('scroll', addClassOnScroll)

    let attributeClass = [...document.querySelectorAll('[data-addclass-on-scroll]')]

    function isElementIntoView(img){
        let rect = img.getBoundingClientRect()
        return (
            (rect.top <= 0 && rect.bottom >= 0) ||
            (rect.top >= 0 && rect.botoom >= innerHeight)
        )
    }

    function addClassOnScroll(){
        if(attributeClass.length === 0){
            window.removeEventListener('scroll', addClassOnScroll) 
            console.log('evento removido')
        }
        attributeClass.forEach(img=>{
            if(isElementIntoView(img)){
                let delay = parseInt(img.getAttribute('[data-addclass-on-scroll-delay]')) || 0
                setTimeout(function(){
                    let _class = img.getAttribute('[data-addclass-on-scroll]')
                    img.classList.add(_class)
                    img.removeAttribute('data-addclass-on-scroll-delay')
                    img.removeAttribute('data-addclass-on-scroll')
                    attributeClass = [...document.querySelectorAll('[data-addclass-on-scroll]')]
                }, delay)
            }
        })
    }
})()