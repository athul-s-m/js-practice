const temperatureSheet = [[22, 23], [25, 24, 22], [29], 32];

const isLowTemperature = temperature => temperature < 32;
const isTemperatureLessThan32 = temperatureSheet.flat().every(isLowTemperature);

console.log(isTemperatureLessThan32);