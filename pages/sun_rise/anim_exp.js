function anim_exp() {
  this.initPos = 70
}

anim_exp.prototype = {

  /**
   * 初始位置
   */
  initial: function () {
    this.animation = wx.createAnimation({
      duration: 1,
      timingFunction: "step-start",
    })
    this.animation.opacity(0).step()
    return this.animation
  },

  /**
   * 淡入显示
   */
  expShow: function (time, delay) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "linear",
      delay: delay
    })
    this.animation.opacity(1).step()
    return this.animation
  },

  exp: function (time, alpha) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "linear",
    })
    this.animation.opacity(alpha).step()
    return this.animation
  },
}

module.exports = anim_exp