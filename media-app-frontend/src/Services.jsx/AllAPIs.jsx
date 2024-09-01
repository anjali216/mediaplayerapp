import { serverURL } from "./serverURL";
import { commonAPI } from "./commonAPI";

//Add Video API Call => post => localhost:3000/allVideos
export const addVideoAPI = async(reqBody)=>{
        return await commonAPI('post',`${serverURL}/allVideos`,reqBody)
}

//get all Video API Call from json-server  => get  => localhost:3000/allVideos
export const getVideoAPI = async()=>{
        return await commonAPI('get',`${serverURL}/allVideos`,{})
}
//get a particular video from json-server => get  => localhost:3000/allVideos/:789
export const getAVideoAPI = async(id)=>{
        return await commonAPI('get',`${serverURL}/allVideos/${id}`,"")
}
//delete a video from json-server => delete => localhost:3000/allVideos
export const deleteVideoAPI = async(id)=>{
        return await commonAPI('delete',`${serverURL}/allVideos/${id}`,"")
}
//add history API call => post => localhost:3000/watchHistory
export const addHistoryAPI = async(videoDetails)=>{
        return await commonAPI('post',`${serverURL}/watchHistory`,videoDetails)
}