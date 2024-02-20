// ./components/PieChart.js

import React from "react"; // Import the necessary library such as React for now.

import Chart from "chart.js/auto"; // Import the Chart.js library.

import { Pie } from "react-chartjs-2"; // In the react-chartjs-2 library, import the Pie component.

// Define an array of labels.
const labels = ["January", "February", "March", "April", "May", "June"];

// Defined an object.
const data = {
  labels: labels,
  datasets: [
    {
      label: "Pie Chart",
      backgroundColor: "Orange",
      borderColor: "gray",
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
};

/**
 * Define a functional component named PieChart
 * that returns a Pie component from react-chartjs-2,
 */
const PieChart = () => {
  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

// PieChart component is exported as default module.
export default PieChart;
