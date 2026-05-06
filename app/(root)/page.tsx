import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p>Dev Flow</p>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      {session ? <p>Logged in</p> : <p>Not logged in</p>}
      <form
        action={async () => {
          "use server";
          await signOut({ redirectTo: ROUTES.SIGN_IN });
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
};

export default Home;
