---
layout:     post
title:      Intellij IDEA 常用设置讲解
no-post-nav: true
category: java
tags: [java]
excerpt: IDEA 天下第一，不服来辩！
---

## 说明
IntelliJ IDEA 是业界公认的最好的Java开发工具，没有之一。也是我心目中最好的软件。
IDEA 在智能代码助手、代码自动提示、重构、J2EE支持、JUnit、CVS整合、代码审查、
创新的GUI设计等方面的功能可以说是超常的。IDEA 是Jetbrains公司的产品，这家公司
总部位于捷克共和国的首富布拉格，开发人员以严谨著称的东欧程序员为主。

## 常用设置

### 大小写设置

IDEA 默认代码提示和补充是区分大小写的，这一点让很多从Eclipse转过来的人很不爽，包括
最初的我自己，不过现在我已经喜欢上了这种区分大小写的设置。那么为了满足很多Eclipse的
小伙伴，我决定把这个设置放在第一位。首先我们打开设置，`File-Settings`，win系统快捷键
是`ctrl + shift + s`，然后选择`Editor-General-Code Completion`，当然我们也可以直接
在最上方的搜索框搜索`Code Completion`，然后将`Case sensitive completion`对应的值
修改为`None`即可。但是似乎最新版本的IDEA已经删除了这个选项。

### 自动导包

默认IDEA没有开启自动导包功能，需要我们手动设置开启。

![](http://yuhangma.com/assets/images/2018/idea/idea-settings-01.png)

如上图所示，勾选即可。

### 开启显示内存使用情况

IntelliJ IDEA 14 版本默认是不显示内存使用情况的，对于大内存的机器来讲不显示也无所谓，
但是如果是内存小的机器最好还是显示下。打开设置`Settings-Appearance & Behavior-Appearance`，
勾选`Window options`下的`show memory indicator`选项。保存之后编辑器右下角
会显示对应的内存使用情况，点击可以进行部分的内存回收。

### 隐藏特定类型的文件

我们可以通过设置，将某些文件进行隐藏，让我们的文件目录变得更加简洁，比如我会把.idea
、*.iml等配置文件进行隐藏。打开设置`Editor-File Types`，在最下方的`Ignore files and
 folders`输入框中输入对应的文件后缀名即可，支持正则匹配。
 
本文主要教大家设置一些比较不常见的功能，后面会慢慢做一些补充，
常见的功能大家百度一下基本都能够自己摸索出来，
对IDEA使用有疑问的同学，可以在文章下面留言，或者加博主的QQ群、个人微信进行咨询。感谢您的阅读。
