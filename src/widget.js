// widget.js
export class Popover {
    constructor(triggerElement, options = {}) {
      if (!triggerElement) throw new Error('Отсутствует элемент-триггер');
      this.triggerElement = triggerElement;
      this.title = options.title || 'Заголовок';
      this.text = options.text || 'Текст описания';
      this.popover = null;
      this._createPopover();
      this._bindEvents();
    }
    _createPopover() {
      // Создаём контейнер для popover с базовыми стилями
      this.popover = document.createElement('div');
      this.popover.classList.add('popover');
      // Создаём элемент для заголовка
      const titleEl = document.createElement('div');
      titleEl.classList.add('popover-title');
      titleEl.textContent = this.title;
      // Создаём элемент для текста
      const textEl = document.createElement('div');
      textEl.classList.add('popover-text');
      textEl.textContent = this.text;
      // Добавляем элементы внутрь контейнера popover
      this.popover.appendChild(titleEl);
      this.popover.appendChild(textEl);
      
      // Изначально скрываем popover
      this.popover.style.display = 'none';
      // Добавляем в тело документа
      document.body.appendChild(this.popover);
    }
    _bindEvents() {
      // Показываем popover при клике на элемент-триггер
      this.triggerElement.addEventListener('click', (e) => {
        e.stopPropagation();
        // Если popover уже виден - скрываем, иначе показываем
        if (this.popover.style.display === 'none') {
          this.show();
        } else {
          this.hide();
        }
      });
      // При клике вне popover скрываем его
      document.addEventListener('click', (e) => {
        if (!this.popover.contains(e.target) && e.target !== this.triggerElement) {
          this.hide();
        }
      });
    }
    show() {
      this.popover.style.display = 'block';
      // Определяем размеры и позицию элемента-триггера
      const triggerRect = this.triggerElement.getBoundingClientRect();
      const popoverRect = this.popover.getBoundingClientRect();
      // Вычисляем позицию: показываем сверху относительно элемента
      const top = triggerRect.top - popoverRect.height - 10; // 10 пикселей отступ
      const left =
        triggerRect.left +
        triggerRect.width / 2 -
        popoverRect.width / 2;
      // Применяем стили для позиционирования
      this.popover.style.position = 'absolute';
      this.popover.style.top = `${top < 0 ? triggerRect.bottom + 10 : top}px`;
      this.popover.style.left = `${left < 0 ? 0 : left}px`;
      this.popover.style.zIndex = 1000;
    }
    hide() {
      this.popover.style.display = 'none';
    }
  }