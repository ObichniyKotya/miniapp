let balance = parseInt(localStorage.getItem("balance")) || 100;

function updateDisplay() {
    document.getElementById("balance").innerText = balance + "₽";
}

function addBalance() {
    let val = parseInt(document.getElementById("addInput").value);
    if (!isNaN(val)) {
        balance += val;
        saveBalance();
        document.getElementById("addInput").value = "";
        updateDisplay();
    }
}

function subBalance() {
    let val = parseInt(document.getElementById("subInput").value);
    if (!isNaN(val)) {
        balance -= val;
        saveBalance();
        document.getElementById("subInput").value = "";
        updateDisplay();
    }
}

// Сохраняем баланс локально и отправляем боту
function saveBalance() {
    localStorage.setItem("balance", balance);
    if(window.Telegram.WebApp) {
        Telegram.WebApp.sendData(JSON.stringify({balance: balance}));
    }
}

updateDisplay();