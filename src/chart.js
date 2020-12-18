import React from 'react';
import CanvasJSReact from './assests/canvasjs.react';

//const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart(props) {
    let dataArr = Object.getOwnPropertyNames(props.data);
    const formatData = (data) => {
        let formatted = [];
        for (let i=0; i < dataArr.length; i++) {
            let label = dataArr[i];
            let y = parseFloat(data[dataArr[i]]);
            formatted.push({label: label, y: y, color: "black"})
        }
        console.log(formatted);
        return formatted;
    }
    const options = {
        title: {text: 'I\'ll think of an actual title later'},
        data: [{
            type: "line",
            color: "black",
            dataPoints: formatData(props.data)
        }]
    }
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default Chart;