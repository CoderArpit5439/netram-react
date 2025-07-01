import React from "react";
import ReactApexChart from "react-apexcharts";

const Analytics = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 5,
        borderRadiusApplication: "end",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: (val) => `$ ${val} thousands`,
      },
    },
  };

  const series = [
    {
      name: "Net Profit",
      data: [44, 55, 57, 56, 61],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87],
    },
    {
      name: "Free Cash Flow",
      data: [35, 41, 36, 26, 45],
    },
  ];

    const optionsDonut = {
    chart: {
      type: 'donut',
      width: 380,
    },
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: 'gradient',
    },
    legend: {
      formatter: function (val, opts) {
        return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
      },
    },
    title: {
      text: 'Gradient Donut with Custom Start-angle',
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
  };

  const seriesDonut = [44, 55, 41, 17, 15];


  return (
    <div>
      <div className="row">
      <div className="col-xl-6">
        <div className="card shadow-sm p-4">
          <h5 className="mb-4">Financial Overview</h5>
          <ReactApexChart
            options={options}
            series={series}
            type="bar"
            height={350}
          />
        </div>
        {/* GMAIL, FACEBOOK, INSTAGRAM, EMAIL CONFIG. */}
      </div>
      <div className="col-xl-6">
        <div className="card shadow-sm p-4">
      <h5 className="mb-4">Donut Chart Overview</h5>
      <ReactApexChart options={optionsDonut} series={seriesDonut} type="donut" width="100%" />
    </div>
      </div>
      </div>
    </div>
  );
};

export default Analytics;
