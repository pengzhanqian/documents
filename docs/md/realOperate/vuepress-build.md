# 《实操系列 - Linux下一步一步用VuePress + GithubPages 搭建个人技术博客》

## 一、VuePress 简单的介绍

### 1、VuePress 官网

> VuePress 官网地址： http://caibaojian.com/vuepress/
>
> PS: Node.js 版本==> 请确保你的 Node.js 版本大于等于 8。

#### 简明优先

对以 markdown 为中心的项目结构，做最简化的配置，帮助你专注于创作。

#### Vue 驱动

享用 Vue + webpack 开发环境，在 markdown 中使用 Vue 组件，并通过 Vue 开发自定义主题。

#### 性能高效

VuePress 将每个页面生成为预渲染的静态 HTML，每个页面加载之后，然后作为单页面应用程序(SPA)运行。

## 二、linux本地搭建Vue Press

> linux本地搭建Vue Press[同 VuePress 官网](https://vuepress.vuejs.org/zh/guide/getting-started.html)：

### 1、创建并进入一个新的目录

``` shell
// 文件名自定义
mkdir vuepress-starter && cd vuepress-starter
mkdir documents && cd documents
```

### 2、使用你喜欢的包管理器进行初始化

``` shell
yarn init -y # npm init -y
```

### 3、将Vue Press 转为本地依赖

``` shell
yarn add -D vuepress # npm install -D vuepress
```

### 4、创建你的第一篇文档

> 创建你的第一篇文档，Vue Press 会以docs 为文档根目录，所以这个ReadME.md相当于主页

``` shell
mkdir docs && echo '# Hello VuePress' > docs/README.md

[root@localhost1 documents]# mkdir docs && echo '# Hello VuePress' > docs/README.md
[root@localhost1 documents]# ll
total 440
drwxr-xr-x   2 root root     23 Feb 27 17:38 docs
drwxr-xr-x 828 root root  24576 Feb 27 17:37 node_modules
-rw-r--r--   1 root root    143 Feb 27 17:37 package.json
-rw-r--r--   1 root root 402691 Feb 27 17:37 yarn.lock
[root@localhost1 documents]# 
```

### 5、在package.json中添加一些scripts

``` shell
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```

``` shell
[root@localhost1 documents]# vim package.json 
[root@localhost1 documents]# cat package.json 
{
  "name": "documents",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "devDependencies": {
    "vuepress": "^1.9.9"
  },
   "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
[root@localhost1 documents]# 
```

### 6、本地启动服务器

``` she
yarn docs:dev # npm run docs:dev
```

>  VuePress 会在 http://虚拟机IP:8080 (opens new window) 启动一个热重载的开发服务器。
>
>  打开如下：
>
>  ![image-20230227174254609](/images/image-20230227174254609.png)
>
>  ![image-20230227174303508](/images/image-20230227174303508.png)

> 此时，说明我们最简单的搭建已经完成。

## 三、将服务和Github关联起来

### 1、将项目转为git项目

``` shell
git init
```

### 2、提交全部代码到本地仓库

``` shell
git add . && git commit -m '提交代码'
```

### 3、将本地仓库关联到Github仓库

``` shell
git remote add origin https://github.com/pengzhanqian/documents.git
```

### 4、查看关联结果

``` shell
git remote -v
[root@localhost1 documents]# git remote -v
origin	https://github.com/pengzhanqian/documents.git (fetch)
origin	https://github.com/pengzhanqian/documents.git (push)
[root@localhost1 documents]# 
```

### 5、提交代码到 GitHub 仓库

``` shell
git push origin master
输入 github 的 账户名、 personal access token

[root@localhost1 documents]# git push origin master
Username for 'https://github.com': 873373549@qq.com
Password for 'https://873373549@qq.com@github.com': 
Enumerating objects: 21373, done.
Counting objects: 100% (21373/21373), done.
Delta compression using up to 4 threads
Compressing objects: 100% (17335/17335), done.
Writing objects: 100% (21373/21373), 27.02 MiB | 4.97 MiB/s, done.
Total 21373 (delta 2995), reused 21373 (delta 2995)
remote: Resolving deltas: 100% (2995/2995), done.
remote: 
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/pengzhanqian/documents/pull/new/master
remote: 
To https://github.com/pengzhanqian/documents.git
 * [new branch]        master -> master
[root@localhost1 documents]# 

```

### 6、保存密码 后续不用再次输入

``` shell
git config credential.helper store
```

## 四、Vue Press 的基础配置

### 1、安装 VuePress

``` shell
// 使用 npm 安装
npm install --global vuepress

// 使用 yarn 安装
yarn global add vuepres

// 使用 npm 安装
npm install --save-dev vuepress

// 使用 yarn 安装
yarn add --dev vuepress
```

``` shell
cd /home/qianpz/nodejs/ && npm install --global vuepress
```

![image-20230227194547454](/images/image-20230227194547454.png)

### 2、添加 vuepress软连接

``` shell
ln -s /home/qianpz/nodejs/bin/vuepress /usr/local/bin/

[root@localhost1 nodejs]# ln -s /home/qianpz/nodejs/bin/vuepress /usr/local/bin/
[root@localhost1 nodejs]# cd /usr/local/bin/
[root@localhost1 bin]# ll
total 0
lrwxrwxrwx 1 root root 28 Feb 24 14:43 node -> /home/qianpz/nodejs/bin/node
lrwxrwxrwx 1 root root 27 Feb 24 14:43 npm -> /home/qianpz/nodejs/bin/npm
lrwxrwxrwx 1 root root 32 Feb 27 19:45 vuepress -> /home/qianpz/nodejs/bin/vuepress
lrwxrwxrwx 1 root root 28 Feb 24 15:11 yarn -> /home/qianpz/nodejs/bin/yarn
[root@localhost1 bin]# vuepress -v
vuepress/1.9.9 linux-x64 node-v16.9.1
[root@localhost1 bin]# 
```

> 若是出现以下错误：
>
> 出现错误: System limit for number of file watchers reached 的解决方案
>
> 原因：文件监视程序的系统产生了限制，达到了默认的上限，需要增加限额。
>
> 永久增加限额
>
> vim /etc/sysctl.conf
>
> 添加：
>
> fs.inotify.max_user_watches=524288
>
> 或者下面方式添加
>
> echo fs.inotify.max_user_watches = 524288 | sudo tee -a /etc/sysctl.conf 
>
> sudo sysctl -p

### 3、构造Vue Press 项目结构

> 在文档的docs目录下创建一个.vuepress目录，所有的Vue Press相关的文件都会放在这里。

``` shell
项目结构如下：
[root@localhost1 documents]# tree -I "node_modules"
.
├── docs
│?? └── README.md
├── package.json
├── yarn-error.log
└── yarn.lock

1 directory, 4 files
[root@localhost1 documents]# 
```

> 然后进入 .vuepress 目录，创建一个 config.js 文件，后续的基础配置基本都需要在 config.js 中完成。

``` shell
[root@localhost1 documents]# tree -a -I "node_modules|.git"
.
├── docs
│   ├── README.md
│   └── .vuepress
│       └── config.js
├── package.json
└── yarn.lock

2 directories, 4 files
[root@localhost1 documents]# 
```

> 至此，最简单的一个可部署查看的Vue Press 项目结构已经形成，后续将通过各种配置进行完善。

### 4、使用VsCode 连接Linux中的代码

#### 4.1 下载VsCode

> 官网：https://code.visualstudio.com/Download
>
> 百度网盘下载指定版本：
>
> 链接：https://pan.baidu.com/s/18PotJlzDT8gIr9rvQRXLxg?pwd=ew6x 
>
> 提取码：ew6x 

#### 4.2 VSCode安装SSH 和 SSH Edit2个插件

<img src="https://img-blog.csdnimg.cn/2e04cb62b6a146da84855e1ceb2ba05f.png#" alt="在这里插入图片描述" style="zoom:200%;" />

#### 4.3 SSH连接Linux

<img src="/images/image-20230228150055775.png#" alt="image-20230228150055775" style="zoom:200%;" />

<img src="/images/image-20230228150107024.png#" alt="image-20230228150107024" style="zoom:200%;" />

<img src="/images/image-20230228150137069.png#" alt="image-20230228150137069" style="zoom:200%;" />

> 按格式输入 `ssh 主机名@ip`
>
> ssh 192.168.198.128_localhost1@192.168.198.128

<img src="/images/image-20230228150258951.png#" alt="image-20230228150258951" style="zoom:200%;" />

<img src="/images/image-20230228150316283.png#" alt="image-20230228150316283" style="zoom:200%;" />

> 选择第一个打开配置文件，确保输入正确

<img src="/images/image-20230228150722061.png#" alt="image-20230228150722061" style="zoom:200%;" />

> 然后重新连接，输入密码即可
>
> 最后选择你的目录 /home/qianpz/workspace/

<img src="/images/image-20230228151117165.png#" alt="image-20230228151117165" style="zoom:200%;" />

### 5、配置网站的标题和介绍，方便SEO

> 在 .vuepress/config.js 中配置如下代码：

``` shell
module.exports = {
    //locales 是多语言 这里默认是中文 中文文档的根目录为 / 
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN',
        title: '限量版﹏苯蛋的个人博客',//这个标题大家自行定义
        description: '限量版﹏苯蛋的个人博客,记录自己所学所思所想'//这个介绍大家自行定义
      }
    }
}
```

> 然后 `yarn docs:dev` 部署后效果如下：

<img src="/images/image-20230228161219945.png" alt="image-20230228161219945" style="zoom:200%;" />



### 6、简化发布部署的脚本

> 进入 package.json 文档，修改scripts 脚本如下：

``` shell
  "scripts": {
    "dev": "vuepress dev docs",
    "build": "vuepress build docs"
  }
```

### 7、配置静态图片目录和CNAME

> 在.vuepress下创建public目录，然后再在public下创建/images目录，用于存放md文档中的图片
>
> 此时的public目录相当于图片的根目录 / 

``` shell
[root@localhost1 documents]# tree -a -I "node_modules|.git"
.
├── docs
│   ├── README.md
│   └── .vuepress
│       ├── config.js
│       └── public
│           └── /images
├── package.json
└── yarn.lock

4 directories, 4 files
[root@localhost1 documents]# 
```

### 8、配置网站图标

> 在public目录下添加 favicon.ico 图标文件
>
> 注意： 该图标请自行定义
>
> 通过rz上传的方式将图片进行上传

``` shell
[root@localhost1 public]# rz

[root@localhost1 public]# ll
total 4
-rw-r--r-- 1 root root 1150 Feb 28 17:06 favicon.ico
drwxr-xr-x 2 root root    6 Feb 28 16:44 /images
[root@localhost1 public]# chmod 777 favicon.ico 
[root@localhost1 public]# 
```

> 然后在 config.js 中配置网站的头部网站图标

```shell
head: [
        // ico  网站图标
        ["link", {rel: "icon", href: `/favicon.ico`}]
    ]
```

> 重新部署后如下：可以在网站图标处看到对应的图片了。

<img src="/images/image-20230228171441999.png" alt="image-20230228171441999" style="zoom:200%;" />

### 9、配置主页面和logo

``` shell
 # 上传 logo.gif 到 public//images下
 [root@localhost1 /images]# rz

[root@localhost1 /images]# ll
total 164
-rw-r--r-- 1 root root 164960 Feb 28 19:13 logo.gif
[root@localhost1 /images]# 
```

> 新建一个首页跳转页面，docs下 新建 md文件夹，md 目录下新建 java 文件夹， java 目录下 新建 basic 目录， basic 下新建一个文件 README.md, 同时 README.md 输入 <b># Java 基础</b>

``` shell
[root@localhost1 docs]# tree -a
.
├── md
│?? └── java
│??     └── basic
│??         └── README.md
├── README.md
└── .vuepress
    ├── config.js
    └── public
        ├── favicon.ico
        └── /images
            └── logo.gif

6 directories, 5 files
[root@localhost1 docs]# 

```

> 配置主页面如下：

``` md
---
home: true
heroImage: //images/logo.gif
actionText: 快速开始 →
actionLink: /md/java/basic/README.md
features:
- title: 夯实基础
  details: 不积跬步无以至千里,仰望星空还需脚踏实地
- title: 构建体系
  details: 告别碎片化学习,帮助你构筑你自己的知识体系
- title: 走向架构
  details: 培养软、硬实力，构建架构思维，走向架构师
footer: © 2023-present Limited Fool
---
```

> 效果如下：

![image-20230228194313492](/images/image-20230228194313492.png#)

### 10、自定义网站文档样式

> [官网]: https://vuepress.vuejs.org/zh/miscellaneous/design-concepts.html#overriding

> 在.vuepress 下创建 styles 目录，然后创建2个文件 index.styl 和 palette.styl 进行覆盖网站样式

#### 10.1 index.styl

``` styl
.custom-page-class{
    /* 自定义的样式 */
}

// markdown blockquote
blockquote
  font-size 1rem
  color #2c3e50;
  border-left .5rem solid #42b983
  background-color #f3f5f7
  margin 1rem 0
  padding 1rem 0 1rem 1rem

  & > p
    margin 0

// markdown h1
h1
  font-size 2rem
  padding-bottom 1rem
  border-bottom 1px solid $borderColor

// markdown h2
h2
  font-size 1.65rem
  border-bottom 0px solid $borderColor

// custom block for tip
.custom-block
  .custom-block-title
    font-weight 600
    margin-bottom -0.4rem
  &.tip, &.warning, &.danger
    padding .1rem 1.5rem
    border-left-width .5rem
    border-left-style solid
    margin 1rem 0
  &.tip
    background-color #dfefff
    border-color #428eb9

// logo
.navbar
  .logo
    height $navbarHeight - 1.6rem
    min-width $navbarHeight - 1.6rem
    margin-right 0rem
    vertical-align top

.sidebar
  .logo
    height $navbarHeight - 1.6rem
    min-width $navbarHeight - 1.6rem
    margin-right 0rem
    vertical-align top
```

#### 10.2 palette.styl

``` styl
// 内容的宽度
$contentWidth = 100%

// 颜色
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
```

#### 10.3 代码结构如下

``` shell
[root@localhost1 docs]# tree -a
.
├── md
│   └── java
│       └── basic
│           └── README.md
├── README.md
└── .vuepress
    ├── config.js
    ├── public
    │   ├── favicon.ico
    │   └── /images
    │       └── logo.gif
    └── styles
        ├── index.styl
        └── palette.styl

7 directories, 7 files
[root@localhost1 docs]# 

```

#### 10.4 覆盖后的效果后续展示

### 11、添加导航栏

> 可以参考官网的导航栏配置： https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F

> 主要是在 config.js 文件添加主题相关的参数，如下：

```js
themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
```

> 导航栏下有子导航的时候，可以配置如下：

```js
themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '冴羽的 JavaScript 博客', 
                items: [
                    { text: 'Github', link: 'https://github.com/mqyqingfeng' },
                    { text: '掘金', link: 'https://juejin.cn/user/712139234359182/posts' }
                ]
            }
        ]
    }
```

> 这个 nav 还有不少其他的属性，都可以参考[官网]( https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F)去配置下

> 下面简单展示下我这边的配置，如下：
>
> 先添加一些文件，在 /md/java下新建 collections 文件夹，然后 collections下新建README.md

```shell
# 最新的目录如下：
[root@localhost1 documents]# tree -a -I "node_modules|.git"
.
├── docs
│   ├── md
│   │   └── java
│   │       ├── basic
│   │       │   └── README.md
│   │       └── collections
│   │           └── README.md
│   ├── README.md
│   └── .vuepress
│       ├── config.js
│       ├── public
│       │   ├── favicon.ico
│       │   └── /images
│       │       └── logo.gif
│       └── styles
│           ├── index.styl
│           └── palette.styl
├── package.json
└── yarn.lock

9 directories, 10 files
[root@localhost1 documents]# 

```

``` js
  themeConfig: {
      nav: [
          { 
            text: 'Java 基础', 
            ariLabel: 'Java 基础',
            items: [
              { 
                text: 'Java 基础',
                ariLabel: 'Java 基础',
                items: [
                  {
                    text: 'Java 基础知识',
                    ariLabel: 'Java 基础知识',
                    link: '/md/java/basic/',
                  }
                ]
              },{ 
                text: 'Java 进阶 - 集合框架',
                ariLabel: 'Java 进阶 - 集合框架',
                items: [
                  {
                    text: 'Java 进阶 - 集合框架详解',
                    ariLabel: 'Java 进阶 - 集合框架详解',
                    link: '/md/java/collections/',
                  }
                ]
              },
            ]
          }
      ]
    }
```

> 部署后，可以看到效果如下：

<img src="/images/image-20230302195449152.png" alt="image-20230302195449152" style="zoom:200%;" />

> 接下来，再添加一个 关于 的 导航栏，在 config.js 的原 nav 下新增：
> 

``` shell
,{
            text: '实操系列', 
            ariLabel: '实操系列',
            items:[
              {
                text: '实操系列 - 关于本网站', 
                ariLabel: '实操系列 - 关于本网站',
                items:[
                  { 
                    text: '实操系列 - VuePress + GithubPages 搭建个人技术博客',
                    ariLabel: '实操系列 - VuePress + GithubPages 搭建个人技术博客',
                    link: '/md/realOperate/vuepress-build.md'
                  }
                ]
              }
            ]
          }
```

> 最后的整个nav 为如下：

``` shell
nav: [
          { 
            text: 'Java 基础', 
            ariLabel: 'Java 基础',
            items: [
              { 
                text: 'Java 基础',
                ariLabel: 'Java 基础',
                items: [
                  {
                    text: 'Java 基础知识',
                    ariLabel: 'Java 基础知识',
                    link: '/md/java/basic/',
                  }
                ]
              },{ 
                text: 'Java 进阶 - 集合框架',
                ariLabel: 'Java 进阶 - 集合框架',
                items: [
                  {
                    text: 'Java 进阶 - 集合框架详解',
                    ariLabel: 'Java 进阶 - 集合框架详解',
                    link: '/md/java/collections/',
                  }
                ]
              },
            ]
          },{
            text: '实操系列', 
            ariLabel: '实操系列',
            items:[
              {
                text: '实操系列 - 关于本网站', 
                ariLabel: '实操系列 - 关于本网站',
                items:[
                  { 
                    text: '实操系列 - VuePress + GithubPages 搭建个人技术博客',
                    ariLabel: '实操系列 - VuePress + GithubPages 搭建个人技术博客',
                    link: '/md/realOperate/vuepress-build.md'
                  }
                ]
              }
            ]
          }
      ]
```

> 效果呈现如下：

<img src="/images/image-20230304183743393.png" alt="image-20230304183743393" style="zoom:200%;" />

<img src="/images/image-20230304183743393.png" alt="image-20230304183743393" style="zoom:200%;" />

### 12、 添加侧边栏

> 可以去[官网](https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E4%BE%A7%E8%BE%B9%E6%A0%8F) 查询资料，先学习下

> 主要是在 config.js 下 添加如下代码：

``` shell
# 想要使 侧边栏（Sidebar）生效，需要配置 themeConfig.sidebar，基本的配置，需要一个包含了多个链接的数组：
# .vuepress/config.js  
# 这是单个侧边栏的情况下设置
module.exports = {
  themeConfig: {
    sidebar: [
      '/',
      '/page-a',
      ['/page-b', 'Explicit link text']
    ]
  }
}
# or 或者如下配置 这是多个侧边栏的情况下的设置
module.exports = {
  ...
  themeConfig: {
    sidebar: {
    	'/foo/': [
        '',     /* /foo/ */
        'one',  /* /foo/one.html */
        'two'   /* /foo/two.html */
      ],
      '/bar/': [
        '',      /* /bar/ */
        'three', /* /bar/three.html */
        'four'   /* /bar/four.html */
      ],
      // fallbac
      '/': [
        '',        /* / */
        'contact', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}
# or 如果你希望自动生成一个仅仅包含了当前页面标题（headers）链接的侧边栏  可以使用自动生成侧边栏 缺点就是只会生成单个markdown文档的侧边栏
module.exports = {
  ...
  themeConfig: {
    sidebar: 'auto'
  }
}
```

> 对于目前我们简单的侧边栏来说，可以如下处理：使用自动生成侧边栏，整个config.js 变为如下：

``` shell
module.exports = {
    //locales 是多语言 这里默认是中文 中文文档的根目录为 / 
    locales: {
      // 键名是该语言所属的子路径
      // 作为特例，默认语言可以使用 '/' 作为其路径。
      '/': {
        lang: 'zh-CN',
        title: '限量版﹏苯蛋的个人博客',
        description: '限量版﹏苯蛋的个人博客,记录自己所学所思所想'
      }
    },
    base: '/',
    head: [
        // ico  网站图标
        ["link", {rel: "icon", href: `/favicon.ico`}]
    ],
    themeConfig: {
      nav: [
          { 
            text: 'Java 基础', 
            ariLabel: 'Java 基础',
            items: [
              { 
                text: 'Java 基础',
                ariLabel: 'Java 基础',
                items: [
                  {
                    text: 'Java 基础知识',
                    ariLabel: 'Java 基础知识',
                    link: '/md/java/basic/',
                  }
                ]
              },{ 
                text: 'Java 进阶 - 集合框架',
                ariLabel: 'Java 进阶 - 集合框架',
                items: [
                  {
                    text: 'Java 进阶 - 集合框架详解',
                    ariLabel: 'Java 进阶 - 集合框架详解',
                    link: '/md/java/collections/',
                  }
                ]
              },
            ]
          },{
            text: '实操系列', 
            ariLabel: '实操系列',
            items:[
              {
                text: '实操系列 - 关于本网站', 
                ariLabel: '实操系列 - 关于本网站',
                items:[
                  { 
                    text: '实操系列 - VuePress + GithubPages 搭建个人技术博客',
                    ariLabel: '实操系列 - VuePress + GithubPages 搭建个人技术博客',
                    link: '/md/realOperate/vuepress-build.md'
                  }
                ]
              }
            ]
          }
      ],
      sidebar: 'auto'
    }
}
```

> 其效果如下：

![image-20230304185058987](/images/image-20230304185058987.png)

