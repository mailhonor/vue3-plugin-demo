// 1. 钩子函数
//   created 元素初始化的时候
//   beforeMount 指令绑定到元素后调用 只调用一次
//   mounted 元素插入父级dom调用
//   beforeUpdate 元素被更新之前调用
//   update 这个周期方法被移除 改用updated
//   beforeUnmount 在元素被移除前调用
//   unmounted 指令被移除后调用 只调用一次

// 2. 生命周期钩子参数详解（每个钩子都有参数）
//   第一个 el 当前绑定的DOM 元素
//   第二个 binding
//   instance：使用指令的组件实例。
//   value：传递给指令的值。例如，在 v-my-directive=“1 + 1” 中，该值为 2。
//   oldValue：先前的值，仅在 beforeUpdate 和 updated 中可用。无论值是否有更改都可用。
//   arg：传递给指令的参数(如果有的话)。例如在 v-my-directive:foo 中，arg 为 “foo”。
//   modifiers：包含修饰符(如果有的话) 的对象。例如在 v-my-directive.foo.bar 中，修饰符对象为 { foo: true，bar: true }。
//   dir：一个对象，在注册指令时作为参数传递。例如，在以下指令中

//   第三个 当前元素的虚拟DOM 也就是Vnode
//   第四个 prevNode 上一个虚拟节点，仅在 beforeUpdate 和 updated 钩子中可用

const focusRange = {
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
    update(el: any, binding: any, vnode: any, prevNode: any) {
        el.___newColor = binding.value + ""
        el.style.borderColor = el.___newColor
    },
    unmounted(el: any, binding: any, vnode: any, prevNode: any) {
    },
}
export default focusRange