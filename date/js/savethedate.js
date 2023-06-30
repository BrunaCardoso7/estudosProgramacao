(function () {
    const dateEventDOM = document.querySelector('.hero-content h1 span').innerText
    const dateEvent = getDate(dateEventDOM)
    console.log(dateEvent)

    const today = new Date()

    let left = dateEvent.getTime() - today.getTime

    const ONE_SEG = 1000
    const ONE_MIN = 60*1000
    const ONE_HOUR = 60 * ONE_MIN
    const ONE_DAY = 24*ONE_HOUR

    const dateLeft = parseInt(left / ONE_DAY)

    left = left - dateLeft * ONE_DAY

    function getDate(str){
        let [date, hour] = str.split(' ')
        let [day, mouth, year] = date.split('/')
        let [hours, mts] = hour.split('H')
        return new Date(year, mouth-1, day, hours, mts)
    }
    const hoursLeft = parseInt(left / ONE_HOUR)
    left = left - hoursLeft * ONE_HOUR

    const minLeft = parseInt(left / ONE_MIN)
    left = left - minLeft * ONE_MIN

    const segLeft = parseInt(left / ONE_SEG)
    left = left - segLeft * ONE_SEG

    console.log(dateLeft, hoursLeft, minLeft, segLeft)
})()