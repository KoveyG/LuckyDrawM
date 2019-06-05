var vm = new Vue({
    el:'#body',
    data:{
        init:{
            base:bases
        },
        base:{
            'tit':'落地云',//页面标题
            'stime':'2018-11-11',//开始时间
            'etime':'2018-11-15',//结束时间
            'usernum':47852,//实际允许参加人数
            'userdumnum':666,//虚拟人数
            'luckytime':3,//抽奖次数
            "realm":"www.baidu.com",//绑定域名
        },//基础设置
        page:{
            'adsimg':'images/headpg.png',//广告图地址
            'dialimg':'images/panzi.png',//转盘图地址
            'lightimg':'images/light.png',//转盘灯地址
            'backgroundImage':'images/bg.jpg',//背景图地址
            'backgroundPosition':'center top',//背景位置
            'backgroundColor':'#fff',//背景颜色
            'dialcolor':'#ffe2ff',//转盘颜色
            'pageheight':'666px',//页面长度
            'audio':true,//是否开启音乐
            'audioname':'c哩c哩',//音乐名称
            'audiosrc':'http://175.174.26.139/mp32.9ku.com/upload/2017/10/13/869617.m4a',//音乐地址
            'audioauto':true,//是否自动播放
            'text':'活动说明',//活动说明
        },//页面设置
        luckylist:[
            {name:'一等奖',prize:'IPAD AIR 256G',img:'images/gift1.png',num:'10',rot:'45',width:'50%',height:'50%'},
            {name:'二等奖',prize:'IPAD AIR 256G',img:'images/gift2.png',num:'10',rot:'45',width:'50%',height:'50%'},
            {name:'三等奖',prize:'IPAD AIR 256G',img:'images/gift4.png',num:'10',rot:'45',width:'50%',height:'50%'},
            {name:'四等奖',prize:'IPAD AIR 256G',img:'images/gift5.png',num:'10',rot:'45',width:'50%',height:'50%'},
            {name:'五等奖',prize:'IPAD AIR 256G',img:'images/gift4.png',num:'10',rot:'45',width:'50%',height:'50%'},
            {name:'六等奖',prize:'IPAD AIR 256G',img:'images/gift2.png',num:'10',rot:'45',width:'50%',height:'50%'},
            {name:'七等奖',prize:'IPAD AIR 256G',img:'images/gift1.png',num:'10',rot:'45',width:'50%',height:'50%'},
            {name:'谢谢参与',prize:'IPAD AIR 256G',img:'images/gift3.png',num:'10',rot:'45',width:'50%',height:'50%'},
        ],//奖项设置
        formlist:[
            {type:'stext',name:'单行文本',val:'姓名',k:'',hasregx:false,regx:'text',must:true,opshow:false},
            {type:'stext',name:'单行文本',val:'电话',k:'',hasregx:true,regx:'tel',must:true,opshow:false},
        ],//表单设置
        share:{
            'sharetit':'情人节送好礼',//分享标题
            'sharesug':'我在情人节送好礼活动中抽中了奖品，您也来试试',//分享介绍
            'shareimg':'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFYAAABWCAYAAABVVmH3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZWJmYTBiOS0xNTFhLTRjMjItODNlYy1mZDViZmIyMGY3NGYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDkwMEE2MDZFNjFGMTFFOEJCODlDQ0E0MTRGM0M0QUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDkwMEE2MDVFNjFGMTFFOEJCODlDQ0E0MTRGM0M0QUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5MmNkMzU4ZC0yZGViLTRjY2EtOTE0OC1jNTIyN2ZkYWQ5ZTkiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDowZmM5MmJiZi0yMmFjLTExN2MtOTkx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',//分享图片
        },//分享设置
        GetForm:{
            username:'',//提交的姓名
            usertel:'',//提交的电话
        },
        other:{
            winshow:false,//中奖弹窗
            loseshow:false,//未中奖弹窗
            formshow:false,//表单弹窗
            inforshow:false,//说明弹窗
            shareshow:false,//分享弹窗
            audioroom:false,//音频库
            preview:false,//预览
            animate:true,//动画效果
            tabindex:'base',//右侧设置模块
            route:'index',//左侧路由
            luckytype:3,//奖项模式 1:4个奖；2:6个奖；3:8个奖
            activeindex:0,//奖项模块
            rotate_angle:2,//最终停止的编号
        },//其他设置
        imglist:[
            {id:'0',src:'images/bg.jpg'},
            {id:'1',src:'images/1.jpg'},
            {id:'2',src:'images/2.jpg'},
            {id:'3',src:'images/3.jpg'},
            {id:'4',src:'images/4.jpg'},
            {id:'5',src:'images/5.jpg'},
            {id:'6',src:'images/6.jpg'},
            {id:'7',src:'images/7.jpg'},
        ],//图片库
        audiolist:[
            {id:'1',playing:false,name:'学猫叫',src:'http://other.web.nf01.sycdn.kuwo.cn/resource/n1/97/24/778796119.mp3'},
            {id:'2',playing:false,name:'隔壁泰山',src:'http://other.web.nf01.sycdn.kuwo.cn/resource/n2/44/96/1593378899.mp3'},
            {id:'3',playing:false,name:'海草海草',src:'http://175.174.26.140/mp32.9ku.com/upload/2017/11/29/873031.m4a'},
            {id:'4',playing:false,name:'大哥别杀我',src:'http://win.web.nf01.sycdn.kuwo.cn/resource/n1/39/23/4156074505.mp3'},
            {id:'5',playing:false,name:'老公天下第一',src:'http://175.174.26.140/mp32.9ku.com/upload/128/2018/03/29/877504.mp3'},
            {id:'6',playing:false,name:'c哩c哩',src:'http://175.174.26.139/mp32.9ku.com/upload/2017/10/13/869617.m4a'},
        ],//音频库
        comlist:[
            {
                "widget": {
                    "type": "btn",
                    "width": "100px",
                    "height": "30px",
                    "lefts": "-17px",
                    "tops": "11px",
                    "pointerevents": "none",
                    "nowheight": "30px"
                },
                "description": "按钮",
                "use": true,
                "label": "按钮"
            },
            {
                "widget": {
                    "type": "lucky",
                    "width": "355px",
                    "height": "355px",
                    "lefts": "4px",
                    "tops": "198px",
                    "luckytype": 3,
                    "click_flag": true,
                    "during_time": 5,
                    "rand_circle": 6,
                    "rotate_main": 1845,
                    "rotate_base": 45,
                    "rotate_time": 1,
                    "rotate_angle": 7,
                    "rotate_style": "rotate(0deg)",
                    "pointerevents": "none",
                    "nowheight": "355px"
                },
                "description": "抽奖",
                "use": true,
                "label": "抽奖"
            },
            {
                "widget": {
                    "type": "audio",
                    "width": "40px",
                    "height": "40px",
                    "lefts": "317px",
                    "tops": "8px",
                    "colors": "#fff",
                    "stylesize": "35px",
                    "audiostyle": "iconfont icon-yinpin4",
                    "pointerevents": "none",
                    "nowheight": "40px"
                },
                "description": "音频",
                "use": true,
                "label": "音频"
            },
            {
                "widget": {
                    "type": "image",
                    "width": "375px",
                    "height": "168px",
                    "src": "images/headpg.png",
                    "lefts": "-6px",
                    "tops": "65px",
                    "imgroom": false,
                    "index": true,
                    "pointerevents": "none",
                    "nowheight": "168px"
                },
                "description": "图片",
                "use": true,
                "label": "图片"
            }
        ],//主数据
        recordlist:[
            {tel:'138****4695'},
            {tel:'139****1111'},
            {tel:'138****2222'},
            {tel:'138****3333'},
            {tel:'138****4444'},
            {tel:'138****4695'},
            {tel:'139****1111'},
            {tel:'138****2222'},
            {tel:'138****3333'},
            {tel:'138****4444'},
        ],//中奖名单
        sIndex:-1
    },
    components:{
        'datepicker':vuejsDatepicker,
        'tab-image':tabImage,
        'tab-btn':tabBtn,
        'tab-audio':tabAudio,
        'tab-lucky':tabLucky,
    },//注册组件
    created(){
        setInterval(this.scroll,2000)
    },//中奖名单滚动
    updated:function(){
        switch (this.luckylist.length){
            case 8:
                this.other.luckytype = 3;
                for (var i = this.luckylist.length - 1; i >= 0; i--) {
                    this.luckylist[i].rot = 45;
                    this.luckylist[i].width = '50%';
                    this.luckylist[i].height = '50%';
                }
                break;
            case 6:
                this.other.luckytype = 2;
                for (var i = this.luckylist.length - 1; i >= 0; i--) {
                    this.luckylist[i].rot = 60;
                    this.luckylist[i].width = '55%';
                    this.luckylist[i].height = '55%';
                }
                break;
            case 4:
                this.other.luckytype = 1;
                for (var i = this.luckylist.length - 1; i >= 0; i--) {
                    this.luckylist[i].rot = 90;
                    this.luckylist[i].width = '60%';
                    this.luckylist[i].height = '60%';
                }
                break;
        }
    },//判断转盘类型
    mounted(){
        var _this = this;
        var component = this;
        document.onkeydown = function(e){
            var key = window.event || e
            if (_this.sIndex == -1) {
                if(key.ctrlKey){
                    switch (key.keyCode){
                        case 90:
                            component.back();
                            event.preventDefault();
                            break;
                        case 89:
                            component.next();
                            event.preventDefault();
                            break;
                        case 38:
                            component.shorten();
                            event.preventDefault();
                            break;//ctrl+↑
                        case 40:
                            component.elongate();
                            event.preventDefault();
                            break;//ctrl+↓
                        case 83:
                            component.save();
                            event.preventDefault();
                            break;
                    }
                }
            }else{
                switch (key.keyCode){
                    case 37:
                        event.preventDefault();
                        var left = parseInt(_this.comlist[_this.sIndex].widget.lefts)
                        _this.comlist[_this.sIndex].widget.lefts = left-1 + 'px';
                        break;
                    case 38:
                        event.preventDefault();
                        var top = parseInt(_this.comlist[_this.sIndex].widget.tops)
                        _this.comlist[_this.sIndex].widget.tops = top-1 + 'px'
                        break;
                    case 39:
                        event.preventDefault();
                        var left = parseInt(_this.comlist[_this.sIndex].widget.lefts)
                        _this.comlist[_this.sIndex].widget.lefts = left+1 + 'px';
                        break;
                    case 40:
                        event.preventDefault();
                        var top = parseInt(_this.comlist[_this.sIndex].widget.tops)
                        _this.comlist[_this.sIndex].widget.tops = top+1 + 'px';
                        break;
                }
            }
        }
    },//键盘事件
    methods:{
        scroll(){
            this.other.animate = true;
            setTimeout(()=>{
                this.recordlist.push(this.recordlist[0]);
                this.recordlist.shift();
                this.other.animate = false;
            },500)
        },//中奖名单滚动
        save:function(){
            console.log(JSON.stringify(this.comlist));
            console.log(JSON.stringify(this.base));
            console.log(JSON.stringify(this.page));
            console.log(JSON.stringify(this.other));
            console.log(JSON.stringify(this.luckylist));
            console.log(this.sIndex);
            layer.msg('已保存');
        },//保存
        selector:function(ind){
            this.sIndex=ind;
        },//选中模块
        addItem:function(obj){
            var top = $(".mid").scrollTop() - 150;
            var width = parseInt(obj.widget.width);
            // var height = parseInt(obj.widget.height);
            obj.widget.tops = 300  + top + 'px'
            obj.widget.lefts = 188 -  width/2 + 'px'
            if(obj.use){
                this.sIndex=0;
                this.comlist.splice(0,0,JSON.parse(JSON.stringify(obj)));
            }
        },//添加模块
        copyItem:function(obj){
            if(obj){
                this.sIndex=0;
                this.comlist.splice(0,0,JSON.parse(JSON.stringify(obj)));
            }
        },//复制模块
        focus:function(){
        },
        deleteCom:function(ind){
            // alert(ind)
            var len = this.comlist.length-1;
            this.comlist.splice(ind,1);
            if(ind==len){
                this.sIndex=len-1;
            }
        },//删除选中模块
        changeadsimg:function(e){
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2M的图片')
            }else{
                var reader = new FileReader();
                reader.readAsDataURL(file); // 读出 base64
                reader.onloadend = function () {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                    var dataURL = reader.result;
                    that.page.adsimg = dataURL;
                };
            }
        },//上传广告图
        changebgimg:function(e){
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2M的图片')
            }else{
                var reader = new FileReader();
                reader.readAsDataURL(file); // 读出 base64
                reader.onloadend = function () {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                    var dataURL = reader.result;
                    that.page.backgroundImage = dataURL;
                };
            }
        },//上传背景图
        changedialimg:function(e){
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2M的图片')
            }else{
                var reader = new FileReader();
                reader.readAsDataURL(file); // 读出 base64
                reader.onloadend = function () {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                    var dataURL = reader.result;
                    that.page.dialimg = dataURL;
                };
            }
        },//上传转盘图
        changelightimg:function(e){
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2M的图片')
            }else{
                var reader = new FileReader();
                reader.readAsDataURL(file); // 读出 base64
                reader.onloadend = function () {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                    var dataURL = reader.result;
                    that.page.lightimg = dataURL;
                };
            }
        },//上传转盘灯图
        changepzimg:function(e){
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2M的图片')
            }else{
                var reader = new FileReader();
                reader.readAsDataURL(file); // 读出 base64
                reader.onloadend = function () {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                    var dataURL = reader.result;
                    that.luckylist[that.other.activeindex].img = dataURL;
                };
            }
        },//上传奖品图
        changesrimg:function(e){
            var that=this;
            var file = e.target.files[0];
            var imgSize=file.size/1024;
            if(imgSize>2000){
                alert('请上传大小不要超过2M的图片')
            }else{
                var reader = new FileReader();
                reader.readAsDataURL(file); // 读出 base64
                reader.onloadend = function () {
                    // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
                    var dataURL = reader.result;
                    that.share.shareimg = dataURL;
                };
            }
        },//上传分享图
        deleteadsimg:function(){
            this.page.adsimg = '';
        },//删除广告图片
        deletebgimg:function(){
            this.page.backgroundImage = '';
        },//删除背景图片
        deletedialimg:function(){
            this.page.dialimg = '';
        },//删除转盘图片
        deletelightimg:function(){
            this.page.lightimg = '';
        },//删除转盘图片
        deletepzimg:function(index){
            this.luckylist[index].img = '';
        },//删除奖品图片
        deletesrimg:function(index){
            this.share.shareimg = '';
        },//删除分享图片
        openaudio:function(){
            this.other.audioroom = true;
        },//打开音乐库
        chooseaudio:function(index){
            this.page.audiosrc = this.audiolist[index].src
            this.page.audioname = this.audiolist[index].name
        },//选择音乐
        roomclose:function(){
            this.other.audioroom = false;
        },//关闭库
        blank:function(e){
            if ($(e.target).attr("class") == 'elebox') {
                this.sIndex = -1;
            }
            if ($(e.target).attr("class") == 'mid') {
                this.sIndex = -1;
            }
        },//点击空白操作
        register:function(){
            this.other.winshow = false;
            this.other.formshow = true;
        },//完善信息
        submit:function(){
            this.other.formshow = false;
        },//提交表单
        close:function(){
            this.other.winshow = false;
            this.other.loseshow = false;
            this.other.formshow = false;
            this.other.inforshow = false;
            this.other.shareshow = false;
        },//返回
        listswitch:function(index){
            this.other.activeindex = index
        },//奖项设置选择
        BaseSet:function(){
            this.other.tabindex = 'base'
        },//导航 基础设置
        PageSet:function(){
            this.other.tabindex = 'page'
        },//导航 页面设置
        PrizeSet:function(){
            this.other.tabindex = 'prize'
        },//导航 奖项设置
        FormSet:function(){
            this.other.tabindex = 'form'
        },//导航 表单设置
        ShareSet:function(){
            this.other.tabindex = 'share'
        },//导航 分享设置
        play:function(index){
            for(var k = 0,len = this.$refs.audio.length; k < len; k++){
                this.$refs.audio[k].pause();
                this.audiolist[k].playing = false;
            }
            this.$refs.audio[index].play();
            this.audiolist[index].playing = true;
        },//播放
        pause:function(index){
            this.$refs.audio[index].pause();
            this.audiolist[index].playing = false;
        },//暂停
        index:function(){
            this.close();
            this.other.route = 'index';
            this.other.tabindex = 'base';
        },//首页
        active:function(){
            this.close();
            this.other.route = 'active';
            this.other.tabindex = 'base';
            this.other.inforshow = true;
        },//活动说明
        luckypage:function(){
            this.close();
            this.other.route = 'luckypage';
            this.other.tabindex = 'prize';
            this.other.winshow = true;
        },//中奖页面
        formset:function(){
            this.close();
            this.other.route = 'formset';
            this.other.tabindex = 'form';
            this.other.formshow = true;
        },//表单提交页面
        losepage:function(){
            this.close();
            this.other.route = 'losepage';
            this.other.tabindex = 'prize';
            this.other.loseshow = true;
        },//未中奖页面
        sharepage:function(){
            this.close();
            this.other.route = 'sharepage';
            this.other.tabindex = 'share';
            this.other.shareshow = true;
        },//分享效果
        delpz:function(){
            var index = this.other.activeindex
            var num = this.luckylist.length
            var that = this;
            if (num>4) {
                layer.confirm('是否删除该项', {
                        btn: ['删除','取消']
                    }, function(){
                        layer.msg('已删除,请确保奖项为双数', {icon: 1});
                        that.luckylist.splice(index,1);
                    }, function(){
                        layer.msg('未删除');
                });
            }else{
                layer.msg('删除失败，奖品最少设置4个')
            }
        },//删除奖项
        addpz:function(){
            var num = this.luckylist.length
            var n = {name:'谢谢参与',prize:'IPAD AIR 256G',img:'images/gift3.png',num:'10',rot:'45',width:'50%',height:'50%'}
            if (num<8) {
                switch (this.luckylist.length){
                    case 4:
                        this.luckylist.splice(num,0,JSON.parse(JSON.stringify(n)));
                        break;
                    case 6:
                        this.luckylist.splice(num,0,JSON.parse(JSON.stringify(n)));
                        break;
                }
                this.luckylist.splice(num,0,JSON.parse(JSON.stringify(n)));
            }else{
                layer.msg('添加失败，奖品最多可设置8个')
            }
        },//增加奖项
        // setup:function(index){
        //     this.formlist[index].opshow = true;
        // },//表单设置
        // opclose:function(index){
        //     this.formlist[index].opshow = false;
        // },//设置关闭
        // regtel:function(index){
        //     this.formlist[index].regx = 'tel';
        // },//添加电话验证
        // regemail:function(index){
        //     this.formlist[index].regx = 'email';
        // },//添加邮箱验证
    }
});