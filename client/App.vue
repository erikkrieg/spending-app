<template>
    <div id="app">
        <app-header />
        <app-purchase-date-range />
        <app-purchase-chart type="pie" />
        <app-purchase-table />
        <button class="app__add-purchase-btn" v-on:click="openAddPurchase"><span>+<span></button>
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
        },
        methods: {
            openAddPurchase () {
                window.alert('create add-purchase form component');
            }
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

    .app__add-purchase-btn {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 50%;
        outline: none;
        background-color: #E61875;
        color: white;
        cursor: pointer;

        span {
            position: relative;
            top: -4px;
            font-size: 2rem;
            pointer-events: none;
        }
    }
</style>
