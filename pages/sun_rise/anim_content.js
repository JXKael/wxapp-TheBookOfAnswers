function anim_content() {
}

anim_content.prototype = {

  /**
   * 文本初始位置
   */
  initialTxt: function () {
    this.animation = wx.createAnimation({
      duration: 1,
      timingFunction: "step-start",
    })
    this.animation.scale(0.8).opacity(0).step()
    return this.animation
  },

  initialSubTxt: function() {
    this.animation = wx.createAnimation({
      duration: 1,
      timingFunction: "step-start",
    })
    this.animation.opacity(0).step()
    return this.animation
  },

  contentShow: function (time, delay) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "linear",
    })
    this.animation.scale(1).opacity(1).step()
    return this.animation
  },

  subContentShow: function (time, delay) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "linear",
      delay: delay
    })
    this.animation.opacity(1).step()
    return this.animation
  }
}

module.exports = anim_content