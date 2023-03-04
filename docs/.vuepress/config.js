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