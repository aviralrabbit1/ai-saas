## Begin Project

### Initiate the project

```sh
npx create-next-app@latest ai-saas --typescript --tailwind --eslint
```

with
- Use the *App Router*
- Don't use the import alias (keeps the default "@" sign)

### Setup UI framwork

```sh
npx shadcn-ui@latest init -y
```
with
- Typescript
- style: *default*
- global CSS file: *app/globals.css*
- Use CSS vairables: *yes*
- import alias: *@/components* and *@/lib/utils*
- Use *React Server components* : *yes*
