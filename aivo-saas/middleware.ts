import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
  "/landing(.*)",  // ✅ Add this to allow access to your landing page
  "/",             // ✅ This should also be public (Root → redirects anyway)
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth(); // ✅ Always await this

  if (isPublicRoute(req)) return;

  if (!userId) {
    return new Response("Unauthorized", { status: 401 });
  }
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
