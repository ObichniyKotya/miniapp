const tg = window.Telegram.WebApp;

// Список разрешенных пользователей
const ALLOWED_USERS = ['Obichniy_kotya', 'NekZit_'];

// Инициализация Mini App
tg.expand();

const user = tg.initDataUnsafe?.user;
const appContainer = document.getElementById('app');
const deniedContainer = document.getElementById('access-denied');
const balanceEl = document.getElementById('balance');
const amountInput = document.getElementById('amount');

// Генерируем уникальный ключ для сохранения баланса именно этого пользователя
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
