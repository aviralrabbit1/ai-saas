## Authentication

### Using [Clerk](https://clerk.com/)

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

### Pages

```js
// app/(auth)/(routes)/sign-in/[[...sign-in]]/page.tsx
import { SignIn } from "@clerk/nextjs";
 
export default function Page() {
  return <SignIn />;
}
```

```js
// app/(auth)/(routes)/sign-up/[[...sign-up]]/page.tsx
import { SignUp } from "@clerk/nextjs";
 
export default function Page() {
  return <SignUp />;
}
```

### Update environment variables
for the signIn, signUp, afterSignUp, and afterSignIn paths:
```env
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```
