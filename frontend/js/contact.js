async function submitContactForm() {
    sender_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;

    body = `${message}\nName: ${sender_name}\nEmail: ${email}`;

    let url = "https://myazureemailservice.azurewebsites.net/api/v1/email";
    let data = { "subject": subject, "body": body, "recipient": "tahaozairo@gmail.com", "sender": "PortfolioContact@9260970b-a640-44a8-9c43-02105dceabe8.azurecomm.net" };

    try {
        let res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            alert("Email sent");
        } else {
            alert("Error: Sending the Email failed. Please try again.");
        }
    } catch (error) {
        alert("Error: Sending the Email failed. Please try again.");
    }
}

document.getElementById("submitButton").addEventListener("click", submitContactForm);