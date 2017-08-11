function LDB(name){
	this.name = name;
	
	var _ldb = (function(name){
		console.log('_ldb.() ==> ['+name+']', localStorage)
		return {
			stringify: function(data){
				localStorage[name] = JSON.stringify(data);
			},
			parse: function(){
				return localStorage[name] ? JSON.parse(localStorage[name]) : '';
			},
			remove: function(){
				localStorage.removeItem(name)
			}
		}
	})(name);
	
	
	// 初始化本地存储
	this.init = function(data){
		_ldb.stringify(data)
	};
	// 销毁本地存储
	this.destory = function(){
		_ldb.remove();
	};
	this.list = function(conditions){
		var data = _ldb.parse();
		
		return data;
	};
	this.create = function(newData){
		var datas = _ldb.parse();
		if(typeof newData === 'function'){
			datas = newData(datas)
		}else{
			datas.unshift(newData);
		}
		// DB
		if(datas){
			_ldb.stringify(datas)
		}
	};
	this.remove = function(index){
		var datas = _ldb.parse();
		if(typeof index === 'function'){
			datas = index(datas)
		}else{
			datas.splice(index, 1);
		}
		// DB
		if(datas){
			_ldb.stringify(datas)
		}
	};
	
	this.update = function(newData){
		var datas = _ldb.parse();
		if(typeof newData === 'function'){
			datas = newData(datas);
		}else{
			//datas = $.extend(true, datas)
		}
		
		// DB
		if(datas){
			_ldb.stringify(datas)
		}
	};
}
