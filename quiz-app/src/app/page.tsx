import { redirect } from "next/navigation";

const Home = async () => {

  return (
    <>
      <div className="bg-gray-100 rounded-lg p-4 text-center mb-6">
        <p className="text-gray-600">Signed in as:</p>
        <p className="font-medium">{}</p>
      </div>

      {/* <SignOut /> */}
    </>
  );

}
export default Home;