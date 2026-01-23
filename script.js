let balance = 0;

Telegram.WebApp.ready();

let userId = Telegram.WebApp.initDataUnsafe.user.id;

// ВСТАВЬ СЮДА СВОИ ID
const ADMINS = [Obichniy_kotya, NekZit];

function isAdmin() {
    return ADMINS.includes(userId);
}

function updateDisplay() {
    document.getElementById("balance").innerText = balance + "₽";
}

function addBalance() {
    if (!isAdmin()) return alert("Вы не можете изменять баланс");

    let val = Number(document.getElementById("addInput").value);
    if (!isNaN(val)) {
        balance += val;
        sendBalance();
        updateDisplay();
    }
}

function subBalance() {
    if (!isAdmin()) return alert("Вы не можете изменять баланс");

    let val = Number(document.getElementById("subInput").value);
    if (!isNaN(val)) {
        balance -= val;
        sendBalance();
        updateDisplay();
    }
}

function sendBalance() {
    Telegram.WebApp.sendData(JSON.stringify({ balance }));
}

updateDisplay();").value);
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