const btnVisualizar = document.getElementById('btnVisualizar');

btnVisualizar.addEventListener('click', () => {
  const latitude = -10.9299865;
  const longitude = -37.0557959;

  window.open(`https://www.google.com/maps/place/R.+Dep.+Euclídes+Paes+Mendonça,+Aracaju+-+SE,+49020-460/@-10.9297774,-37.0562022,17z/data=!3m1!4b1!4m6!3m5!1s0x71ab39088901ddb:0x982c7340725d49ae!8m2!3d-10.9297774!4d-37.0536219!16s%2Fg%2F1ymv9xxz5?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D${latitude},${longitude}`);
});