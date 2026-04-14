export const metadata = {
    title: "Perafin",
    description: "Track income, expenses, and savings",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                style={{
                    margin: 0,
                    fontFamily: "Inter, sans-serif",
                    backgroundColor: "#0f172a", // dark navy
                    color: "#e2e8f0",
                }}
            >
                {/* Navbar */}
                <header
                    style={{
                        padding: "1rem 2rem",
                        borderBottom: "1px solid #1e293b",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h2 style={{ margin: 0 }}> Perafin</h2>
                    <span style={{ fontSize: "0.9rem", opacity: 0.7 }}>
                        Dashboard
                    </span>
                </header>

                {/* Page Content */}
                <main style={{ padding: "2rem" }}>{children}</main>
            </body>
        </html>
    );
}