import { addPost, fetchPost } from "../apiCalls"

export let fetchPostData=async()=>{
    let {data}=await fetchPost();
    return data;
};

export let addPostData=async(post)=>{
    let {data}=await addPost(post);
    return data;
};