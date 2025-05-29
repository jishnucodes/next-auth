import { options } from "@/app/api/auth/[...nextauth]/options";
import { getPosts } from "@/common/apiCalls";
import BlogHomepage from "@/components/home/BlogHomepage";
import { getServerSession } from "next-auth";


export default async function Homepage() {
  const session = await getServerSession(options);

  console.log(session);

  const result = await getPosts();

  return (
    <BlogHomepage posts={result?.posts}/>
  );
}