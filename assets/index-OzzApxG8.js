import{i as m,j as f,k as b}from"./index-CjcRSvyS.js";function y(e){return typeof e=="object"&&e!==null}function p(e,t){return e=y(e)?e:Object.create(null),new Proxy(e,{get(r,i,n){return i==="key"?Reflect.get(r,i,n):Reflect.get(r,i,n)||Reflect.get(t,i,n)}})}function v(e,t){return t.reduce((r,i)=>r==null?void 0:r[i],e)}function M(e,t,r){return t.slice(0,-1).reduce((i,n)=>/^(__proto__)$/.test(n)?{}:i[n]=i[n]||{},e)[t[t.length-1]]=r,e}function L(e,t){return t.reduce((r,i)=>{const n=i.split(".");return M(r,n,v(e,n))},{})}function H(e,t){return r=>{var i;try{const{storage:n=localStorage,beforeRestore:o=void 0,afterRestore:l=void 0,serializer:a={serialize:JSON.stringify,deserialize:JSON.parse},key:s=t.$id,paths:c=null,debug:d=!1}=r;return{storage:n,beforeRestore:o,afterRestore:l,serializer:a,key:((i=e.key)!=null?i:u=>u)(typeof s=="string"?s:s(t.$id)),paths:c,debug:d}}catch(n){return r.debug&&console.error("[pinia-plugin-persistedstate]",n),null}}}function g(e,{storage:t,serializer:r,key:i,debug:n}){try{const o=t==null?void 0:t.getItem(i);o&&e.$patch(r==null?void 0:r.deserialize(o))}catch(o){n&&console.error("[pinia-plugin-persistedstate]",o)}}function h(e,{storage:t,serializer:r,key:i,paths:n,debug:o}){try{const l=Array.isArray(n)?L(e,n):e;t.setItem(i,r.serialize(l))}catch(l){o&&console.error("[pinia-plugin-persistedstate]",l)}}function S(e={}){return t=>{const{auto:r=!1}=e,{options:{persist:i=r},store:n,pinia:o}=t;if(!i)return;if(!(n.$id in o.state.value)){const a=o._s.get(n.$id.replace("__hot:",""));a&&Promise.resolve().then(()=>a.$persist());return}const l=(Array.isArray(i)?i.map(a=>p(a,e)):[p(i,e)]).map(H(e,n)).filter(Boolean);n.$persist=()=>{l.forEach(a=>{h(n.$state,a)})},n.$hydrate=({runHooks:a=!0}={})=>{l.forEach(s=>{const{beforeRestore:c,afterRestore:d}=s;a&&(c==null||c(t)),g(n,s),a&&(d==null||d(t))})},l.forEach(a=>{const{beforeRestore:s,afterRestore:c}=a;s==null||s(t),g(n,a),c==null||c(t),n.$subscribe((d,u)=>{h(u,a)},{detached:!0})})}}var T=S();const k=m("NoteStore",()=>({noteList:f({前端笔记:{html:{基本结构标签:[[["<html></html>","html标签","页面中最大的标签，也称为根标签"],["<head></head>","html文档的头部标签",[`用于声明文档的关键信息

举例：
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no"/>`,[["<meta>","文档描述标签",["属性：",[["http-equiv","模拟http响应头，通常与content属性一起使用"],["name",`定义的关键字，通常与content属性一起使用
◆设置http-equiv属性时，不应使用name属性`],["content",["指定http-equiv属性或name属性的相关值",[["width","viewport的宽度"],["height","viewport的高度"],["initial-scale","初始的缩放比例"],["minimum-scale","允许用户缩放到的最小比例"],["maximum-scale","允许用户缩放到的最大比例"],["user-scalable","用户是否可以手动缩放"]]]]]]],["<link>","外部链接标签",[`用于链接外部资源，如css样式表、网页图标

属性：`,[["rel",["定义文档与外部链接资源之间的关系，值常为以下几种",[["icon","网页图标"],["stylesheet","css样式表"]]]],["href","外部资源的链接地址"]]]],["<script><\/script>","脚本标签",[`用于执行标签内脚本语句
添加src属性时，标签内语句不会执行`,[["type","指定脚本的MIME类型，如text/javascript、module"],["src","指定外部脚本链接"],["charset",`指定脚本使用的字符编码
◆ 仅适用于外部脚本`],["defer",`页面完成解析后，才执行脚本
◆ 仅适用于外部脚本`],["async",`HTML5新增
异步执行脚本
◆ 仅适用于外部脚本`],["xml:space",`HTML5移除
保留代码中的空白`]]]],["<title></title>","文档标题标签",`用于指定网页名称
必须设置`]]]],["<body></body>","html文档的主体标签","包含页面内容的所有html标签"]]],常用标签:[[["<header></header>",`HTML5新增
头部标签`,`语义化标签
◆主要针对SEO优化使用
◆可以使用多次
◆在IE9中需要先转换为块级元素
◆移动端较为常用`],["<nav></nav>",`HTML5新增
导航标签`,`语义化标签
◆主要针对SEO优化使用
◆可以使用多次
◆在IE9中需要先转换为块级元素
◆移动端较为常用`],["<article></article>",`HTML5新增
内容标签`,`语义化标签
◆主要针对SEO优化使用
◆可以使用多次
◆在IE9中需要先转换为块级元素
◆移动端较为常用`],["<section></section>",`HTML5新增
定义文档标签`,`语义化标签
◆主要针对SEO优化使用
◆可以使用多次
◆在IE9中需要先转换为块级元素
◆移动端较为常用`],["<aside></aside>",`HTML5新增
侧边栏标签`,`语义化标签
◆主要针对SEO优化使用
◆可以使用多次
◆在IE9中需要先转换为块级元素
◆移动端较为常用`],["<footer></footer>",`HTML5新增
尾部标签`,`语义化标签
◆主要针对SEO优化使用
◆可以使用多次
◆在IE9中需要先转换为块级元素
◆移动端较为常用`],[`<h1></h1>一级标题
…
<h6></h6>六级标题`,"标题标签",`display:block;
font-weight: bold;
margin;
font-size;`],["<p></p>","paragraph，段落标签"],[`<br>
<br />`,`break，强制换行
◆<br>为HTML写法
◆<br />为XML(XHTML)写法`,"-"],[`<strong></strong>
<b></b>`,"文字加粗标签","font-weight: bold;"],[`<em></em>
<i></i>`,"文字倾斜标签"],[`<del></del>
<s></s>`,"文字删除线标签"],[`<ins></ins>
<u></u>`,"文字下划线标签"],["<div></div>","division，最常用的标签之一","display: block;"],["<span></span>","最常用的标签之一","display: inline;"],["<pre></pre>",`预定义格式文本标签
保留空格和换行符以及其他格式`,`不支持width属性

display: block;
font-family: monospace;
unicode-bidi: isolate;
white-space: pre;
margin: 1em 0px;`],['<img src="" />',[`image，插入图片
◆src为必须属性，用于指定图像文件的路径和文件名`,[["src","图片路径","必须属性"],["alt","文本","替换文本（图像无法显示时显示的文本）"],["title","文本","提示文本（鼠标放到图像上，显示的文字）"][`图像宽度
◆无需px单位`],["height","数值",`图像高度
◆无需px单位`],["border","数值","图像边框的粗细。默认为黑边框"]]]],['<a href="目标链接" targe="窗口打开方式"> 描述文本、图像、表格、音频或视频 </a>',`anchor，锚，链接标签
◆href为必须属性，默认为#（空链接），用于指定链接目标地址。对象可以是网址、文件或当前页面的id指定位置
◆◆<a href="#子标题"> 链接描述文本 </a>
    <h2 id="子标题"> 标题名 </h2>
◆target默认为_self（在当前页面打开），可修改为_blank（在新窗口中打开）
◆具有默认样式。不生效body{}的样式，需要单独指定样式`],[`<table> 
	<thead>
		<tr>
			<th> 表头单元格 </th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td> 单元格 </td>
		</tr>
	</tbody>
</table>`,[`table，表格
<table> </table>，定义表格标签<thead> </thead>，定义表格头部。必须嵌套在<table> </table>标签中
<tbody> </tbody>，定义表格主体。必须嵌套在<table> </table>标签中
<tr> </tr>，table row，定义行。必须嵌套在<table> </table>标签中
<th> </th>，table head，定义表头单元格，文本居中并加粗。必须嵌套在<tr> </tr>标签中
<td> </td>，table data，定义单元格。必须嵌套在<tr> </tr>标签中

属性`,[["align","left、center、right","规定单元格内元素的对齐方式"],["border",'1或""','规定单元格是否有边框。默认为""，表示无边框'],["cellpadding","像素值","规定单元格边沿与内容的间隔。默认1像素"],["cellspacing","像素值","规定单元格之间的间隔。默认2像素"],["width","像素值、百分比","规定表格的宽度"],["rowspan","合并单元格个数","跨行合并单元格"],["colspan","合并单元格个数","跨列合并单元格"]]]],[`<ul>
	<li> 列表项1 </li>
	<li> 列表项2 </li>
</ul>`,`<ul> </ul>，无序列表。只能嵌套<li> </li>
<li> </li>，定义列表项
◆可以通过CSS的list-style: none; 将项目符号去掉`],[`<ol>
	<li> 列表项1 </li>
	<li> 列表项2 </li>
</ol>`,`<ol> </ol>，有序列表，排序默认以数字来显示。只能嵌套<li> </li>
<li> </li>，定义列表项`],[`<dl>
	<dt> 列表项1 </dt>
	<dd> 列表子项1 </dd>
	<dd> 列表子项2 </dd>
</dl>`,`<dl> </dl>，自定义列表
<dt> </dt>，定义自定义列表项
<dd> </dd>，定义自定义列表子项，带缩进
◆一般由一个<dt>对应多个<dd>`],[`<form artion="url地址" method="提交方式" name="表单域名称">
	各种表单元素控件
	<input type="属性值" />
</form>`,[["action","url地址","指定表单提交服务器程序的url地址"],["method",`get
post`,"设置表单设置的提交方式"],["name","名称",`指定表单名称，用于区分同一页面中的多个表单域（即将多个选项分为同一组，同组不同选项将会互斥，如性别中的男、女）
◆需与value搭配使用，以区分不同选项`],["required","required",`HTML5新增
指定该控件为必填项`],["placeholder","提示文本",`HTML5新增
默认不显示`],["autofocus","autofocus",`HTML5新增
页面加载完成时，自动选择表单`],["autocomplete","off/on",`HTML5新增
自动填写。默认为on
◆需要添加name属性`],["multiple","multiple",`HTML5新增
多选文件提交`],["input",`type
name
value
checked
maxlength`,[`用于收集用户信息
type用于指定输入内容：
`,[["button","可点击按钮（搭配JS启动脚本）"],["checkbox","复选框"],["file",'输入字段 或 "浏览"按钮，用于上传文件'],["hidden","隐藏输入字段"],["image","图片形式的按钮"],["password","密码字段（隐藏输入内容）"],["radio","单选按钮"],["reset","重置按钮。将清除表单中所有数据"],["submit","提交按钮。将表单数据发送到服务器"],["text","单行输入字段。默认宽度为20个字符"],["email",`HTML5新增
限制内容为email地址`],["url",`HTML5新增
限制内容为url类型`],["date",`HTML5新增
限制内容为日期`],["time",`HTML5新增
限制内容为时间`],["month",`HTML5新增
限制内容为月份`],["week",`HTML5新增
限制内容为周`],["number",`HTML5新增
限制内容为数字`],["tel",`HTML5新增
限制内容为手机号码`],["search",`HTML5新增
搜索框`],["color",`HTML5新增
颜色选择表单`]],`◆必须添加在<form> </form>里时才能验证input内容的类型是否正确

`,"其他<input>标签属性：",[["name","由用户自定义",`定义input元素的名称（主要由后台人员使用）
◆要求“单选按钮”和“复选框”要有相同的name值`],["value","由用户自定义","定义input元素的值（主要由后台人员使用）"],["checked","checked",`使指定input元素在加载时被选中
◆主要用于“单选按钮”和“复选框”`],["maxlength","正整数","指定输入字段的字符最大长度"]]]]]],[`<label for="idname"> 标签名 </label>
<input type="radio" name="idname" />`,`为input元素定义标签。用于绑定<input>的表单元素：选中<label>元素时，等同于选中绑定的<input>表单元素
◆<label>的for属性值必须与<input>的name值相同`],[`<select>
	<option>选项1</option>
	<option selected="selected">选项2</option>
</select>`,`下拉列表选项。至少包含一对<option>标签
◆selected属性用于指定当前项为默认选中项
◆vue中的v-model指定为option的value值`],["<textarea>","多行文本的输入框"],[[[`<video src="文件地址" controls="controls">
<source src="文件地址" type="video/mp4">
<source src="文件地址" type="video/ogg">
无法播放时的提示文本</video>`,["视频",[["autoplay","autoplay","视频自动播放"],["controls","controls","显示播放控件"],["width","数值","播放器宽度"],["height","数值","播放器高度"],["loop","loop","循环播放"],["preload","auto/none",`auto为预加载视频
none为不加载视频
◆设置autoplay时，该属性会被忽略`],["src","视频地址","指定视频文件地址"],["poster","图片地址","指定等待加载时的封面图片"],["muted","muted","静音播放"]],[["<source>","文件地址","兼容性写法。添加多个视频源，依序检测是否支持播放"]]]],[`<audio src="文件地址" controls="controls">
<source src="文件地址" type="audio/mpeg">
<source src="文件地址" type="audio/ogg">
无法播放时的提示文本
</audio>`,["音频",[["autoplay","autoplay","音频自动播放"],["controls","controls","显示播放控件"],["loop","loop","循环播放"],["src","视频地址","指定音频文件地址"]],[["<source>","文件地址","兼容性写法。添加多个视频源，依序检测是否支持播放"]]]]],["HTML5新增","浏览器兼容性如下：",[["浏览器","MP4","WebM","Ogg"],["chrome","支持","支持","支持"],["Firefox","支持","支持","支持"],["Safari","支持","不支持","不支持"]],[["浏览器","MP3","Wav","Ogg"],["chrome","支持","支持","支持"],["Firefox","支持","支持","支持"],["Safari","支持","支持","不支持"]]]]]],特殊字符:[[["","空格","&nbsp;"],["<","小于号","&lt;"],[">","大于号","&gt;"],["&","和","&amp;"],["￥","人民币","&yen;"],["©","版权","&copy;"],["®","注册商标","&reg;"],["°","度","&deg;"],["±","正负号","&plusmn;"],["×","乘号","&times;"],["÷","除号","&divide;"],["²","平方","&sup2;"],["³","立方","&sup3;"]]]},css:{选择器:{基础选择器:["基础选择器是由单个选择器组成的，包括：标签选择器、类选择器、id选择器、通配符选择器",[["标签选择器","div { }","指用HTML标签作为选择器分类。应用在所有指定的HTML标签上"],["类选择器",`.class1 { }
.class2{ }
<div class="class1 class2"> 
</div>`,["定义一个class类，由HTML标签引用该class类的样式。一个HTML标签可以引用多个class类样式，class类名称之间用“空格”隔开",[["div.class{ }","仅div标签引用class才生效"]]]],["id选择器",`#id{ }
<div id="id">`,`定义一个id样式，由HTML标签引用该id的样式
同一个id名只能被引用一次`],["通配符选择器","* { }","将样式应用在所有HTML标签上"]]],复合选择器:["复合选择器由两个或多个基础选择器，通过不同方式组合而成，包括：后代选择器、子选择器、并集选择器、伪类选择器等",[["后代选择器",`元素1 元素2{
}`,`也称包含选择器。选择元素1里的所有元素2
◆元素名之间用“空格”隔开
◆元素1和元素2可以是任意基础选择器`]["也称子选择器。选择父元素里的次一级所有指定子元素"],["并集选择器",`元素1, 元素2{
}`,`选择多组标签。元素之间用“逗号”隔开
◆任何形式的选择器都可以作为并集选择器的一部分`],["伪类选择器",`元素:值{
}
input:focus`,["用于给选择器添加效果(下表声明顺序不可变)",[["a:link","选择所有未被访问的链接"],["a:visited","选择所有已被访问的链接"],["a:horver","选择鼠标指向的链接"],["a:active","选择活动链接（点击选中）"]],":focus伪类选择器只有input表单类元素才能获取。用于指定被选中时的样式"]],["属性选择器",`元素[属性]
元素[属性="值"]
元素[属性^="值"]
元素[属性$="值"]
元素[属性*="值"]`,[`CSS3新增

可以直接根据指定属性选择所属的元素
特点为“中括号[]”
权重为0,0,1,0
◆但因为需要指定元素，一般记为0,0,1,1`,[["A[type]","选择具有type属性的A元素"],['A[type="abc"]',"选择type值为abc的A元素"],['A[type^="abc"]',"选择type值开头为abc的A元素"],['A[type$="abc"]',"选择type值结尾为abc的A元素"],['A[type*="abc"]',"选择type值含有abc的A元素"]]]],["结构伪类选择器","元素:值",[`CSS3新增

主要根据文档结构来选择元素
权重为0,0,1,0
◆但因为需要指定元素，一般记为0,0,1,1`,[["A:first-child","匹配父元素的第一个子元素，且元素必须为A才能生效"],["A:last-child","匹配父元素的最后一个子元素，且元素必须为A才能生效"],["A:nth-child(n)",[`匹配父元素的第n个子元素，且元素必须为A才能生效
◆n可以为数字、关键字或公式
◆n从0开始计算`,[["关键字",[["even","偶数"],["odd","奇数"]]],["公式",[["n","从0开始遍历所有子元素，也就是全选"],["2n","偶数/2的倍数"],["2n+1","奇数"],["5n","5的倍数"],["n+5","从第5个开始，直到最后一个子元素"],["-n+5","前5个，包含第5个"]]]]]],["A:first-of-type","指定第一个元素A"],["A:last-of-type","指定最后一个元素A"],["A:nth-of-type(n)",`指定第n个元素A
◆n可以为数字、关键字或公式（同nth-child）
◆n从0开始计算`]],"其他伪类选择器",[["input:checked","指定所有checked的input"]]]]]]}},js:{变量:[`变量是计算机存储数据的“容器”，而非数据本身
本质是程序在内存中申请用来存放数据的空间`,[["语法",[["声明/定义变量",[[[`let 变量名
let 变量名1, 变量名2`]],"◆为了更好的可读性，提倡一行只声明一个变量"]],["赋值",[[["变量名 = 数据"]],"◆“=”称为赋值运算符"]],["变量初始化",[[`let 变量名 = 数据
let 变量名1 = 数据1, 变量名2 = 数据2`]]],["变量更新",[[[`let 变量名 = 数据1
变量名 = 数据2`]],"◆let不允许多次声明同一变量"]],["var",[`在较旧的JavaScript中使用var来声明变量，现不再使用var：
◆ var声明的变量可以先使用再声明
◆ Var声明的变量可以重复声明
◆ 变量提升、全局变量、没有块级作用域`,[["变量提升",`JS中存在的现象：使用var声明的变量允许变量声明之前被访问
◆代码执行前，将var声明的变量提升至当前作用域的最前面
◆仅提升声明，不提升赋值
◆提前访问的返回值为undefined`]]]]]],["规则",`◆ 不能使用如let、var、if、for等关键字
◆ 只能使用字母、数字、下划线、$
◆ 不允许数字开头
◆ 字母区分大小写`],["规范",`◆ 起名要有意义
◆ 遵守小驼峰命名法：第一个单词首字母小写，后面每个单词首字母大写，如userName`]]],常量:[`使用const声明的变量称为“常量”
◆通常某个变量不会改变的时候，使用const声明，而不是let
◆规范与变量一致`,[["语法",[[["const 常量名 = 数据"]],`◆声明常量时必须赋值
◆常量不允许重新赋值`]]]],数据类型:[`数据分类的意义：
◆更加充分高效地利用内存
◆方便程序员使用数据`,"基本数据类型 / 值类型：Number 数字型、String 字符串型、Boolean 布尔型、Undefined 未定义型、Null 空类型，存储的是值本身，存放于“栈”","引用数据类型：array 数组、function 函数、object 对象，存储的是数据所在地址，存放于“堆”",[["类型转换",["使用表单和prompt获取的数据默认为字符串",[["隐式转换",`运算符被执行时，将自动转换数据类型
◆字符串使用 +运算符 时会把另一个转换为字符串
◆◆+运算符 作为“正号”解析时，会转换为数字型，常用于在字符串前添加+运算符，将字符串转换为数字型
◆使用 - * /运算符 时会把数据转成数字类型
◆◆空字符串、null将转换成0
◆◆undefined将转换成NaN
◆使用比较运算符时，会将数据转换为数字型进行判断
◆使用if语句时，判断条件的结果会转换为布尔型进行判断`],["显式转换",[["数字型",["将任意数据转换为数字",[["Number(需要转换的数据)"]],"◆转换的字符串内容包含非数字时，结果为NaN"]],["字符串",["将任意数据转换为字符串",[["String(需要转换的数据)"],["需要转换的数据.toString()"]]]]]]]]]]],数字:["算术运算符",[["和","+"],["差","-"],["积","*"],["商","/"],[`取模(余数)
◆常用于检查某个数字是否被整除`,"%"],["提高优先级","( )"]],"◆优先级：() > * /   % > + -",`◆NaN数据数字型数据，代表非数字

`,[["toFixed()",["保留小数位的长度",[["数字.toFixed(保留位数)"]],"◆保留结果为四舍五入"]],["isNaN()","判断是不是非数字"]]],字符串:[]},vue:{一级标题:["内容"]},ajax:{一级标题:["内容"]},nodeJs:{一级标题:["内容"]}},其他编程笔记:{vscode:{一级标题:["内容"]},git:{说明:[`分布式的代码版本控制系统
创建一个git仓库，用于保存记录每个版本的代码，并存储修改记录，形成代码历史。且在多人开发时可以高效合并代码内容`],系统配置指令:[[["git -v","查看版本号"],['git config --global user.name "用户名"',"配置本机用户名"],['git config --global user.email "用户邮箱"',"配置本机用户邮箱"],["git config --list","查看git配置"],["git config --system --list","查看系统配置"],["git config --global --list","查看当前用户配置"]]],git仓库:{初始化仓库:[`git仓库是用于记录文件状态内容的地方，存储着修改的历史记录
可以使用以下两种方式创建git仓库`,[["把本地文件夹转为git仓库","git init"],[`从其他服务器克隆git仓库
◆ 仅能在新建仓库的情况下使用clone指令
◆ 克隆后无需再次添加git远程仓库地址`,"git clone 远程仓库地址"]]],仓库工作区:[[["工作区","实际开发时操作的文件夹",[[["git add 文件名","暂存指定文件"],["git add .","暂存所有改动的文件"]],`
文件标识`,[["未跟踪","U","新文件 / 被移除过的文件。未被git保存过"],["已跟踪","A","git第一次保存的文件"],["未修改","无标识","已成功提交保存，即三个区域的版本统一"],["已修改","M",`保存过的文件，在工作区内发生改动，且未提交保存
◆ 提交暂存并不会移除M标识`]],[["git status","查看文件状态的详细信息"],["git status -s",["查看文件状态的简要信息",[['<span style="color: red;">M</span>',"有文件在工作区发生改动，且未暂存"],['<span style="color: green;">M</span>',"有文件已暂存，但未提交保存"],["无内容提示","所有文件均提交保存 / 内容无改动"]]]]]]],["暂存区",`暂存改动过的文件
保存至.git/index`,[["git ls-files","查看暂存的文件"],["git commit",["暂存所有改动的文件",[["-a","直接将文件从工作区保存至版本库"],['-m "备注内容"',"备注内容"]]]],["git restore 目标文件名","将文件从暂存区复原并覆盖至工作区"],["git rm --cachaed 目标文件名","从暂存区移除目标文件"]]],["版本库",`提交并保存的内容，并产生一个版本快照
保存至.git/objects`,["查看历史记录",[["git log","查看当前分支历史记录的详细信息"],["git log --oneline","查看当前分支历史记录的简要信息"],["git reflog --oneline","查看所有分支历史记录的简要信息"]],`
版本覆盖`,[["git reset --soft 版本号",`将版本库中的某个版本覆盖至工作区和暂存区
◆ 保留原文件，且全部更改为"未跟踪"状态`],["git reset --hard 版本号",`将版本库中的某个版本覆盖至工作区和暂存区
◆ 不保留原文件`],[[[["git reset"],["git reset --mixed 版本号"]],"效果等同"],`将版本库中的某个版本覆盖至工作区和暂存区
◆ 不保留暂存区原文件
◆ 保留工作区原文件，且全部更改为"未跟踪"状态`]]]]]]},分支:{定义:[[["定义","本质上是指向提交节点的可变指针，默认名为master"],["用途",`开发新需求、修复BUG时，保证主线代码随时可用
提高多人协同开发的效率`],["HRAD指针",`影响工作区和暂存区的代码状态
◆ HRAD指针指向当前分支指针`]]],指令:[[["查看分支","git branch"],["创建分支",`git branch 分支名
◆ 将在当前分支下创建新的分支`],["创建并切换至新分支","git branch -b 分支名"],["删除分支指针","git branch -d 分支名"],["切换分支","git checkout 分支名"],["合并分支",`git merge 分支名
◆ 应在主分支下执行该指令
◆ 若主分支在创建分支后，产生了新的提交记录，合并时将自动提交一次版本库保存
◆ 合并冲突只能手动操作`]]]},远程仓库:["第三方托管平台：Gitee、GitLab、GitHub",[["添加git远程仓库",`git remote add 自定义远程仓库名 远程仓库地址
◆ 同一远程仓库名只能对应一个地址
◆ 修改远程仓库地址，只能先移除再添加`],["移除git远程仓库","git remote remove 自定义远程仓库名"],["查看git远程仓库","git remote -v"],["推送至远程仓库",[["简要写法","git push -u 远程仓库名 本地和远程分支名"],["完整写法","git push --set-upstream 远程仓库名 本地分支名:远程分支名"]]],["从远程仓库获取并合并",[["git pull 远程仓库名 本地分支名:远程分支名",["◆ git pull为以下两条指令的整合写法",[["git fetch 远程仓库名 本地分支名:远程分支名",`获取远程分支名
◆ 不执行合并分支`],["git merge 远程仓库名/远程分支名","合并分支"]]]],["git pull --rebase 远程仓库名 本地分支名:远程分支名",`变基：将分支移到一个新的基
用于将本地内容上传至新的远程仓库`]]]]],忽略文件:[[[".gitignore",[`在项目根目录新建.gitignore文件
填入相应配置，不再跟踪指定文件`,[["系统或软件生成的文件",`.vscode
node_modules`],["编译产生的结果文件","dist"],["运行时生成的日志文件，缓存文件，临时文件等","*.log"],["涉密文件，密码，秘钥等文件",`*.pem
*.cer`],["指定文件",`文件名
◆无需路径`]]]]]]},lua:{一级标题:["内容"]}}})})),w=m("projectStore",()=>({projectList:f({移动端智慧商城项目:{url:"https://github.com/liang-Ryan/smart-shopping"},大事件文章项目:{url:"https://github.com/liang-Ryan/big-event-management"},小兔鲜电商项目:{url:"https://github.com/liang-Ryan/rabbit-shopping"},GBFwiki贺图汇总:{url:"https://gbf.huijiwiki.com/wiki/%E8%B4%BA%E5%9B%BE%E6%B1%87%E6%80%BB"},个人笔记源码:{url:"https://github.com/liang-Ryan/Mypage-source"}})})),A=b();A.use(T);export{w as a,k as u};
