//Bootstrap: tooltip.js v3.3.7
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(t){"use strict";var e=t.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||e[0]>3)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(jQuery),+function(t){"use strict";function e(e){return this.each(function(){var o=t(this),n=o.data("bs.tooltip"),s="object"==typeof e&&e;!n&&/destroy|hide/.test(e)||(n||o.data("bs.tooltip",n=new i(this,s)),"string"==typeof e&&n[e]())})}var i=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};i.VERSION="3.3.7",i.TRANSITION_DURATION=150,i.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},i.prototype.init=function(e,i,o){if(this.enabled=!0,this.type=e,this.$element=t(i),this.options=this.getOptions(o),this.$viewport=this.options.viewport&&t(t.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var n=this.options.trigger.split(" "),s=n.length;s--;){var r=n[s];if("click"==r)this.$element.on("click."+this.type,this.options.selector,t.proxy(this.toggle,this));else if("manual"!=r){var a="hover"==r?"mouseenter":"focusin",l="hover"==r?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,t.proxy(this.enter,this)),this.$element.on(l+"."+this.type,this.options.selector,t.proxy(this.leave,this))}}this.options.selector?this._options=t.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},i.prototype.getDefaults=function(){return i.DEFAULTS},i.prototype.getOptions=function(e){return e=t.extend({},this.getDefaults(),this.$element.data(),e),e.delay&&"number"==typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),e},i.prototype.getDelegateOptions=function(){var e={},i=this.getDefaults();return this._options&&t.each(this._options,function(t,o){i[t]!=o&&(e[t]=o)}),e},i.prototype.enter=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusin"==e.type?"focus":"hover"]=!0),i.tip().hasClass("in")||"in"==i.hoverState?void(i.hoverState="in"):(clearTimeout(i.timeout),i.hoverState="in",i.options.delay&&i.options.delay.show?void(i.timeout=setTimeout(function(){"in"==i.hoverState&&i.show()},i.options.delay.show)):i.show())},i.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},i.prototype.leave=function(e){var i=e instanceof this.constructor?e:t(e.currentTarget).data("bs."+this.type);return i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i)),e instanceof t.Event&&(i.inState["focusout"==e.type?"focus":"hover"]=!1),i.isInStateTrue()?void 0:(clearTimeout(i.timeout),i.hoverState="out",i.options.delay&&i.options.delay.hide?void(i.timeout=setTimeout(function(){"out"==i.hoverState&&i.hide()},i.options.delay.hide)):i.hide())},i.prototype.show=function(){var e=t.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(e);var o=t.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(e.isDefaultPrevented()||!o)return;var n=this,s=this.tip(),r=this.getUID(this.type);this.setContent(),s.attr("id",r),this.$element.attr("aria-describedby",r),this.options.animation&&s.addClass("fade");var a="function"==typeof this.options.placement?this.options.placement.call(this,s[0],this.$element[0]):this.options.placement,l=/\s?auto?\s?/i,p=l.test(a);p&&(a=a.replace(l,"")||"top"),s.detach().css({top:0,left:0,display:"block"}).addClass(a).data("bs."+this.type,this),this.options.container?s.appendTo(this.options.container):s.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var h=this.getPosition(),f=s[0].offsetWidth,u=s[0].offsetHeight;if(p){var c=a,d=this.getPosition(this.$viewport);a="bottom"==a&&h.bottom+u>d.bottom?"top":"top"==a&&h.top-u<d.top?"bottom":"right"==a&&h.right+f>d.width?"left":"left"==a&&h.left-f<d.left?"right":a,s.removeClass(c).addClass(a)}var v=this.getCalculatedOffset(a,h,f,u);this.applyPlacement(v,a);var g=function(){var t=n.hoverState;n.$element.trigger("shown.bs."+n.type),n.hoverState=null,"out"==t&&n.leave(n)};t.support.transition&&this.$tip.hasClass("fade")?s.one("bsTransitionEnd",g).emulateTransitionEnd(i.TRANSITION_DURATION):g()}},i.prototype.applyPlacement=function(e,i){var o=this.tip(),n=o[0].offsetWidth,s=o[0].offsetHeight,r=parseInt(o.css("margin-top"),10),a=parseInt(o.css("margin-left"),10);isNaN(r)&&(r=0),isNaN(a)&&(a=0),e.top+=r,e.left+=a,t.offset.setOffset(o[0],t.extend({using:function(t){o.css({top:Math.round(t.top),left:Math.round(t.left)})}},e),0),o.addClass("in");var l=o[0].offsetWidth,p=o[0].offsetHeight;"top"==i&&p!=s&&(e.top=e.top+s-p);var h=this.getViewportAdjustedDelta(i,e,l,p);h.left?e.left+=h.left:e.top+=h.top;var f=/top|bottom/.test(i),u=f?2*h.left-n+l:2*h.top-s+p,c=f?"offsetWidth":"offsetHeight";o.offset(e),this.replaceArrow(u,o[0][c],f)},i.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},i.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();t.find(".tooltip-inner")[this.options.html?"html":"text"](e),t.removeClass("fade in top bottom left right")},i.prototype.hide=function(e){function o(){"in"!=n.hoverState&&s.detach(),n.$element&&n.$element.removeAttr("aria-describedby").trigger("hidden.bs."+n.type),e&&e()}var n=this,s=t(this.$tip),r=t.Event("hide.bs."+this.type);return this.$element.trigger(r),r.isDefaultPrevented()?void 0:(s.removeClass("in"),t.support.transition&&s.hasClass("fade")?s.one("bsTransitionEnd",o).emulateTransitionEnd(i.TRANSITION_DURATION):o(),this.hoverState=null,this)},i.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},i.prototype.hasContent=function(){return this.getTitle()},i.prototype.getPosition=function(e){e=e||this.$element;var i=e[0],o="BODY"==i.tagName,n=i.getBoundingClientRect();null==n.width&&(n=t.extend({},n,{width:n.right-n.left,height:n.bottom-n.top}));var s=window.SVGElement&&i instanceof window.SVGElement,r=o?{top:0,left:0}:s?null:e.offset(),a={scroll:o?document.documentElement.scrollTop||document.body.scrollTop:e.scrollTop()},l=o?{width:t(window).width(),height:t(window).height()}:null;return t.extend({},n,a,l,r)},i.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},i.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,r=this.getPosition(this.$viewport);if(/right|left/.test(t)){var a=e.top-s-r.scroll,l=e.top+s-r.scroll+o;a<r.top?n.top=r.top-a:l>r.top+r.height&&(n.top=r.top+r.height-l)}else{var p=e.left-s,h=e.left+s+i;p<r.left?n.left=r.left-p:h>r.right&&(n.left=r.left+r.width-h)}return n},i.prototype.getTitle=function(){var t,e=this.$element,i=this.options;return t=e.attr("data-original-title")||("function"==typeof i.title?i.title.call(e[0]):i.title)},i.prototype.getUID=function(t){do t+=~~(1e6*Math.random());while(document.getElementById(t));return t},i.prototype.tip=function(){if(!this.$tip&&(this.$tip=t(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},i.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},i.prototype.enable=function(){this.enabled=!0},i.prototype.disable=function(){this.enabled=!1},i.prototype.toggleEnabled=function(){this.enabled=!this.enabled},i.prototype.toggle=function(e){var i=this;e&&(i=t(e.currentTarget).data("bs."+this.type),i||(i=new this.constructor(e.currentTarget,this.getDelegateOptions()),t(e.currentTarget).data("bs."+this.type,i))),e?(i.inState.click=!i.inState.click,i.isInStateTrue()?i.enter(i):i.leave(i)):i.tip().hasClass("in")?i.leave(i):i.enter(i)},i.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})};var o=t.fn.tooltip;t.fn.tooltip=e,t.fn.tooltip.Constructor=i,t.fn.tooltip.noConflict=function(){return t.fn.tooltip=o,this}}(jQuery);
//Autosize 1.14 - jQuery plugin for textareas
(function(e){var t={className:"autosizejs",append:"",callback:!1},n="hidden",r="border-box",i="lineHeight",s='<textarea tabindex="-1" style="position:absolute; top:-9999px; left:-9999px; right:auto; bottom:auto; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden;"/>',o=["fontFamily","fontSize","fontWeight","fontStyle","letterSpacing","textTransform","wordSpacing","textIndent"],u="oninput",a="onpropertychange",f=e(s)[0];f.setAttribute(u,"return"),e.isFunction(f[u])||a in f?(e(f).css(i,"99px"),e(f).css(i)==="99px"&&o.push(i),e.fn.autosize=function(i){return i=e.extend({},t,i||{}),this.each(function(){function b(){var e,r,s;p||(p=!0,l.value=t.value+i.append,l.style.overflowY=t.style.overflowY,s=parseInt(t.style.height,10),l.style.width=f.css("width"),l.scrollTop=0,l.scrollTop=9e4,e=l.scrollTop,r=n,e>h?(e=h,r="scroll"):e<c&&(e=c),e+=m,t.style.overflowY=r,s!==e&&(t.style.height=e+"px",y&&i.callback.call(t)),setTimeout(function(){p=!1},1))}var t=this,f=e(t),l,c=f.height(),h=parseInt(f.css("maxHeight"),10),p,d=o.length,v,m=0,g=t.value,y=e.isFunction(i.callback);if(f.css("box-sizing")===r||f.css("-moz-box-sizing")===r||f.css("-webkit-box-sizing")===r)m=f.outerHeight()-f.height();if(f.data("mirror")||f.data("ismirror"))return;l=e(s).data("ismirror",!0).addClass(i.className)[0],v=f.css("resize")==="none"?"none":"horizontal",f.data("mirror",e(l)).css({overflow:n,overflowY:n,wordWrap:"break-word",resize:v}),h=h&&h>0?h:9e4;while(d--)l.style[o[d]]=f.css(o[d]);e("body").append(l),a in t?u in t?t[u]=t.onkeyup=b:t[a]=b:(t[u]=b,t.value="",t.value=g),e(window).resize(b),f.bind("autosize",b),b()})}):e.fn.autosize=function(e){return this}})(jQuery);
// (plugin) when clicked outside of an element 
(function($) {
    $.fn.outside = function(ename, cb) {
        return this.each(function() {
            var $this = $(this),
            self = this;
            $(document).one(ename,
            function tempo(e) {
                if (e.target !== self && !$.contains(self, e.target)) {
                    cb.apply(self, [e]);
                    if (!self.parentNode) $(document.body).unbind(ename, tempo);
                }
            });
        });
    };
} (jQuery));


!(function(window, $){
	
	var _default = {
		title: '',
		showCloseIcon: 0,
		content: '',
		placeholderTxt: '',
		animation: 'fadeInFast',
		/*pos: {
			left: 0,
			top: 0
		},*/
		callback: {
			ok: function(data){},
			cancel: function(){}
		}
	};
	var listen = function(target, type, fn){
		target.on(type, fn)
	};
	var fire = function(target, type, args){
		var e = $.Event(type, args)
		$(target).trigger(e, args);
	};
	var Insert = (function(){
		var tmpl = function(data){
			return `<div class="insert-container animated ${data.animation}">
						<div class="insert-box">
							<div class="closeIcon hidden">×</div>
							<div class="title">${data.title}</div>
							<div class="content">
								<textarea class="insert border" placeholder="点击输入${data.placeholderTxt}">${data.content}</textarea>
							</div>
							<div class="buttons">
								<a class="button btn-cancel" id="cancel">取消</a>
								<a class="button btn-success" id="ok">添加</a>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>`;
		};
		var _oInsert;
		var _disapper = function(){
			$('.autosize4tag').remove();
			_oInsert && _oInsert.remove();
			_oInsert = '';
		}
		return {
			show: function(opt, $this){
				if(_oInsert) _disapper();
				var dInsert = tmpl(opt);
				var $insert = $(dInsert);
				$insert.animatedPlay(opt.animation);
				$this.after($insert[0]);
				$insert.find('textarea').autosize({className: 'autosize4tag'})
				$this.closest('.meta').outside('click', function(){
					_disapper()
				});
				_oInsert = $insert;
				return $insert;
			},
			close: function(){
				if(_oInsert){
					_oInsert.animatedPlay('fadeOutFast', function(){
						_disapper();
					});
				}
			},
			events: function($insert){
				var _self = this;
				var value;
				//events
				$insert.find('#cancel').off().on('click', function(){
					fire($insert, 'insert:cancel');
					_self.close();
				});
				$insert.find('#ok').off().on('click', function(){
					value = $insert.find('textarea').val();
					fire($insert, 'insert:ok', value);
					_self.close();
				});
			}
		}
	})();
	
	$.fn.extend({
		insert: function(options){
			var $this = this;
			var opt = $.extend(true, _default, options);
			//Show
			var $insert = Insert.show(opt, $this);
			//Listens
			listen($insert, 'insert:ok', opt.callback.ok);
			listen($insert, 'insert:cancel', opt.callback.cancel);
			//Events
			Insert.events($insert);
		}
	});
})(window, $);


/**
 * 基于Animate.css的动画添加函数
 * eg: $('#wrap').animatedPlay('fadeIn')
 */
$.fn.extend({
	animatedPlay: function(clazz, fn){
		var css = clazz + ' animated';
		$(this).removeClass(css).addClass(css).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass(css);
			if(fn) fn()
	    });
	    return this;
	}
})





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
		},
		
		evt: {
			listen: function(target, type, fn){
				target.on(type, fn)
			},
			fire: function(target, type, args){
				var e = $.Event(type, args)
				$(target).trigger(e, args);
			}
		},
		
		uuid: function(len, radix, key) {
			key = key || '';
		    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
		    var uuid = [], i;
		    radix = radix || chars.length;
		 
		    if (len) {
		      // Compact form
		      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
		    } else {
		      // rfc4122, version 4 form
		      var r;
		 
		      // rfc4122 requires these characters
		      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
		      uuid[14] = '4';
		 
		      // Fill in random data.  At i==19 set the high bits of clock sequence as
		      // per rfc4122, sec. 4.1.5
		      for (i = 0; i < 36; i++) {
		        if (!uuid[i]) {
		          r = 0 | Math.random()*16;
		          uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
		        }
		      }
		    }
		 
		    return key + '_' + uuid.join('');
		}
	}
})();
