// code your solution here

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "d"},
    {year: "2016", result: "N/A"}
    //...
  ]

function superbowlWin(array){
    
   let foundedObj = array.find(arrayfind)

    if ( foundedObj !== undefined)
    {
        return foundedObj['year']
    }
    else {
        return undefined
    }


}
function arrayfind(element){
    
    if(element['result'] === 'W'){
        return element
    }
    
}
console.log(superbowlWin(record))