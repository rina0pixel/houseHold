export default async function HouseholdPage({
  params,
}: {
  params: Promise<{ householdId: string }>;
}) {
  const { householdId } = await params;
  // This URL is the household's permanent address and its invite link —
  // app.js reads the id from data-household-id and fetches this household's
  // data on boot.
  return <div id="app" data-household-id={householdId} />;
}
