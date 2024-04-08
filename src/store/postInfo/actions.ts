import { AddAllPostInfoAction, AddPostInfoAction, PostInfo, PostInfoActionTypes } from './types';

export const addPostInfo = (postInfo: PostInfo): AddPostInfoAction => ({
  type: PostInfoActionTypes.ADD_POST_INFO,
  payload: postInfo
});

export const addAllPostInfo = (postInfos: PostInfo[]): AddAllPostInfoAction => ({
    type: PostInfoActionTypes.ADD_ALL_POST_INFO,
    payload: postInfos
  });
