
/* -------js function for displaying housing price growth growth ----------*/


/* -------code below received the data from 
the function getHouseRate() 
and displays on chart----------*/


// wellington
window.addEventListener('load', region_welli);
async function region_welli() {
  const ctx = document.getElementById('hous_welli').getContext('2d');
  const wellington = await getHouseRate();
  const hous_welli = new Chart(ctx, {
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
            labelString: 'Housing Price Growth (%)'
          }
        }],
      }
    }
  });
}
//marlborough
window.addEventListener('load', region_marlb);
async function region_marlb() {
  const ctx = document.getElementById('hous_marlb').getContext('2d');
  const marlborough = await getHouseRate();
  const hous_marlb = new Chart(ctx, {
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
            labelString: 'Housing Price Growth (%)'
          }
        }],
      }
    }
  });
}
//auckland
window.addEventListener('load', region_auk);
async function region_auk() {
  const ctx = document.getElementById('hous_auk').getContext('2d');
  const auckland = await getHouseRate();
  const hous_auk = new Chart(ctx, {
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
            labelString: 'Housing Price Growth (%)'
          }
        }],
      }
    }
  });
}
//northland
window.addEventListener('load', region_nor);
async function region_nor() {
  const ctx = document.getElementById('hous_nor').getContext('2d');
  const nor = await getHouseRate();
  const hous_nor = new Chart(ctx, {
    type: 'line',
    data: {
      labels: nor.years,

      datasets: [{
          label: 'NZ',
          data: nor.rate2,
          fill: falsenor          borderColor: 'rgba(255, 99, 132, 1)',
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
            labelString: 'Housing Price Growth (%)'
          }
        }],
      }
    }
  });
}
//waikato
window.addEventListener('load', region_wai);
async function region_wai() {
  const ctx = document.getElementById('hous_wai').getContext('2d');
  const wai = await getHouseRate();
  const hous_wai = new Chart(ctx, {
    type: 'line',
    data: {
      labels: wai.years,

      datasets: [{
          label: 'NZ',
          data: wai.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Waikato',
          data: wai.rate4,
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
            labelString: 'Housing Price Growth (%)'
          }
        }],
      }
    }
  });
}
//nelson-tasman
window.addEventListener('load', region_nel);
async function region_nel() {
  const ctx = document.getElementById('hous_nel').getContext('2d');
  const nel = await getHouseRate();
  const hous_nel = new Chart(ctx, {
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
            labelString: 'Housing Price Growth (%)'
          }
        }],
      }
    }
  });
}
//hawke's bay
window.addEventListener('load', region_haw);
async function region_haw() {
  const ctx = document.getElementById('hous_haw').getContext('2d');
  const haw = await getHouseRate();
  const hous_haw = new Chart(ctx, {
    type: 'line',
    data: {
      labels: haw.years,

      datasets: [{
          label: 'NZ',
          data: haw.rate2,
          fill: false,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderWidth: 1
        },
        {
          label: 'Hawke Bay',
          data: haw.rate9,
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
            labelString: 'Housing Price Growth (%)'
          }
        }],
      }
    }
  });
}
//taranaki
window.addEventListener('load', region_tar);
async function region_tar() {
  const ctx = document.getElementById('hous_tar').getContext('2d');
  const marlborough = await getHouseRate();
  const hous_tar = new Chart(ctx, {
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
          label: 'Taranaki',
          data: marlborough.rate8,
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
            labelString: 'Housing Price Growth (%)'
          }
        }],
      }
    }
  });
}
//westcoat
window.addEventListener('load', region_wes);
async function region_wes() {
  const ctx = document.getElementById('hous_wes').getContext('2d');
  const marlborough = await getHouseRate();
  const hous_wes = new Chart(ctx, {
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
          label: 'West Coast',
          data: marlborough.rate7,
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
            labelString: 'Housing Price Growth (%)'
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

async function getHouseRate() {

  const response = await fetch('data/house_price.csv');
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