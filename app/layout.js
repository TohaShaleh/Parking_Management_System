
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col bg-slate-300">


        {children}

        
      </body>
    </html>
  );
}
