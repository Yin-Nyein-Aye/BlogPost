<template>
<div class="spin"></div>
</template>

<script>
export default {

}
</script>

<style>
.spin{
    width: 40px;
    height: 40px;
    margin: 30px auto;
    border: 1px solid transparent;
    border-radius: 50%;
    border-top-color: red;    
    animation: spin 3s infinite;
}
@keyframes spin{
    to{transform: rotate(360deg);}
}
</style>