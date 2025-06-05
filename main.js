    // Sidebar toggle logic
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    sidebarToggle.addEventListener('click', () => {
      sidebar.classList.toggle('closed');
      document.querySelector('main').style.marginLeft = sidebar.classList.contains('closed') ? '0' : 'var(--sidebar-width)';
    });

    // Chart 1: User Growth (Line with gradient, shadow, responsive)
    var chart1 = new ApexCharts(document.querySelector("#chart1"), {
      chart: {
        type: 'area',
        height: 260,
        width: '100%',
        toolbar: { show: false },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 900,
          animateGradually: { enabled: true, delay: 120 },
          dynamicAnimation: { enabled: true, speed: 400 }
        },
        dropShadow: {
          enabled: true,
          top: 4,
          left: 2,
          blur: 6,
          opacity: 0.15
        }
      },
      series: [{
        name: 'Users',
        data: [31, 40, 28, 51, 42, 109, 100]
      }],
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        labels: { style: { colors: '#6366f1', fontWeight: 500 } }
      },
      yaxis: { labels: { style: { colors: '#6366f1', fontWeight: 500 } } },
      stroke: { curve: 'smooth', width: 3 },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          type: 'vertical',
          gradientToColors: ['#a5b4fc'],
          opacityFrom: 0.8,
          opacityTo: 0.2,
          stops: [0, 100]
        }
      },
      colors: ['#6366f1'],
      markers: { size: 4, colors: ['#fff'], strokeColors: '#6366f1', strokeWidth: 2 },
      grid: { borderColor: '#f3f4f6', strokeDashArray: 4 },
      tooltip: { theme: 'light' },
      responsive: [{
        breakpoint: 900,
        options: { chart: { height: 180 } }
      }]
    });
    chart1.render();

    // Chart 2: Revenue Growth (Bar with gradient, shadow, responsive)
    var chart2 = new ApexCharts(document.querySelector("#chart2"), {
      chart: {
        type: 'bar',
        height: 260,
        width: '100%',
        toolbar: { show: false },
        animations: {
          enabled: true,
          easing: 'bounce',
          speed: 1000
        },
        dropShadow: {
          enabled: true,
          top: 4,
          left: 2,
          blur: 6,
          opacity: 0.13
        }
      },
      series: [{
        name: 'Revenue',
        data: [45, 78, 62, 93]
      }],
      xaxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
        labels: { style: { colors: '#6366f1', fontWeight: 500 } }
      },
      yaxis: { labels: { style: { colors: '#6366f1', fontWeight: 500 } } },
      plotOptions: {
        bar: {
          borderRadius: 8,
          columnWidth: '50%',
          distributed: true
        }
      },
      colors: ['#818cf8', '#6366f1', '#a5b4fc', '#4f46e5'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'light',
          type: 'vertical',
          gradientToColors: ['#6366f1', '#818cf8', '#a5b4fc', '#4f46e5'],
          opacityFrom: 0.85,
          opacityTo: 0.3,
          stops: [0, 100]
        }
      },
      grid: { borderColor: '#f3f4f6', strokeDashArray: 4 },
      tooltip: { theme: 'light' },
      responsive: [{
        breakpoint: 900,
        options: { chart: { height: 180 } }
      }]
    });
    chart2.render();
