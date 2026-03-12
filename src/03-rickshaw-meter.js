/**
 * 🛺 Auto Rickshaw Fare Calculator - Number & Math
 *
 * Bhaiyya ji ka auto rickshaw hai. Meter se fare calculate hota hai.
 * Different math operations chahiye — round karna, min/max nikalna,
 * strings se numbers parse karna. Tu Bhaiyya ji ka meter software bana!
 *
 * Methods to explore: parseFloat(), parseInt(), .toFixed(),
 *   Math.ceil(), Math.max(), Math.min(), Math.abs()
 *
 * Functions:
 *
 *   1. parseFare(fareString)
 *      - Customer bolte hain "152.50" as string — parseFloat() se number banao
 *      - Agar result NaN hai ya fareString string nahi hai, return -1
 *      - Example: parseFare("152.50") => 152.5
 *      - Example: parseFare("abc") => -1
 *
 *   2. roundFare(amount, decimalPlaces)
 *      - .toFixed(decimalPlaces) se fare round karo
 *      - Result STRING return hota hai (toFixed returns string)
 *      - Agar amount number nahi hai ya decimalPlaces non-negative integer nahi hai, return ""
 *      - Example: roundFare(152.567, 2) => "152.57"
 *      - Example: roundFare(152.567, 0) => "153"
 *
 *   3. calculateSurge(baseFare, surgeMultiplier)
 *      - baseFare * surgeMultiplier karo
 *      - Math.ceil() se always round UP (auto wale ko paisa milna chahiye!)
 *      - Agar baseFare ya surgeMultiplier positive number nahi hai, return 0
 *      - Example: calculateSurge(100, 1.5) => 150
 *      - Example: calculateSurge(73, 1.8) => 132 (Math.ceil(131.4))
 *
 *   4. findCheapestAndCostliest(...fares)
 *      - Rest parameter (...) se variable number of fares le
 *      - Math.min() aur Math.max() se cheapest aur costliest dhundho
 *      - Non-number values filter out karo
 *      - Agar koi valid number nahi mila, return null
 *      - Return: { cheapest, costliest }
 *      - Example: findCheapestAndCostliest(150, 80, 200) => { cheapest: 80, costliest: 200 }
 *
 *   5. getDistanceDifference(from, to)
 *      - parseInt() se string km markers ko numbers mein convert karo
 *      - Math.abs() se absolute difference nikalo (direction matter nahi karta)
 *      - Agar parse ke baad koi NaN hai, return -1
 *      - Example: getDistanceDifference(5, 12) => 7
 *      - Example: getDistanceDifference("15", "8") => 7
 *
 * @example
 *   parseFare("152.50")                    // => 152.5
 *   roundFare(152.567, 2)                  // => "152.57" 
 *   findCheapestAndCostliest(150, 80, 200) // => { cheapest: 80, costliest: 200 }
 */
export function parseFare(fareString) {
  let floatNum= parseFloat(fareString)
  if (isNaN(floatNum) ||typeof fareString!=="string"){
    return -1;
  }
  return floatNum;
  // Your code here
}

export function roundFare(amount, decimalPlaces) {
  if (isNaN(amount) || decimalPlaces<0 || !Number.isInteger(decimalPlaces)){
    return ""
  }
  return amount.toFixed(decimalPlaces)
  // Your code here
}

export function calculateSurge(baseFare, surgeMultiplier) {
  // Your code here
  if (baseFare*surgeMultiplier<0 || typeof baseFare!=="number" || typeof surgeMultiplier!=="number"){
    return 0
  }
  return Math.ceil(surgeMultiplier*baseFare)
}

export function findCheapestAndCostliest(...fares) {
  let fareFilter= fares.filter(f => typeof f==="number");
  let minimum = Math.min(...fareFilter)
  let maximum = Math.max(...fareFilter)
  if (fareFilter.length===0){
    return null;
  }
  return {cheapest: minimum,costliest: maximum}
  // Your code here
}

export function getDistanceDifference(from, to) {
  // Your code here
  let fromInt= parseInt(from);
  let toInt= parseInt(to);
  let difference= Math.abs(fromInt-toInt);
  if (Number.isNaN(fromInt)|| Number.isNaN(toInt)){
    return -1;
  }
  return difference;
}
