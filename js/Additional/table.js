export class Table{
    
    constructor(root, width){
        this.root = root
        this.root.style.width = width
        this.columnLength = null
    }

    insert(data){
        this.clear();

        if (this.columnLength != null){
            if (data.length != this.columnLength){
                throw 'De lengte van de colomen en headers moeten gelijk zijn!'
            }
        }
        let rows = document.createElement("tr")
        data.forEach(d =>{
            let col = document.createElement("td")
            col.innerHTML = d
            rows.appendChild(col)
        })
        this.root.appendChild(rows)
    }

    clear(){
        // nog voorzien
    }

    SetHeader(headerColumns){ 
        this.columnLength = headerColumns.length
        console.log(headerColumns)
        headerColumns.forEach(h =>{
            if (h !== null){
                let header = document.createElement("th")
                header.innerHTML = h
                console.log(header)
                this.root.appendChild(header)
            }

        })
        
    }

    Show(show){
        if(show){
            this.root.style.display = "block"
        }
        else{
            this.root.style.display = "none"
        }
    }

}