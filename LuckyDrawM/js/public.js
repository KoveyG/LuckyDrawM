var pubPros=['item','sbool','cindex'];
function hm(typ){
    var hmGroup={
        btn:'<div class="explain">活动说明</div>',
        image:'<div class="upload-btn x-btn style-white"><img draggable="false" alt="" :src="this.$parent.page.adsimg" :style="[{width:item.widget.width},{height:item.widget.height},{opacity:item.widget.opacity}]"/></div>',
        audio:'<div class="audiobox"><audio :src="this.$parent.page.audiosrc" :style="[{width:item.widget.width},{height:item.widget.height}]" :autoplay="this.$parent.page.audioauto"></audio><i :class="item.widget.audiostyle" :style="[{fontSize:item.widget.stylesize},{lineHeight:item.widget.height},{color:item.widget.colors}]"></i></div>',
        lucky:'<div class="zhuanpan"><div class="diquan" :style="[{backgroundImage:\'url(\'+this.$parent.page.dialimg+\')\'}]"></div><div class="bianyuan" :style="[{backgroundImage:\'url(\'+this.$parent.page.lightimg+\')\'}]"></div><div class="zhuandong" :style="[{transition:\'transform \'+item.widget.during_time+\'s\'},{transform:item.widget.rotate_style}]"><div class="dipan" :style="[{backgroundColor:this.$parent.page.dialcolor}]"><img :src="\'images/panzi\'+this.$parent.other.luckytype+\'.png\'" alt=""></div><ul class="neiquan"><li v-for="(kovey,index) in this.$parent.luckylist" :style="[{transform: \'rotate(\'+index*kovey.rot+\'deg)\'}]"><img :src="kovey.img" alt=""  :style="[{width:kovey.width},{height:kovey.height},]"/><span>{{kovey.name}}</span></li></ul></div></div>',
};
    var baseHm='<div :class="[\'widget-view\',sbool?\'widget-select\':\'\',cls]" v-dragx="dragBox" @bindUpdate="bindUpdate" :style="[{left:item.widget.lefts},{top:item.widget.tops},{width:item.widget.width},{height:item.widget.height},{transform: \'rotate(\'+item.widget.rotate+\'deg)\'},{zIndex:$parent.comlist.length-cindex}]">'+
                    '<div class="dragdot dot1"></div><div class="dragdot dot2"></div><div class="dragdot dot3"></div><div class="dragdot dot4"></div><div class="dragdot dot5"></div><div class="dragdot dot6"></div><div class="dragdot dot7"></div><div class="dragdot dot8"></div>'+
                    '<div class="fl-widget drag" @click.self="getCindex">' +
                        '<div :widgetname="wgtname" ref="inputbox" :style="{pointerEvents:item.widget.pointerevents}">'+hmGroup[typ]+'</div>'+
                    '</div>'+
                '</div>';
    return baseHm;
}
const tabBtn = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_btn',
            wgtname:'_widget_'+new Date().getTime(),
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                canResize:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('btn'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        }
    }
});
const tabImage = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_image',
            wgtname:'_widget_'+new Date().getTime(),
            dragBox:{
                dragBarClass:"drag",
                dirctDom:true,
                canResize:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('image'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
            
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        }
    }
});
const tabAudio = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_audio',
            wgtname:'_widget_'+new Date().getTime(),
            sty:'',
            dragBox:{
                dragBarClass:"drag",
                resizeEdge: 1,
                dirctDom:true,
                canResize:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('audio'),
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';  
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        }
    }
});
const tabLucky = Vue.extend({
    data:function(){
        return {
            cls:'fui fui_lucky',
            wgtname:'_widget_'+new Date().getTime(),
            sty:'',
            dragBox:{
                dragBarClass:"drag",
                resizeEdge: 1,
                dirctDom:true,
                canResize:true,
                canDrag:true,
            }
        }
    },
    props:pubPros,
    template: hm('lucky'),
    created(){
        switch(this.item.widget.luckytype){
            case 1:
                this.item.widget.rotate_base = 90;
                break;
            case 2:
                this.item.widget.rotate_base = 60;
                break;
            case 3:
                this.item.widget.rotate_base = 45;
                break;
        }
    },
    methods:{
        bindUpdate(event){
            let data=event.detail;
            var oldtops = parseInt(this.item.widget.tops);
            var oldlefts = parseInt(this.item.widget.lefts);
            this.item.widget.tops = data.top + 'px';
            this.item.widget.lefts = data.left + 'px';
            this.item.widget.width = data.width + 'px';
            this.item.widget.height = data.height + 'px';
            this.item.widget.nowheight = data.height + 'px';
        },
        getCindex:function(){
            this.$emit('getcx',this.cindex);
        },
        delCom:function(){
            this.$emit('delcx',this.cindex);
        },
        addCom:function(){
            this.$emit('addcx',this.item);
        },
        play:function(e){
            if (this.$parent.base.luckytime>0) {
                if (this.item.widget.click_flag){
                    this.item.widget.click_flag = false;
                    var that = this;
                    var num = this.$parent.luckylist.length;
                    console.log('num:'+num);
                    var random = Math.floor(Math.random()*num); 
                    this.$parent.other.rotate_angle = random;
                    console.log('random:'+random);
                    console.log(this.$parent.other.rotate_angle)
                    console.log(this.item.widget.rotate_base)
                    this.item.widget.rotate_time ++;
                    this.$parent.base.luckytime --;
                    console.log(this.$parent.base.luckytime);
                    console.log('time:'+this.item.widget.rotate_time);
                    this.item.widget.rotate_main =  this.item.widget.rotate_time*this.item.widget.rand_circle*360 - this.$parent.other.rotate_angle*this.item.widget.rotate_base;
                    this.item.widget.rotate_style = 'rotate('+this.item.widget.rotate_main+'deg)';
                    console.log(this.item.widget.rotate_main)
                    setTimeout(function(){
                        if (that.$parent.luckylist[that.$parent.other.rotate_angle].name == '谢谢参与') {
                            that.$parent.other.loseshow = true;
                        }
                        else{
                            that.$parent.other.winshow = true;
                        }
                        that.item.widget.click_flag = true;
                    }, this.item.widget.during_time*1000);
                }
            }
            else{
                alert('已经没有抽奖机会咯~明天再来吧')
            }
        }
    }
});

