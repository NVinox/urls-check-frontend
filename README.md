# Сервис проверки URL

Клиентское приложение для проверки url.

### Перед началом запуска необходимо установить [серверную часть приложения](https://github.com/NVinox/urls-check-backend).

## Запуск проекта

1. Клонировать репозиторий

```bash
git clone https://github.com/NVinox/urls-check-frontend.git
```

2. Установить зависимости

```bash
npm install
```

3. Создать внешнюю сеть Docker (Для связи с [бэкендом](https://github.com/NVinox/urls-check-backend))

```bash
docker network create urls-check-network
```

4. Объявить переменные окружения (**.env.development** - для dev, **.env.production** - для prod)

```bash
cp .env.example .env.development && cp .env.example .env.production
```

5. Собрать и запустить Docker

   5.1 Режим development

   ```bash
    make dev-up
   ```

   5.2 Режим production

   ```bash
    make prod-up
   ```

### Сервис готов к работе.
