
/* -------js function for displaying population growth ----------*/

/* -------code below received the data from 
the function getPopGrowth() 
and displays on chart----------*/


// Wellington
window.addEventListener('load', region_welli);
async function region_welli() {
  const ctx = document.getElementById('pop_welli').getContext('2d');
  const wellington = await getPopGrowth();
  const pop_welli = new Chart(ctx, {
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
            labelString: 'Population Growth (%)'
          }
        }],
      }
    }
  });
}
//Marlborough
window.addEventListener('load', region_marlb);
async function region_marlb() {
  const ctx = document.getElementById('pop_marlb').getContext('2d');
  const marlborough = await getPopGrowth();
  const pop_marlb = new Chart(ctx, {
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
            labelString: 'Population_growth (%)'
          }
        }],
      }
    }
  });
}
//Auckland
window.addEventListener('load', region_auk);
async function region_auk() {
  const ctx = document.getElementById('pop_auk').getContext('2d');
  // const globalTemps = await getData();
  const auckland = await getPopGrowth();
  const pop_auk = new Chart(ctx, {
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
          data: auckland.rate5,
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
            labelString: 'Population_growth (%)'
          }
        }],
      }
    }
  });
}
//Northland
window.addEventListener('load', region_nor);
async function region_nor() {
  const ctx = document.getElementById('pop_nor').getContext('2d');
  // const globalTemps = await getData();
  const nor = await getPopGrowth();
  const pop_nor = new Chart(ctx, {
    type: 'line',
    data: {
      labels: nor.years,
      datasets: [{
          label: 'NZ',
          data: nor.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Northland',
          data: nor.rate6,
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
            labelString: 'Population_growth (%)'
          }
        }],
      }
    }
  });
}
//Waikato
window.addEventListener('load', region_wai);
async function region_wai() {
  const ctx = document.getElementById('pop_wai').getContext('2d');
  // const globalTemps = await getData();
  const wi = await getPopGrowth();
  const pop_wai = new Chart(ctx, {
    type: 'line',
    data: {
      labels: wi.years,
      datasets: [{
          label: 'NZ',
          data: wi.rate4,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Waikato',
          data: wi.rate3,
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
            labelString: 'Population_growth (%)'
          }
        }],
      }
    }
  });
}
//Nelson-Tasman
window.addEventListener('load', region_nel);
async function region_nel() {
  const ctx = document.getElementById('pop_nel').getContext('2d');
  // const globalTemps = await getData();
  const ne = await getPopGrowth();
  const pop_nel = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ne.years,
      datasets: [{
          label: 'NZ',
          data: ne.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Nelson-Tasman',
          data: ne.rate10,
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
            labelString: 'Population_growth (%)'
          }
        }],
      }
    }
  });
}
//Hawkes' Bay
window.addEventListener('load', region_haw);
async function region_haw() {
  const ctx = document.getElementById('pop_haw').getContext('2d');
  // const globalTemps = await getData();
  const hw = await getPopGrowth();
  const pop_haw = new Chart(ctx, {
    type: 'line',
    data: {
      labels: hw.years,
      datasets: [{
          label: 'NZ',
          data: hw.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
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
            labelString: 'Population_growth (%)'
          }
        }],
      }
    }
  });
}
//Taranaki
window.addEventListener('load', region_tar);
async function region_tar() {
  const ctx = document.getElementById('pop_tar').getContext('2d');
  // const globalTemps = await getData();
  const ta = await getPopGrowth();
  const pop_tar = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ta.years,
      datasets: [{
          label: 'NZ',
          data: ta.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Taranaki',
          data: ta.rate8,
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
            labelString: 'Population_growth (%)'
          }
        }],
      }
    }
  });
}
//West Coast
window.addEventListener('load', region_wes);
async function region_wes() {
  const ctx = document.getElementById('pop_wes').getContext('2d');
  // const globalTemps = await getData();
  const we = await getPopGrowth();
  const pop_wes = new Chart(ctx, {
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
            labelString: 'Population_growth (%)'
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
async function getPopGrowth() {
  const response = await fetch('data/population_growth.csv');
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
    // rate3.push(5 + parseFloat(cols[7]));
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