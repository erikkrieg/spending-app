var fs = require('fs');
var yargs = require('yargs').argv;

var fileName;
var writeStream;
var componentName = yargs.name;

function uppercase (word) {
    return word[0].toUpperCase() + word.slice(1);
}

if (componentName) {
    fileName = componentName.split('-').map(uppercase).join('');
    writeStream = fs.createWriteStream(`./client/components/${fileName}.vue`);
    writeStream.write(
`<template><template>

<script>
    export default {
        name: '${componentName}'
    };
</script>

<style scoped lang="scss"></style>`
    );
    writeStream.end();
} else {
    console.log('"--name=<your-component-name>" needs to be provided with a value');
}

