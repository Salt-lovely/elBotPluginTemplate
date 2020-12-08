# elBotPluginTemplate
el-bot的插件模板
## 如何使用（傻瓜式教程）
1. 下载所有文件（readme和license并非必须）
2. 解压 node_modules.7z 到这个文件夹（右键-解压到当前文件夹）
1. 检查一下现在这个文件夹是不是长这样：
```
.
├── node_modules —— 文件夹
├── src          —— 文件夹
│   └── example.ts —— 主文件
├── package-lock.json
├── tsconfig.json
│   ...
```
4. 这个 `src/example.ts` 就是模板文件
## 如何安装el-bot（傻瓜式教程）
1. 找一个空文件夹 重命名el-bot （没有空文件夹？右键新建一个）
1. 在这个文件夹打开cmd，或者`cd`到这个文件夹
1. 指令 `npm install el-bot`
1. 指令 `npm install`
2. 下载 [el-bot-template
](https://github.com/ElpsyCN/el-bot-template) 到这个文件夹
2. 文件夹内新建一个 .bat 文件（右键，新建文本文档，重命名“el-bot.bat”）
2. 里面写上：
```
@echo off
npm start:el-bot
pause
```
8. 新建文件夹 **mirai-console**
3. 下载 **1.0M4** 版本的 mirai-console 和 mirai-console-pure
3. 下载 mirai-core-all ，我用的是 1.3.3，理论上 1.2.3 - 1.3.3 都能用
4. 把这三个 jar 丢进 mirai-console/libs （没有libs文件夹？右键新建一个）
4. **mirai** 文件夹内新建一个 .bat 文件（右键，新建文本文档，重命名“mirai-console.bat”）
8. 里面写上：
```
@echo off
title Mirai Console
java -cp "./libs/*" net.mamoe.mirai.console.pure.MiraiConsolePureLoader %*
pause
```
14. 打开 mirai 里面的 bat 运行，成功后输入`stop`回车退出
5. mirai文件夹出现了新文件夹 plugin
5. 将下载到的 mirai-api-http 1.8.4 放到 plugin
5. 打开 mirai 里面的 bat 运行，成功后输入`stop`回车退出
5. 打开 mirai\config\MiraiApiHttp 里面的 setting.yml 设置 auth-key
5. 打开 mirai 里面的 bat 运行，成功后输入`login QQ号 密码`登录
5. 不要关闭，看下一步
6. 打开 最开始安装el-bot的文件夹 el-bot
6. 将 `.env.example` 文件重命名为 `.env` 修改里面的 `BOT_QQ=xxx` 后面的 `xxx` 为你的QQ号
6. 打开 mirai\plugins\MiraiAPIHTTP 里面的 setting 输入正确的 auth-key 和 端口号
6. 打开 bat 运行
7. 此时你有两个正在运行的CMD窗口，一个是mirai-console，一个是el-bot
