// // useful options
// // style can be currency, decimal, percent or unit.
// // unit: Used when style is unit, Example: Celsius, foot, kilogram, megabyte
// // notation: can be standard, scientific, engineering, or compact
//
// // Compact Notation
// const likesFormatter = new Intl.NumberFormat('en-US', {
//     notation: 'compact',
//     compactDisplay: 'short'
// });
// console.log(likesFormatter.format(1200000))
//
// // Unit formatting
// const speedFormatter = new Intl.NumberFormat('en-US', {
//     style: 'unit',
//     unit: 'mile-per-hour',
//     unitDisplay: 'long'
// })
// console.log(speedFormatter.format(65))
//
//
//
// // Date and time formatting
// // style shortcuts: use dateStyle and timeStyle ('full', 'long', 'medium', 'short') for quick, standard formats.
// // Specific parts: manually toggle weekday, year, month, day, hour, minute.
// // Relative time: use Intl.RelativeTimeFormat for "3 days ago" or "tomorrow"
// const date = new Date();
//
// const fullFormatter = new Intl.DateTimeFormat('en-US', {
//     dateStyle: 'full',
//     timeStyle: 'short'
// })
// console.log(fullFormatter.format(date))
//
// const rtf = new Intl.RelativeTimeFormat('en', {numeric: 'auto'});
// console.log(rtf.format(-1, "day"));
// console.log(rtf.format(2, "weeks"));


// Challenge 1: The Social Media Stats Dashboard
// Goal: Create a function that formats large engagement numbers (likes, views) into a readable "compact" format.
// Function Name: formatStats
// Parameter: statsArray (an array of large numbers, e.g., [1500, 25000, 1200000])
// Action: 1. Create an Intl.NumberFormat object using notation: 'compact' and compactDisplay: 'short'. 2. Use a loop (or .map()) to format every number in the array.
// Output: Return a new array of strings.
// Example Call: formatStats([1500, 25000]) → ["1.5K", "25K"]

function formatStats(statsArray){
     const a = new Intl.NumberFormat("en-US", {
        notation: 'compact',
        compactDisplay: 'short'
    });

     for (const item of statsArray) {
         console.log(a.format(item));
     }

}
formatStats([1500, 25000]);

function formatWeights(weights, countryCode){
    const a = new Intl.NumberFormat(countryCode, {
        style: 'unit',
        unit: 'gram',
        unitDisplay: 'long'
    })
    for (const item of weights) {
        console.log(a.format(item));
    }
}
formatWeights([500, 1000], "en-US");

function getLastSeen(daysAgo){
    const a = new Intl.RelativeTimeFormat("en-US", {
        numeric: 'auto'
    })
    return `${a.format(daysAgo, "day")}`
}
console.log(getLastSeen(-1));

const formatBookingDate = (dateObj) => {
    const a = Intl.DateTimeFormat("en-US", {
        weekday: 'long',
        month: 'short',
        day: 'numeric'
    })
    return `${a.format(dateObj)}`
}
console.log(formatBookingDate(new Date()));

const displayUserSummary = (userObj) => {

    const { name, status, lastActive } = userObj;

    let n = name.trim();
    let cleanName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

    const cleanStats = new Intl.NumberFormat("en-US", {
        notation: 'compact',
        compactDisplay: 'short'
    }).format(status);

    const cleanTime = new Intl.RelativeTimeFormat("en-US", {
        numeric: 'auto',
    }).format(lastActive, "day");

    return `${cleanName} | ${cleanStats} | ${cleanTime}`;
}
console.log(displayUserSummary({
    name: "rICARDO",
    status: 1500,
    lastActive: -2
}));

const processTeam = function(team){
    const summaries = team.map(user => displayUserSummary(user));
    summaries.forEach(sum => console.log(sum));
}
const team = [
    { name: "alice", status: 5000, lastActive: -1 },
    { name: "BOB", status: 1200000, lastActive: -5 },
    { name: "charlie", status: 150, lastActive: 0 }
];
processTeam(team);







