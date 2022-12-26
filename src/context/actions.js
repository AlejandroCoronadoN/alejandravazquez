
import { loadStripe } from '@stripe/stripe-js';

export async function uploadForm(dispatch, {formData}) {
  const firebase = require("firebase");
  try {
    dispatch({ type: 'REQUEST_UPLOADFORM' });
    console.log("actions/uploadForm -> formData: ",formData)
  
    await firebase 
      .firestore()
      .collection(formData.collectionName)
      .add(formData)
      .then(()=> {        
        dispatch({ type: 'UPLOADFORM_SUCCESS', payload: formData });
        }, dbError => {
        console.log("Forms/Steeper/uploadForm -> DataBase Error:" ,dbError);
        //this.setState({signupError: "Failed to add user DB"});
      })
  }catch (error) {
    dispatch({ type: 'UPLOADFORM_ERROR', error: error });
    console.log('REQUEST_UPLOADFORM: ', error);
    return;
  }
}

  export async function getPhotosInfo(dispatch) {
    // Retrives the psychologist information stoered in firabse
    try {
        dispatch({ type: 'REQUEST_PHOTOSINFO' });
        const firebase = require("firebase");
        const photosSnapshot = await firebase
            .firestore()
            .collection('Photos')
            .get()
        console.log('actions/getPhotosInfo: ', photosSnapshot)
        return photosSnapshot

    }catch (error) {
        dispatch({ type: 'PHOTOSINFO_ERROR', error: error });
        console.log('PHOTOSNFO_ERROR: ', error);
        return;
      }
  }

  export async function getPhotoInfo(dispatch, {photoPath}) {
    // Retrives the psychologist information stoered in firabse
    try {
        dispatch({ type: 'REQUEST_PHOTOINFO' });
        const firebase = require("firebase");
        const blogSnapshot = await firebase
            .firestore()
            .collection('Photos')
            .where('photoPath', '==', photoPath)  
            .get()
        console.log('actions/getPhotosInfo: ', blogSnapshot)
        return blogSnapshot

    }catch (error) {
        dispatch({ type: 'PHOTOINFO_ERROR', error: error });
        console.log('PHOTONFO_ERROR: ', error);
        return;
      }
  }

  export async function getBlogsInfo(dispatch) {
    // Retrives the psychologist information stored in firabse
    try {
        dispatch({ type: 'REQUEST_BLOGSINFO' });
        const firebase = require("firebase");
        const blogsSnapshot = await firebase
            .firestore()
            .collection("Blogs")
            .get();
        console.log('actions/getBlogsInfo: ', blogsSnapshot.docs)
        return blogsSnapshot

    }catch (error) {
        dispatch({ type: 'BLOGSINFO_ERROR', error: error });
        console.log('BLOGSINFO_ERROR: ', error);
        return;
      }
  }

  export async function getBlogInfo(dispatch, {blogPath}) {
    // Retrives the psychologist information stored in firabse
    try {
        dispatch({ type: 'REQUEST_BLOGINFO' });
        const firebase = require("firebase");
        const blogsSnapshot = await firebase
            .firestore()
            .collection("Blogs")
            .where('blogPath', '==', blogPath)  
            .get();
        console.log('actions/getBlogInfo: ', blogsSnapshot.docs)
        return blogsSnapshot

    }catch (error) {
        dispatch({ type: 'BLOGINFO_ERROR', error: error });
        console.log('BLOGINFO_ERROR: ', error);
        return;
      }
  }
