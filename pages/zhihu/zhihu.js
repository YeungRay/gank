Page( {
    data: {
        items: {},
        hidden: false
    },
    onLoad: function( options ) {
        // 页面初始化 options为页面跳转所带来的参数
        requestData( this );
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

function requestData( that ) {
    wx.request( {
        url: "http://news-at.zhihu.com/api/4/news/latest",
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
            var items = {};
            var stories = [];
            var top_stories = [];
            for( var s in result.stories ) {
                var o = result.stories[ s ];
                stories.push( { images: o.images, title: o.title });
            }
            for( var ts in result.top_stories ) {
                var o = result.top_stories[ ts ];
                top_stories.push( { image: o.image, title:o.title });
            }
            items.date = result.date;
            items.stories = stories;
            items.top_stories = top_stories;
            that.setData( {
                items: items,
                hidden: true
            })
        }
    })
}