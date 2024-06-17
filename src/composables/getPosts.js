// import { reject, resolve } from 'core-js/fn/promise';
import {ref } from 'vue';
import {db} from '../firebase/config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
let getPosts = ()=>{
    let posts = ref([])
    let error = ref("");
    let load = async()=>{
      try{       
        const response = collection(db,"posts");  
        const q = query(response, orderBy("created_at","desc"));      
        const document = await getDocs(q);
        posts.value = document.docs.map((doc)=>{
          return {id:doc.id,...doc.data()};
        });
        
      }catch(err){
        error.value = err.message;
      }
    }
    return {posts,error,load}
}
export default getPosts;