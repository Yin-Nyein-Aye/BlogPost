import { collection, doc, getDoc } from "firebase/firestore";
import { ref } from "vue"

let getPost =(id)=>{    
    let post = ref(null);
    let error = ref("");
    let load = async()=>{
        try{
            const document = doc(db,"posts",id);            
            let singlepost = await getDoc(document);
            console.log(document);
            post.value = {id:singlepost.id,...singlepost.data()}
        }catch(err){
            error.value = err.message;
        }        
    }
    return {post,error,load};
}
export default getPost;