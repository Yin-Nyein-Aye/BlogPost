<template> 
  <div class="details">
    <div v-if="post" class="post">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <div v-for="tag in post.tags" :key="tag" class="pill">
        <p>{{tag}}</p>
      </div> 
      <button class="deletePost" @click="deletePost">Delete</button>   
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import { collection, doc } from 'firebase/firestore';
import Spinner from '../components/Spinner'
import getPost from '../composables/getPost'
import {db} from '../firebase/config'
import { useRouter } from 'vue-router';
export default {
  components: { Spinner },
    props : ['id'],
    setup(props){
        let router = new useRouter();
        let {post,error,load} = getPost(props.id);
        load();
        let deletePost = async()=>{
          let id = props.id;
          await deleteDoc(doc(collection(db, "posts"), id));
          router.push('/');
        }
        return {post,error}
    }    
}
</script>

<style>
.post{
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}
.post h2{
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: white;
  margin-bottom: 10px;
  max-width: 400px;
}
.post h2::before{
  content: "";
  display: block;
  width: 100%;
  height: 100%;
  background: #ff8800;
  position: absolute;
  z-index: -1;
  padding-right: 40px;
  left: -30px;
  transform: rotateZ(-1deg);
}
.pill{
    display: inline-block;
    border-radius: 30px;
    background: #f08e8e;
    padding: 0px 10px;
    margin: 5px;
}
.details{
  max-width: 1200px;
  margin: 0 auto;
}
</style>