~(function(){
	var App = (function(){
		
		return {
			init: function(){
				//
				$('textarea').autosize();
				//
				Item.list();
				/*// tooltip
				$('[contenteditable]').tooltip({
					placement: 'top',
					trigger: 'hover',
					title: '点击即可编辑'
				});*/
				
			}
		}
	})();
	
	//块
	//block
	
	
	// Events
	$(document)
	// create tag
	.on('click', '.meta .eTag', function(e){
		var $o = $(this);
		var pid = $o.closest('.block').attr('pid');// index
		var itemId = $o.closest('.item').attr('id');
		
		$(this).insert({
			placeholderTxt: '标签',
			callback: {
				ok: function(e, data){
					console.log('输入内容：', data)
					if(data){
						Item.tag.create({
							pid: pid,
							itemId: itemId,
							name: data
						})
					}
				}
			}
		});
	})
	/*.on('dblclick', '.editable', function(){
		var $o = $(this);
		var tagName = $o.text();
		
		$o.off()
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
			var newTagName = $(this).text();
			if(!newTagName){
				//TODO 删掉tag
			}else if(newTagName!==tagName){
				
			}
		});
	})*/
	//禁止反键
	.on('contextmenu', '[contenteditable]', function(e){ return false; })
	//回车不换行
	.on('keydown', '[contenteditable]', function(e){ if(e.keyCode ===13) e.preventDefault(); })
	//Edit contenteditable
	.on('focus', '[contenteditable]', function(){
		var $o = $(this);
		var type = $o.hasClass('txt') ? 'txt' : ( $o.parent().hasClass('tag') ? 'tag' : '');
		var oldValue = $.trim($o.text());
		var newValue;
		var pid = $o.closest('.block').attr('pid');// index
		var itemId = $o.closest('.item').attr('id');
		var tagId;
		var params;
		$o.off().blur(function(){
			newValue = $.trim($o.text());
			
			if(oldValue!=newValue){
				//判断修改的是item 还是tag
				//TODO 修改
				params = {
					pid: pid,
					itemId: itemId
				};
				if(type === 'txt'){
					params.content = newValue;
					
					Item.update(params);
				}else if(type === 'tag'){
					tagId = $o.parent().attr('id');
					params.tagId = tagId;
					params.content = newValue;
					
					Item.tag.update(params);
				}else{
					console.log('修改'+type)
				}
				
				
				
			}else if(!newValue){
				//TODO 删掉
				console.log('删除'+type)
			}
		});
	})
	.on('keyup', '.txt[contenteditable]', function(e){
		var $o = $(this);
		var txt = $.trim($o.text());
		var pid = $o.closest('.block').attr('pid');// index
		var id = $o.closest('.item').attr('id');
		
		if(e.keyCode ===13){
			if(txt){
				//update
				Item.update({
					pid: pid,
					id: id,
					item: {
						txt: txt
					}
				});
			}else{
				//delete
				Item.remove(pid, id);
			}
		}
	});
	
	$('.insert textarea').on('keyup', function(e){
		//TODO 此处回车可以换行, 可添加多条
		//TODO 书写[]自动生成标签
		var $o = $(this)
		var txt = $.trim($o.val());
		
		if(!txt) return;
		
		if(e.ctrlKey && e.keyCode ===13){
			$('.item.new').removeClass('new')
			//create
			Item.create(txt)
		}
	})
	$(function(){
		App.init()
	})
}())
