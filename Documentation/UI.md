## Shadcn UI

#### Button
Install using
```sh
npx shadcn-ui@latest add button
```
and Add in the code like this
```js
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
      ...
      <Button variant="destructive">Hello</Button>
      ...
  )
}
```
