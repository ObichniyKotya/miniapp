let input = "";
let balance = parseInt(localStorage.getItem("balance")) || 0;

function updateDisplay() {
    document.getElementById("balance").innerText = balance + "₽";
}

function press(num) {
    input += num;
}

function clearInput() {
    input = "";
}

function addBalance() {
    if(input !== "") {
        balance += parseInt(input);
        saveBalance();
        input = "";
        updateDisplay();
    }
}

function subBalance() {
    if(input !== "") {
        balance -= parseInt(input);
        saveBalance();
        input = "";
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
