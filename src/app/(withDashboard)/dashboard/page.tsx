import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div>
      {session?.user ? (
        <>
          <h1 className="text-4xl text-center mt-10">
            Welcome {session?.user?.name}
          </h1>
          <h1 className="text-4xl text-center mt-10">
            Logged in user email: {session?.user?.email}
          </h1>
          <Image
            src={
              session?.user?.image ||
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqPMhCJ4qi8Nv5NjUvahzdrOHKl4qdDWayoBR0pyamBQ&s"
            }
            className="rounded-full mx-auto my-5"
            width={200}
            height={200}
            alt="user profile"
          />
        </>
      ) : (
        <h1 className="text-4xl text-center mt-10">Not logged in</h1>
      )}
    </div>
  );
};

export default DashboardPage;
