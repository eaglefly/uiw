(this["webpackJsonp@example/uiw"]=this["webpackJsonp@example/uiw"]||[]).push([[1],{565:function(e,t,r){!function(e){"use strict";e.defineMode("javascript",(function(t,r){var n,a,i=t.indentUnit,o=r.statementIndent,c=r.jsonld,s=r.json||c,u=r.typescript,l=r.wordCharacters||/[\w$\xa1-\uffff]/,f=function(){function e(e){return{type:e,style:"keyword"}}var t=e("keyword a"),r=e("keyword b"),n=e("keyword c"),a=e("keyword d"),i=e("operator"),o={type:"atom",style:"atom"};return{if:e("if"),while:t,with:t,else:r,do:r,try:r,finally:r,return:a,break:a,continue:a,new:e("new"),delete:n,void:n,throw:n,debugger:e("debugger"),var:e("var"),const:e("var"),let:e("var"),function:e("function"),catch:e("catch"),for:e("for"),switch:e("switch"),case:e("case"),default:e("default"),in:i,typeof:i,instanceof:i,true:o,false:o,null:o,undefined:o,NaN:o,Infinity:o,this:e("this"),class:e("class"),super:e("atom"),yield:n,export:e("export"),import:e("import"),extends:n,await:n}}(),d=/[+\-*&%=<>!?|~^@]/,p=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;function m(e,t,r){return n=e,a=r,t}function v(e,t){var r,n=e.next();if('"'==n||"'"==n)return t.tokenize=(r=n,function(e,t){var n,a=!1;if(c&&"@"==e.peek()&&e.match(p))return t.tokenize=v,m("jsonld-keyword","meta");for(;null!=(n=e.next())&&(n!=r||a);)a=!a&&"\\"==n;return a||(t.tokenize=v),m("string","string")}),t.tokenize(e,t);if("."==n&&e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/))return m("number","number");if("."==n&&e.match(".."))return m("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(n))return m(n);if("="==n&&e.eat(">"))return m("=>","operator");if("0"==n&&e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/))return m("number","number");if(/\d/.test(n))return e.match(/^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/),m("number","number");if("/"==n)return e.eat("*")?(t.tokenize=k,k(e,t)):e.eat("/")?(e.skipToEnd(),m("comment","comment")):Ke(e,t,1)?(function(e){for(var t,r=!1,n=!1;null!=(t=e.next());){if(!r){if("/"==t&&!n)return;"["==t?n=!0:n&&"]"==t&&(n=!1)}r=!r&&"\\"==t}}(e),e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),m("regexp","string-2")):(e.eat("="),m("operator","operator",e.current()));if("`"==n)return t.tokenize=y,y(e,t);if("#"==n&&"!"==e.peek())return e.skipToEnd(),m("meta","meta");if("#"==n&&e.eatWhile(l))return m("variable","property");if("<"==n&&e.match("!--")||"-"==n&&e.match("->")&&!/\S/.test(e.string.slice(0,e.start)))return e.skipToEnd(),m("comment","comment");if(d.test(n))return">"==n&&t.lexical&&">"==t.lexical.type||(e.eat("=")?"!"!=n&&"="!=n||e.eat("="):/[<>*+\-]/.test(n)&&(e.eat(n),">"==n&&e.eat(n))),"?"==n&&e.eat(".")?m("."):m("operator","operator",e.current());if(l.test(n)){e.eatWhile(l);var a=e.current();if("."!=t.lastType){if(f.propertyIsEnumerable(a)){var i=f[a];return m(i.type,i.style,a)}if("async"==a&&e.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return m("async","keyword",a)}return m("variable","variable",a)}}function k(e,t){for(var r,n=!1;r=e.next();){if("/"==r&&n){t.tokenize=v;break}n="*"==r}return m("comment","comment")}function y(e,t){for(var r,n=!1;null!=(r=e.next());){if(!n&&("`"==r||"$"==r&&e.eat("{"))){t.tokenize=v;break}n=!n&&"\\"==r}return m("quasi","string-2",e.current())}function w(e,t){t.fatArrowAt&&(t.fatArrowAt=null);var r=e.string.indexOf("=>",e.start);if(!(r<0)){if(u){var n=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(e.string.slice(e.start,r));n&&(r=n.index)}for(var a=0,i=!1,o=r-1;o>=0;--o){var c=e.string.charAt(o),s="([{}])".indexOf(c);if(s>=0&&s<3){if(!a){++o;break}if(0==--a){"("==c&&(i=!0);break}}else if(s>=3&&s<6)++a;else if(l.test(c))i=!0;else if(/["'\/`]/.test(c))for(;;--o){if(0==o)return;if(e.string.charAt(o-1)==c&&"\\"!=e.string.charAt(o-2)){o--;break}}else if(i&&!a){++o;break}}i&&!a&&(t.fatArrowAt=o)}}var b={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,this:!0,"jsonld-keyword":!0};function x(e,t,r,n,a,i){this.indented=e,this.column=t,this.type=r,this.prev=a,this.info=i,null!=n&&(this.align=n)}function h(e,t){for(var r=e.localVars;r;r=r.next)if(r.name==t)return!0;for(var n=e.context;n;n=n.prev)for(r=n.vars;r;r=r.next)if(r.name==t)return!0}var g={state:null,column:null,marked:null,cc:null};function j(){for(var e=arguments.length-1;e>=0;e--)g.cc.push(arguments[e])}function M(){return j.apply(null,arguments),!0}function A(e,t){for(var r=t;r;r=r.next)if(r.name==e)return!0;return!1}function V(e){var t=g.state;if(g.marked="def",t.context)if("var"==t.lexical.info&&t.context&&t.context.block){var n=function e(t,r){if(r){if(r.block){var n=e(t,r.prev);return n?n==r.prev?r:new z(n,r.vars,!0):null}return A(t,r.vars)?r:new z(r.prev,new I(t,r.vars),!1)}return null}(e,t.context);if(null!=n)return void(t.context=n)}else if(!A(e,t.localVars))return void(t.localVars=new I(e,t.localVars));r.globalVars&&!A(e,t.globalVars)&&(t.globalVars=new I(e,t.globalVars))}function E(e){return"public"==e||"private"==e||"protected"==e||"abstract"==e||"readonly"==e}function z(e,t,r){this.prev=e,this.vars=t,this.block=r}function I(e,t){this.name=e,this.next=t}var T=new I("this",new I("arguments",null));function $(){g.state.context=new z(g.state.context,g.state.localVars,!1),g.state.localVars=T}function _(){g.state.context=new z(g.state.context,g.state.localVars,!0),g.state.localVars=null}function C(){g.state.localVars=g.state.context.vars,g.state.context=g.state.context.prev}function O(e,t){var r=function(){var r=g.state,n=r.indented;if("stat"==r.lexical.type)n=r.lexical.indented;else for(var a=r.lexical;a&&")"==a.type&&a.align;a=a.prev)n=a.indented;r.lexical=new x(n,g.stream.column(),e,null,r.lexical,t)};return r.lex=!0,r}function q(){var e=g.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function S(e){return function t(r){return r==e?M():";"==e||"}"==r||")"==r||"]"==r?j():M(t)}}function P(e,t){return"var"==e?M(O("vardef",t),we,S(";"),q):"keyword a"==e?M(O("form"),W,P,q):"keyword b"==e?M(O("form"),P,q):"keyword d"==e?g.stream.match(/^\s*$/,!1)?M():M(O("stat"),F,S(";"),q):"debugger"==e?M(S(";")):"{"==e?M(O("}"),_,ie,q,C):";"==e?M():"if"==e?("else"==g.state.lexical.info&&g.state.cc[g.state.cc.length-1]==q&&g.state.cc.pop()(),M(O("form"),W,P,q,Me)):"function"==e?M(ze):"for"==e?M(O("form"),Ae,P,q):"class"==e||u&&"interface"==t?(g.marked="keyword",M(O("form","class"==e?e:t),Ce,q)):"variable"==e?u&&"declare"==t?(g.marked="keyword",M(P)):u&&("module"==t||"enum"==t||"type"==t)&&g.stream.match(/^\s*\w/,!1)?(g.marked="keyword","enum"==t?M(De):"type"==t?M(Te,S("operator"),le,S(";")):M(O("form"),be,S("{"),O("}"),ie,q,q)):u&&"namespace"==t?(g.marked="keyword",M(O("form"),N,P,q)):u&&"abstract"==t?(g.marked="keyword",M(P)):M(O("stat"),Y):"switch"==e?M(O("form"),W,S("{"),O("}","switch"),_,ie,q,q,C):"case"==e?M(N,S(":")):"default"==e?M(S(":")):"catch"==e?M(O("form"),$,J,P,q,C):"export"==e?M(O("stat"),Pe,q):"import"==e?M(O("stat"),Ne,q):"async"==e?M(P):"@"==t?M(N,P):j(O("stat"),N,S(";"),q)}function J(e){if("("==e)return M($e,S(")"))}function N(e,t){return B(e,t,!1)}function U(e,t){return B(e,t,!0)}function W(e){return"("!=e?j():M(O(")"),F,S(")"),q)}function B(e,t,r){if(g.state.fatArrowAt==g.stream.start){var n=r?Q:L;if("("==e)return M($,O(")"),ne($e,")"),q,S("=>"),n,C);if("variable"==e)return j($,be,S("=>"),n,C)}var a=r?D:H;return b.hasOwnProperty(e)?M(a):"function"==e?M(ze,a):"class"==e||u&&"interface"==t?(g.marked="keyword",M(O("form"),_e,q)):"keyword c"==e||"async"==e?M(r?U:N):"("==e?M(O(")"),F,S(")"),q,a):"operator"==e||"spread"==e?M(r?U:N):"["==e?M(O("]"),He,q,a):"{"==e?ae(ee,"}",null,a):"quasi"==e?j(G,a):"new"==e?M(function(e){return function(t){return"."==t?M(e?X:R):"variable"==t&&u?M(ve,e?D:H):j(e?U:N)}}(r)):"import"==e?M(N):M()}function F(e){return e.match(/[;\}\)\],]/)?j():j(N)}function H(e,t){return","==e?M(F):D(e,t,!1)}function D(e,t,r){var n=0==r?H:D,a=0==r?N:U;return"=>"==e?M($,r?Q:L,C):"operator"==e?/\+\+|--/.test(t)||u&&"!"==t?M(n):u&&"<"==t&&g.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/,!1)?M(O(">"),ne(le,">"),q,n):"?"==t?M(N,S(":"),a):M(a):"quasi"==e?j(G,n):";"!=e?"("==e?ae(U,")","call",n):"."==e?M(Z,n):"["==e?M(O("]"),F,S("]"),q,n):u&&"as"==t?(g.marked="keyword",M(le,n)):"regexp"==e?(g.state.lastType=g.marked="operator",g.stream.backUp(g.stream.pos-g.stream.start-1),M(a)):void 0:void 0}function G(e,t){return"quasi"!=e?j():"${"!=t.slice(t.length-2)?M(G):M(N,K)}function K(e){if("}"==e)return g.marked="string-2",g.state.tokenize=y,M(G)}function L(e){return w(g.stream,g.state),j("{"==e?P:N)}function Q(e){return w(g.stream,g.state),j("{"==e?P:U)}function R(e,t){if("target"==t)return g.marked="keyword",M(H)}function X(e,t){if("target"==t)return g.marked="keyword",M(D)}function Y(e){return":"==e?M(q,P):j(H,S(";"),q)}function Z(e){if("variable"==e)return g.marked="property",M()}function ee(e,t){return"async"==e?(g.marked="property",M(ee)):"variable"==e||"keyword"==g.style?(g.marked="property","get"==t||"set"==t?M(te):(u&&g.state.fatArrowAt==g.stream.start&&(r=g.stream.match(/^\s*:\s*/,!1))&&(g.state.fatArrowAt=g.stream.pos+r[0].length),M(re))):"number"==e||"string"==e?(g.marked=c?"property":g.style+" property",M(re)):"jsonld-keyword"==e?M(re):u&&E(t)?(g.marked="keyword",M(ee)):"["==e?M(N,oe,S("]"),re):"spread"==e?M(U,re):"*"==t?(g.marked="keyword",M(ee)):":"==e?j(re):void 0;var r}function te(e){return"variable"!=e?j(re):(g.marked="property",M(ze))}function re(e){return":"==e?M(U):"("==e?j(ze):void 0}function ne(e,t,r){function n(a,i){if(r?r.indexOf(a)>-1:","==a){var o=g.state.lexical;return"call"==o.info&&(o.pos=(o.pos||0)+1),M((function(r,n){return r==t||n==t?j():j(e)}),n)}return a==t||i==t?M():r&&r.indexOf(";")>-1?j(e):M(S(t))}return function(r,a){return r==t||a==t?M():j(e,n)}}function ae(e,t,r){for(var n=3;n<arguments.length;n++)g.cc.push(arguments[n]);return M(O(t,r),ne(e,t),q)}function ie(e){return"}"==e?M():j(P,ie)}function oe(e,t){if(u){if(":"==e)return M(le);if("?"==t)return M(oe)}}function ce(e,t){if(u&&(":"==e||"in"==t))return M(le)}function se(e){if(u&&":"==e)return g.stream.match(/^\s*\w+\s+is\b/,!1)?M(N,ue,le):M(le)}function ue(e,t){if("is"==t)return g.marked="keyword",M()}function le(e,t){return"keyof"==t||"typeof"==t||"infer"==t?(g.marked="keyword",M("typeof"==t?U:le)):"variable"==e||"void"==t?(g.marked="type",M(me)):"|"==t||"&"==t?M(le):"string"==e||"number"==e||"atom"==e?M(me):"["==e?M(O("]"),ne(le,"]",","),q,me):"{"==e?M(O("}"),ne(de,"}",",;"),q,me):"("==e?M(ne(pe,")"),fe,me):"<"==e?M(ne(le,">"),le):void 0}function fe(e){if("=>"==e)return M(le)}function de(e,t){return"variable"==e||"keyword"==g.style?(g.marked="property",M(de)):"?"==t||"number"==e||"string"==e?M(de):":"==e?M(le):"["==e?M(S("variable"),ce,S("]"),de):"("==e?j(Ie,de):void 0}function pe(e,t){return"variable"==e&&g.stream.match(/^\s*[?:]/,!1)||"?"==t?M(pe):":"==e?M(le):"spread"==e?M(pe):j(le)}function me(e,t){return"<"==t?M(O(">"),ne(le,">"),q,me):"|"==t||"."==e||"&"==t?M(le):"["==e?M(le,S("]"),me):"extends"==t||"implements"==t?(g.marked="keyword",M(le)):"?"==t?M(le,S(":"),le):void 0}function ve(e,t){if("<"==t)return M(O(">"),ne(le,">"),q,me)}function ke(){return j(le,ye)}function ye(e,t){if("="==t)return M(le)}function we(e,t){return"enum"==t?(g.marked="keyword",M(De)):j(be,oe,ge,je)}function be(e,t){return u&&E(t)?(g.marked="keyword",M(be)):"variable"==e?(V(t),M()):"spread"==e?M(be):"["==e?ae(he,"]"):"{"==e?ae(xe,"}"):void 0}function xe(e,t){return"variable"!=e||g.stream.match(/^\s*:/,!1)?("variable"==e&&(g.marked="property"),"spread"==e?M(be):"}"==e?j():"["==e?M(N,S("]"),S(":"),xe):M(S(":"),be,ge)):(V(t),M(ge))}function he(){return j(be,ge)}function ge(e,t){if("="==t)return M(U)}function je(e){if(","==e)return M(we)}function Me(e,t){if("keyword b"==e&&"else"==t)return M(O("form","else"),P,q)}function Ae(e,t){return"await"==t?M(Ae):"("==e?M(O(")"),Ve,q):void 0}function Ve(e){return"var"==e?M(we,Ee):"variable"==e?M(Ee):j(Ee)}function Ee(e,t){return")"==e?M():";"==e?M(Ee):"in"==t||"of"==t?(g.marked="keyword",M(N,Ee)):j(N,Ee)}function ze(e,t){return"*"==t?(g.marked="keyword",M(ze)):"variable"==e?(V(t),M(ze)):"("==e?M($,O(")"),ne($e,")"),q,se,P,C):u&&"<"==t?M(O(">"),ne(ke,">"),q,ze):void 0}function Ie(e,t){return"*"==t?(g.marked="keyword",M(Ie)):"variable"==e?(V(t),M(Ie)):"("==e?M($,O(")"),ne($e,")"),q,se,C):u&&"<"==t?M(O(">"),ne(ke,">"),q,Ie):void 0}function Te(e,t){return"keyword"==e||"variable"==e?(g.marked="type",M(Te)):"<"==t?M(O(">"),ne(ke,">"),q):void 0}function $e(e,t){return"@"==t&&M(N,$e),"spread"==e?M($e):u&&E(t)?(g.marked="keyword",M($e)):u&&"this"==e?M(oe,ge):j(be,oe,ge)}function _e(e,t){return"variable"==e?Ce(e,t):Oe(e,t)}function Ce(e,t){if("variable"==e)return V(t),M(Oe)}function Oe(e,t){return"<"==t?M(O(">"),ne(ke,">"),q,Oe):"extends"==t||"implements"==t||u&&","==e?("implements"==t&&(g.marked="keyword"),M(u?le:N,Oe)):"{"==e?M(O("}"),qe,q):void 0}function qe(e,t){return"async"==e||"variable"==e&&("static"==t||"get"==t||"set"==t||u&&E(t))&&g.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(g.marked="keyword",M(qe)):"variable"==e||"keyword"==g.style?(g.marked="property",M(Se,qe)):"number"==e||"string"==e?M(Se,qe):"["==e?M(N,oe,S("]"),Se,qe):"*"==t?(g.marked="keyword",M(qe)):u&&"("==e?j(Ie,qe):";"==e||","==e?M(qe):"}"==e?M():"@"==t?M(N,qe):void 0}function Se(e,t){if("?"==t)return M(Se);if(":"==e)return M(le,ge);if("="==t)return M(U);var r=g.state.lexical.prev;return j(r&&"interface"==r.info?Ie:ze)}function Pe(e,t){return"*"==t?(g.marked="keyword",M(Fe,S(";"))):"default"==t?(g.marked="keyword",M(N,S(";"))):"{"==e?M(ne(Je,"}"),Fe,S(";")):j(P)}function Je(e,t){return"as"==t?(g.marked="keyword",M(S("variable"))):"variable"==e?j(U,Je):void 0}function Ne(e){return"string"==e?M():"("==e?j(N):j(Ue,We,Fe)}function Ue(e,t){return"{"==e?ae(Ue,"}"):("variable"==e&&V(t),"*"==t&&(g.marked="keyword"),M(Be))}function We(e){if(","==e)return M(Ue,We)}function Be(e,t){if("as"==t)return g.marked="keyword",M(Ue)}function Fe(e,t){if("from"==t)return g.marked="keyword",M(N)}function He(e){return"]"==e?M():j(ne(U,"]"))}function De(){return j(O("form"),be,S("{"),O("}"),ne(Ge,"}"),q,q)}function Ge(){return j(be,ge)}function Ke(e,t,r){return t.tokenize==v&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(t.lastType)||"quasi"==t.lastType&&/\{\s*$/.test(e.string.slice(0,e.pos-(r||0)))}return C.lex=!0,q.lex=!0,{startState:function(e){var t={tokenize:v,lastType:"sof",cc:[],lexical:new x((e||0)-i,0,"block",!1),localVars:r.localVars,context:r.localVars&&new z(null,null,!1),indented:e||0};return r.globalVars&&"object"==typeof r.globalVars&&(t.globalVars=r.globalVars),t},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation(),w(e,t)),t.tokenize!=k&&e.eatSpace())return null;var r=t.tokenize(e,t);return"comment"==n?r:(t.lastType="operator"!=n||"++"!=a&&"--"!=a?n:"incdec",function(e,t,r,n,a){var i=e.cc;for(g.state=e,g.stream=a,g.marked=null,g.cc=i,g.style=t,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);;)if((i.length?i.pop():s?N:P)(r,n)){for(;i.length&&i[i.length-1].lex;)i.pop()();return g.marked?g.marked:"variable"==r&&h(e,n)?"variable-2":t}}(t,r,n,a,e))},indent:function(t,n){if(t.tokenize==k)return e.Pass;if(t.tokenize!=v)return 0;var a,c=n&&n.charAt(0),s=t.lexical;if(!/^\s*else\b/.test(n))for(var u=t.cc.length-1;u>=0;--u){var l=t.cc[u];if(l==q)s=s.prev;else if(l!=Me)break}for(;("stat"==s.type||"form"==s.type)&&("}"==c||(a=t.cc[t.cc.length-1])&&(a==H||a==D)&&!/^[,\.=+\-*:?[\(]/.test(n));)s=s.prev;o&&")"==s.type&&"stat"==s.prev.type&&(s=s.prev);var f=s.type,p=c==f;return"vardef"==f?s.indented+("operator"==t.lastType||","==t.lastType?s.info.length+1:0):"form"==f&&"{"==c?s.indented:"form"==f?s.indented+i:"stat"==f?s.indented+(function(e,t){return"operator"==e.lastType||","==e.lastType||d.test(t.charAt(0))||/[,.]/.test(t.charAt(0))}(t,n)?o||i:0):"switch"!=s.info||p||0==r.doubleIndentSwitch?s.align?s.column+(p?0:1):s.indented+(p?0:i):s.indented+(/^(?:case|default)\b/.test(n)?i:2*i)},electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,blockCommentStart:s?null:"/*",blockCommentEnd:s?null:"*/",blockCommentContinue:s?null:" * ",lineComment:s?null:"//",fold:"brace",closeBrackets:"()[]{}''\"\"``",helperType:s?"json":"javascript",jsonldMode:c,jsonMode:s,expressionAllowed:Ke,skipExpression:function(e){var t=e.cc[e.cc.length-1];t!=N&&t!=U||e.cc.pop()}}})),e.registerHelper("wordChars","javascript",/[\w$]/),e.defineMIME("text/javascript","javascript"),e.defineMIME("text/ecmascript","javascript"),e.defineMIME("application/javascript","javascript"),e.defineMIME("application/x-javascript","javascript"),e.defineMIME("application/ecmascript","javascript"),e.defineMIME("application/json",{name:"javascript",json:!0}),e.defineMIME("application/x-json",{name:"javascript",json:!0}),e.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),e.defineMIME("text/typescript",{name:"javascript",typescript:!0}),e.defineMIME("application/typescript",{name:"javascript",typescript:!0})}(r(139))}}]);