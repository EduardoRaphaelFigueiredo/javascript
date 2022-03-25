const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBmi = markWeight / (markHeight ** 2);
const johnBmi = johnWeight / (johnHeight ** 2);
markHigherBmi = markBmi > johnBmi
console.log(markHigherBmi)
/* teste 2
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;
const markBmi = markWeight / (markHeight ** 2);
const johnBmi = johnWeight / (johnHeight ** 2);
markHigherBmi = markBmi > johnBmi
console.log(markHigherBmi) 
*/
if (markHigherBmi = true) {
    console.log("Mark has the greater BMI! \n\Congrats Mark 🙂")
} else {
    console.log("John has the greater BMI! \n\Congrats John 🙂")
}
console.log(`Mark's BMI is ${markBmi} and John's is ${johnBmi}`)

const shouldDrive = hasDriveLicense || hasGoodVision