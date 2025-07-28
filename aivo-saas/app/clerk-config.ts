// app/clerk-config.ts

export const clerkOptions = {
  signInUrl: "/sign-in",
  signUpUrl: "/sign-up",
  afterSignInUrl: "/dashboard",
  afterSignOutUrl: "/landing",
  // Optional: publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
};
