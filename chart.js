// Make sure to include Chart.js CDN in your HTML <head> or before this script
// <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('salesChart').getContext('2d');

  // Sample sales data - replace or dynamically load from form/database
  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
      label: 'Wood Sales',
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1,
      data: [12, 19, 3, 5, 2, 3, 7]
    },
    {
      label: 'Furniture Sales',
      backgroundColor: 'rgba(255, 159, 64, 0.5)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
      data: [2, 29, 5, 5, 12, 7, 10]
    }]
  };

  const config = {
    type: 'bar',
    data: salesData,
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 5
          }
        }
      }
    }
  };

  const salesChart = new Chart(ctx, config);
});