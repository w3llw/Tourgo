document.getElementById("SupportForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const number = document.getElementById("phone").value;
    const firstName = document.getElementById("firstName").value; // Исправлено
    const lastName = document.getElementById("lastName").value;
    const text = document.getElementById("text").value;
    const latitude = document.getElementById("latitude").value; // Получаем широту
    const longitude = document.getElementById("longitude").value; // Получаем долготу

    // Проверка на обязательные поля
    if (!number || !firstName || !lastName || !text) {
        alert("Please fill in all required fields.");
        return;
    }

    const message = `
🤔 Новый тупой вопрос от пользователя 🙄

🧑‍💻Имя: ${firstName}
👨‍💻Фамилия: ${lastName}
📞Номер телефона: ${number}

❓Вопрос:
${text}

🌍 Геолокация: Широта: ${latitude}, Долгота: ${longitude}
`;

    const token = "7544009629:AAGRHJvkTRoHlj-P5xqYjmDhETxMIpNjoXg"; // Ваш токен
    const chatId = "5010842974"; // Ваш chat_id
    const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => {
            console.log("Response status: ", response.status);
            return response.json();
        })
        .then(data => {
            console.log("Telegram API Response:", data);
            if (data.ok) {
                showPopup();
            } else {
                alert("Error sending data: " + (data.description || 'Unknown error'));
            }
        })
        .catch(error => {
            console.error("Error sending data:", error);
            alert("Error sending data: " + error.message);
        });
});

function showPopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "flex";

    // Clear all input fields
    document.getElementById("SupportForm").reset();
}

function closePopup() {
    const popup = document.getElementById("popup");
    popup.style.display = "none";
}

document.getElementById("closePopupButton").addEventListener("click", closePopup);
