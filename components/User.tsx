import { cookies, headers } from "next/headers";

export function User() {
  const userCookies = cookies();
  const userHeaders = headers();

  return (
    <div>
      <h2>User</h2>
      {JSON.stringify(userCookies.getAll(), null, 2)}
      {JSON.stringify(userHeaders.entries(), null, 2)}
    </div>
  );
}
