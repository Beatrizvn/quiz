import { getCurrentUser } from "../../../lib/auth";

const Home = async () => {

  const user = await getCurrentUser();
  // console.log(user);
  return (
    <>
      <div className="rounded-lg p-4 text-center mb-6">
        <p className="text-gray-600">Signed in as:</p>
        <p className="font-medium">TESTE MIDDLEWARE {user?.name}</p>
      </div>

    </>
  );

}
export default Home;