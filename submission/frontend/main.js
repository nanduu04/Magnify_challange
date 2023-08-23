function submitForm() {
    let data = {
        name: document.getElementById('name').value,
        employee_id: document.getElementById('employee_id').value,
        department: document.getElementById('department').value,
        employment_status: document.getElementById('employment_status').value,
        email: document.getElementById('email').value,
        accommodation_request: document.getElementById('accommodation_request').value
    };

    fetch('http://127.0.0.1:3000/api/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Data submitted successfully');
        } else {
            alert('Error submitting data');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred.');
    });
}


function fetchData() {
    fetch('http://127.0.0.1:3000/api/data')
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            // For simplicity, just display the raw JSON data
            document.getElementById('displayArea').innerText = JSON.stringify(data.data, null, 2);
        } else {
            alert('Error fetching data');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while fetching data.');
    });
}

