import {candle, layout, trend} from '../Graph/graph.js';
import { Table } from '../Additional/table.js'

export class Simulator{
    constructor(graph, t){
        this.graph = graph
        this.candle = candle;
        this.layout = layout;

        this.table = t
        this.timer = ms => new Promise(res => setTimeout(res, ms))
    }

    AddNewData(data){
        this.candle["x"].push(data[0])
        this.candle["close"].push(data[4])
        this.candle["high"].push(data[2])
        this.candle["low"].push(data[3])
        this.candle["open"].push(data[1])
    }

    async StartSimulation(data){
        for (var i = 1; i < data.length; i++) {
            this.AddNewData(data[i])
            Plotly.newPlot('graph', [candle], layout)
            
            this.table.insert(data[i])
            await this.timer(1000);
        }
    }

    ShowTable(show){
        this.table.Show(show)
    }
}