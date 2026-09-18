export const metadata = {
  title: "我的量化工具站",
  description: "台股輪動策略回測平台 / VIX期貨觀測儀表板",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body style={{ margin: 0, fontFamily: "system-ui, -apple-system, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
