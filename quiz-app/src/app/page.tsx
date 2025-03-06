import { getCurrentUser } from "../../lib/auth";

const MyApp = async () => {

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

}
export default MyApp;