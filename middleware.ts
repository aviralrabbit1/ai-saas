import { authMiddleware } from "@clerk/nextjs";
 
// protects all routes including api/trpc routes
export default authMiddleware({
    publicRoutes: ["/"] 
    // Allows public routes to be accessible without auth
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
