<template>
  <h1>Create Post</h1>
  <form @submit.prevent="savePost" class="form">
    <div>
        <label>Title</label>
        <input type="text" v-model="title" required >
    </div>    
    <div>
        <label>Body</label>
        <textarea v-model="body" required></textarea>
    </div>
    <div> 
        <label>Tags</label>
        <input type="text" v-model="tag" @keydown.enter.prevent="handleTags" >
    </div>     
    <div v-for="tag in tags" :key="tag" class="pill">
        {{tag}}
    </div>
    <div class="btn">
        <button>Submit</button>
    </div>
  </form>  
</template>

<script>
import { ref } from 'vue';
import {useRouter} from 'vue-router';
import {db} from '../firebase/config'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
export default {
    setup(){
        let router = useRouter();        
        let title = ref("");
        let body = ref("");
        let tag = ref("");
        let tags = ref([]);
        let handleTags=()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value);
            }            
            tag.value="";           
        }
        let savePost = async()=>{
            let newPost = {
                    title:title.value,
                    body:body.value,
                    tags:tags.value,
                    created_at : serverTimestamp()
                }
            let post = await addDoc(collection(db,"posts"),newPost);            
            router.push("/");
        }
        return {title,body,tag,handleTags,tags,savePost}
    }
}
</script>

<style scoped>
label{
    display: block;
    margin-bottom: 10px;
}
input{
   margin-left: 30px;
   width: 100%;
   height: 30px;
   margin-bottom: 50px;
}
textarea{
   margin-left: 30px;
   width: 100%;
   height: 20vh;
   margin-bottom: 50px;
}
.form{
    margin: 30px auto;
    width: 600px;
}
button{
    text-transform: uppercase;
    padding: 8px 10px;
    background: #ae2424;
    color: antiquewhite;
    border: 0;
    border-radius: 5px;
    font-weight: bold;
    margin-top: 15px;
}
button:hover{
    background-color: #f08e8e;
    color: black;    
}
.pill{
    text-align: center;
    display: inline-block;
    border-radius: 30px;
    background: #f08e8e;
    padding: 0px 10px;  
}
h1,.btn{
    text-align: center;
}
</style>