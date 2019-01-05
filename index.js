// Return drivers with the given name (case-insensitive)
function findMatching (driverList, name) {
  matchingDrivers = driverList.filter( function (driver) {
    return driver.toLowerCase() === name.toLowerCase();
  });

  return matchingDrivers;
}

// Return drivers that have a name that begins with the given string
function fuzzyMatch (driverList, string) {
  const pattern = new RegExp("^" + string.toLowerCase());

  matchingDrivers = driverList.filter( function (driver) {
    return driver.toLowerCase().match(pattern);
  });

  return matchingDrivers;
}

// Return driver objects if the given string matches the name key
function matchName (driverList, searchString) {
  matchingDrivers = drivers.filter( function (driver) {
    return driver.name.toLowerCase() === searchString.toLowerCase();
  });

  return matchingDrivers;
}
