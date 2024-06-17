<template>
  <div class="home">
    <div v-if="error">
      <h1>{{error}}</h1>
    </div>
    <div v-if= "posts.length>0" >
      <PostList :posts="posts"></PostList> 
    </div>
    <div v-else>
      <Spinner></Spinner>
    </div>       
  </div>
</template>

<script>
import Spinner from '../components/Spinner'
import PostList from '../components/PostList'
import getPosts from '../composables/getPosts'
// @ is an alias to /src

export default {
  components: {
    Spinner, PostList },
  setup(){
    let {posts,error,load} = getPosts();
    load();
    return {posts,error};
  }
}
</script>
<style>
.home{
  max-width: 1200px;
  padding: 12px;
  margin: 0 auto;
}
</style>