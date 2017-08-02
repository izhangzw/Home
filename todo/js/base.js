//Autosize 1.14 - jQuery plugin for textareas
(function(e){var t={className:"autosizejs",append:"",callback:!1},n="hidden",r="border-box",i="lineHeight",s='<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',o=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],u="oninput",a="onpropertychange",f=e(s)[0];f.setAttribute(u,"return"),e.isFunction(f[u])||a in f?(e(f).css(i,"99px"),e(f).css(i)==="99px"&&o.push(i),e.fn.autosize=function(i){return i=e.extend({},t,i||{}),this.each(function(){function b(){var e,r,s;p||(p=!0,l.value=t.value+i.append,l.style.overflowY=t.style.overflowY,s=parseInt(t.style.height,10),l.style.width=f.css("width"),l.scrollTop=0,l.scrollTop=9e4,e=l.scrollTop,r=n,e>h?(e=h,r="scroll"):e<c&&(e=c),e+=m,t.style.overflowY=r,s!==e&&(t.style.height=e+"px",y&&i.callback.call(t)),setTimeout(function(){p=!1},1))}var t=this,f=e(t),l,c=f.height(),h=parseInt(f.css("maxHeight"),10),p,d=o.length,v,m=0,g=t.value,y=e.isFunction(i.callback);if(f.css("box-sizing")===r||f.css("-moz-box-sizing")===r||f.css("-webkit-box-sizing")===r)m=f.outerHeight()-f.height();if(f.data("mirror")||f.data("ismirror"))return;l=e(s).data("ismirror",!0).addClass(i.className)[0],v=f.css("resize")==="none"?"none":"horizontal",f.data("mirror",e(l)).css({overflow:n,overflowY:n,wordWrap:"break-word",resize:v}),h=h&&h>0?h:9e4;while(d--)l.style[o[d]]=f.css(o[d]);e("body").append(l),a in t?u in t?t[u]=t.onkeyup=b:t[a]=b:(t[u]=b,t.value="",t.value=g),e(window).resize(b),f.bind("autosize",b),b()})}):e.fn.autosize=function(e){return this}})(jQuery);

var util = (function(){
	//获取Selection对象
	var getUserSelectionObj = function(){
		var userSelection;
		if (window.getSelection) { //现代浏览器
		    userSelection = window.getSelection();
		} else if (document.selection) { //IE浏览器 考虑到Opera，应该放在后面
		    userSelection = document.selection.createRange();
		}
		return userSelection;
	}
	
	
	return {
		loadScript: function(src, callback) {
			var script = document.createElement("script"),
				c = function() {
					callback();
				};
			script.src = src;
			script.charset = "utf-8";
			script.onload = c;
			script.onreadystatechange = function() {
				if (this.readyState == "complete" || this.readyState == "loaded") {
					c();
				}
			};
			document.getElementsByTagName("head")[0].appendChild(script);
		},
		formatTitle: function(time){
			return moment(time).calendar();
		},
		formatDate: function(time){
			return moment(time).format('YYYY-MM-DD');
		},
		//光标到最前或最后
		//top: true 最前; top: false: 最后
		range2border: function(dom, top){
			var sel = getUserSelectionObj();
			var range = document.createRange();
			// Range对象关联Dom节点(不包含节点本身)
			range.selectNodeContents(dom);
			// 光标开始和光标结束不重叠
			range.collapse(top);
			// 清除选定对象的所有光标对象
			sel.removeAllRanges();
			// 插入新的光标对象
			sel.addRange(range);
		}
	}
})();
