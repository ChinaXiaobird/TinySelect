/**
 * TinySelect 0.3.0 2017-12-14
 * @作者: hyjiacan
 * @源码: https://git.oschina.net/hyjiacan/TinySelect.git
 * @示例: http://hyjiacan.oschina.io/tinyselect
 * @许可协议: MIT
 * @依赖: jQuery 1.8.0及更高版本
 * @浏览器支持: 不支持IE8及更低版本
 * @QQ群: 187786345 (Javascript爱好者)
 */

!function(a,b){"use strict";function c(a){this.selector=[],this.css(a)}function d(a,c,e){var f=b(a).get(0);if(f){for(var g,h=0;h<P.length;h++)if(g=P[h],g.context.get(0)===f)return g;return g=new d.fn.init(f,c,e),P.push(g),g}}function e(a){if(a.option.mode!==Ga){var b=a.context;b.addClass(W).append(Pa(Y)),a.option.readonly&&b.addClass($),a.option.result.multi||(b.addClass(X).append(Pa(Z)),/static/i.test(b.css("position"))&&b.css("position","relative"))}}function f(a){var c=a.option,d=a.context,e=a.dom=Pa(_).addClass("{0}-mode-{0}".fill(V,c.mode));switch(c.mode){case Ga:c.style.width=d.siblings().length?d.width():"auto",c.style.height=d.height()||"auto";var f=d.css("position");c.style.position=/static/i.test(f)?"relative":f,d.append(e);break;case Fa:b(Q.body).append(e);break;case Ha:var h=a.mask=Pa(aa);b(Q.body).append(h.append(e))}e.addClass(c.css).css(c.style).append(g(a,c));var j=c.box,k=a.box=Pa(ja).addClass("{0}-layout-{0}".fill(ja,j.layout)).addClass(j.css).css(j.style);j.layout===Ja&&k.append(Pa(ba)),e.append(k),e.append(i(a,c))}function g(a,b){var c=b.header,d=a.header=Pa(da).addClass(c.css).css(c.style).append(h(a,b));return c.render&&c.render.call(d,b.item.data),d}function h(c,d){var e=d.header.filter,f=b('<input type="text"  placeholder="{0}" class="{0}" />'.fill(e.placeholder,ra)).addClass(e.css).css(e.style);return f.keyup(function(d){var g=f.val();O&&(a.clearTimeout(O),O=0),(/^change$/i.test(e.trigger)?""===b.trim(String.fromCharCode(d.keyCode||d.which))||f.data("last")!==g:13===d.keyCode)&&(f.data("last",g),O=S(function(){c.filter(g,T)},e.delay))}),f}function i(a,b){var c=b.footer,d=a.footer=Pa(ea).addClass(c.css).css(c.style),e=Pa(fa),f=Pa(ga);return f.append(Pa(ha,za).html(c.totalTpl.replace(Ea,0))),d.append(e).append(f),b.result.multi&&j(a,b,e,f),c.render&&c.render.call(d,b.data),d}function j(a,c,d,e){var f=b(Aa);d.append(b("<label>").append(f).append("全选")),f.change(function(){var c=f.is(":checked");H(a,ya).each(function(d,e){if(e=b(e),c){if(e.hasClass(pa))return;return void D(a,e,T)}e.hasClass(pa)&&E(a,e,T)})});var g=Pa(ia,za);J(c,g),e.prepend(g)}function k(a,c){var d=c.valueField,e=c.textField||d,f=[{_group_item_:T,text:c.unknown,id:0}],g={},h=0;b.each(a,function(){var a=this,b=Ma(a,d),c=Ma(a,e);if(!b)return a._group_id_=0,void f.push(a);var i=a[d],j=c?a[e]:"";Ma(g,i)||(g[i]={id:++h,text:j,data:[]}),a._group_id_=h,g[i].data.push(a)});var i=[];return b.each(g,function(a,b){i.push({id:b.id,_group_item_:T,key:a,text:b.text}),Qa(i,b.data)}),f.length>1&&Qa(i,f),i}function l(a,b){var d=a.box,e=a.option,f=e.item,g=f.data,h=e.group,i=parseInt(f.visible);(isNaN(i)||i<0)&&(i=0);var j=g?g.length:0;d.height("auto"),e.box.layout===Ja?d.find(c.build(ba).first()).empty():d.empty(),B(a),a.dom.removeClass(ca);var l=F(a);if(M(l,j),I(e,l),!j)return d.append(e.box.empty),a.dom.addClass(ca),void(b&&b.call(a,g));h.valueField&&(g=k(g,h),j=g.length);var n=m(a,d,f,g,b,0,i);if(!(0===i||i>=j)){if(isNaN(parseInt(a.dom.get(0).style.height))){var o=parseInt(n.css("lineHeight"))+parseInt(n.css("paddingTop"))+parseInt(n.css("paddingBottom")),p=0;h.valueField&&(p=d.find(c.build(ka).first()).height()),d.height(i*o+p)}else{var q=a.dom.height();a.header.is(ya)&&(q-=a.header.height()),a.footer.is(ya)&&(q-=a.footer.height()),d.height(q)}f.async?Na(m,[a,d,f,g,b,i]):m(a,d,f,g,b,0)}}function m(a,b,d,e,f,g,h){var i;a.option.box.layout===Ja&&(b=b.find(c.build(ba).first()));var j=a.option.group,k=d.data;if(h=h||e.length-g,!(g>=e.length)){var l=g+h;l>e.length&&(l=e.length);for(var m=j.valueField,n=g;n<l;n++){var o=e[n];if(m&&o._group_item_){var p=Pa(ka).addClass(j.css).css(j.style).html(o.text).attr(Da,o.id);j.render&&p.append(j.render.call(a,p,o)),b.append(p)}else{var q=M(Pa(la),o),r=Pa(ma),s=Pa(na),t=Pa(oa);q.addClass(d.css).css(d.style).append(r).append(s).append(t),s.append(d.render?d.render.call(q,o,n,k):o[d.textField]),q.attr(Ca,n),m&&q.attr(Da,o._group_id_),b.append(q),i||(i=q)}}return l!==e.length?i:(d.value&&a.value(d.value,!0),f&&f.call(a,k),i)}}function n(c){c.option.mode!==Ga&&(o(c),r(c)),s(c),t(c),c.option.keyboard&&u(c),b(a).resize(function(){c.dom.is(ya)&&(p(c.context,c.dom,c.option),q(c))})}function o(a){var b=a.context,c=a.dom;b.click(function(d){a.option.readonly||(b.is(d.target)||0!==b.find(d.target).length)&&(c.is(ya)||a.show())})}function p(c,d,e){var f=c.offset(),g=e.mode,h=d.height(),i=b(a).height(),j=c.height(),k=c.width();/^border-box$/i.test(c.css("box-sizing"))&&(j+=parseInt(c.css("padding-top"))+parseInt(c.css("padding-bottom")),k+=parseInt(c.css("padding-left"))+parseInt(c.css("padding-right"))),g===Fa?(i-f.top-j<h?f.top=f.top-h-2:f.top=f.top+j+2,d.css({left:f.left,top:f.top,width:e.style.width||k})):g===Ha&&d.parent().css({paddingTop:(i-h)/3,paddingLeft:(b(a).width()-d.width())/2})}function q(a){var b=a.dom,c=b.parent().height();(a.option.mode===Ga||b.height()>=c)&&b.height(c);var d=b.get(0).style.height;d&&!/auto/i.test(d)&&a.box.height(b.height()-8-(a.header.is(ya)?a.header.height():0)-(a.footer.is(ya)?a.footer.height():0))}function r(c){var d=c.context,e=c.dom;b(a).click(function(a){var b=a.target;d.is(b)||e.is(b)||d.find(b).length||e.find(b).length||e.is(ya)&&c.hide()})}function s(a){a.box.on("click",c.build(la).done(),function(){var c=b(this);C(a,c,T,T),a.option.result.multi||a.hide()})}function t(a){var b=a.context.find(c.build(Y).first()),d=G(a),e=a.option,f=e.result,g=f.multi,h=f.render;a.on(va,function(c){var f=c.data[e.item.textField];if(f=h?h.call(c.target,c.data):f,!g)return void b.html(f);if(e.mode!==Ga){var i=w(a,f,c.index);b.append(i),b.stop().animate({scrollTop:b[0].scrollHeight})}M(d,(L(d)||0)+1),J(e,d)}),g&&a.on(wa,function(a){b.find(c.build(sa).attr(Ca,a.index).first()).remove(),M(d,L(d)-1),J(e,d)})}function u(d){b(a).keydown(function(a){if(d.dom.is(ya)){var b,e=d.dom.find(c.build(qa).first()),f=a.keyCode||a.which;if(40===f)b=0===e.length?H(d).eq(0):e.next();else{if(38!==f)return void(32===f?e.click():27===f&&d.hide());b=0===e.length?H(d).eq(0):e.prev()}b.length||(b=e),d.header.find("."+ra).blur(),b.focus(),e.removeClass(qa),b.addClass(qa),v(b)}}),d.dom.on("mouseover",c.build(la).done(),function(){b(this).addClass(qa).siblings().removeClass(qa)})}function v(a){var b=a.parent();/auto/i.test(b.css("overflowY"))||(b=b.parent()),b.stop().animate({scrollTop:a.offset().top-b.offset().top+b.scrollTop()},100)}function w(a,b,d){if(a.option.mode!==Ga)return Pa(sa).css(a.option.result.style).attr(Ca,d).append(Pa(ta,za).html(b)).append(Pa(ua,za).click(function(){if(!a.option.readonly)return E(a,H(a,c.build().attr(Ca,d).first()),T),U}))}function x(a,b,c){y(a,b,{target:c.get(0),data:L(c),index:c.attr(Ca)})}function y(a,b,c){Ma(a.events,b)&&(c.type=b,a.events[b].forEach(function(b){b.call(a,c)}))}function z(a){var d=a.option.item.valueField;if(!a.option.result.multi){var e=H(a,c.build(pa).first());return 0===e.length?void 0:L(e)[d]}return H(a,c.build(pa).done()).map(function(a,c){return L(b(c))[d]})}function A(a,c,d){for(var e,f=b.makeArray(c),g=0,h=H(a);g<h.length;g++){e=b(h[g]);if(-1!==f.indexOf(L(e)[a.option.item.valueField])&&(C(a,e,U,d),!a.option.result.multi))return}}function B(a){var d=H(a);if(a.context.find(c.build(Y).first()).empty(),a.option.result.multi)return void d.filter(c.build(pa).done()).each(function(c,d){E(a,b(d),T)});var e=d.filter(c.build(pa).first());e.length&&E(a,e,T)}function C(a,b,d,e){var f=a.option.result.multi,g=b.hasClass(pa);if(!f){if(g)return;var h=b.siblings(c.build(pa).first());return h.length&&E(a,h,e),void D(a,b,e)}if(!g)return void D(a,b,e);d&&E(a,b,e)}function D(a,b,c){b.addClass(pa),c&&x(a,va,b)}function E(a,b,c){b.removeClass(pa),c&&x(a,wa,b)}function F(a){return a.footer.find(c.build(ga).sub(ha).done())}function G(a){return a.footer.find(c.build(ga).sub(ia).done())}function H(a,b){return a.box.find(c.build(la).addon(b).done())}function I(a,b){K(b,a.footer.totalTpl)}function J(a,b){K(b,a.footer.selectedTpl)}function K(a,b){a.html(b.replace(Ea,L(a)||0))}function L(a){return a.data(Ba)}function M(a,b){return a.data(Ba,b)}function N(a,b,d){var e=a.filter(c.build().attr(Da,d).done());0===b.filter(c.build().attr(Da,d).visible()).length?e.hide():e.show()}String.prototype.fill=function(){var a=[].slice.apply(arguments);return this.replace(/{([0-9]+)(\/.[lLrR]?)?}/g,function(b,c,d){var e=a.length?a.shift():"";if(e=null===e||void 0===e?"":String(e).toString(),0===c)return e;var f=c-e.length;if(f<=0)return e;for(var g=d[1],h=d[2]||"l",i="",j=0;j<f;j++)i+=g;return/r/i.test(h)?e+=i:e=i+e,e})};var O,P=[],Q=a.document,R=a.console,S=a.setTimeout,T=!0,U=!1,V="tinyselect",W=V+"-context",X=W+"-with-arrow",Y=W+"-result",Z=W+"-arrow",$=W+"-readonly",_=V+"-container",aa=V+"-mask",ba=V+"-table-proxy",ca=_+"-empty",da=V+"-header",ea=V+"-footer",fa=ea+"-left",ga=ea+"-right",ha=V+"-count-total",ia=V+"-count-selected",ja=V+"-box",ka=V+"-group",la=V+"-item",ma=V+"-item-before",na=V+"-item-text",oa=V+"-item-after",pa=la+"-selected",qa=la+"-hover",ra=V+"-filter",sa=V+"-result-item",ta=sa+"-text",ua=sa+"-link",va="select",wa="unselect",xa=[va,wa,"ready"],ya=":visible",za="span",Aa='<input type="checkbox" style="vertical-align:-2px;" class="'+V+'-selectall" />',Ba="data",Ca="data-tiny-index",Da="data-tiny-group",Ea="%s",Fa="dropdown",Ga="list",Ha="popup",Ia=[Fa,Ga,Ha],Ja="table",Ka=["list","grid",Ja],La={readonly:U,mode:Fa,keyboard:T,css:null,style:{lineHeight:"28px"},header:{render:U,filter:{trigger:"enter",delay:618,placeholder:"输入后按回车过滤",matchCase:U,css:null,style:{}},css:null,style:{}},box:{empty:"没有数据",layout:"list",css:null,style:{}},group:{valueField:U,textField:U,unknown:"未分组",render:U,css:null,style:{}},item:{data:[],value:U,valueField:"id",textField:"text",visible:5,render:U,async:T,css:null,style:{}},footer:{render:U,totalTpl:"共{0}项".fill(Ea),selectedTpl:"选中{0}项/".fill(Ea),css:null,style:{}},result:{multi:U,render:U,type:0,css:null,style:{}}};c.prototype={constructor:c,css:function(a){return a&&this.selector.push("."+a),this},attr:function(a,b){return 1===arguments.length?this.selector.push("[{0}]".fill(a)):this.selector.push("[{0}={0}]".fill(a,b)),this},sub:function(a){return this.selector.push(" "),this.css(a)},visible:function(){return this.addon(ya).done()},first:function(){return this.addon(":first").done()},addon:function(a){return a&&this.selector.push(a),this},done:function(a){return this.css(a),this.selector.join("")}},c.build=function(a){return new c(a)};var Ma=function(a,b){return!a||a.hasOwnProperty(b)},Na=function(a,b){S(function(){a.apply(null,b)},0)},Oa=function(a,c){return b.extend(T,b.isArray(a)?[]:{},a,c)},Pa=function(a,c){return b('<{0} class="{0}">'.fill(c||"div",a))},Qa=function(a,b){Array.prototype.push.apply(a,b)};d.fn=d.prototype={constructor:d,init:function(a,c,d){var g=this;if(b.isArray(c))g.option=Oa(La,{item:{data:c},result:{multi:d}});else{g.option=Oa(La,c);var h=g.option.mode||Fa;if(-1===Ia.indexOf(h))throw new Error('Render mode "{0}" is not supported,\nhere is the valid modes: {0}'.fill(h,Ia.join()));var i=g.option.layout||"list";if(-1===Ka.indexOf(i))throw new Error('Item layout "{0}" is not supported,\nhere is the valid modes: {0}'.fill(i,Ka.join()))}return g.context=b(a),e(g),g.events={},f(g),n(g),g.load(g.option.item.data,function(a){y(g,"ready",{data:a})}),g},on:function(a,b){var c=this;if(-1===xa.indexOf(a))return R.warn("{0}:{0}".fill("不支持此事件类型",a)),c;var d=c.events;return Ma(d,a)?d[a].push(b):d[a]=[b],c},off:function(a,b){var c=this;if(-1===xa.indexOf(a))return c;var d=c.events;if(!Ma(d,a))return c;var e=d[a],f=e.indexOf(b);return-1!==f&&e.splice(f,1),c},show:function(a){var b=this,d=b.dom,e=b.option.mode;return e===Ga?b:(e===Ha&&b.mask.show(),p(b.context,d,b.option),d.fadeIn("fast",function(){d.find(c.build(da).sub(ra).visible()).focus(),q(b),a&&a.call(b)}),b)},hide:function(a){var b=this,c=b.option.mode;return c===Ga?b:((c===Fa?b.dom:b.mask).fadeOut("fast",function(){a&&a.call(b)}),b)},filter:function(a,d){function e(a){if(i){var c=b(a).attr(Da),d=l[c];++d.handled<d.total||N(k,j,c)}}var f=this,g=[],h=b.isFunction(a),i=!!f.option.group.valueField,j=H(f),k=f.dom.find(c.build(ka).done()),l={};return k.each(function(){var a=b(this).attr(Da);l[a]={total:j.filter(c.build(la).attr(Da,a).done()).length,handled:0}}),j.each(function(c,i){i=b(i);var j=L(i);(h?a.call(this,j):f.option.header.filter.matchCase?-1!==i.text().indexOf(a.toString()):-1!==i.text().toLowerCase().indexOf(a.toString().toLowerCase()))?(g.push({item:i,data:j}),d&&i.slideDown(50,function(){e(this)})):d&&i.slideUp(50,function(){e(this)})}),g},value:function(a,b){var c=this;return 0===arguments.length?z(c):(A(c,a,b),c)},clear:function(){return B(this),this},load:function(a,b){var c=this;return c.option.item.data=Oa(a),l(c,function(){q(c),b&&b.call(c,c.option.item.data)}),c},readonly:function(a){var b=this;return 0===arguments.length?b.option.readonly:(a?(b.hide(),b.context.addClass($)):b.context.removeClass($),b.option.readonly=a,b)}},d.fn.init.prototype=d.fn,d.defaults=La,a.tinyselect=d}(window,jQuery);
//# sourceMappingURL=tinyselect.js.map