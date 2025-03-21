// Функция для запроса геолокации
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showLocation, handleError);
    } else {
        alert("Геолокация не поддерживается этим браузером.");
    }
}

// Функция для отображения полученной геолокации
function showLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    // Добавляем координаты в скрытые поля формы
    document.getElementById("latitude").value = latitude;
    document.getElementById("longitude").value = longitude;

    // Выводим в консоль информацию о местоположении
    console.log(`Широта: ${latitude}, Долгота: ${longitude}`);
}

// Обработка ошибок, если доступ к геолокации отклонен
function handleError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("Пользователь отклонил запрос на доступ к геолокации.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Информация о местоположении недоступна.");
            break;
        case error.TIMEOUT:
            alert("Запрос на получение местоположения не был выполнен в установленные сроки.");
            break;
        case error.UNKNOWN_ERROR:
            alert("Произошла неизвестная ошибка.");
            break;
    }

    // Дополнительное логирование ошибки в консоль для отладки
    console.error("Ошибка получения геолокации:", error);
}

// Добавляем обработчик события для кнопки геолокации
document.getElementById("getLocationBtn").addEventListener("click", getLocation);
