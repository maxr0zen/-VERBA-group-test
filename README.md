# Verba Group — JavaScript, задача №2

Минимальный проект с решением второй JavaScript-задачи из тестового задания.

## Задача

Из ответа API:

```js
const response = {
  success: true,
  appointments: [
    { id: "A-101", doctor: "Иванов", time: "10:00" },
    { id: "A-102", doctor: "Петров", time: "14:30" }
  ]
};
```

нужно получить новый массив:

```js
[
  "Иванов — 10:00",
  "Петров — 14:30"
]
```

## Решение

Функция `mapAppointmentSummaries` использует `.map()` и шаблонную строку:

```js
export function mapAppointmentSummaries(response) {
  return response.appointments.map(
    ({ doctor, time }) => `${doctor} — ${time}`
  );
}
```

Исходный массив не изменяется. Поле `id` не используется, поскольку его нет в требуемом результате.

## Структура проекта

```text
src/
  javascriptTasks.js  функция решения
  demo.js             пример запуска
test/
  project.test.js     автоматическая проверка результата
package.json          команды проекта
```

## Запуск

Требуется Node.js 20 или новее. Внешних зависимостей нет.

```bash
npm start
```

Либо напрямую:

```bash
node src/demo.js
```

## Тесты

```bash
npm test
```

Либо напрямую:

```bash
node --test
```

Ожидаемый результат запуска:

```text
[ 'Иванов — 10:00', 'Петров — 14:30' ]
```
