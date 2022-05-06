import {candle, layout, trend} from '../Graph/graph.js';
import { Simulator } from './simulator.js';
import { csvToArray } from '../Additional/csv-to-array.js'

function Setup(){
    // Test Data - inladen
    const reader = new FileReader();
    reader.onload = function (e) {
        const text = e.target.result;
        csvData = csvToArray(text);
        simulator.SetData(csvData)
        CreateForm(csvData)
        CreateTable("table-2", csvData, 500)
        };
    //reader.readAsText(".../Data/BNB-USD(1).csv");
    // console.log(rawData)
    // ------

    let file = document.getElementById("fileInput")
    file.addEventListener("change", e=>{
        console.log(e.path)

    })
    let graph = document.getElementById('graph');
    console.log(graph)
    let simulator = new Simulator(graph) 
}


window.addEventListener('load', Setup)