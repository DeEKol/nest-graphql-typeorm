## Start
```
npm i
npm run start:dev
```

### Comments:
- Использовал typescript, TypeORM, NestJS, SQLite, GraphQL(Apollo)
- Как понял из `Resolver` надо использовать GraphQL, а не REST Controller
- SQLite использовал для простоты (могу и MySQL и PostgreSQL)
- Добавил цвета для проверки в `color.seed.ts`
- getColorsPaginated имеет не обязательный limit (default 5)
- Оставил несколько комментариев по коду, выделил `// !`
- Не делал ничего лишнего (eslint, CRUD, scripts и тд)
