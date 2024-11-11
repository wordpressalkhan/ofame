async function fetchUrl(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Assuming response is JSON data
        return data; // Return the fetched data
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; // Re-throw the error to handle it further
    }
}
