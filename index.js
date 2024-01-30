const planets = {
  mercury: {
    element: document.getElementById('mercury'),
    proportion: 24.1, // percent of earth year
    yearRef: 'mercuryYears',
  },
  venus: {
    element: document.getElementById('venus'),
    proportion: 61.56, // percent of earth year
    yearRef: 'venusYears',
  },
  earth: {
    element: document.getElementById('earth'),
    proportion: 100, // percent of earth year
    yearRef: 'earthYears',
  },
  mars: {
    element: document.getElementById('mars'),
    proportion: 188, // percent of earth year
    yearRef: 'marsYears',
  },
  jupter: {
    element: document.getElementById('jupter'),
    proportion: 1186, // percent of earth year
    yearRef: 'jupterYears',
  },
  saturn: {
    element: document.getElementById('saturn'),
    proportion: 2946, // percent of earth year
    yearRef: 'saturnYears',
  },
  uranus: {
    element: document.getElementById('uranus'),
    proportion: 8400, // percent of earth year
    yearRef: 'uranusYears',
  },
  neptune: {
    element: document.getElementById('neptune'),
    proportion: 16479, // percent of earth year
    yearRef: 'neptuneYears',
  },
};

function updateSolarSystemScale() {
  Object.values(planets).forEach((planet) => {
    planet.element.style.animation = `orbit ${
      ((planet.proportion / 2) * window.earthYear) / 100
    }s linear infinite`;
  });

  console.log('updated');

  if (!window.isRunning) {
    stop();
    return;
  }

  window.requestAnimationFrame(updateSolarSystemScale);
}

function stop() {
  window.isRunning = false;
  clearPlanetsYearIntervals();
  Object.values(planets).forEach((planet) => {
    planet.element.style.animation = ``;
  });
}

function updatePlanetsYears() {
  Object.values(planets).forEach((planet) => {
    if (!window.intervals) window.intervals = [];

    const currentInterval = window.setInterval(() => {
      const ref = planet.yearRef;
      window[ref] += 1;
    }, (((planet.proportion / 2) * window.earthYear) / 100) * 1000);

    window.intervals.push(currentInterval);
  });
}

function clearPlanetsYearIntervals() {
  window.intervals.forEach((interval) => window.clearInterval(interval));
}
