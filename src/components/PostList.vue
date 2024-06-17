<template>  
  <div class="layout">
    <div>
      <h1>All Posts</h1>
      <SinglePost :posts="posts"></SinglePost> 
    </div>
    <div>
      <TagCloud :posts="posts"></TagCloud>
    </div>
  </div>  
</template>

<script>
import TagCloud from './TagCloud'
import SinglePost from './SinglePost'
export default {
  components: {
    TagCloud, SinglePost },
    props:['posts']
}
</script>

<style>
.layout{
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>