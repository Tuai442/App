
export const layout = {
    dragmode: 'zoom', 
    width: 1000,
    height: 700,
    plot_bgcolor:"#171c24",
    paper_bgcolor:"#171c24",

    margin: {
      r: 10, 
      t: 25, 
      b: 40, 
      l: 60
    }, 
    showlegend: false, 
    xaxis: {
      autorange: true, 

      title: 'Date', 
      type: 'date',

      tickcolor: "#696666",
      tickwidth: 0.5,
      
      gridcolor: "#696666",
      gridwidth: 1,   
    }, 
    yaxis: {
      autorange: true, 
      type: 'linear',
      tickcolor: "#696666",
      tickwidth: 0.5,
      
      gridcolor: "#696666",
      gridwidth: 0.5,
      
      zerolinecolor: "#696666",
      zerolinewidth: 1,
    },
    
    // annotations: [
    //   {
    //     x: '2021-12-01',
    //     y: 0.9,
    //     xref: 'x',
    //     yref: 'paper',
    //     text: 'largest movement',
    //     font: {color: 'magenta'},
    //     showarrow: true,
    //     xanchor: 'right',
    //     ax: -20,
    //     ay: 0
    //   }
    // ],
    
    shapes: []
  };

export const candle = {
  
    x: [], 
    
    close: [], 
    
    decreasing: {line: {color: '#bf3230'}}, 
    
    high: [], 
    
    increasing: {line: {color: '#30bf35'}}, 
    
    line: {color: 'rgba(31,119,180,1)'}, 
    
    low: [], 
    
    open: [], 

    
    type: 'candlestick', 
    xaxis: 'x', 
    yaxis: 'y'
  };

export const trend = {
    x: [],
    y: [],
    mode: 'line',
    fill: 'tonexty',
    name: '/',
    line: {
        color: '',
        width: 3
    }
}

