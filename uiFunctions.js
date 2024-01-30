function setEarthYear(earthYear) {
  stop();
  window.earthYear = earthYear * -1;

  const scaleLabel = document.getElementById('scaleLabel');
  if (scaleLabel)
    scaleLabel.innerHTML = `One Earth year in ${
      10 - (10 - window.earthYear / 2)
    }s`;
}

function start() {
  console.log('start');
  window.isRunning = true;

  setPlanetYears();
  updateSolarSystemScale();
  updatePlanetsYears();
  updateUi();
}
