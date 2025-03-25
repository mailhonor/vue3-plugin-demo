<template>
  <span :style="{ 'color': props.fontColor, 'font-size': props.fontSize + 'px' }" class="bt">
    <slot></slot>
  </span>
</template>

<script setup>
const props = defineProps({
  fontColor: { type: String, default: '' },
  fontSize: { type: Number, default: 14 }
})
</script>

<style scoped>
.bt {
  border: 1px solid black;
  border-radius: 3px;
  padding: 5px 10px;
}
</style>