window.addEventListener('DOMContentLoaded', event => getVisitCount());

const functionAPI = "http://localhost:7071/api/MyVisitCounter";

const getVisitCount = () => {
    let count = 0;
    fetch(functionAPI)
        .then(response => response.json())
        .then(response => document.getElementById("counter").innerText = response.count)
        .catch(error => console.log(error));
    return count;
}