import "../styles/main.scss"

export const metadata = {
  title: "Frontend Mentor | 3-column preview card component",
  description: "Frontend Mentor Newbie challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
