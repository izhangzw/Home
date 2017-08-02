//merge
//var config=(function(){var ret={},args=Array.prototype.slice.call(arguments),i=0,len=args.length,_isObject,merge;_isObject=function(o){return Object.prototype.toString.call(o)==="[object Object]"};merge=function(dest,src){var key;for(key in dest){if(dest.hasOwnProperty(key)){if(_isObject(dest[key])&&_isObject(src[key])){merge(dest[key],src[key])}if(src.hasOwnProperty(key)){continue}else{src[key]=dest[key]}}}ret=src};for(;i<len;i+=1){merge(args[i],ret)}return ret;
//})();

require
.config({
	baseUrl: host+'/static/js',
	paths: {
		util: 'moudles/util',
		jquery: ['libs/jquery/jquery.min'],
		moment: ['libs/moment/moment.min'],
		plan: 'moudles/plan',
		process: 'moudles/process',
		'jquery.bootstrap': ['libs/bootstrap/bootstrap.min'],
		'jquery.tmpl': ['libs/tmpl/jquery.tmpl'],
		'jquery.pload': ['libs/pload/jquery.pload'],
//		'jquery.orgchart': ['libs/orgchart/jquery.jOrgChart'],
//		'jquery.dprange': ['libs/dprange/datepicker'],
		'jquery.echarts': ['libs/echarts/echarts.min'],
	},
	map: {
		'*': {
			'css': 'libs/amd/css.min'
		}
	},
	shim: {
		'jquery.bootstrap': ['jquery'],
		'jquery.tmpl': ['jquery'],
		'jquery.pload': ['jquery', 'jquery.tmpl'],
//		'jquery.orgchart': ['jquery'],
//		'jquery.dprange': ['jquery', 'css!../js/libs/dprange/css/datepicker.css'],
		'jquery.echarts': ['jquery'],
	}
})
.onError = function (err) {
    alert(err.requireType);
    if (err.requireType === 'timeout') {
        alert('modules: ' + err.requireModules);
    }
    throw err;
};
