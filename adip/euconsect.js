// Import d3-time library
import { utcDay } from 'd3-time';

// Function to count the number of days from a given date to now
function countDaysFrom(date) {
    const now = new Date();
    return utcDay.count(date, now);
}

// Example usage
const startDate = new Date(Date.UTC(2023, 0, 1)); // January 1, 2023, in UTC
const daysCount = countDaysFrom(startDate);

console.log(`Number of days from ${startDate.toISOString()} to now: ${daysCount}`);
