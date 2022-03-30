import { LoaderFunction } from "remix";
import { clearLoginSession } from "~/utils/auth.server";

/**
 * Server-side handler of GET requests
 */
export const loader: LoaderFunction = async ({ request }) => {
  return await clearLoginSession(request);
};

/**
 * The react component for the UI for this page
 */
export default function Logout() {
  return (<></>);
}
