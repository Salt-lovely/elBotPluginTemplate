import { default as Bot } from "el-bot";
import { log } from "mirai-ts";
import { ChatMessage } from "mirai-ts/dist/types/message-type";

module.exports = function (ctx: Bot) {
    /**mirai对象 */
    const mirai = ctx.mirai;
    /**插件前缀 */
    const prefix = ': '
    /**是否允许临时会话 */
    const allowTempmsg = false
    /**QQ群允许列表 */
    const premittedGroup = [123456]
    /**当收到消息时触发 */
    function onChat(msg: ChatMessage) {
        let id = msg.type
        // 是否允许临时会话
        if (id == 'TempMessage' && !allowTempmsg)
            return;
        // 检查是否在允许列表
        if (id == 'GroupMessage' && premittedGroup.indexOf(msg.sender.id) == -1)
            return;
        // info('触发message事件')
    }
    /**
     * 随机抽取数组中的一个元素返回
     * @param arr 数组
     */
    function randomChoice<T>(arr: T | T[]): T {
        if (arr instanceof Array)
            return arr[Math.floor(Math.random() * arr.length)];
        return arr
    }
    mirai.on("message", onChat);
    /**控制台上输出带绿色[success]与前缀的信息 */
    function success(msg: string | number) { log.success(prefix + msg) }
    /**控制台上输出带黄色[warning]与前缀的信息 */
    function warn(msg: string | number) { log.warning(prefix + msg) }
    /**控制台上输出带红色[error]与前缀的信息 */
    function error(msg: string | number) { log.error(prefix + msg) }
    /**控制台上输出带蓝色[info]与前缀的信息 */
    function info(msg: string | number) { log.info(prefix + msg) }
}
