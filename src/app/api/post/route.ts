import { PostDTO } from './../../../dto/post';

import { postActions } from '@/actions/post-actions/post';
import { buildPostDTOList } from '@/dto/post';
import { NextResponse } from 'next/server';

// Set max request body size to 10MB
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '20mb',
    },
  },
};

export async function POST(req: Request) {
  try {
    
    const data = await req.json();
    const result = await postActions.createPost(data)

    if (result.success) {
      return NextResponse.json({
        message: "Post created successfully",
        post: result.data
      }, { status: result.status });
    } else {
      return NextResponse.json({
        error: result.error
      }, { status: result.status });
    }
  } catch (error) {
    console.error('Error in register route:', error);
        return NextResponse.json({
            error: "Invalid request data"
        }, { status: 400 });
  }

}

export async function GET() {
  try {
    const result = await postActions.getPosts();

    if (result.success) {
      return NextResponse.json({
        message: "Posts fetched successfully",
        posts: buildPostDTOList(result.data as PostDTO[])
      }, { status: result.status });
    } else {
      return NextResponse.json({
        error: result.error
      }, { status: result.status });
    }
  } catch (error) {
    console.error('Error in get posts route:', error);
    return NextResponse.json({
      error: "Failed to fetch posts"
    }, { status: 500 });
  } 
}
