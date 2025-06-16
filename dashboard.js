fetch('http://localhost:3000/stats/user123')
  .then(res => res.json())
  .then(data => {
    const siteTime = {};
    data.forEach(entry => {
      siteTime[entry.domain] = (siteTime[entry.domain] || 0) + entry.timeSpent;
    });

    const labels = Object.keys(siteTime);
    const values = Object.values(siteTime).map(ms => ms / 1000 / 60);

    new Chart(document.getElementById("myChart"), {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          label: 'Time Spent (minutes)',
          data: values,
          backgroundColor: ['#4CAF50', '#F44336', '#2196F3', '#FFC107']
        }]
      }
    });
  });
