<template>
    <header>
        <h1>Spent</h1>
        <a href="logout">logout</a>
    </header>
</template>

<script>
    export default {
        name: 'app-header'
    };
</script>

<style scoped lang="scss">
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