webpackJsonp([0],{"5jRo":function(t,i,s){"use strict";s.d(i,"a",function(){return l});var n=s("Dd8w"),e=s.n(n),a=s("NYxO"),l=(e()({},Object(a.c)(["playing","currentMusic"])),e()({selectItem:function(t,i){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:i})}},Object(a.d)({setPlaying:"SET_PLAYING"}),Object(a.b)(["selectPlay"])),{data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t=this,i=void 0;clearTimeout(i),i=setTimeout(function(){t.mmLoadShow=!1},200)}}})},"6Pj+":function(t,i,s){"use strict";var n={name:"mm-loading",props:{value:{type:Boolean,default:!0},loadingBgColor:{type:String}}},e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:this.value,expression:"value"}],staticClass:"mm-loading",style:{backgroundColor:this.loadingBgColor}},[i("div",{staticClass:"mm-loading-content"},[i("svg",{staticClass:"circular",attrs:{viewBox:"25 25 50 50"}},[i("circle",{staticClass:"path",attrs:{cx:"50",cy:"50",r:"20",fill:"none"}})])])])},staticRenderFns:[]};var a=s("VU/8")(n,e,!1,function(t){s("wn7V")},null,null);i.a=a.exports},"F4c/":function(t,i){},G3uJ:function(t,i,s){"use strict";i.a=function(t){return new l({id:t.id,name:t.name,singer:t.artists.length>0&&a(t.artists),album:t.album.name,image:null,duration:t.duration/1e3,url:"https://music.163.com/song/media/outer/url?id="+t.id+".mp3"})},i.b=function(t){return new l({id:t.id,name:t.name,singer:t.ar.length>0&&a(t.ar),album:t.al.name,image:t.al.picUrl,duration:t.dt/1e3,url:"https://music.163.com/song/media/outer/url?id="+t.id+".mp3"})};var n=s("Zrlr"),e=s.n(n);function a(t){var i=[];return t.forEach(function(t){i.push(t.name)}),i.join("/")}var l=function t(i){var s=i.id,n=i.name,a=i.singer,l=i.album,r=i.image,c=i.duration,o=i.url;e()(this,t),this.id=s,this.name=n,this.singer=a,this.album=l,this.image=r,this.duration=c,this.url=o}},HrAE:function(t,i,s){"use strict";var n={name:"mm-no-result",props:{title:{type:String,default:""}}},e={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{staticClass:"mm-no-result"},[i("p",{staticClass:"mm-no-result-text"},[this._v(this._s(this.title))])])},staticRenderFns:[]};var a=s("VU/8")(n,e,!1,function(t){s("wBbj")},null,null);i.a=a.exports},LOkV:function(t,i,s){"use strict";s.d(i,"c",function(){return n}),i.a=function(t){return t<10?"0"+t:t},i.b=function(t){for(var i=t.split("\n"),s=[],n=0;n<i.length;n++){var e=decodeURIComponent(i[n]),a=/\[\d*:\d*((\.|\:)\d*)*\]/g,l=e.match(a);if(l)for(var r=e.replace(a,""),c=0,o=l.length;c<o;c++){var u=l[c],m=Number(String(u.match(/\[\d*/i)).slice(1)),d=Number(String(u.match(/\:\d*/i)).slice(1)),f=60*m+d;""!==r&&s.push({time:f,text:r})}}return s};var n=function(t){var i=null==t?0:t.length;if(!i)return[];for(var s=-1,n=i-1,e=function(t,i){var s=-1,n=t.length;for(i||(i=new Array(n));++s<n;)i[s]=t[s];return i}(t);++s<i;){var a=s+Math.floor(Math.random()*(n-s+1)),l=e[a];e[a]=e[s],e[s]=l}return e}},Zrlr:function(t,i,s){"use strict";i.__esModule=!0,i.default=function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}},kvay:function(t,i,s){"use strict";var n=s("Dd8w"),e=s.n(n),a=s("LOkV"),l=s("gyMJ"),r=s("NYxO"),c={name:"music-list",components:{MmNoResult:s("HrAE").a},props:{list:{type:Array,default:[]},listType:{type:Number,default:0}},data:function(){return{lockUp:!0}},computed:e()({},Object(r.c)(["playing","currentMusic"])),watch:{list:function(t,i){2===this.listType&&(t.length!==i.length?this.lockUp=!1:t[t.length-1].id!==i.length>0&&i[i.length-1].id&&(this.lockUp=!1))}},methods:e()({listScroll:function(t){if(2===this.listType&&!this.lockUp){var i=t.target.scrollTop,s=t.target.scrollHeight;i+t.target.offsetHeight>=s&&(this.lockUp=!0,this.$emit("pullUp"))}},scrollTop:function(){this.$refs.listContent.scrollTop=0},selectItem:function(t,i,s){var n=this;s&&/list-menu-icon-del/.test(s.target.className)||(t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):Object(l.d)(t.id).then(function(s){s.data.data[0].url?n.$emit("select",t,i):n.$mmToast("当前音乐无法播放，请播放其他音乐")}))},deleteItem:function(t){this.$emit("del",t)}},Object(r.d)({setPlaying:"SET_PLAYING"})),filters:{formatDuration:function(t){var i=t%3600,s=Math.floor(i/60),n=Math.floor(i%60);return Object(a.a)(s)+":"+Object(a.a)(n)}}},o={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"musicList"},[t.list.length>0?[s("div",{staticClass:"list-item list-header"},[s("span",{staticClass:"list-name"},[t._v("歌曲")]),t._v(" "),s("span",{staticClass:"list-artist"},[t._v("歌手")]),t._v(" "),1===t.listType?s("span",{staticClass:"list-time"},[t._v("时长")]):s("span",{staticClass:"list-album"},[t._v("专辑")])]),t._v(" "),s("div",{ref:"listContent",staticClass:"list-content",on:{scroll:function(i){t.listScroll(i)}}},[t._l(t.list,function(i,n){return s("div",{key:i.id,staticClass:"list-item",class:{on:t.playing&&t.currentMusic.id===i.id},on:{dblclick:function(s){t.selectItem(i,n,s)}}},[s("span",{staticClass:"list-num",domProps:{textContent:t._s(n+1)}}),t._v(" "),s("div",{staticClass:"list-name"},[s("span",[t._v(t._s(i.name))]),t._v(" "),s("div",{staticClass:"list-menu"},[s("span",{staticClass:"list-menu-icon-play",class:{on:t.playing&&t.currentMusic.id===i.id},on:{click:function(s){s.stopPropagation(),t.selectItem(i,n)}}})])]),t._v(" "),s("span",{staticClass:"list-artist"},[t._v(t._s(i.singer))]),t._v(" "),1===t.listType?s("span",{staticClass:"list-time"},[t._v(t._s(t._f("formatDuration")(i.duration))+"\n                "),s("i",{staticClass:"list-menu-icon-del",on:{click:function(i){i.stopPropagation(),t.deleteItem(n)}}})]):s("span",{staticClass:"list-album"},[t._v(t._s(i.album))])])}),t._v(" "),t._t("listBtn")],2)]:s("mm-no-result",{attrs:{title:"弄啥呢，怎么啥也没有！！！"}})],2)},staticRenderFns:[]};var u=s("VU/8")(c,o,!1,function(t){s("F4c/")},"data-v-28c369d5",null);i.a=u.exports},wBbj:function(t,i){},wn7V:function(t,i){}});