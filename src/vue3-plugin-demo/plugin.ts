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