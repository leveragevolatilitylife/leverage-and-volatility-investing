export const metadata = {
  title: "VIX期貨觀測儀表板",
};

export default function Page() {
  return (
    <iframe
      src="/vix-dashboard.html"
      title="VIX期貨觀測儀表板"
      style={{
        border: "none",
        width: "100%",
        height: "100vh",
        display: "block",
      }}
    />
  );
}
