import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import { CalendlyProvider } from '@/components/calendly/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RightFlow AI - Flow Forward with AI',
  description: 'Leading AI automation agency specializing in custom chatbots, automated agents, and workflow automation solutions.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CalendlyProvider>
            <div id="calendly-modal-root" />
            {children}
            <Toaster 
              position="top-center"
              richColors
              expand
              closeButton
            />
          </CalendlyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}