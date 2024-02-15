window.addEventListener('DOMContentLoaded', event => getVisitCount());

const functionAPI = "https://myvisitcounter.azurewebsites.net/api/MyVisitCounter?code=ygvhwLXj70a2twyzJ8kVUSJV9h9Q5A7LR2PPRbtRv0NWAzFuT4iVWw==";

const getVisitCount = () => {
    let count = 0;
    fetch(functionAPI)
        .then(response => response.json())
        .then(response => document.getElementById("counter").innerText = response.count)
        .catch(error => console.log(error));
    return count;
}