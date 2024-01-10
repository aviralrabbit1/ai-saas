### Routing via folder

If we put folder name in parenthesis, it won't be read as an URL path. `(folder_not_read_as_URL)`.
otherwise it will be available at `/` like `localhost:3000/folder_read_as_URL_without_paranthesis`.

#### Landing Page
```js
// app/(landing)/page.tsx
function LandingPage() {
  return (
    <div>
        Landing Page
    </div>
  )
}
export default LandingPage
```

#### Routed page
```js
// app/(dashboard)/(routes)/dashboard/page.tsx
const DashboardPage = () => {
  return (
    <div>
        DashboardPage
    </div>
  )
}
export default DashboardPage;
```
