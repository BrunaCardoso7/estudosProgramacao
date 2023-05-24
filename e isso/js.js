function sumArray(...array) {
    biggerNumber = array;
    smallNumber = "";
    for(i of array){
      if(smallNumber ==""){
        smallNumber = i;
      }else if (smallNumber > i){
        smallNumber = i;
      }
    }
    for(i of array){
        if(biggerNumber ==""){
            biggerNumber = i;
        }else if (biggerNumber < i){
            biggerNumber = i;
        }
        
    }  
    console.log(smallNumber)
    console.log(biggerNumber)

}
sumArray(2, 8, 3, 4);