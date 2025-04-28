import { Popover } from './js/widget.js';
import './style.css'; // подключение стилей
document.addEventListener('DOMContentLoaded', () => {
  // Создаём кнопку, которая будет триггером для popover
  const btn = document.createElement('button');
  btn.id = 'popover-trigger';
  btn.textContent = 'Click to toggle popover';
  btn.classList.add('popover-trigger-btn'); // добавляем CSS класс
  document.body.appendChild(btn);
  // Инициализируем popover для созданной кнопки
  new Popover(btn, {
    title: 'Popover title',
    text: "And here's some amazing content. It's very engaging. Right?"
  });
});