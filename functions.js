// Wild Hab Create and Get Events
// Part 1: Get Events
// 1. create new repository for wildhab_web
// 2. version it with git
// 3. create htmldoc with button
// 4. on button click, get all events from wildhab database via fetch GET request
// 5. show events on web page in a readable/formatted way

function getEvents() {
    fetch('https://wildhab-api-r.web.app/events')
    .then(response => response.json())  
    .then(data => document.getElementById('events').innerHTML = JSON.stringify(data))
    .catch(error => console.log('error', error)) //needs to chained to the last .then
}

// Part 2: Create Events
// 1. create html form with input fields for event properties
// 2. make a new button
// 3. on button click, submit event to database with fetch POST request
// 4. show confirmation to the user that event was sent successfully or failed
// 5. test that event was saved by clicking button to get events again and confirming your new event is there