// index.js
import { Popover } from './widget.js';
import './style.css'; // подключение стилей
document.addEventListener('DOMContentLoaded', () => {
  // Создаём кнопку, которая будет триггером для popover
  const btn = document.createElement('button');
  btn.id = 'popover-trigger';
  btn.textContent = 'Click to toggle popover';
  btn.style.position = 'relative'; // для демонстрации ориентации
  btn.style.margin = '100px';
  btn.style.color = 'white';
  btn.style.backgroundColor = 'red'
  btn.style.border = '5px solid red'
  btn.style.borderRadius = '5px'
  document.body.appendChild(btn);

  // Инициализируем popover для созданной кнопки
  new Popover(btn, {
    title: 'Popover title',
    text: "And here's some amazing content. It's very engaging. Right?"
  });
});