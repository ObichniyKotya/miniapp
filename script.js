let balance = 0;

// Получаем username из Telegram
let username = "";
if (window.Telegram && window.Telegram.WebApp) {
    username = Telegram.WebApp.initDataUnsafe.user.username || "";
}

// Проверка админа
function isAdmin() {
    return username === "Obichniy_kotya" || username === "NeKzit";
}

// Обновление отображения
function updateDisplay() {
    document.getElementById("balance").innerText = balance + "₽";
}

// Добавление
function addBalance() {
    if(!isAdmin()) return alert("Вы не можете изменять баланс");

    let val = parseInt(document.getElementById("addInput").value);
    if(!isNaN(val)){
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
    if(!isNaN(val)){
        balance -= val;
        sendBalance();
        document.getElementById("subInput").value = "";
        updateDisplay();
    }
}

// Отправка значения боту
function sendBalance() {
    if (window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify({balance: balance}));
    }
}

updateDisplay();�ация
updateDisplay();