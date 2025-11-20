# SkyPro Express REST API

Сервер на Express.js + MongoDB, предоставляющий REST API для управления пользователями и книгами.

## Требования

- Node.js 18+
- локальный или удалённый MongoDB

## Установка

```bash
git clone https://github.com/ILYAZAMNIUS97/skypro-express.git
cd skypro-express
npm install
```

## Настройка окружения

Создайте файл `.env`, используя `env.example`:

```
cp env.example .env
```

Отредактируйте `MONGODB_URI`, чтобы он указывал на вашу базу MongoDB.

## Скрипты

- `npm run start` — запуск в прод-режиме.
- `npm run dev` — запуск с перезапуском через nodemon.

## Маршруты

Базовый URL: `http://127.0.0.1:3005/api`

### Пользователи

- `GET /users` — список пользователей.
- `GET /users/:id` — получить пользователя по `id`.
- `PUT /users/:id` — изменить пользователя.
- `DELETE /users/:id` — удалить пользователя.

### Книги

- `GET /books` — список книг.
- `GET /books/:id` — получить книгу по `id`.
- `PUT /books/:id` — изменить книгу.
- `DELETE /books/:id` — удалить книгу.

## Коды ответов

- `200` — успешные ответы с JSON.
- `404` — сущность или маршрут не найдены.
- `500` — внутренняя ошибка сервера.

Дополнительно доступен маршрут `GET /health` для проверки статуса сервера.
