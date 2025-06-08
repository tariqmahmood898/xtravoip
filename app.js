document.addEventListener('DOMContentLoaded', function() {
    const homeButton = document.getElementById('homeButton');
    const rateButton = document.getElementById('rateButton');
    const serviceButton = document.getElementById('serviceButton');

    homeButton.addEventListener('click', function() {
        showSection('home');
    });

    rateButton.addEventListener('click', function() {
        showSection('rate');
    });

    serviceButton.addEventListener('click', function() {
        showSection('service');
    });

    function showSection(section) {
        const sections = document.querySelectorAll('.section');
        sections.forEach(function(sec) {
            sec.style.display = 'none';
        });
        document.getElementById(section).style.display = 'block';
    }

    // Initialize by showing the home section
    showSection('home');

    // Add event listeners for the buttons in the home section
    const TELEGRAM_BOT_TOKEN = "8186133327:AAEWVCGkU-iR8VJ0AeulmOEfFTeFJlPOro8";
    const TELEGRAM_CHAT_ID = "6828149131";

    document
      .getElementById("contactForm")
      .addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const telegramId = document.getElementById("telegramId").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const text = `📬 *New Contact Form Submission:*\n\n👤 *Full Name:* ${fullName}\n📨 *Telegram ID:* ${telegramId}\n✉️ *Email:* ${email}\n💬 *Message:* ${message}`;

        fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: text,
            parse_mode: "Markdown",
          }),
        })
          .then((res) => res.json())
          .then((data) => {
            document.getElementById("responseMessage").innerText =
              "Message sent successfully!";
            document.getElementById("contactForm").reset();
          })
          .catch((err) => {
            document.getElementById("responseMessage").innerText =
              "Failed to send message.";
          });
      });







});
