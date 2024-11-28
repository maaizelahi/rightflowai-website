import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { CalendlyProvider } from '@/components/calendly/context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'RightFlow AI - Flow Forward with AI',
  description: 'Leading AI automation agency specializing in custom chatbots, automated agents, and workflow automation solutions.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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
            <Toaster />
          </CalendlyProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}