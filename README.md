# Portfolio Starter

Универсальный starter template для React-проектов на Vite.

Версия **1.0** — стабильная основа без бизнес-логики, лендинга и роутинга. Готов к клонированию и использованию в новых проектах.

## Описание

`portfolio-starter` — чистый шаблон с профессиональной структурой папок, базовыми UI-компонентами, глобальными стилями, alias `@`, линтингом, форматированием и CI.

Подробные правила архитектуры: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Стек

- React 19
- Vite
- JavaScript
- SCSS Modules
- ESLint
- Prettier
- EditorConfig
- npm

## Требования

- Node.js **24** или выше (см. `.nvmrc` и `engines` в `package.json`)
- npm

## Установка

```bash
npm install
```

Скопируйте переменные окружения при необходимости:

```bash
cp .env.example .env
```

## Запуск

```bash
npm run dev
```

Приложение будет доступно по адресу, который покажет Vite (обычно `http://localhost:5173`).

## Сборка

```bash
npm run build
```

Локальная проверка production-сборки:

```bash
npm run preview
```

## Дополнительные команды

```bash
npm run lint
npm run format
```

## Alias `@`

`@` указывает на папку `src/`:

```js
import Button from '@/components/ui/Button';
```

Настроено в `vite.config.js` и `jsconfig.json`.

## Структура проекта

```text
src/
  assets/          # шрифты, иконки, изображения
    fonts/
    icons/
    images/
  components/
    common/        # общие компоненты вне ui/layout
    layout/        # раскладка (Container)
      Container/
    ui/            # UI-примитивы
      Button/
      Section/
      Title/
  constants/       # routes, breakpoints, navigation, storage keys
  data/            # временные данные и моки
  hooks/           # переиспользуемые React-хуки
  layouts/         # оболочки страниц
  lib/             # конфигурация сторонних библиотек
  pages/           # страницы приложения
  services/        # API и внешние интеграции
  styles/          # глобальные стили
    globals.scss
    reset.scss
    variables.scss
    typography.scss
  utils/           # чистые вспомогательные функции
  App.jsx
  main.jsx

docs/
  ARCHITECTURE.md  # правила архитектуры и масштабирования
```

### Назначение основных папок

| Папка         | Назначение                                             |
| ------------- | ------------------------------------------------------ |
| `assets/`     | Статические ресурсы                                    |
| `components/` | Переиспользуемые компоненты (`ui`, `layout`, `common`) |
| `constants/`  | Общие константы приложения                             |
| `data/`       | Моки и временные данные до API                         |
| `hooks/`      | Переиспользуемые хуки                                  |
| `layouts/`    | Общие каркасы страниц                                  |
| `lib/`        | Setup сторонних библиотек (axios, swiper и т.д.)       |
| `pages/`      | Экраны приложения                                      |
| `services/`   | Работа с API                                           |
| `styles/`     | Reset, переменные, типографика, globals                |
| `utils/`      | Чистые утилиты без React                               |
| `docs/`       | Документация по архитектуре                            |

## CI

GitHub Actions (`.github/workflows/ci.yml`) запускается на `push` и `pull_request` в ветку `main`.

Порядок проверок:

1. Checkout
2. Setup Node.js (версия из `.nvmrc`)
3. `npm install`
4. `npm run lint`
5. `npm run build`

Если любой шаг падает — pipeline завершается ошибкой. Deploy в CI нет.

## Deploy

Проект готов к деплою через [Vercel](https://vercel.com).

1. Подключите GitHub-репозиторий к Vercel.
2. Framework Preset: `Vite`.
3. Build Command: `npm run build`.
4. Output Directory: `dist`.

Vercel сам отслеживает push. GitHub Actions отвечает только за проверки качества кода.
