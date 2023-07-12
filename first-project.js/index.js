const string=prompt("enter your number or word ")
isPolidrone(string)
function isPolidrone(string){
    const length=string.length
    const pattern= /[^a-zA-Z0-9\s]/g
    string=string.toLowerCase().replace(/ /g,'').replace(pattern,'')
    for(let i=0; i<length ;i++){
        if(string[i]!==string[length-1-i]){
            return console.log("it is not")
        }
        return console.log("it is polidrome")
    }
}