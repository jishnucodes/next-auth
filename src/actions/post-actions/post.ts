import prisma from "@/lib/prisma";

export interface PostData {
    title: string;
    content: string;
    image: string | null;
    category: string;
    authorId: number;
}

type CreatePostResult =
  | { success: true; data: any; status: number }
  | { success: false; error: string; status: number };

export const postActions = {
    createPost: async (data: PostData): Promise<CreatePostResult> => {
    try {
      const { title, content, image, category, authorId } = data;
      const imageBuffer = image ? Buffer.from(image, 'base64') : null;

      const newPost = await prisma.post.create({
        data: {
          title,
          content,
          image: imageBuffer,
          category,
          authorId,
        },
      });

      return {
        success: true,
        data: newPost,
        status: 201,
      };
    } catch (error) {
      console.error("Error creating post:", error);
      return {
        success: false,
        error: "Failed to create post",
        status: 500,
      };
    }
  },

  getPosts: async () => {
    try {
        const posts = await prisma.post.findMany();
        const formattedPosts = posts.map(post => ({
          ...post,
            image: post?.image
    ? `data:image/jpeg;base64,${Buffer.from(post.image).toString('base64')}`
    : null
        }));

        return {
          success: true,
          data: formattedPosts,
          status: 200,
        };
    } catch (error) {
        console.error("Error fetching posts:", error);
      return {
        success: false,
        error: "Failed to fetch posts",
        status: 500,
      };
    }
  }
};