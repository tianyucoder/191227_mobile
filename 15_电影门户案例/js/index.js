/* ******************适配代码开始*************** */
function adapter (){
	//获取当前手机设备独立像素值(因为开启了理想视口，所以布局视口=设备独立像素值)
	const w = document.documentElement.clientWidth
	//动态计算根字体大小
	const rootFontSize = w / 10
	//设置根字体大小
	document.documentElement.style.fontSize = rootFontSize +'px'
}
adapter()
window.onresize = adapter
/* ******************适配代码结束*************** */

//底部切换逻辑
//获取所有导航项
const footItems = document.querySelectorAll('#foot .foot_item')
//获取所有导航项里的图标
const footIcons = document.querySelectorAll('#foot .foot_item .icon')
//获取所有导航项里的文字
const footTexts = document.querySelectorAll('#foot .foot_item .icon_text')
//获取每一屏
const screens = document.querySelectorAll('#content .content_item')

//给每一个导航项加touchstart事件
for (let i = 0; i < footItems.length; i++) {
	//循环加监听
	footItems[i].addEventListener('touchstart',function(e){
		//去除所有导航项的高亮
		for (let j = 0; j < footItems.length; j++) {
			//去除图标的高亮
			footIcons[j].className = 'icon'
			//去除文字的高亮
			footTexts[j].className = 'icon_text'
			//隐藏所有屏
			screens[j].className = 'content_item'
		}
		//当前的高亮
		footIcons[i].className = 'icon active'
		footTexts[i].className = 'icon_text active'
		screens[i].className = 'content_item active'
		//阻止默认事件
		e.preventDefault()
		//阻止冒泡
		e.stopPropagation()
	})
}