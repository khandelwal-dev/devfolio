import Footer from "$dev/components/Footer";
import Navbar from "$dev/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Dev Khandelwal",
  description:
    "An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer & Student who loves intuitive, clean and modern UI design.",
  keywords: [
    "Dev Khandelwal",
    "Portfolio",
    "Web Developer",
    "Frontend",
    "Next.js",
    "React",
    "Khandelwal Dev",
    "Slyro",
  ],
  authors: [
    { name: "Dev Khandelwal", url: "https://github.com/khandelwal-dev" },
  ],
  creator: "Dev Khandelwal",
  publisher: "Dev Khandelwal",
  robots: "index, follow",
  openGraph: {
    title: "Dev Khandelwal",
    description:
      "An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer & Student who loves intuitive, clean and modern UI design.",
    url: "https://khandelwaldev.me",
    siteName: "Dev Khandelwal",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Khandelwal",
    description:
      "An online portfolio featuring a showcase of my projects and some thoughts as a Front-End Developer & Student who loves intuitive, clean and modern UI design.",
    creator: "@kkndev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-[900px] w-full px-4 pt-[140px] mx-auto animate-fade">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
