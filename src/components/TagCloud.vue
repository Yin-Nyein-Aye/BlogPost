<template>
  <div class="tag-cloud">
    <h3>Tag Cloud</h3>
    <div v-for="tag in filterTag" :key="tag">
        <router-link :to="{name:'tag',params:{tag}}">
            <p>{{tag}}</p>
        </router-link>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
    props : ['posts'],
    setup(props){
        let tags = ref([]);
        props.posts.forEach((post)=>{
            post.tags.forEach((tag)=>{
                tags.value.push(tag);
            })
        })
        let filterTag = tags.value.filter((tag,index,array)=>{
            return array.indexOf(tag) === index;
        })
        return {filterTag}
    }

}
</script>

<style>
.tag-cloud{
    padding: 10px;
}
.tag-cloud h3{
    border-bottom: 1px solid #eee;
    padding: 16px 8px;
    color: #444;
}
.tag-cloud div{
    display: inline-block;
    padding: 10px;
}
.tag-cloud a {
    color: #ccc;
    text-decoration: none;
}
.tag-cloud a.router-link-active{
    color: #ff8800;
    font-weight: bold;
}
</style>