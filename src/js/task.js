(() => {
  let play = true,
    activeHoleNumber = Math.floor(1 + Math.random() * 16);

  const getHole = (index) => document.querySelector(`#hole${index}`),
    deactivateHole = (index) => (getHole(index).className = "hole"),
    activateHole = (index) =>
      (getHole(index).className = "hole hole_has-devil"),
    getRandomNumber = (excludeNumber) => {
      const options = [];
      for (let num = 1; num <= 16; num++) {
        if (num !== excludeNumber) {
          options.push(num);
        }
      }
      const randomIndex = Math.floor(Math.random() * options.length);
      return options[randomIndex];
    },
    next = () =>
      setInterval(() => {
        if (!play) {
          return;
        }
        deactivateHole(activeHoleNumber);
        activeHoleNumber = getRandomNumber(activeHoleNumber);
        activateHole(activeHoleNumber);
      }, 1000);

  next();
})();
