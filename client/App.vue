<template>
    <div id="app">
        <app-header></app-header>
    </div>
</template>

<script>
    import AppHeader from './components/AppHeader.vue';
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
        },
        components: {
            AppHeader
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
