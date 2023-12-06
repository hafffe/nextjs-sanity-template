import {Work_Sans} from "next/font/google";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

const Layout = ({children}) => {
  return (
    <html lang="en" className={workSans.className}>
      <body className="bg-white text-gray-800 min-h-screen">{children}</body>
    </html>
  );
};

export default Layout;
