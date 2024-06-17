<template>
    <div class="tag">
        <div v-if="error">{{error}}</div>
        <div v-if="posts.length">        
            <PostList :posts="filteredPost"></PostList>
        </div>
        <Spinner></Spinner>
    </div>
</template>

<script>
import PostList from '../components/PostList'
import Spinner from '../components/Spinner'
import getPosts from '@/composables/getPosts'
import { computed } from 'vue';
export default {
  components: {
    PostList, Spinner },
    props : ["tag"],
    setup(props){        
        let {posts,error,load} = getPosts();
        load();        
        let filteredPost = computed(()=>{
            return posts.value.filter((post)=>{               
                return post.tags.includes(props.tag)
            })
        })
        return {posts,error,filteredPost}        
    }
}
</script>

<style>
.tag{
    max-width: 1200px;
    margin: 0 auto;
}
</style>