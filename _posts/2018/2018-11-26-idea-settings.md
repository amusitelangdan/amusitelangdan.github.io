---
layout:     post
title:      Intellij IDEA 常用设置讲解
category: java
tags: [java]
excerpt: IDEA 天下第一，不服来辩！
---

## 说明
IntelliJ IDEA 是业界公认的最好的Java开发工具，没有之一。也是我心目中最好的软件。
IDEA 在智能代码助手、代码自动提示、重构、J2EE支持、JUnit、CVS整合、代码审查、
创新的GUI设计等方面的功能可以说是超常的。IDEA 是Jetbrains公司的产品，这家公司
总部位于捷克共和国的首富布拉格，开发人员以严谨著称的东欧程序员为主。
IDEA的强大的功能离不开IDEA提供的多样化的自定义设置，下面我们就着重介绍一下IDEA的使用设置。

### UI 相关设置

首先我们打开设置，点击上方菜单栏的`File`然后选择`Settings`（win系统快捷键是`ctrl + alt + s`）。
然后依次打开`Appearance & Behavior - Appearance`，在右侧的`UI Options`下方，是对于IDE整体的UI相关的设置。
1. 我们可以在`Theme`右侧的下拉框中选择我们喜欢的UI，然后点击右下角的`Apply`按钮进行应用。
更多主题可以进入[http://www.riaway.com/](http://www.riaway.com/)下载安装，也可以安装**Material Theme UI**插件进行更多主题的切换。
2. 我们可以勾选Override default fonts by(not recommended)选项来覆盖编辑器默认的字体，然后在下方来设置你所喜欢的字体和大小。
这里推荐使用“Microsoft YaHei UI”或者“Fira Code Retina”字体，真的很漂亮。
Tips，这里的设置只是针对你的IDE，而不是编辑器，简单来讲就是修改这里的设置之后你的菜单栏的字体会变化，但是你的编辑器，也就是你的代码字体是不会变化的。
3. 上面我们修改了IDE的字体设置，下面我们来设置一下我们编辑器的字体，也就是我们代码的字体。仍然是进入设置，然后依次选择`Editor - font`。
博主墙裂推荐的字体是“Consolas”或者“Fira Code”，真的很好看。当然具体还是看个人喜好。

### 开启鼠标滚轮控制字体大小设置

打开`Settings`，依次点击`Editor - General`，在右侧的`Mouse`选项下方，勾选`Change font size(Zoom) with Ctrl+Mouse Wheel`。
也可以在主界面直接快捷键`ctrl + shift + A`搜索`change font size`，然后enter键确认开启。
![](http://www.yuhangma.com/assets/images/2018/idea/idea-settings-02.png)

### 大小写设置

IDEA 默认代码提示和补充是区分大小写的，这一点让很多从Eclipse转过来的人很不爽，包括
最初的我自己，不过现在我已经喜欢上了这种区分大小写的设置。那么为了满足很多Eclipse的
小伙伴，我决定把这个设置放在第一位。首先我们打开设置，`File-Settings`，win系统快捷键
是`ctrl + shift + s`，然后选择`Editor-General-Code Completion`，当然我们也可以直接
在最上方的搜索框搜索`Code Completion`，然后将`Case sensitive completion`对应的值
修改为`None`即可。但是似乎最新版本的IDEA已经删除了这个选项。

### 自动导包

默认IDEA没有开启自动导包功能，需要我们手动设置开启。

![](http://www.yuhangma.com/assets/images/2018/idea/idea-settings-01.png)

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

对IDEA使用有疑问的同学，可以在文章下面留言，或者加博主的QQ群、个人微信进行咨询。感谢您的阅读。
