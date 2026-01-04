import "@/config/globals.css";
import {Header} from "../layouts/Header";
import {ThemeProvider} from "@/layouts/theme/Provider";
import {Footer} from "@/layouts/Footer";
import {LanguageProvider} from "@/contexts/LanguageContext";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang='en' className='h-full scroll-my-20 scroll-smooth' suppressHydrationWarning>
      <body className='flex min-h-screen flex-col font-pretended'>
        <ThemeProvider>
          <LanguageProvider>
            <Header/>
            <main className='flex flex-1 flex-col px-4'>{children}</main>
            <Footer/>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
