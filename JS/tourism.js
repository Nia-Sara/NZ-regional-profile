
/* -------js function for displaying tourism growth ----------*/

/* -------code below received the data from 
the function getTourism() 
and displays on chart----------*/


// wellington
window.addEventListener('load', region_welli);
async function region_welli() {
  const wellington = await getTourism();
  const tourism_welli = new Chart(ctx, {
    type: 'line',
    data: {
      labels: wellington.years,

      datasets: [{
          label: 'NZ',
          data: wellington.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Wellington',
          data: wellington.rate1,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 2)',
          backgroundColor: 'rgba(54, 162, 235, 2)',
          borderWidth: 1
        }

      ]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tourism Growth (%)'
          }
        }],
      }
    }
  });
}
//marlborough
window.addEventListener('load', region_marlb);
async function region_marlb() {
  const ctx = document.getElementById('tourism_marlb').getContext('2d');
  // const globalTemps = await getData();
  const marlborough = await getTourism();
  const tourism_marlb = new Chart(ctx, {
    type: 'line',
    data: {
      labels: marlborough.years,

      datasets: [{
          label: 'NZ',
          data: marlborough.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Marlborough',
          data: marlborough.rate3,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 2)',
          backgroundColor: 'rgba(54, 162, 235, 2)',
          borderWidth: 1
        }

      ]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tourism Growth (%)'
          }
        }],
      }
    }
  });
}
//auckland
window.addEventListener('load', region_auk);
async function region_auk() {
  const ctx = document.getElementById('tourism_auk').getContext('2d');
  // const globalTemps = await getData();
  const auckland = await getTourism();
  const tourism_auk = new Chart(ctx, {
    type: 'line',
    data: {
      labels: auckland.years,

      datasets: [{
          label: 'NZ',
          data: auckland.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Auckland',
          data: auckland.rate4,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 2)',
          backgroundColor: 'rgba(54, 162, 235, 2)',
          borderWidth: 1
        }

      ]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tourism Growth (%)'
          }
        }],
      }
    }
  });
}
//northland
window.addEventListener('load', region_nor);
async function region_nor() {
  const ctx = document.getElementById('tourism_nor').getContext('2d');
  // const globalTemps = await getData();
  const northland = await getTourism();
  const tourism_nor = new Chart(ctx, {
    type: 'line',
    data: {
      labels: northland.years,

      datasets: [{
          label: 'NZ',
          data: northland.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Northland',
          data: northland.rate6,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 2)',
          backgroundColor: 'rgba(54, 162, 235, 2)',
          borderWidth: 1
        }

      ]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tourism Growth (%)'
          }
        }],
      }
    }
  });
}
//waikato
window.addEventListener('load', region_wai);
async function region_wai() {
  const ctx = document.getElementById('tourism_wai').getContext('2d');
  // const globalTemps = await getData();
  const wi = await getTourism();
  const tourism_wai = new Chart(ctx, {
    type: 'line',
    data: {
      labels: wi.years,

      datasets: [{
          label: 'NZ',
          data: wi.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Waikato',
          data: wi.rate5,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 2)',
          backgroundColor: 'rgba(54, 162, 235, 2)',
          borderWidth: 1
        }

      ]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tourism Growth (%)'
          }
        }],
      }
    }
  });
}
//nelson-tasman
window.addEventListener('load', region_nel);
async function region_nel() {
  const ctx = document.getElementById('tourism_nel').getContext('2d');
  // const globalTemps = await getData();
  const nel = await getTourism();
  const tourism_nel = new Chart(ctx, {
    type: 'line',
    data: {
      labels: nel.years,

      datasets: [{
          label: 'NZ',
          data: nel.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Nelson-Tasman',
          data: nel.rate10,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 2)',
          backgroundColor: 'rgba(54, 162, 235, 2)',
          borderWidth: 1
        }

      ]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tourism Growth (%)'
          }
        }],
      }
    }
  });
}
//hawke's bay
window.addEventListener('load', region_haw);
async function region_haw() {
  const ctx = document.getElementById('tourism_haw').getContext('2d');
  // const globalTemps = await getData();
  const hw = await getTourism();
  const tourism_haw = new Chart(ctx, {
    type: 'line',
    data: {
      labels: hw.years,

      datasets: [{
          label: 'NZ',
          data: hw.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1nel
        },
        {
          label: 'Hawke Bay',
          data: hw.rate9,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 2)',
          backgroundColor: 'rgba(54, 162, 235, 2)',
          borderWidth: 1
        }

      ]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tourism Growth (%)'
          }
        }],
      }
    }
  });
}
window.addEventListener('load', region_tar);
async function region_tar() {
  const ctx = document.getElementById('tourism_tar').getContext('2d');
  // const globalTemps = await getData();
  const ma = await getTourism();
  const tourism_tar = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ma.years,

      datasets: [{
          label: 'NZ',
          data: ma.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Taranaki',
          data: ma.rate8,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 2)',
          backgroundColor: 'rgba(54, 162, 235, 2)',
          borderWidth: 1
        }

      ]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tourism Growth (%)'
          }
        }],
      }
    }
  });
}
window.addEventListener('load', region_wes);
async function region_wes() {
  const ctx = document.getElementById('tourism_wes').getContext('2d');
  // const globalTemps = await getData();
  const we = await getTourism();
  const tourism_wes = new Chart(ctx, {
    type: 'line',
    data: {
      labels: we.years,

      datasets: [{
          label: 'NZ',
          data: we.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'West Coast',
          data: we.rate7,
          fill: false,
          borderColor: 'rgba(54, 162, 235, 2)',
          backgroundColor: 'rgba(54, 162, 235, 2)',
          borderWidth: 1
        }

      ]
    },
    options: {
      scales: {
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Tourism Growth (%)'
          }
        }],
      }
    }
  });
}
/* first data is fetched from the file then uploaded into the grapch above. 
"rate1,rate2,......" represents each column in the file and each column in the file represents each region.
"year" below represents the column year in the file.
code below fetches all the columns from the csv data.
*/

async function getTourism() {

  const response = await fetch('data/tourism.csv');
  const data = await response.text();
  const years = [];
  const rate1 = [];
  const rate2 = [];
  const rate3 = [];
  const rate4 = [];
  const rate5 = [];
  const rate6 = [];
  const rate7 = [];
  const rate8 = [];
  const rate9 = [];
  const rate10 = [];

/* -------push each column ----------*/
  const rows = data.split('\n').slice(1);
  rows.forEach(row => {
    const cols = row.split(',');
    years.push(cols[0]);
    rate1.push(parseFloat(cols[1]));
    rate2.push(parseFloat(cols[2]));
    rate3.push(parseFloat(cols[3]));
    rate4.push(parseFloat(cols[4]));
    rate5.push(parseFloat(cols[5]));
    rate6.push(parseFloat(cols[6]));
    rate7.push(parseFloat(cols[7]));
    rate8.push(parseFloat(cols[8]));
    rate9.push(parseFloat(cols[9]));
    rate10.push(parseFloat(cols[10]));
  });
  return {
    years,
    rate1,
    rate2,
    rate3,
    rate4,
    rate5,
    rate6,
    rate7,
    rate8,
    rate9,
    rate10
  };
}