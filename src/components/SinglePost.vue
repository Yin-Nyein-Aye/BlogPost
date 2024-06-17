<template>
  <div v-for="post in posts" :key="post.id" class="post">
    <router-link :to="{name:'details',params:{id:post.id}}">
      <h2>{{post.title}}</h2>
    </router-link>   
    <p>{{post.body}}</p>
    <div v-for="tag in post.tags" :key="tag" class="pill">
      <router-link :to="{name:'tag',params:{tag}}">
        <p>{{tag}}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
    props: ['posts']
}
</script>

<style scoped>
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
    padding: 0px 8px;
    margin: 5px;
}
</style>