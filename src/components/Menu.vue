<template lang="">
    <!-- menu -->
    <div>
        <div id="menu" class = "w-full h-[100vh] absolute overflow-hidden top-0 left-0">
            <!-- background -->
            <div class="menu-bg w-full h-[33%] bg-[#ffa500]"></div>
            <div class="menu-bg w-full h-[33%] bg-[#ffa500]"></div>
            <div class="menu-bg w-full h-[34%] bg-[#ffa500]"></div>

            <!-- content -->
            <div id="content" class="absolute top-2/4 left-2/4 transform-[translate(-50%,-50%)]">
                <button v-on:click="close()">haha</button>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    name: 'Menu',
    props: {
        close:Function
    },
    mounted: function () {

    }

}
</script>
<style lang="">
    
</style>