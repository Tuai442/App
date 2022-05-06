
export function csvToArray(str, delimiter = ",", header=true) {
    const parsed_arr = []
    
    if (header){
        const h = str.slice(0, str.indexOf("\n")).split(delimiter);
        str = str.replace(str.substring(0, str.indexOf('\n')), "").trim()
        parsed_arr.push(h)
    }

    while (str.substring(0, str.indexOf('\n'))){
        const arr = str.slice(0, str.indexOf("\n")).split(delimiter);
        str = str.replace(str.substring(0, str.indexOf('\n')), "").trim()
        let index = 0
        const temp = []
        arr.forEach( i =>{
            if (index === 0){
                //temp.push(new Date(i).toLocaleString("be-BE"))//Date.parse(i)
                temp.push(i)
            }
            else{
                i = i.replace("\r", "")
                temp.push(parseFloat(i))
                
            }
            index ++
           
        })
        parsed_arr.push(temp)
    }
    
    return parsed_arr
   
    }
