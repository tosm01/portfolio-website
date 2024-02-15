async function submitContactForm() {
    sender_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    message = document.getElementById("message").value;

    body = `${message}\nName: ${sender_name}\nEmail: ${email}`;

    let url = "https://myazureemailservice.azurewebsites.net/api/v1/email";
    let data = { "subject": subject, "body": body, "recipients": ["tahaozairo@gmail.com"], "sender": "PortfolioContact@2a0822a6-cebc-42c5-b420-029e4dc18461.azurecomm.net" };

    try {
        let res = await fetchWithTimeout(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            timeout: 5000
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

async function fetchWithTimeout(resource, options = {}) {
    const { timeout = 8000 } = options;
    
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal  
    });
    clearTimeout(id);
    return response;
  }

document.getElementById("submitButton").addEventListener("click", submitContactForm);