<template>
    <div id="app">
        <header>
            <h1>Spent</h1>
            <a href="logout">logout</a>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            };
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

    header {
        display: flex;
        align-items: center;
        > * {
            margin: 10px;
        }
    }

    h1 {
        font-weight: normal;
    }
</style>
