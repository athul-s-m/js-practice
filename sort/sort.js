function sort(data) {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      if (data[i] > data[j]) {
        const temp = data[i];
        data[i] = data[j];
        data[j] = temp;
      } 
    }
  }

  return data;
}

function square(num) {
  return num * num;
}

function sumOf(data) {
  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    sum = sum + data[index];
  }

  return sum;
}

function mean(data) {
  return sumOf(data) / data.length;
}

function median(data) {
  const length = data.length; 
  const sortedData = sort(data); 
  const middleIndex = Math.floor(length / 2);
  return sortedData[middleIndex];
}

function standardDeviation(data) {
  const meanOfGiven = mean(data);
  let variance = 0;

  for (let index = 0; index < data.length; index++) {
    const deviation = square(meanOfGiven - data[index]);
    variance = variance + deviation;
  }

  return Math.sqrt(variance / data.length);
}

function main() {
  const data = [33, 38, 14, 61, 2, 60, 7, 90, 84, 76, 43, 93, 35, 13, 1];
  console.log('Shubhman Gill:')
  console.log('Median:', median(data));
  console.log('Mean:', mean(data));
  console.log('Standard Deviation:', standardDeviation(data));
}

main();
