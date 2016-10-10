Page( {
    data: {
        items: [],
        hidden: false
    },
    onLoad: function( options ) {
        // 页面初始化 options为页面跳转所带来的参数
        requestData( this, currentPage );
    },
    onReady: function() {
        // 页面渲染完成
    },
    onShow: function() {
        // 页面显示
    },
    onHide: function() {
        // 页面隐藏
    },
    onUnload: function() {
        // 页面关闭
    }
})
var currentPage = 1;
function requestData( that, page ) {
    wx.request( {
        url: "http://api.tianapi.com/wxnew/?key=54d9aa5d164e6eac1ac2b64321020d8c&num=10&page=" + page,
        header: {
            "Content-Type": "application/json"
        },
        fail:function(){
            that.setData( {
                hidden: true
            })    
        },
        success: function( res ) {
            console.log( res.data )
            var result = res.data;
            var items = [];
            for( var n in result.newslist ) {
                var o = result.newslist[ n ];
                items.push( { time: o.ctime, title: o.title, desc: o.description, picUrl: o.picUrl, url: o.url });
            }
            that.setData( {
                items: items,
                hidden: true
            })
        }
    })
}