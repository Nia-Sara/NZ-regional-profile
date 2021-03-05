
/* -------js function for displaying employment growth ----------*/


/* -------code below receives the data from 
the function getEmpRate() 
and displays on chart----------*/

//wellington
window.addEventListener('load', region_welli);
async function region_welli() {
  const ctx = document.getElementById('emp_welli').getContext('2d');
  const wellington = await getEmpRate();
  const emp_welli = new Chart(ctx, {
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
            labelString: 'Employment Rate (%)'
          }
        }],
      }
    }
  });
}

//Marlborough region
window.addEventListener('load', region_marlb);
async function region_marlb() {
  const ctx = document.getElementById('emp_marlb').getContext('2d');
  const marlborough = await getEmpRate();
  const emp_marlb = new Chart(ctx, {
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
            labelString: 'Employment Rate (%)'
          }
        }],
      }
    }
  });
}
//Auckland 
window.addEventListener('load', region_auck);
async function region_auck() {
  const ctx = document.getElementById('emp_auk').getContext('2d');
  const auckland = await getEmpRate();
  const emp_auk = new Chart(ctx, {
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
            labelString: 'Employment Rate (%)'
          }
        }],
      }
    }
  });
}
//Waikato
window.addEventListener('load', region_wai);
async function region_wai() {
  const ctx = document.getElementById('emp_wai').getContext('2d');
  const waikato = await getEmpRate();
  const emp_wai = new Chart(ctx, {
    type: 'line',
    data: {
      labels: waikato.years,
      datasets: [{
          label: 'NZ',
          data: waikato.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Waikato',
          data: waikato.rate4,
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
            labelString: 'Employment Rate (%)'
          }
        }],
      }
    }
  });
}
//Northland
window.addEventListener('load', region_nor);
async function region_nor() {
  const ctx = document.getElementById('emp_nor').getContext('2d');
  const northland = await getEmpRate();
  const emp_nor = new Chart(ctx, {
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
            labelString: 'Employment Rate (%)'
          }
        }],
      }
    }
  });
}

//Nelson-Tasman
window.addEventListener('load', region_nel);
async function region_nel() {
  const ctx = document.getElementById('emp_nel').getContext('2d');
  const auckland = await getEmpRate();
  const emp_nel = new Chart(ctx, {
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
          label: 'Nelson-Tasman',
          data: auckland.rate10,
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
            labelString: 'Employment Rate (%)'
          }
        }],
      }
    }
  });
}

//Hawke's Bay
window.addEventListener('load', region_haw);
async function region_haw() {
  const ctx = document.getElementById('emp_haw').getContext('2d');
  const hawke = await getEmpRate();
  const emp_haw = new Chart(ctx, {
    type: 'line',
    data: {
      labels: hawke.years,
      datasets: [{
          label: 'NZ',
          data: hawke.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Hawke Bay',
          data: hawke.rate9,
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
            labelString: 'Employment Rate (%)'
          }
        }],
      }
    }
  });
}
//Taranaki
window.addEventListener('load', region_tar);
async function region_tar() {
  const ctx = document.getElementById('emp_tar').getContext('2d');
  const taranaki = await getEmpRate();
  const emp_tar = new Chart(ctx, {
    type: 'line',
    data: {
      labels: taranaki.years,
      datasets: [{
          label: 'NZ',
          data: taranaki.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Taranaki',
          data: taranaki.rate8,
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
            labelString: 'Employment Rate (%)'
          }
        }],
      }
    }
  });
}

//West Coast
window.addEventListener('load', region_wes);
async function region_wes() {
  const ctx = document.getElementById('emp_wes').getContext('2d');
  const wes = await getEmpRate();
  const emp_wes = new Chart(ctx, {
    type: 'line',
    data: {
      labels: wes.years,
      datasets: [{
          label: 'NZ',
          data: wes.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'West Coast',
          data: wes.rate7,
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
            labelString: 'Employment Rate (%)'
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

async function getEmpRate() {

  const response = await fetch('data/employment_rate.csv');
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

  /* -------display all the columns ----------*/
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