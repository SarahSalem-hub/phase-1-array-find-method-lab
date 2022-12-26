// code your solution here

const record = [
    {year: "2018", result: "L"},
    {year: "2017", result: "W"},
    {year: "2016", result: "N/A"}
    //...
  ]

function superbowlWin(array){
    
    let res = array.find(function(element){
        return element['result'] === 'W'
        
    })
    if(res){
        return res.year
    }else{
        return undefined
    }

    


}
console.log(superbowlWin(record))