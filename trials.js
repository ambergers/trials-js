// ///////////////////////////////////////////////////////
// PART 1
// Account information:

let accountHolder = "Balloonicorn";
const accountNumber = "123456";
let businessName = "Balloonicorn's Cupcake Shop";

const addresses = ["123 Main Street", "683 Sutter Street", "1600 Pennsylvania Ave"];

const phoneNumbers = new Map();

// Add some phone numbers to our map
phoneNumbers.set('home', '510-867-5309')
            .set('mobile', '415-555-1212')
            .set('business', '415-123-4567');


// ///////////////////////////////////////////////////////
// Create User Info Display:

// Add function to print account information 
function printAccountInfo(name, number, businessName) {
  console.log(`Account Holder Name: ${name}`);
  console.log(`Account Holder Number: ${number}`);
  console.log(`Business Name: ${businessName}`);
}

// Add function to print all addresses, including a header
function showAddresses(addresses) {
  console.log('Addresses:');
  for (const address of addresses) {
    console.log(address);
  }
}

// Add function to print phone types and numbers
function showPhoneNums(phoneNumbers) {
  console.log('Phone Numbers:');
  phoneNumbers.forEach((x) => console.log(x));
}

// ///////////////////////////////////////////////////////
// Transactions:

// Create an empty map of transactions
transactions = new Map();

// Add function to add transactions
function addTransaction(date, amount) {
  transactions.set(date, amount);
}

// Use the function to add transactions
addTransaction('May-2', -500);
addTransaction('May-13', 1200);
addTransaction('May-15', -100);
addTransaction('May-21', -359);
addTransaction('May-29', 2200);

// Add function to show balance status


// Add function to show transactions


// ///////////////////////////////////////////////////////
// All Customer Info:

// Make an object with customer info


// Function to add customer attributes


// Add attributes for this user


// ///////////////////////////////////////////////////////
// Getting a Business Loan


// Function to return loan rate


// ///////////////////////////////////////////////////////
// Account Report


// Add function to show bank customer report



// ///////////////////////////////////////////////////////
// PART 2:
// Bank Manager

// Create map of customer addresses


// Write a function to return the address of a given person


// Add a function to create an employee schedule for the week 


// Add a function for weekly hours




