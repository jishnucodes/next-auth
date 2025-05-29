export type PostDTO = {
    id: number;
    title: string;
    content: string;
    image: string | null;
    category: string;
    authorId: number;
    createdAt: Date;
    modifiedAt: Date;
    createdBy: number;
    modifiedBy: number; 
};

 export const postDTO: PostDTO = {
    id: 0,
    title: "",
    content: "",
    image: null,
    category: "",
    authorId: 0,
    createdAt: new Date(),
    modifiedAt: new Date(),
    createdBy: 0,
    modifiedBy: 0

}

export const buildPostDTO = (data: Partial<PostDTO>): PostDTO => {
    return {
        ...postDTO,
        ...data,
        createdAt: data.createdAt || new Date(),
        modifiedAt: data.modifiedAt || new Date(),
    };
};

export const buildPostDTOList = (data: Partial<PostDTO>[]): PostDTO[] => {
    return data.map(item => buildPostDTO(item));
}