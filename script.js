const tg = window.Telegram.WebApp;
tg.expand();

const amountInput = document.getElementById('amount');

function sendToBot(type) {
    const val = amountInput.value;
    if (!val) return;

    // Формируем данные: например "+100" или "-100"
    const result = (type === 'add' ? '+' : '-') + val;

    // Отправляем данные боту и закрываем приложение
    tg.sendData(result);
    tg.close();
}

document.getElementById('add-btn').onclick = () => sendToBot('add');
document.getElementById('sub-btn').onclick = () => sendToBot('sub');
�льзователя
// Если ID недоступен (тест вне ТГ), используем 'guest'
const storageKey = user ? `balance_${user.id}` : 'balance_guest';

// Проверка доступа
if (user && ALLOWED_USERS.includes(user.username)) {
    appContainer.classList.remove('hidden');
    document.getElementById('username-display').innerText = `@${user.username}`;
    loadBalance();
} else {
    // Если запускаешь не через Телеграм, для теста можно закомментировать строку ниже
    deniedContainer.classList.remove('hidden');
}

// Загрузка баланса из памяти
function loadBalance() {
    const savedBalance = localStorage.getItem(storageKey) || 0;
    balanceEl.innerText = savedBalance;
}

// Сохранение баланса
function saveBalance(value) {
    localStorage.setItem(storageKey, value);
    balanceEl.innerText = value;
}

// Кнопка Плюс
document.getElementById('add-btn').addEventListener('click', () => {
    const val = parseFloat(amountInput.value);
    if (!isNaN(val)) {
        let current = parseFloat(balanceEl.innerText);
        saveBalance(current + val);
        amountInput.value = '';
    }
});

// Кнопка Минус
document.getElementById('sub-btn').addEventListener('click', () => {
    const val = parseFloat(amountInput.value);
    if (!isNaN(val)) {
        let current = parseFloat(balanceEl.innerText);
        saveBalance(current - val);
        amountInput.value = '';
    }
});

