// Code your solution in this file
function findMatching (collection, string) {
  matchingItems = collection.filter( function (item) {
    item.toLowerCase() === string.toLowerCase();
  });

  return matchingItems;
}

function fuzzyMatch () {

}

function matchName () {

}
