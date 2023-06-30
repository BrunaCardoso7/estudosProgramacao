function getRandomNumber(inicio = 1, fim = 5, integer = true){

    const rand =  Math.random()*(fim - inicio + 1) + inicio
    return integer ? parseInt(rand) : rand
}