<template>
    <div id="app">
        <div class="background"></div>
        <div class="content">
            <transition name="router-animation">
                <router-view/>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
    @import "assets/scss/style";

.router-animation-enter-active{
    animation: goOut 0.75s;
    animation-delay: 0.5s;
    opacity:0;
}

    .router-animation-leave-active{
        animation: goIn 0.75s;
    }

    @keyframes goIn {
        from {
            transform: translateX(0);
        }

        to{
            transform: translateX(-75px);
            opacity: 0;
        }

    }

    @keyframes goOut {
        from {
            transform: translateX(-75px);
            opacity: 0;
        }

        to{
            transform: translateX(0px);
            opacity: 1;
        }

    }

    #app {
        font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif;
        overflow-x: hidden;
    }
    button{
        font-family: 'Lato', 'Avenir', Helvetica, Arial, sans-serif;
    }

    .background {
        background: url('./assets/images/background.jpg') no-repeat;
        background-size: cover;
        background-position: top center;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
    }

    .content {
        position: relative;
        z-index: 2;
    }
</style>
