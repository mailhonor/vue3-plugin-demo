# vue3-plugin-demo

## 说明

项目网址: https://github.com/mailhonor/vue3-plugin-demo

vue3 插件 演示

包括

* 方法
* 指令
* 组件


## 插件目录

src/vue3-plugin-demo


## app.ts

./vue3-plugin-demo 就是插件目录

```ts
import { createApp } from "vue"
import vue3PluginDemo from "./vue3-plugin-demo/plugin"
import APP from "./app.vue"

const app = createApp(APP)

// 加载插件
app.use(vue3PluginDemo)
app.mount("#app");
```

## ./vue3-plugin-demo/plugin.ts

```ts
import button from "./button.vue"
import directive from "./directive"

const install = (app: any, options: any) => {
    
    // 方法
    app.config.globalProperties.sayHello = function () {
        alert('Hello, Nancy!');
    }

    // 指令
    app.directive("my-directive", directive)

    // 组件
    app.component('my-button', button)
}

export default install
```

## ./vue3-plugin-demo/button.vue

```html
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
```

## ./vue3-plugin-demo/directive.ts

### 钩子函数
* created 元素初始化的时候
* beforeMount 指令绑定到元素后调用 只调用一次
* mounted 元素插入父级dom调用
* beforeUpdate 元素被更新之前调用
* update 这个周期方法被移除 改用updated
* beforeUnmount 在元素被移除前调用
* unmounted 指令被移除后调用 只调用一次

###  生命周期钩子参数详解（每个钩子都有参数）
*  第一个 el 当前绑定的DOM 元素
*  第二个 binding
   *  instance：使用指令的组件实例。
   *  value：传递给指令的值。例如，在 v-my-directive="1+1" 中，该值为 2。
   *  oldValue：先前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否有更改都可用。
   *  arg：传递给指令的参数(如果有的话)。例如在 v-my-directive:foo 中，arg 为 “foo”。
   *  modifiers：包含修饰符(如果有的话) 的对象。例如在 v-my-directive.foo.bar 中，修饰符对象为 { foo: true，bar: true }
   *  dir：一个对象，在注册指令时作为参数传递

*  第三个 当前元素的虚拟DOM 也就是Vnode
*  第四个 prevNode 上一个虚拟节点，仅在 beforeUpdate 和 updated 钩子中可用

```ts
const focusRange = {
    // 当挂载时
    mounted(el: any, binding: any, vnode: any, prevNode: any) {
        // color
        el.___newColor = binding.value + ""
        el.___oldColor = el.style.borderColor
        el.onclick = () => {
            if (el.style.borderColor == el.___oldColor) {
                el.style.borderColor = el.___newColor
            } else {
                el.style.borderColor = el.___oldColor
            }
        }
    },
    // 当值更新时
    update(el: any, binding: any, vnode: any, prevNode: any) {
        el.___newColor = binding.value + ""
        el.style.borderColor = el.___newColor
    },
    unmounted(el: any, binding: any, vnode: any, prevNode: any) {
    },
}
export default focusRange
```