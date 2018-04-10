/******
 *所有api都存放于此
 * ***/
//Vue.http.option.root = ''; //设置所有api的根目录
//钱包
import Mock from "./mock"
import { setTimeout } from "timers";
const wallet = function (_vueThis,url) {
    return request(_vueThis,url);
}
function request(that,url) {
    url="http://www.baidu.com"
    return that.$http({
        method: "get",
        url: url,
        // body: data,
        headers: {"Authorization": "token"},
        emulateJSON: true
    });
}
export default {
    wallet
};