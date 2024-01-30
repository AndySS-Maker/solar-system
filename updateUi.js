const planetYearsLabels = [
  'mercuryYears',
  'venusYears',
  'earthYears',
  'marsYears',
  'jupterYears',
  'saturnYears',
  'uranusYears',
  'neptuneYears',
];

function updateUi() {
  planetYearsLabels.forEach((planetYear) => {
    const element = document.getElementById(planetYear);

    element.innerHTML = `${planetYear.split('Y').join(' y')}: ${
      window[planetYear]
    }`;
  });

  window.requestAnimationFrame(updateUi);
}
