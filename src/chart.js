import React from 'react';
import CanvasJSReact from './assests/canvasjs.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

function Chart(props) {
    const options = {
        title: {text: 'Test time boyo'},
        data: [{
            type: "line",
            color: "black",
            dataPoints: [
                {label: "Tuesdays", y:25, color: "black"},
                {label: "Jeffrey", y:40, color: "green"},
                {label: "Is", y:15, color: "red"},
                {label: "Big", y:35, color: "green"},
                {label: "Bitch", y:-10, color: "red"}
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