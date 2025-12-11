# Vue 2+3

# 01、初识vue

1. 想让Vue工作，就必须创建一个Vue实例，且传入一个配置对象；

2. root容器里的代码依然符合HTML规范，只不过混入了一些特殊的vue语法；

3. root容器里的代码被称为**vue模板**

4. 实例和容器之间是一对一的关系

5. 插值表达式  **{{   }}**  里面写的是js表达式

   

   注意区分： js表达式和js代码（语句）

      1. 表达式：一个表达式会产生一个值，可以放在任何一个需要值的地方：

         1.1 a

         1.2 a+b

         1.3 demo(1)

         1.4 x === y ? 'a': 'b'

      2. js代码（语句）

   ​       2.1 if(){}

   ​	2.2 for(){}

    

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>初识vue</title>
       <!-- 引入vue -->
       <script type="text/javascript" src="../js/vue.js"></script>
   </head>
   <body>  
       <!-- 准备好一个容器 -->
        <div id="root">
           <h1>Hello {{name}}</h1>
        </div>
   
        <script type="text/javascript">
           Vue.config.productionTip = false  //阻止vue在启动时生成生产提示
   
           // 创建vue实例
           const x = new Vue({
               el: '#root',  //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串，这里的#root，选择的就是上面id="root"的那个容器
               // data中用于存储数据，数据供el所指定的容器去使用，值我们先暂时写成一个对象。
               data: {
                   name: 'world1'
               }
           })
        </script>
   </body>
   </html>
   ```




# 02、Vue模板语法



Vue模板语法有两大类：

1. 插值语法：

​		功能：用于解析标签体的内容

​		写法： {{xxx}}，xxx是js表达式，并且可以直接读取到data中的所有属性。

2. 指令语法：

   ​	功能：用于解析标签（包括：标签属性，标签体内容，绑定事件......）。

   ​	举例：v-bind:href="xxx"  或  简写为     :href="xxx"    ，xxx同样要写js表达式，并且可以直接读取到data中的所有属性。

3. 备注：Vue中有很多的指令，且形式都是  v-???   ，此处只是使用v-bind举个例子。





```HTML
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>模板语法</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <!-- 准备好一个容器 -->
    <div id="root">
        <h1>插值语法</h1>
        <h3>你好，{{name}}</h3>
        <hr>
        <h1>指令语法</h1>
        <a v-bind:href="url">百度</a>
        <a :href="url2">哔哩哔哩</a>

    </div>

</body>
<script type="text/javascript">
    new Vue({
        el: '#root',
        data: {
            name: 'jack',
            url: 'https://www.baidu.com',
            url2: 'https://www.bilibili.com'
        }
    })
</script>

</html>
```



# 03、数据绑定



Vue中有2种数据绑定的方法：

1. 单向绑定(v-bind)：数据只能从data流向页面。

2. 双向绑定(v-model)：数据不仅能从data流向页面，还可以从页面流向data。

3. 备注：

   ​         双向绑定一般都应用在表单类元素上（如：input，select，等）。

​		v-model:value   可以简写为   v-mode   ，因为v-model默认收集的就是value值。



```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>数据绑定</title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <!-- 准备好一个容器 -->
    <div id="root">
        <!-- 普通写法 -->
        <!-- 单向数据绑定：<input type="text" v-bind:value="name"><br>
        双向数据绑定：<input type="text" v-model:value="name"><br> -->

        <!-- 简写 -->
        单向数据绑定：<input type="text" :value="name"><br>
        双向数据绑定：<input type="text" v-model="name"><br>



        <!-- 如下代码是错误的，因为v-model只能应用在表单类元素（输入类元素）上 -->
        <!-- <h2 v-model:x="name">nihao</h2> -->
    </div>

</body>
<script type="text/javascript">
    new Vue({
        el: '#root',
        data: {
            name:'jie',
        }
    })
</script>

</html>
```



# 04、el与data的两种写法

1. el的两种写法

   （1） new Vue的时候配置el属性。

   （2） 先创建Vue实例，随后再通过vm.$mount('#root')指定el的值。

2. data的两种写法

​       （1） 对象式

​       （2） 函数式

​	 如何选择：目前哪种写法都可以，以后学习到组件时，data必须使用函数式，否则会报错。

3. 一个重要的原则：

   	由Vue管理的函数，一定不要写箭头函数，一旦写了箭头函数，this就不再是Vue实例了。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <script type="text/javascript" src="../js/vue.js"></script>
</head>

<body>
    <!-- 准备好一个容器 -->
    <div id="root">
        <h1>你好，{{name}}</h1>
    </div>

</body>
<script type="text/javascript">
    // el的两种写法
    // const v = new Vue({
    //     // el: '#root',  第一种写法
    //     data: {
    //         name: 'jie1',
    //     }
    // })
    // console.log(v);
    // v.$mount('#root')   // 第二种写法

    // data的两种写法
    new Vue({
        el: '#root',
        // data的第一种写法：对象式
        // data: {
        //     name:'jie'
        // }

        // data的第二种写法：函数式
        data(){
            console.log('--->',this);  // 此处的this是Vue实例对象，并且不能用箭头函数，因为箭头函数没有自己的this，会向上找，就会找到window
             
            return {
                name: 'Jie'
            }
        }
    })

</script>

</html>
```



# 05、理解MVVM模型

1. M：模型（Model）：data中的数据
2. V：视图（View）：模板代码
3. VM：视图模型（ViewModel）：Vue实例

观察发现：

1. data中所有的属性，最后都出现在了vm身上。
2. vm身上所有的属性，以及Vue原型上所有的属性，在Vue模板中都可以直接使用。

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>理解MVVM</title>
    <!-- 引入vue -->
    <script type="text/javascript" src="../js/vue.js"></script>
</head>
<body>  
    <!-- 准备好一个容器 -->
     <div id="root">
        <h1>学校名称 {{name}}</h1>
        <h1>学校地址 {{address}}</h1>
        <!-- <h1>test1: {{1+1}}</h1>
        <h1>test2: {{$options}}</h1>
        <h1>test3: {{$emit}}</h1>
        <h1>test4: {{_c}}</h1> -->
     </div>

     <script type="text/javascript">
        Vue.config.productionTip = false  //阻止vue在启动时生成生产提示

        // 创建vue实例
        const vm = new Vue({
            el: '#root',  //el用于指定当前Vue实例为哪个容器服务，值通常为css选择器字符串，这里的#root，选择的就是上面id="root"的那个容器
            // data中用于存储数据，数据供el所指定的容器去使用，值我们先暂时写成一个对象。
            data: {
                name: '信阳农林',
                address: '信阳'
            }
        })
        console.log(vm);
        
     </script>
</body>
</html>
```

