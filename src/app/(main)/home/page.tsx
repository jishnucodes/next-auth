import { options } from "@/app/api/auth/[...nextauth]/options";
import BlogHomepage from "@/components/home/BlogHomepage";
import { getServerSession } from "next-auth";


export default async function Homepage() {
  const session = await getServerSession(options);

  console.log(session);

  return (
    <BlogHomepage />
  );
}