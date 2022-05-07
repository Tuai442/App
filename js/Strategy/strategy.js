import { PatternReconizer } from './pattern-reconizer.js';

export class Strategy{
    constructor(){
        this.patternReconizer = new PatternReconizer()
        this.patterns = []
    }

    CheckForPatterns(candle){
        let pattern = this.patternReconizer.CheckForPatterns(candle)
    }

    Calculate(){

    }
}