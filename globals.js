function setGlobals() {
  setGenerals();
  setPlanetYears();
}

function setGenerals() {
  window.isRunning = false;
  window.earthYear = '20'; // Proportion of earth year 20 = 1 year in 10 seconds.
}

function setPlanetYears() {
  window.mercuryYears = 0;
  window.venusYears = 0;
  window.earthYears = 0;
  window.marsYears = 0;
  window.jupterYears = 0;
  window.saturnYears = 0;
  window.uranusYears = 0;
  window.neptuneYears = 0;
}

setGlobals();
