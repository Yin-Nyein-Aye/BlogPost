<template> 
  <div class="details">
    <div v-if="post" class="post">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
      <div v-for="tag in post.tags" :key="tag" class="pill">
        {{tag}}
      </div>
      <div class="deletePost">
        <button @click="deletePost">Delete</button> 
      </div> 
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>
  </div>
</template>

<script>
import { deleteDoc, doc } from 'firebase/firestore';
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
          await deleteDoc(doc(db, "posts", id));
          router.push('/');
        }
        return {post,error,deletePost}
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
.details{
  max-width: 1200px;
  margin: 0 auto;
}
.deletePost{
  margin: 20px auto;
}

</style>