<template>
  <div>
    <div class="demo" v-my-directive="borderColor">
      <my-button :font-size="fontSize" :font-color="fontColor" @click="sayHello()">button...button</my-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
const fontSize = ref(18)
const fontColor = ref("green")

const borderColor = ref("red")
</script>

<style scoped>
.demo {
  margin: 100px;
  padding: 100px;
  border: 1px solid black;
}
</style>