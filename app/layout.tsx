import "./globals.css";
import AuthContext from "./context/AuthContext";
import ToasterContext from "./context/ToasterContext";
import ActiveStatus from "./components/ActiveStatus";

export const metadata = {
  title: "Messenger",
  description: "Messenger Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthContext>
          <ToasterContext />
          <ActiveStatus>
            {children}
          </ActiveStatus>
        </AuthContext>
      </body>
    </html>
  );
}
