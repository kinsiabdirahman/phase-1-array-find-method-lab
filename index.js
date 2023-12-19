// code your solution here
// Defining the function superbowlWin
function superbowlWin(array) {
  // Using the find() method to search for an object with a result property equal to "W"
  const win = array.find((obj) => obj.result === "W");
  // If a win is found, return the year property of the win object
  // If no win is found, return undefined
  return win ? win.year : undefined;
}
