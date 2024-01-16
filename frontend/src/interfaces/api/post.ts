import { IPostDetail, PostListType } from 'interfaces/model';
import { ApiResponse } from './api';

export type orderType = 'latest' | 'oldest' | 'popular';

export type getPostListRequest = {
    userId?: string;
    categoryId?: string;
    order?: string;
    offset?: string;
    limit?: string;
};

export type getPostListResponse = ApiResponse<PostListType>;

export type getPostDetailRequest = {
    userId: string;
    postId: string;
};

export type getPostDetailResponse = ApiResponse<IPostDetail>;
