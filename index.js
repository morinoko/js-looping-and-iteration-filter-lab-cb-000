// Return drivers with the given name (case-insensitive)
function findMatching (drivers, name) {
  matchingDrivers = drivers.filter( function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });

  return matchingDrivers;
}

// Return drivers that have a name that begins with the given string
function fuzzyMatch (drivers, string) {
  const stringLowerCased = string.toLowerCase();
  
  matchingDrivers = drivers.filter( function (driver) {
    return driver.toLowerCase().match(/$stringLowerCased/);
  });

  return matchingDrivers;
}

function matchName () {

}
