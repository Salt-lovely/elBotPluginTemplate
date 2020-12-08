# elBotPluginTemplate
el-bot的插件模板
## 如何使用（傻瓜式教程）
1. 下载所有文件（readme和license并非必须）
2. 解压 node_modules.7z 到这个文件夹（右键-解压到当前文件夹）
1. 检查一下现在这个文件夹是不是长这样：
```
.
├── node_modules —— 文件夹
│   └── 一大堆奇怪的文件夹
├── src          —— 文件夹
│   └── example.ts —— 主文件
├── package-lock.json
├── tsconfig.json
│   ...
```
4. 这个 `src/example.ts` 就是模板文件
5. 用`VSCode`之类的IDE打开这个 `src/example.ts`（这个名字不好听，可以重命名再打开）

## 如何安装el-bot（傻瓜式教程）

### 前期准备
1. Java 11、NodeJS 12、一台能运行这两个东西的电脑
2. 一颗坚韧的心 —— el-bot 的安装对于不熟悉它的人来说非常不妙，到处是坑（起码这几天是这样的）
3. 优秀的网络服务 —— 建议把你的网络运营商打一顿来获得更好的到 GitHub 的网络

----
### 坑
el-bot的结构：
mirai核心 -> mirai-console（核心和前端） -> mirai-api-http -> mirai-ts -> el-bot

1. mirai-api-http 目前的最新版 1.8.4 只支持 1.0M4版本的 mirai-console
2. 但是你很难找到 1.0M4版的 mirai-console 因为 1.1.0版都出来了
2. 就算找到了 1.0M4版的 mirai-console 你也很难用，因为你找不到 -pure 以外的1.0M4的 mirai-console前端
3. 而启用 mirai-console-pure 前端的指令要去仓库的历史记录里找
3. 此外，`npm install el-bot`之后如果不`npm install`求稳，可能会出问题
4. 还有，el-bot-template 里面的 mirai 文件夹是个陷阱
5. 看第 1-3 条
6. 你心态会炸

----
### 教程
1. 找一个空文件夹 重命名`el-bot` （没有空文件夹？右键新建一个）
1. 在这个文件夹打开cmd，或者`cd`到这个文件夹
1. 指令 `npm install el-bot`
1. 指令 `npm install`
2. 下载 [el-bot-template](https://github.com/ElpsyCN/el-bot-template) 到这个文件夹
2. 文件夹内新建一个 .bat 文件（右键，新建文本文档，重命名“el-bot.bat”）
2. 里面写上：
```
@echo off
npm start:el-bot
pause
```
8. 新建文件夹 **mirai-console**
3. 下载 **1.0M4** 版本的 mirai-console 和 mirai-console-pure （mirai-api-http只支持到 1.0M4版）
3. 下载 mirai-core-all ，我用的是 1.3.3，理论上 1.2.3 - 1.3.3 都能用
4. 把这三个 jar 丢进 `mirai-console/libs` 文件夹 （没有libs文件夹？右键新建一个）
4. `mirai-console` 文件夹内新建一个 .bat 文件（右键，新建文本文档，重命名“mirai-console.bat”）
8. 里面写上：
```
@echo off
title Mirai Console
java -cp "./libs/*" net.mamoe.mirai.console.pure.MiraiConsolePureLoader %*
pause
```
14. 打开 `mirai-console` 文件夹里面的 `mirai-console.bat` 运行，成功后输入`stop`回车退出
5. `mirai-console` 文件夹出现了新文件夹 `plugin`
5. 将下载到的 `mirai-api-http 1.8.4` 放到 `mirai-console/plugin`
5. 打开 `mirai-console.bat` 运行，成功后输入`stop`回车退出
5. 打开 `mirai-console/config/MiraiApiHttp` 里面的 `setting.yml` 设置 `auth-key`（auth-key设置为啥？你设置密码都需要别人参谋的？）
5. 打开 `mirai-console.bat` 运行，成功后输入`login QQ号 密码`登录
5. 不要关闭，看下一步
6. 打开 最开始安装el-bot的文件夹 `el-bot`
6. 将 `.env.example` 文件重命名为 `.env` 修改里面的 `BOT_QQ=xxx` 后面的 `xxx` 为你的QQ号（右键-打开方式-用记事本打开）
6. 打开 `mirai\plugins\MiraiAPIHTTP` 里面的 `setting.yml` 输入正确的 `auth-key` 和 `端口号`
6. 打开 `el-bot.bat` 运行
7. 此时你有两个正在运行的CMD窗口，一个是mirai-console，一个是el-bot
