let balance = 0; // начальный баланс
let username = ""; // будет получен с сервера или через бота

// Обновляем отображение
function updateDisplay() {
    document.getElementById("balance").innerText = balance + "₽";
}

// Добавление
function addBalance() {
    if(!isAdmin()) return alert("Вы не можете изменять баланс");

    let val = parseInt(document.getElementById("addInput").value);
    if (!isNaN(val)) {
        balance += val;
        sendBalance();
        document.getElementById("addInput").value = "";
        updateDisplay();
    }
}

// Вычитание
function subBalance() {
    if(!isAdmin()) return alert("Вы не можете изменять баланс");

    let val = parseInt(document.getElementById("subInput").value);
    if (!isNaN(val)) {
        balance -= val;
        sendBalance();
        document.getElementById("subInput").value = "";
        updateDisplay();
    }
}

// Отправка баланса боту
function sendBalance() {
    if(window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify({balance: balance}));
    }
}

// Проверка, является ли пользователь админом
function isAdmin() {
    return username === "Obichniy_kotya" || username === "NeKzit";
}

// Инициализация
updateDisplay();