import Link from "next/link";

const tools = [
  {
    href: "/rotation-strategy",
    title: "台股輪動策略回測平台",
    desc: "上傳歷史資料、調整參數,回測 0050 / 00631L / 00635U 輪動策略績效。",
  },
  {
    href: "/vix-dashboard",
    title: "VIX期貨觀測儀表板",
    desc: "VIX期限結構、Roll Yield 與現有策略訊號的即時快照儀表板。",
  },
];

export default function Home() {
  return (
    <main
      style={{
        maxWidth: 960,
        margin: "0 auto",
        padding: "64px 24px",
      }}
    >
      <h1 style={{ fontSize: 32, marginBottom: 8 }}>我的量化工具站</h1>
      <p style={{ color: "#666", marginBottom: 40 }}>
        台股輪動策略回測 × VIX期貨觀測
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {tools.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            style={{
              display: "block",
              padding: 24,
              borderRadius: 12,
              border: "1px solid #e5e5e5",
              textDecoration: "none",
              color: "inherit",
              transition: "box-shadow 0.15s",
            }}
          >
            <h2 style={{ fontSize: 20, margin: "0 0 8px" }}>{t.title}</h2>
            <p style={{ color: "#666", margin: 0, fontSize: 14 }}>{t.desc}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
