import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import { Metadata } from "next";
import { Rethink_Sans } from "next/font/google";
const rethink = Rethink_Sans({ subsets: ["latin"] });
import "@/app/globals.css"

export const metadata: Metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const navbar = <Navbar logo={<b className="font-mono">LIB0</b>} />;
const footer = <Footer className="">MIT {new Date().getFullYear()} © LIB0.</Footer>;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body
        className={`absolute inset-0 z-0 ${rethink.className}`}
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000",
        }}
      >
        <Layout
          darkMode={false}
          navbar={navbar}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/hosenur/lib0"
          footer={footer}
          sidebar={{toggleButton:false}}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
