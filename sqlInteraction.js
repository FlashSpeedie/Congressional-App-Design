/**
 * Fetches the JSON string for the provided email and returns a promise.
 * @param {String} email - The email to fetch the json string from.
 * @returns {Promise} - A promise that resolves to the fetched data or an error.
 */
function fetchData(email) {
    return fetch('getJSON.php', {
        method: 'POST',
        body: JSON.stringify({
            email: email
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse JSON response
    })
    .then(data => {
        if (data.error) {
            throw new Error('Error: ' + data.message);
        } else {
            return data.jsonFile; // Return the jsonFile data
        }
    })
    .catch(error => {
        console.error('Fetch operation failed:', error);
        throw error; // Propagate the error to be handled by the caller
    });
}

/**
 * email index to post to, json data string to post
 * 
 * @param {String} email 
 * @param {String} data 
 */
function postData(email, data){
    fetch('postJSON.php', {
        method: 'POST',
        body: JSON.stringify({
            email: email,
            jsonFile: data
        })
    })
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error('Network response was not ok.');
    })
    .then(data => {
        alert('Data saved successfully!');
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}