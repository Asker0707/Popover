import { Popover } from '../src/widget.js';
describe('Popover', () => {
  let triggerElement;
  let popover;
  beforeEach(() => {
    // Создаем элемент-триггер перед каждым тестом
    triggerElement = document.createElement('button');
    triggerElement.textContent = 'Test Button';
    document.body.appendChild(triggerElement);
    // Инициализируем Popover
    popover = new Popover(triggerElement, {
      title: 'Test Title',
      text: 'Test Text'
    });
  });
  afterEach(() => {
    // Очищаем DOM после каждого теста
    document.body.innerHTML = '';
  });
  test('should create popover with correct structure', () => {
    const popoverElement = document.querySelector('.popover');
    expect(popoverElement).toBeTruthy();
    
    const titleElement = popoverElement.querySelector('.popover-title');
    expect(titleElement).toBeTruthy();
    expect(titleElement.textContent).toBe('Test Title');
    
    const textElement = popoverElement.querySelector('.popover-text');
    expect(textElement).toBeTruthy();
    expect(textElement.textContent).toBe('Test Text');
  });
  test('should show/hide popover on trigger click', () => {
    const popoverElement = document.querySelector('.popover');
    
    // Изначально popover скрыт
    expect(popoverElement.style.display).toBe('none');
    
    // Кликаем по триггеру
    triggerElement.click();
    expect(popoverElement.style.display).toBe('block');
    
    // Кликаем еще раз
    triggerElement.click();
    expect(popoverElement.style.display).toBe('none');
  });
  test('should show/hide popover on trigger click', () => {
    // Проверяем методы show/hide через экземпляр popover
    expect(popover.popover.style.display).toBe('none');
    
    // Кликаем по триггеру
    triggerElement.click();
    expect(popover.popover.style.display).toBe('block');
    
    // Кликаем еще раз
    triggerElement.click();
    expect(popover.popover.style.display).toBe('none');
  });
  test('should throw error when no trigger element provided', () => {
    expect(() => new Popover()).toThrow('Отсутствует элемент-триггер');
  });
});