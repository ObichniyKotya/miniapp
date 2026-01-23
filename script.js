let balance = 0;

// Получаем user id из Telegram
let userId = null;

if (window.Telegram && window.Telegram.WebApp) {
    Telegram.WebApp.ready();
    userId = Telegram.WebApp.initDataUnsafe.user.id;
}

// УКАЖИ ТУТ ID АДМИНОВ
const ADMINS = [Obichniy_kotya, NeKzit]; // <-- заменить на реальные

function isAdmin() {
    return ADMINS.includes(userId);
}

function updateDisplay() {
    document.getElementById("balance").innerText = balance + "₽";
}

function addBalance() {
    if (!isAdmin()) {
        alert("Вы не можете изменять баланс");
        return;
    }

    let val = parseInt(document.getElementById("addInput").value);
    if (!isNaN(val)) {
        balance += val;
        sendBalance();
        updateDisplay();
    }
}

function subBalance() {
    if (!isAdmin()) {
        alert("Вы не можете изменять баланс");
        return;
    }

    let val = parseInt(document.getElementById("subInput").value);
    if (!isNaN(val)) {
        balance -= val;
        sendBalance();
        updateDisplay();
    }
}

function sendBalance() {
    if (window.Telegram && window.Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify({ balance: balance }));
    }
}

updateDisplay();.Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify({balance: balance}));
    }
}

updateDisplay();�ация
updateDisplay();