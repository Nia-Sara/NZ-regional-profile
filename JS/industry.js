
/* -------js function for displaying industry based jobs ----------*/

/* -------code below receives the data from 
the function getIndustry() 
and displays on chart----------*/


//marlborough
window.addEventListener('load', region_marlb);
async function region_marlb() {
  const ctx = document.getElementById('ind_marlb').getContext('2d');
  const marlborough = await getIndustry();
  const ind_marlb = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: marlborough.sector,

      datasets: [{
        label: 'Marlborough',

        data: marlborough.region2,
        fill: false,
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255,159,64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 64, 0, 1)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192, 192, 192, 1)'

        ],

        backgroundColor: [
          'rgba(255, 206, 86, 0.65)',
          'rgba(255, 99, 132, 0.65)',
          'rgba(54, 162, 235, 0.65)',
          'rgba(75, 192, 192, 0.65)',
          'rgba(255,159,64,0.90)',
          'rgba(153, 102, 255, 0.65)',
          'rgba(255, 0, 255, 0.55)',
          'rgba(255, 64, 0, 0.65)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192,192,192,0.9)'

        ],
        borderWidth: 1
      }]
    },
    options: {},
  });
}

// wellington 

window.addEventListener('load', region_welli);
async function region_welli() {
  const ctx = document.getElementById('ind_welli').getContext('2d');
  const wellington = await getIndustry();
  const ind_welli = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: wellington.sector,

      datasets: [{
        label: 'Wellington',

        data: wellington.region1,
        fill: false,
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255,159,64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 64, 0, 1)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192, 192, 192, 1)'

        ],

        backgroundColor: [
          'rgba(255, 206, 86, 0.65)',
          'rgba(255, 99, 132, 0.65)',
          'rgba(54, 162, 235, 0.65)',
          'rgba(75, 192, 192, 0.65)',
          'rgba(255,159,64,0.90)',
          'rgba(153, 102, 255, 0.65)',
          'rgba(255, 0, 255, 0.55)',
          'rgba(255, 64, 0, 0.65)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192,192,192,0.9)'

        ],
        borderWidth: 1
      }]
    },
    options: {},
  });
}
//auckland
window.addEventListener('load', region_auk);
async function region_auk() {
  const ctx = document.getElementById('ind_auk').getContext('2d');
  const au = await getIndustry();
  const ind_auk = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: au.sector,

      datasets: [{
        label: 'Auckland',

        data: au.region3,
        fill: false,
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255,159,64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 64, 0, 1)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192, 192, 192, 1)'

        ],

        backgroundColor: [
          'rgba(255, 206, 86, 0.65)',
          'rgba(255, 99, 132, 0.65)',
          'rgba(54, 162, 235, 0.65)',
          'rgba(75, 192, 192, 0.65)',
          'rgba(255,159,64,0.90)',
          'rgba(153, 102, 255, 0.65)',
          'rgba(255, 0, 255, 0.55)',
          'rgba(255, 64, 0, 0.65)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192,192,192,0.9)'

        ],
        borderWidth: 1
      }]
    },
    options: {},
  });
}
//northland
window.addEventListener('load', region_nor);
async function region_nor() {
  const ctx = document.getElementById('ind_nor').getContext('2d');
  const no = await getIndustry();
  const ind_nor = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: no.sector,

      datasets: [{
        label: 'Northland',

        data: no.region5,
        fill: false,
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255,159,64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 64, 0, 1)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192, 192, 192, 1)'

        ],

        backgroundColor: [
          'rgba(255, 206, 86, 0.65)',
          'rgba(255, 99, 132, 0.65)',
          'rgba(54, 162, 235, 0.65)',
          'rgba(75, 192, 192, 0.65)',
          'rgba(255,159,64,0.90)',
          'rgba(153, 102, 255, 0.65)',
          'rgba(255, 0, 255, 0.55)',
          'rgba(255, 64, 0, 0.65)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192,192,192,0.9)'

        ],
        borderWidth: 1
      }]
    },
    options: {},
  });
}
//waikato
window.addEventListener('load', region_wai);
async function region_wai() {
  const ctx = document.getElementById('ind_wai').getContext('2d');
  const wi = await getIndustry();
  const ind_wai = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: wi.sector,

      datasets: [{
        label: 'Waikato',

        data: wi.region4,
        fill: false,
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255,159,64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 64, 0, 1)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192, 192, 192, 1)'

        ],

        backgroundColor: [
          'rgba(255, 206, 86, 0.65)',
          'rgba(255, 99, 132, 0.65)',
          'rgba(54, 162, 235, 0.65)',
          'rgba(75, 192, 192, 0.65)',
          'rgba(255,159,64,0.90)',
          'rgba(153, 102, 255, 0.65)',
          'rgba(255, 0, 255, 0.55)',
          'rgba(255, 64, 0, 0.65)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192,192,192,0.9)'

        ],
        borderWidth: 1
      }]
    },
    options: {},
  });
}
//nelson-tasman
window.addEventListener('load', region_nel);
async function region_nel() {
  const ctx = document.getElementById('ind_nel').getContext('2d');
  const ne = await getIndustry();
  const ind_nel = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ne.sector,

      datasets: [{
        label: 'Nelson',

        data: ne.region9,
        fill: false,
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255,159,64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 64, 0, 1)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192, 192, 192, 1)'

        ],

        backgroundColor: [
          'rgba(255, 206, 86, 0.65)',
          'rgba(255, 99, 132, 0.65)',
          'rgba(54, 162, 235, 0.65)',
          'rgba(75, 192, 192, 0.65)',
          'rgba(255,159,64,0.90)',
          'rgba(153, 102, 255, 0.65)',
          'rgba(255, 0, 255, 0.55)',
          'rgba(255, 64, 0, 0.65)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192,192,192,0.9)'

        ],
        borderWidth: 1
      }]
    },
    options: {},
  });
}
//hawke's bay
window.addEventListener('load', region_haw);
async function region_haw() {
  const ctx = document.getElementById('ind_haw').getContext('2d');
  const hw = await getIndustry();
  const ind_haw = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: hw.sector,

      datasets: [{
        label: 'Hawke Bay',

        data: hw.region8,
        fill: false,
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255,159,64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 64, 0, 1)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192, 192, 192, 1)'

        ],

        backgroundColor: [
          'rgba(255, 206, 86, 0.65)',
          'rgba(255, 99, 132, 0.65)',
          'rgba(54, 162, 235, 0.65)',
          'rgba(75, 192, 192, 0.65)',
          'rgba(255,159,64,0.90)',
          'rgba(153, 102, 255, 0.65)',
          'rgba(255, 0, 255, 0.55)',
          'rgba(255, 64, 0, 0.65)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192,192,192,0.9)'

        ],
        borderWidth: 1
      }]
    },
    options: {},
  });
}
//taranaki
window.addEventListener('load', region_tar);
async function region_tar() {
  const ctx = document.getElementById('ind_tar').getContext('2d');
  const ta = await getIndustry();
  const ind_tar = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ta.sector,

      datasets: [{
        label: 'Taranaki',

        data: ta.region7,
        fill: false,
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255,159,64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 64, 0, 1)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192, 192, 192, 1)'

        ],

        backgroundColor: [
          'rgba(255, 206, 86, 0.65)',
          'rgba(255, 99, 132, 0.65)',
          'rgba(54, 162, 235, 0.65)',
          'rgba(75, 192, 192, 0.65)',
          'rgba(255,159,64,0.90)',
          'rgba(153, 102, 255, 0.65)',
          'rgba(255, 0, 255, 0.55)',
          'rgba(255, 64, 0, 0.65)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192,192,192,0.9)'

        ],
        borderWidth: 1
      }]
    },
    options: {},
  });
}
//westcoast
window.addEventListener('load', region_wes);
async function region_wes() {
  const ctx = document.getElementById('ind_wes').getContext('2d');
  const we = await getIndustry();
  const ind_wes = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: we.sector,

      datasets: [{
        label: 'West Coast',

        data: we.region7,
        fill: false,
        borderColor: [
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255,159,64, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 0, 255, 1)',
          'rgba(255, 64, 0, 1)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192, 192, 192, 1)'

        ],

        backgroundColor: [
          'rgba(255, 206, 86, 0.65)',
          'rgba(255, 99, 132, 0.65)',
          'rgba(54, 162, 235, 0.65)',
          'rgba(75, 192, 192, 0.65)',
          'rgba(255,159,64,0.90)',
          'rgba(153, 102, 255, 0.65)',
          'rgba(255, 0, 255, 0.55)',
          'rgba(255, 64, 0, 0.65)',
          'rgba(0, 0, 255, 0.65)',
          'rgba(192,192,192,0.9)'

        ],
        borderWidth: 1
      }]
    },
    options: {},
  });
}

/* first data is fetched from the file then uploaded into the grapch above. 
"region1,region2,......" represents each column in the file and each column in the file represents each region.
"sector" below represents the column industry in the file.
code below fetches all the columns from the csv data.
*/

async function getIndustry() {

  const response = await fetch('data/industry.csv');
  const data = await response.text();
  const sector = [];
  const region1 = [];
  const region2 = [];
  const region3 = [];
  const region4 = [];
  const region5 = [];
  const region6 = [];
  const region7 = [];
  const region8 = [];
  const region9 = [];
/* -------push each column ----------*/
  const rows = data.split('\n').slice(1);
  rows.forEach(column => {
    const rows = column.split(',');
    sector.push(rows[0]);
    region1.push(parseFloat(rows[1]));
    region2.push(parseFloat(rows[2]));
    region3.push(parseFloat(rows[3]));
    region4.push(parseFloat(rows[4]));
    region5.push(parseFloat(rows[5]));
    region6.push(parseFloat(rows[6]));
    region7.push(parseFloat(rows[7]));
    region8.push(parseFloat(rows[8]));
    region9.push(parseFloat(rows[9]));

  });
  return {
    sector,
    region1,
    region2,
    region3,
    region4,
    region5,
    region6,
    region7,
    region8,
    region9
  };
}