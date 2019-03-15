require('./zhuge')//引入zhuge打点
require('../style/style')//引入样式
require('../script/ui')//引入ui.js

import { APIURL } from './utils' //引入公用js
let demoTpl = require('../template/demo.tpl');//引入模板
let render = _.template(demoTpl);
let data = {
    data: [
        
    ]
}
$('#app').append(render(data))




