window.addEventListener('DOMContentLoaded', event => getVisitCount());

const functionAPI = "https://myvisitcounter.azurewebsites.net/api/MyVisitCounter?code=IjOE7bUdJ84IttmG1DVZLvhAU3FnGm61LdcS3t3YqfdiAzFunENVpg==";

const getVisitCount = () => {
    let count = 0;
    fetch(functionAPI)
        .then(response => response.json())
        .then(response => document.getElementById("counter").innerText = response.count)
        .catch(error => console.log(error));
    return count;
}