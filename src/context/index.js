import { uploadForm, getPhotosInfo, getBlogsInfo, getPhotoInfo, getBlogInfo } from './actions';
import { GlobalState, useAuthDispatch, useAuthState, useContentState, AuthStateContext } from './context';

export { GlobalState, useAuthState, useAuthDispatch, useContentState, uploadForm, AuthStateContext, getPhotoInfo, getPhotosInfo, getBlogsInfo, getBlogInfo};
//TODO getCircloInfo, getPsychologistInfo and getPhotosInfo can be unified into a single function that passes the name of the collection 