# ng-component-demo


### 背景简介

组件包括三类，1:基本组件 2:属性型指令 3:结构型指令.

组件不能独立存在，在开发的时候需要一个container进行测试，因此，我们将container内置到了src的目录下面，这样每次开发一个新组建的时候都可以复用这个container，
不需要 repeat yourself。但是，只有在开发时，我们会关注这个 container,在你发布时，即运行 npm run dev-pro，会忽略到这个container,只关注组件模块的代码.

对基本三类有一个基本的代码demo， 即 src 下面的  index.xxxxxxx.ts 文件内部。

### todo 

目前的工作流是：

  - 新建一个组件仓库
  - 从 demo 仓库 clone 样例代码
  - npm i 
  - npm run dev && npm run dev-server 
  - 浏览 localhost:9090/index.html 进行开发
  - 开发完毕， npm run dev-pro
  - 提交代码

可以改进的地方：
  - 目前，所有的流程都是开发者可以touch到最细节的东西，我们并没有一个 sdk 去规范所有的流程，使得用户只和我们的sdk交互，不去理会底层的技术，
  这样，后期为我们不同环境的切换提供了可能性
  - 通过 sdk 这层，规范话整个流程，并且提供可扩展性.
