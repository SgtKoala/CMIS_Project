// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.



const bar = document.getElementById('barChart').getContext('2d');
const myChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ['Cardiology', 'Telemetry', 'Oncology', 'Emergency', 'Orthropedic', 'Others'],
        datasets: [{
            label: '# of Patients per Division',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(51, 179, 179, 1)',
                'rgba(51, 179, 179, 1)',
                'rgba(51, 179, 179, 1)',
                'rgba(51, 179, 179, 1)',
                'rgba(51, 179, 179, 1)',
                'rgba(51, 179, 179, 1)'
            ],
            borderColor: [
                'rgba(51, 141, 179, 0.92)',
                'rgba(51, 141, 179, 0.92)',
                'rgba(51, 141, 179, 0.92)',
                'rgba(51, 141, 179, 0.92)',
                'rgba(51, 141, 179, 0.92)',
                'rgba(51, 141, 179, 0.92)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
    }
});



//total number of covid patients
const pie = document.getElementById('pieChart').getContext('2d');
const myChart2 = new Chart(pie, {
    type: 'pie',
    data: {
        labels: ['Discharged','Admits'],
        datasets: [{
            label: 'Total Number of Covid Patients',
            data: [5, 43],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true
    }
});


//dual bar chart for COVID and Non-COVID Patients
const line = document.getElementById('lineChart').getContext('2d');
const myChart3 = new Chart(line, {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
            label: "Patients w/ COVID",
            data: [25, 20, 60, 41, 66, 45, 80, 11, 2, 32, 60, 10],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }, {
            label: "Patients w/o COVID",
            data: [5, 20, 15, 41, 35, 65, 80, 20, 23, 54, 50, 60],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        legend: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    min: 0,
                    stepSize: 20,
                    padding: 10
                }
            }],
            xAxes: [{
                ticks: {
                    padding: 5
                }
            }]
        }
    }
});

//doughnut chart for COVID Patients
const doughnut = document.getElementById('doughnutChart').getContext('2d');
const myChart4 = new Chart(doughnut, {
    type: 'doughnut',
    data: {
        labels: ['Deaths', 'Recoveries', 'Active Cases', 'New Cases'],
        datasets: [{
            data: [5, 5, 5, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                min: 0
            }
        }
    }
});
