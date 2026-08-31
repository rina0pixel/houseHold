export default function Page() {
  // Bare "/" — no household yet. app.js sees the empty data-household-id and
  // shows the "create a household" setup screen.
  return <div id="app" data-household-id="" />;
}
