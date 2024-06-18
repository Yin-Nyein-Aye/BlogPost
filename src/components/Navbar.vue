<template>
    <header>
        <h1>Post</h1>
        <nav>
            <router-link :to="{name:'home'}">Home</router-link>
            <router-link :to="{name:'create'}">Create</router-link>
        </nav>
    </header>  
</template>

<script>
export default {

}
</script>

<style>
header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
}
header h1{
    color: #dfdfdf;
    font-size:24px;
}
header nav a{
    color: #bbb;
    text-decoration: none;
    margin-left: 20px;
}
header nav a.router-link-active{
    color: #444;
    font-weight: bold;
}
</style>