import React from 'react';
import CanvasJSReact from './assests/canvasjs.react';

//const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart(props) {
    const options = {
        title: {text: 'Test time boyo'},
        data: [{
            type: "line",
            color: "black",
            dataPoints: [
                {label: "January", y:25, color: "black"},
                {label: "February", y:40, color: "green"},
                {label: "March", y:15, color: "red"},
                {label: "April", y:35, color: "green"},
                {label: "May", y:-10, color: "red"}
            ]
        }]
    }
    return (
        <div>
            <CanvasJSChart options={options} />
        </div>
    );
}

export default Chart;