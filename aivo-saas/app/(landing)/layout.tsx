// app/(landing)/layout.tsx

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        {/* Optional: public navbar, hero, footer, etc. */}
        {children}
    </html>
  );
}
