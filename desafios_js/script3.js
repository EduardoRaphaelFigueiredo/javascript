const bill = 15;
const tip = 50 <= bill && bill <= 300 ? console.log(`The bill was ${bill} and the tip was ${bill * 0.15}, so the total value was ${bill + (bill * 0.15)}`) : console.log(`The bill was ${bill} and the tip was ${bill * 0.25}, so the total value was ${bill + (bill * 0.20)}`);