eval(function(p,a,c,k,e,r){e=function(c){return(c<62?'':e(parseInt(c/62)))+((c=c%62)>35?String.fromCharCode(c+29):c.toString(36))};if('0'.replace(0,e)==0){while(c--)r[e(c)]=k[c];k=[function(e){return r[e]||e}];e=function(){return'([3-59cf-hj-mo-rt-yCG-NP-RT-Z]|[12]\\w)'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('5 $$$,$$$B,$$$A,$$$F,$$$D,$$$E,$$$S;(3(){5 O,B,A,F,D,E,S;O=3(id){4"1Q"==1y id?G.getElementById(id):id};O.extend=3(H,11){I(5 P Q 11){H[P]=11[P]}4 H};O.deepextend=3(H,11){I(5 P Q 11){5 18=11[P];9(H===18)continue;9(1y 18==="f"){H[P]=C.callee(H[P]||{},18)}J{H[P]=18}}4 H};O.wrapper=3(me,1S){5 1z=3(){me.R(12,C)};5 1A=3(){};1A.19=1S.19;1z.19=new 1A;4 1z};B=(3(K){5 b={13:/13/.x(K)&&!/1B/.x(K),1B:/1B/.x(K),1T:/webkit/.x(K)&&!/1C/.x(K),1U:/1U/.x(K),1C:/1C/.x(K)};5 1l="";I(5 i Q b){9(b[i]){1l="1T"==i?"1a":i;1b}}b.1a=1l&&1D("(?:"+1l+")[\\\\/: ]([\\\\d.]+)").x(K)?1D.$1:"0";b.ie=b.13;b.1V=b.13&&1F(b.1a,10)==6;b.ie7=b.13&&1F(b.1a,10)==7;b.1W=b.13&&1F(b.1a,10)==8;4 b})(1G.navigator.userAgent.toLowerCase());A=3(){5 l={isArray:3(1X){4 Object.19.toString.L(1X)==="[f 1Y]"},1m:3(v,T,g){9(v.1m){4 1n(g)?v.1m(T):v.1m(T,g)}J{5 M=v.1c;g=1n(g)?0:g<0?1o.1Z(g)+M:1o.20(g);I(;g<M;g++){9(v[g]===T)4 g}4-1}},1p:3(v,T,g){9(v.1p){4 1n(g)?v.1p(T):v.1p(T,g)}J{5 M=v.1c;g=1n(g)||g>=M-1?M-1:g<0?1o.1Z(g)+M:1o.20(g);I(;g>-1;g--){9(v[g]===T)4 g}4-1}}};3 Y(f,q){9(undefined===f.1c){I(5 j Q f){9(w===q(f[j],j,f))1b}}J{I(5 i=0,M=f.1c;i<M;i++){9(i Q f){9(w===q(f[i],i,f))1b}}}};Y({21:3(f,q,k){Y.L(k,f,3(){q.R(k,C)})},map:3(f,q,k){5 l=[];Y.L(k,f,3(){l.22(q.R(k,C))});4 l},1q:3(f,q,k){5 l=[];Y.L(k,f,3(23){q.R(k,C)&&l.22(23)});4 l},every:3(f,q,k){5 l=1d;Y.L(k,f,3(){9(!q.R(k,C)){l=w;4 w}});4 l},some:3(f,q,k){5 l=w;Y.L(k,f,3(){9(q.R(k,C)){l=1d;4 w}});4 l}},3(24,j){l[j]=3(f,q,k){9(f[j]){4 f[j](q,k)}J{4 24(f,q,k)}}});4 l}();F=(3(){5 1e=1Y.19.1e;4{bind:3(1r,k){5 1s=1e.L(C,2);4 3(){4 1r.R(k,1s.25(1e.L(C)))}},bindAsEventListener:3(1r,k){5 1s=1e.L(C,2);4 3(c){4 1r.R(k,[E.1f(c)].25(1s))}}}})();D={1t:3(m){5 14=m?m.26:G;4 14.27.28||14.29.28},1u:3(m){5 14=m?m.26:G;4 14.27.2a||14.29.2a},2b:G.1g?3(a,b){4!!(a.compareDocumentPosition(b)&16)}:3(a,b){4 a!=b&&a.2b(b)},u:3(m){5 o=0,N=0,U=0,V=0;9(!m.2c||B.1W){5 n=m;while(n){o+=n.offsetLeft,N+=n.offsetTop;n=n.offsetParent};U=o+m.offsetWidth;V=N+m.offsetHeight}J{5 u=m.2c();o=U=D.1u(m);N=V=D.1t(m);o+=u.o;U+=u.U;N+=u.N;V+=u.V};4{"o":o,"N":N,"U":U,"V":V}},clientRect:3(m){5 u=D.u(m),1H=D.1u(m),1I=D.1t(m);u.o-=1H;u.U-=1H;u.N-=1I;u.V-=1I;4 u},curStyle:G.1g?3(p){4 G.1g.2d(p,2e)}:3(p){4 p.1v},getStyle:G.1g?3(p,j){5 h=G.1g.2d(p,2e);4 j Q h?h[j]:h.getPropertyValue(j)}:3(p,j){5 h=p.1v;9(j=="Z"){9(/1J\\(Z=(.*)\\)/i.x(h.1q)){5 Z=parseFloat(1D.$1);4 Z?Z/2f:0}4 1};9(j=="2g"){j="2h"}5 l=h[j]||h[S.1K(j)];9(!/^\\-?\\d+(px)?$/i.x(l)&&/^\\-?\\d/.x(l)){h=p.h,o=h.o,2j=p.1L.o;p.1L.o=p.1v.o;h.o=l||0;l=h.pixelLeft+"px";h.o=o;p.1L.o=2j}4 l},setStyle:3(1h,h,15){9(!1h.1c){1h=[1h]}9(1y h=="1Q"){5 s=h;h={};h[s]=15}A.21(1h,3(p){I(5 j Q h){5 15=h[j];9(j=="Z"&&B.ie){p.h.1q=(p.1v.1q||"").2k(/1J\\([^)]*\\)/,"")+"1J(Z="+15*2f+")"}J 9(j=="2g"){p.h[B.ie?"2h":"cssFloat"]=15}J{p.h[S.1K(j)]=15}}})}};E=(3(){5 1i,1j,17=1;9(1G.2l){1i=3(r,t,y){r.2l(t,y,w)};1j=3(r,t,y){r.removeEventListener(t,y,w)}}J{1i=3(r,t,y){9(!y.$$$17)y.$$$17=17++;9(!r.W)r.W={};5 X=r.W[t];9(!X){X=r.W[t]={};9(r["on"+t]){X[0]=r["on"+t]}}X[y.$$$17]=y;r["on"+t]=1w};1j=3(r,t,y){9(r.W&&r.W[t]){delete r.W[t][y.$$$17]}};3 1w(){5 1x=1d,c=1f();5 X=12.W[c.t];I(5 i Q X){12.$$$1w=X[i];9(12.$$$1w(c)===w){1x=w}}4 1x}}3 1f(c){9(c)4 c;c=1G.c;c.pageX=c.clientX+D.1u(c.1N);c.pageY=c.clientY+D.1t(c.1N);c.target=c.1N;c.1O=1O;c.1P=1P;switch(c.t){2m"mouseout":c.2n=c.toElement;1b;2m"mouseover":c.2n=c.fromElement;1b};4 c};3 1O(){12.cancelBubble=1d};3 1P(){12.1x=w};4{"1i":1i,"1j":1j,"1f":1f}})();S={1K:3(s){4 s.2k(/-([a-z])/ig,3(all,2o){4 2o.toUpperCase()})}};9(B.1V){try{G.execCommand("BackgroundImageCache",w,1d)}catch(e){}};$$$=O;$$$B=B;$$$A=A;$$$F=F;$$$D=D;$$$E=E;$$$S=S})();',[],149,'|||function|return|var||||if|||event|||object|from|style||name|thisp|ret|node||left|elem|callback|element||type|rect|array|false|test|handler||||arguments||||document|destination|for|else|ua|call|len|top||property|in|apply||elt|right|bottom|events|handlers|each|opacity||source|this|msie|doc|value||guid|copy|prototype|version|break|length|true|slice|fixEvent|defaultView|elems|addEvent|removeEvent||vMark|indexOf|isNaN|Math|lastIndexOf|filter|fun|args|getScrollTop|getScrollLeft|currentStyle|handleEvent|returnValue|typeof|ins|subclass|opera|chrome|RegExp||parseInt|window|sLeft|sTop|alpha|camelize|runtimeStyle||srcElement|stopPropagation|preventDefault|string||parent|safari|firefox|ie6|ie8|obj|Array|ceil|floor|forEach|push|item|method|concat|ownerDocument|documentElement|scrollTop|body|scrollLeft|contains|getBoundingClientRect|getComputedStyle|null|100|float|styleFloat||rsLeft|replace|addEventListener|case|relatedTarget|letter'.split('|'),0,{}));

var LazyLoad = function(elems, options) {
	//初始化程序
	this._initialize(elems, options);
	//如果没有元素就退出
	if ( this.isFinish() ) return;
	//初始化模式设置
	this._initMode();
	//进行第一次触发
	this.resize(true);
};

LazyLoad.prototype = {
  //初始化程序
  _initialize: function(elems, options) {
	this._elems = elems;//加载元素集合
	this._rect = {};//容器位置参数对象
	this._range = {};//加载范围参数对象
	this._loadData = null;//加载程序
	this._timer = null;//定时器
	this._lock = false;//延时锁定
	//静态使用属性
	this._index = 0;//记录索引
	this._direction = 0;//记录方向
	this._lastScroll = { "left": 0, "top": 0 };//记录滚动值
	this._setElems = function(){};//重置元素集合程序
	
	var opt = this._setOptions(options);
	
	this.delay = opt.delay;
	this.threshold = opt.threshold;
	this.beforeLoad = opt.beforeLoad;
	
	this._onLoadData = opt.onLoadData;
	this._container = this._initContainer($$$(this.options.container));//容器
  },
  //设置默认属性
  _setOptions: function(options) {
    this.options = {//默认值
		container:	window,//容器
		mode:		"dynamic",//模式
		threshold:	0,//加载范围阈值
		delay:		100,//延时时间
		beforeLoad:	function(){},//加载前执行
		onLoadData:	function(){}//显示加载数据
    };
    return $$$.extend(this.options, options || {});
  },
  //初始化容器设置
  _initContainer: function(container) {
	var doc = document,
		isWindow = container == window || container == doc
			|| !container.tagName || (/^(?:body|html)$/i).test( container.tagName );
	if ( isWindow ) {
		container = doc.compatMode == 'CSS1Compat' ? doc.documentElement : doc.body;
	}
	//定义执行方法
	var oThis = this, width = 0, height = 0;
	this.load = $$$F.bind( this._load, this );
	this.resize = $$$F.bind( this._resize, this );
	this.delayLoad = function() { oThis._delay( oThis.load ); };
	this.delayResize = function(){//防止重复触发bug
		var clientWidth = container.clientWidth,
			clientHeight = container.clientHeight;
		if( clientWidth != width || clientHeight != height ) {
			width = clientWidth; height = clientHeight;
			oThis._delay( oThis.resize );
		}
	};
	//记录绑定元素方便移除
	this._binder = isWindow ? window : container;
	//绑定事件
	$$$E.addEvent( this._binder, "scroll", this.delayLoad );
	isWindow && $$$E.addEvent( this._binder, "resize", this.delayResize );
	//获取容器位置参数函数
	this._getContainerRect = isWindow && ( "innerHeight" in window )
		? function(){ return {
				"left":	0, "right":	window.innerWidth,
				"top":	0, "bottom":window.innerHeight
			}}
		: function(){ return oThis._getRect(container); }	;
	//设置获取scroll值函数
	this._getScroll = isWindow
		? function() { return {
				"left": $$$D.getScrollLeft(), "top": $$$D.getScrollTop()
			}}
		: function() { return {
				"left": container.scrollLeft, "top": container.scrollTop
			}};
	return container;
  },
  //初始化模式设置
  _initMode: function() {
	switch ( this.options.mode.toLowerCase() ) {
		case "vertical" ://垂直方向
			this._initStatic( "vertical", "vertical" );
			break;
		case "horizontal" ://水平方向
			this._initStatic( "horizontal", "horizontal" );
			break;
		case "cross" :
		case "cross-vertical" ://垂直正交方向
			this._initStatic( "cross", "vertical" );
			break;
		case "cross-horizontal" ://水平正交方向
			this._initStatic( "cross", "horizontal" );
			break;
		case "dynamic" ://动态加载
		default :
			this._loadData = this._loadDynamic;
	}
  },
  //初始化静态加载设置
  _initStatic: function(mode, direction) {
	//设置模式
	var isVertical = direction == "vertical";
	if ( mode == "cross" ) {
		this._crossDirection = $$$F.bind( this._getCrossDirection, this,
			isVertical ? "_verticalDirection" : "_horizontalDirection",
			isVertical ? "_horizontalDirection" : "_verticalDirection" );
	}
	//设置元素
	var pos = isVertical ? "top" : "left",
		sortFunction = function( x, y ) { return x._rect[ pos ] - y._rect[ pos ]; },
		getRect = function( elem ) { elem._rect = this._getRect(elem); return elem; };
	this._setElems = function() {//转换数组并排序
		this._elems = $$$A.map( this._elems, getRect, this ).sort( sortFunction );
	};
	//设置加载函数
	this._loadData = $$$F.bind( this._loadStatic, this,
		"_" + mode + "Direction",
		$$$F.bind( this._outofRange, this, mode, "_" + direction + "BeforeRange" ),
		$$$F.bind( this._outofRange, this, mode, "_" + direction + "AfterRange" ) );
  },
  //延时程序
  _delay: function(run) {
	clearTimeout(this._timer);
	if ( this.isFinish() ) return;
	var oThis = this, delay = this.delay;
	if ( this._lock ) {//防止连续触发
		this._timer = setTimeout( function(){ oThis._delay(run); }, delay );
	} else {
		this._lock = true; run();
		setTimeout( function(){ oThis._lock = false; }, delay );
	}
  },
  //重置范围参数并加载数据
  _resize: function(change) {
	if ( this.isFinish() ) return;
	this._rect = this._getContainerRect();
	//位置改变的话需要重置元素位置
	if ( change ) { this._setElems(); }
	this._load(true);
  },
  //加载程序
  _load: function(force) {
	if ( this.isFinish() ) return;
	var rect = this._rect, scroll = this._getScroll(),
		left = scroll.left, top = scroll.top,
		threshold = Math.max( 0, this.threshold | 0 );
	//记录原始加载范围参数
	this._range = {
		top:	rect.top + top - threshold,
		bottom:	rect.bottom + top + threshold,
		left:	rect.left + left - threshold,
		right:	rect.right + left + threshold
	}
	//加载数据
	this.beforeLoad();
	this._loadData(force);
  },
  //动态加载程序
  _loadDynamic: function() {
	this._elems = $$$A.filter( this._elems, function( elem ) {
			return !this._insideRange( elem );
		}, this );
  },
  //静态加载程序
  _loadStatic: function(direction, beforeRange, afterRange, force) {
	//获取方向
	direction = this[ direction ]( force );
	if ( !direction ) return;
	//根据方向历遍图片对象
	var elems = this._elems, i = this._index,
		begin = [], middle = [], end = [];
	if ( direction > 0 ) {//向后滚动
		begin = elems.slice( 0, i );
		for ( var len = elems.length ; i < len; i++ ) {
			if ( afterRange( middle, elems[i] ) ) {
				end = elems.slice( i + 1 ); break;
			}
		}
		i = begin.length + middle.length - 1;
	} else {//向前滚动
		end = elems.slice( i + 1 );
		for ( ; i >= 0; i-- ) {
			if ( beforeRange( middle, elems[i] ) ) {
				begin = elems.slice( 0, i ); break;
			}
		}
		middle.reverse();
	}
	this._index = Math.max( 0, i );
	this._elems = begin.concat( middle, end );
  },
  //垂直和水平滚动方向获取程序
  _verticalDirection: function(force) {
	  return this._getDirection( force, "top" );
  }, 
  _horizontalDirection: function(force) {
	  return this._getDirection( force, "left" );
  },
  //滚动方向获取程序
  _getDirection: function(force, scroll) {
	var now = this._getScroll()[ scroll ], _scroll = this._lastScroll;
	if ( force ) { _scroll[ scroll ] = now; this._index = 0; return 1; }
	var old = _scroll[ scroll ]; _scroll[ scroll ] = now;
	return now - old;
  },
  //cross滚动方向获取程序
  _getCrossDirection: function(primary, secondary, force) {
	var direction;
	if ( !force ) {
		direction = this[ primary ]();
		secondary = this[ secondary ]();
		if ( !direction && !secondary ) {//无滚动
			return 0;
		} else if ( !direction ) {//次方向滚动
			if ( this._direction ) {
				direction = -this._direction;//用上一次的相反方向
			} else {
				force = true;//没有记录过方向
			}
		} else if ( secondary && direction * this._direction >= 0 ) {
			force = true;//同时滚动并且方向跟上一次滚动相同
		}
	}
	if ( force ) {
		this._lastScroll = this._getScroll(); this._index = 0; direction = 1;
	}
	return ( this._direction = direction );
  },
  //判断是否加载范围内
  _insideRange: function(elem, mode) {
	var range = this._range, rect = elem._rect || this._getRect(elem),
		insideH = rect.right >= range.left && rect.left <= range.right,
		insideV = rect.bottom >= range.top && rect.top <= range.bottom,
		inside = {
				"horizontal":	insideH,
				"vertical":		insideV,
				"cross":		insideH && insideV
			}[ mode || "cross" ];
	//在加载范围内加载数据
	if ( inside ) { this._onLoadData(elem); }
	return inside;
  },
  //判断是否超过加载范围
  _outofRange: function(mode, compare, middle, elem) {
	if ( !this._insideRange( elem, mode ) ) {
		middle.push(elem);
		return this[ compare ]( elem._rect );
	}
  },
  _horizontalBeforeRange: function(rect) { return rect.right < this._range.left; },
  _horizontalAfterRange: function(rect) { return rect.left > this._range.right; },
  _verticalBeforeRange: function(rect) { return rect.bottom < this._range.top; },
  _verticalAfterRange: function(rect) { return rect.top > this._range.bottom; },
  //获取位置参数
  _getRect: function(node) {
	var n = node, left = 0, top = 0;
	while (n) { left += n.offsetLeft; top += n.offsetTop; n = n.offsetParent; };
	return {
		"left": left, "right": left + node.offsetWidth,
		"top": top, "bottom": top + node.offsetHeight
	};
  },
  //是否完成加载
  isFinish: function() {
	if ( !this._elems || !this._elems.length ) {
		this.dispose(); return true;
	} else {
		return false;
	}
  },
  //销毁程序
  dispose: function(load) {
	clearTimeout(this._timer);
	if ( this._elems || this._binder ) {
		//加载全部元素
		if ( load && this._elems ) {
			$$$A.forEach( this._elems, this._onLoadData, this );
		}
		//清除关联
		$$$E.removeEvent( this._binder, "scroll", this.delayLoad );
		$$$E.removeEvent( this._binder, "resize", this.delayResize );
		this._elems = this._binder = null;
	}
  }
}


var ImagesLazyLoad = $$$.wrapper(function(options) {
	this._initialize( options );
	//如果没有元素就退出
	if ( this.isFinish() ) return;
	//初始化模式设置
	this._initMode();
	//进行第一次触发
	this.resize(true);
}, LazyLoad);

$$$.extend( ImagesLazyLoad.prototype, {
  //初始化程序
  _initialize: function(options) {
	LazyLoad.prototype._initialize.call(this, [], options);
	//设置子类属性
	var opt = this.options;
	this.onLoad = opt.onLoad;
	var attribute = this._attribute = opt.attribute;
	//设置加载图片集合
	var getSrc = opt.getSrc,
		filter = $$$F.bind( this._filter, this,
				opt["class"],
				getSrc ? function(img){ return getSrc(img); }
					: function(img){ return img.getAttribute( attribute ) || img.src; },
				opt.holder
			);
	this._elems = $$$A.filter(
			opt.images || this._container.getElementsByTagName("img"), filter
		);
	//判断属性是否已经加载的方法
	this._hasAttribute = $$$B.ie6 || $$$B.ie7
		? function(img){ return attribute in img; }
		: function(img){ return img.hasAttribute( attribute ); };
  },
  //设置默认属性
  _setOptions: function(options) {
	return LazyLoad.prototype._setOptions.call(this, $$$.extend({//默认值
		images:		undefined,//图片集合
		attribute:	"_lazysrc",//保存原图地址的自定义属性
		holder:		"",//占位图
		"class":	"",//筛选样式
		getSrc:		undefined,//获取原图地址程序
		onLoad:		function(){}//加载时执行
	}, $$$.extend( options, {
		onLoadData:	this._onLoadData
	})));
  },
  //筛选整理图片对象
  _filter: function(className, getSrc, holder, img) {
	if ( className && (" " + img.className + " ").indexOf(" " + className + " ") == -1 ) return false;//排除样式不对应的
	//获取原图地址
	var src = getSrc(img);
	if ( !src ) return false;//排除src不存在的
	if ( src == img.src ) {
		//排除已经加载或不能停止加载的
		if ( img.complete || $$$B.chrome || $$$B.safari ) return false;
		img.removeAttribute("src");//移除src
	}
	if ( holder ) { img.src = holder; }
	//用自定义属性记录原图地址
	img.setAttribute( this._attribute, src );
	return true;
  },
  //显示图片
  _onLoadData: function(img) {
	var attribute = this._attribute;
	if ( this._hasAttribute( img ) ) {
		img.src = img.getAttribute( attribute );
		img.removeAttribute( attribute );
		this.onLoad( img );
	}
  }
});