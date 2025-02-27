import LogoutButton from "@/components/logoutButton";
import { getCurrentUser } from "../../lib/auth";

const Home = async () => {

  const user = await getCurrentUser();

  if (!user) {
    return (
      <div className="w-full max-w-sm mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center mb-6">You are not signed in</h1>

        <div className="text-center">
          <a href="/signin">
            <button type="button">Sign in</button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <p className="text-gray-600">Signed in as:</p>
        <p className="font-medium">Hello {user.name}</p>
      </div>
      <LogoutButton />
    </>
  );

}
export default Home;