<template>
    <div id="app">
       <Swicher v-model="on" />
       <Swicher v-model="on" />
    </div>
</template>

<script>
    // import Swicher from './components/Swicher'
    export default {
        data() {
            return {
                on: true
            }
        }
    }
</script>

<style>

</style>