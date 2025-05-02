import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const FunnelChart = ({ data }) => {
  const processedData = data.map((item) => ({
    y: item.value,
    label: item.name === '' ? '' : `${item.name} ${item.value}`,
    color: item.color || "#4A90E2",
    toolTipContent: item.name === '' ? null : `<b>${item.name}</b>: ${item.value}`,
  }));

  const options = {
    animationEnabled: true,
    height: 280,
    data: [
      {
        type: "funnel",
        indexLabel: "{label}",
        toolTipContent: "{toolTipContent}",
        neckWidth: 20,
        neckHeight: 0,
        valueRepresents: "area",
        dataPoints: processedData,
      },
    ],
    // legend: {
    //   verticalAlign: "bottom",
    //   horizontalAlign: "center",
    //   fontSize: 14,
    //   fontFamily: "Inter, -apple-system, Roboto, Helvetica, sans-serif",
    // },
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default FunnelChart;
