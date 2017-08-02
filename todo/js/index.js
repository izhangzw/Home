~(function(){
	var App = (function(){
		
		return {
			init: function(data){
				
			}
		}
	})();
	util.loadScript('./js/datas.js', function(){
		var datas = Datas;
		$('#tmpl_block').tmpl({datas: datas}).appendTo('#blocks')
	})
	
	
	//Events
	$(document)
	.on('dblclick', '.editable', function(){
		var $o = $(this);
		var tagName = $o.text();
		
		
		$o.attr('contenteditable', 'true').focus().off()
		.on('contextmenu', function(){return false;})//禁止反键
		.keydown(function(e){
			var newTagName = $(this).text();
			
			if(e.keyCode===13){
				return false
			}else if(e.ctrlKey && e.keyCode===17){
				//TODO 普通黏贴可以, 包含换行等特殊字符的文本不能贴
				$o.text(tagName)
				return false
			}
		})
		.blur(function(){
			$o.removeAttr('contenteditable');
			var newTagName = $(this).text();
			if(!newTagName){
				//TODO 删掉tag
			}else if(newTagName!==tagName){
				//TODO 修改tag
			}
		})
		
		
		//光标定位最后
		util.range2border(this);
	})
	
	$('.insert textarea').on('keyup', function(e){
		var $o = $(this)
		var txt = $.trim($o.val());
		var data;
		
		if(!txt) return;
		
		if(e.ctrlKey && e.keyCode ===13){
			$('.item.new').removeClass('new')
			data = {
				txt: txt,
				tags: []
			};
			var html = $('#tmpl_item').tmpl(data).addClass('new');
			$('.items').first().prepend(html);
			$o.val('')
		}
	})
	$(function(){
		$('textarea').autosize()
	})
}())
