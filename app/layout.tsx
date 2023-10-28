import ThemeRegistry from "../theme/ThemeRegistry";
import { Navbar, SideMenu } from "../components/ui";

export const metadata: Metadata = {
  title: "Clinic Name",
  description: "Descrição da clinica",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <nav>
            {/* {TODO: Navbar} */}
            <Navbar />
          </nav>
          <SideMenu />
          {/* TODO: Sidebar */}
          <main
            style={{
              margin: "80px auto",
              maxWidth: "1440px",
              padding: "0px 30px",
            }}
          >
            {children}
          </main>
        </body>
      </ThemeRegistry>
    </html>
  );
}
