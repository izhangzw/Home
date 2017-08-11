//条目
var Item = (function(){
	var item_ldb = new LDB('item');
	var _getIndex = function(arr, key, arrKey){
		var 
		i = 0,
		len = arr.length;
		if(len){
			for( ;i<len;i++ ){
				if( key==arr[i][arrKey] ) break;
			}
		}else{
			i = -1;
		}
		return i;
	}
	return {
		list: function(conditions){
			var datas = item_ldb.list();
			if(!datas){
				item_ldb.init(Datas);
				datas = item_ldb.list();
			}
			$('#tmpl_block').tmpl({datas: datas}).appendTo('#blocks');
		},
		create: function(txt){
			/*
			//TODO 封装(获取, 组装新数据)
			pid 可为空, 默认0
			ctime 可为空, 默认当前时间毫秒值
			id 定义一种生成ID的算法
			ok: 可为空, 默认 0
			tags: 可为空, 默认 [] // ?
			*/
			var newData = {
				txt: txt,
				pid: 0,
				ctime: +new Date(),
				id: util.uuid(8, 16, 'item'),
				tags: []
			};
			
			//LDB
			item_ldb.create(function(datas){
				
				// 获取要加到datas的位置
				var index = (function(datas, pid){
					var i=0, len = datas.length;
					for( ;i<len;i++ ){
						if( pid==datas[i].id ) return i;
					}
				})(datas, newData.pid);
				
				// 对应位置加入
				datas[index].items.unshift(newData);
				return datas;
			});
			
			//HTML
			var html = $('#tmpl_item').tmpl(newData).addClass('new');
			$('.items').first().prepend(html);
			$('.insert textarea').val('');
		},
		/**
		 * 
		 * @param {Object} params: {
		 * 	pid:
		 *  id :
		 *  
		 * }
		 */
		update: function(params){
			//LDB
			item_ldb.update(function(datas){
				var
				pid = params.pid,
				itemId = params.itemId,
				block = datas[pid],
				items = block ? block.items : [],
				itemIndex = _getIndex(items, itemId, 'id');
				if( itemIndex < 0 ) return;
				
				items[itemIndex].txt = params.content;
				return datas;
			});
			
			//HTML
			//blur 会导致死循环
			//so...
			$('#'+params.id).find('.txt')
			.attr('contenteditable', 'false')
			.attr('contenteditable', 'true');
		},
		remove: function(pid, itemId){
			//LDB
			item_ldb.remove(function(datas){
				var 
				block = datas[pid],
				items = block ? block.items : [],
				itemIndex = _getIndex(items, itemId, 'id');
				if( itemIndex < 0 ) return;
				
				items.splice(itemIndex, 1);
				return datas;
			});
			
			//HTML
			$('#'+itemId).remove();
		},
		
		tag: (function(){
			return {
				create: function(params){
					var newTag = {
						id: util.uuid(8, 16, 'tag'),
						name: params.name
					};
					var newItem;
					//LDB
					item_ldb.update(function(datas){
						var
						pid = params.pid,
						itemId = params.itemId,
						block = datas[pid],
						items = block ? block.items : [],
						itemIndex = _getIndex(items, itemId, 'id');
						if( itemIndex < 0 ) return;
						
						items[itemIndex].tags.push(newTag);
						newItem = items[itemIndex];
						return datas;
					});
					
					//HTML
					var html = $('#tmpl_item').tmpl(newItem);
					$('#'+params.itemId).replaceWith(html)
				},
				update: function(params){
					//LDB
					item_ldb.update(function(datas){
						var
						pid = params.pid,
						itemId = params.itemId,
						tagId = params.tagId,
						block = datas[pid],
						items = block ? block.items : [],
						itemIndex = _getIndex(items, itemId, 'id'),
						tagIndex,
						tags;
						if( itemIndex < 0 ) return;
						tags = items[itemIndex].tags;
						tagIndex = _getIndex(tags, tagId, 'id');
						if( tagIndex < 0 ) return;
						
						tags[tagIndex].name = params.content;
						return datas;
					});
				},
				remove: function(){}
			}
		}())
	}
})();
