// Global styles for SkillForge Africa
import '@/styles/globals.css';
import '@/styles/animations.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}