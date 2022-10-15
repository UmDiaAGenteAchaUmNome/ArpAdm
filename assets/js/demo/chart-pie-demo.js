// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = 'Sen'),
    '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#ccc';

// Pie Chart Example
var ctx = document.getElementById('myPieChart');
var myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ['Direct', 'Referral', 'Social'],
        datasets: [
            {
                data: [55, 30, 15],
                backgroundColor: ['#f05c28', '#1cc88a', '#ffab00'],
                hoverBackgroundColor: ['#e74a3b', '#17a673', '#f6c23e'],
            },
        ],
    },
    options: {
        maintainAspectRatio: false,
        tooltips: {
            backgroundColor: 'rgb(255,255,255)',
            bodyFontColor: '#858796',
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
        },
        legend: {
            display: false,
        },
        cutoutPercentage: 80,
    },
});
