import { Simulator } from './simulator.js';
import { csvToArray } from '../Additional/csv-to-array.js'
import { rawData } from '../Additional/test-data.js'
import { Table } from '../Additional/table.js'
import { Strategy } from '../Strategy/strategy.js'

function Setup(){
    // Test Data - inladen
    let candleData = csvToArray(rawData)
    // ------

    let showDataBtn = document.getElementById("show-data")
    let t = document.getElementById("table")
    let graph = document.getElementById('graph');

    let table = new Table(t)
    table.SetHeader(candleData[0])


    let strategy = new Strategy()
    let simulator = new Simulator(graph, table)
    simulator.StartSimulation(candleData)

    showDataBtn.addEventListener("click", e => {
        simulator.ShowTable(e.target.checked)
    })
}


window.addEventListener('load', Setup)