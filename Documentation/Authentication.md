## Authentication

#### Using [Clerk](https://clerk.com/)

Paste the API keys in the `.env` file (lats used for prisma). Then install clerk using

```sh
npm install @clerk/nextjs
```

```js
// app/layout.tsx
import { ClerkProvider } from '@clerk/nextjs'

...
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}

```

Create a middleware.ts file in the root directory alongside .env file.
```js
import { authMiddleware } from "@clerk/nextjs";
 
// protects all routes including api/trpc routes
export default authMiddleware({});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```
