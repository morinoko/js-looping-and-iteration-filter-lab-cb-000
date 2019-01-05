// Return drivers with the given name (case-insensitive)
function findMatching (drivers, name) {
  matchingDrivers = drivers.filter( function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });

  return matchingItems;
}

// Return drivers that have a name that begins with the given string
function fuzzyMatch (drivers, partialName) {
  matchingDrivers = drivers.filter( function (driver) {
    return driver.toLowerCase().includes(partialName, 0);
  });

  return matchingDrivers;
}

function matchName () {

}
