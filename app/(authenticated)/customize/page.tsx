// export default function WhiteLabel() {
export default async function WhiteLabel() {
  const response = await fetch("https://api.github.com/users/cesaraugustomt", {
    // cache: 'no-store' // SSR
    next: {
      revalidate: 30,
    },
  });
  const user = await response.json();
  return (
    <main>
      <div>
        <h1>Construindo WhiteLabel</h1>
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </main>
  );
}
