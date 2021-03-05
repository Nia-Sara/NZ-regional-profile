/* -------js function for displaying qualification in demand ----------*/

/* -------code below receives the data from 
the function getQualification() 
and displays on chart----------*/


// wellington
window.addEventListener('load', region_welli);
async function region_welli() {
  const ctx = document.getElementById('qul_welli').getContext('2d');
  const wellington = await getQualification();
  const qul_welli = new Chart(ctx, {
    type: 'pie',
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
//marlborough
window.addEventListener('load', region_marlb);
async function region_marlb() {
  const ctx = document.getElementById('qul_marlb').getContext('2d');
  const marlborough = await getQualification();
  const qul_marlb = new Chart(ctx, {
    type: 'pie',
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
//auckland
window.addEventListener('load', region_auk);
async function region_auk() {
  const ctx = document.getElementById('qul_auk').getContext('2d');
  const auckland = await getQualification();
  const qul_auk = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: auckland.sector,

      datasets: [{
        label: 'Auckland',

        data: auckland.region2,
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
  const ctx = document.getElementById('qul_nor').getContext('2d');
  const nor = await getQualification();
  const qul_nor = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: nor.sector,

      datasets: [{
        label: 'Northland',

        data: nor.region1,
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
  const ctx = document.getElementById('qul_wai').getContext('2d');
  const welli = await getQualification();
  const qul_wai = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: welli.sector,

      datasets: [{
        label: 'Waikato',

        data: welli.region1,
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
  const ctx = document.getElementById('qul_nel').getContext('2d');
  const nel = await getQualification();
  const qul_nel = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: nel.sector,

      datasets: [{
        label: 'Nelson-Tasman',

        data: nel.region1,
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
  const ctx = document.getElementById('qul_haw').getContext('2d');
  const hw = await getQualification();
  const qul_haw = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: hw.sector,

      datasets: [{
        label: 'Hawke Bay',

        data: hw.region1,
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
  const ctx = document.getElementById('qul_tar').getContext('2d');
  const ta = await getQualification();
  const qul_tar = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ta.sector,

      datasets: [{
        label: 'Taranaki',

        data: ta.region1,
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

window.addEventListener('load', region_wes);
async function region_wes() {
  const ctx = document.getElementById('qul_wes').getContext('2d');
  const we = await getQualification();
  const qul_wes = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: we.sector,

      datasets: [{
        label: 'West Coast',

        data: we.region1,
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
"sector" below represents the column qualification in the file.
code below fetches all the columns from the csv data.
*/

async function getQualification() {

  const response = await fetch('data/qualification.csv');
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