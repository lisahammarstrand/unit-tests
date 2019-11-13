export const filterNumbers = (array, largerThan) => {
  // filter method needs a callback function, 'item' can be anything
  // less or equal to the second argument wich is largerThan, which is 25
  return array.filter(item => item <= largerThan)
}
