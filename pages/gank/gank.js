Page( {
  data: {
    tems: [],
    hidden: true,
    // tab切换
    currentTab: 0
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数
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
  },
  switchNav: function( e ) {
    var current = e.target.dataset.current;
    if( this.data.currentTab == current ) {
      return false;
    } else {
      this.setData( {
        currentTab: current
      })
    }
  },
  swiperChange: function(e) {
    var current = e.detail.current;
    this.setData( {
        currentTab: current
      })
  }
})
