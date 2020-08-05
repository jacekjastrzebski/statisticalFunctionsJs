function runningTotal(array, averageTimePeriod) {
  const averages = []
  let average
  let i,j
  let counter
  for (i=0; i<array.length; i=i+averageTimePeriod) {
    average = 0
    counter = 0
    for (j=i; j<i+averageTimePeriod; j++) { 
      if (isNaN(array[j])) {
        average = average + 0
      } else {
           average = average + array[j]
           counter= counter + 1
      }
    }
    average = average / counter
    averages.push(average);
  }
  
  return averages
}

const values = [1, 7, 1, 1, 8, 1, 1, 9, 1, 1, 10, 1]
console.log(runningTotal(values,3))
const values2 = [1, "a", 1, 1, 8, "z", 1, 9, 1, '123', 10, 1]
console.log(runningTotal(values2,3))
const values3 = [1, '7', 1, 1, 8, 1, 1, 9, 1, 1, 10, 1]
console.log(runningTotal(values3,3))


const values4 = [1, 7, 1, 1, 8, 1, 1, 9, 1, 1, 10, 1]
console.log(runningTotal(values4,2))
