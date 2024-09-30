/**
 * email to fetch the json string from
 * @param {String} email 
 */
function fetchData(email) {
    
    fetch('getJSON.php', {
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
            alert('ahhh');
        } else {
            window.localStorage.setItem('expenseData',data.jsonFile);
        }
    })
    .catch(error => {
        alert('There has been a problem with your fetch operation:'+ error);
        document.getElementById('output').textContent = 'Error fetching data.';
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
        window.location.href = 'graph.html';
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}