import React from 'react';
import CanvasJSReact from './assests/canvasjs.react';

//const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart(props) {
    let dataArr = Object.getOwnPropertyNames(props.data);
    const colorPicker = (current, prev) => {
        if (prev === null || current === 0) {
            return "black";
        } else {
            return (current >= 0) ? "green" : "red";
        }
    }
    const formatData = (data) => {
        let formatted = [];
        let prevTotal, color;
        
        for (let i=0; i < dataArr.length; i++) {
            if (isNaN(prevTotal)) {
                color = colorPicker(parseFloat(data[dataArr[i]]), null);
                prevTotal = 0;
            } else {
                color = colorPicker(parseFloat(data[dataArr[i]]), prevTotal);
            }
            let label = dataArr[i].split("", 3).join("");
            let y = parseFloat(data[dataArr[i]]);
            prevTotal += y;
            formatted.push({label: label, y: prevTotal, color: color})
        }
        return formatted;
    }
    const options = {
        title: {text: 'All of these names are dumb'},
        data: [{
            type: "line",
            color: "black",
            dataPoints: formatData(props.data)
        }],
        axisX:{
            title: 'Months',
            interval: 1
        },
        axisY:{
            title:'Currency (USD)'
        }
    }
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default Chart;