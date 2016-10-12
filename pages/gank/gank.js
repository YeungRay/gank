Page( {
  data: {
    /**
     * 页面配置
     */
    winWidth: 0,
    winHeight: 0,
    tems: [],
    hidden: true,
    // tab切换
    currentTab: 0
  },
  onLoad: function( options ) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.getSystemInfo( {
      success: function( res ) {
        that.setData( {
          winWidth: res.windowWidth,
          winHeight: res.windowHeight
        })
      }
    })
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
  swiperChange: function( e ) {
    var current = e.detail.current;
    this.setData( {
      currentTab: current
    })
  }
})
