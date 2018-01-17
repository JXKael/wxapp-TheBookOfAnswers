function anim_sun_cloud() {
  this.initXPos = -40
  this.initYPos = 40
}

anim_sun_cloud.prototype = {

  /**
   * 初始位置
   */
  initial: function (isRight) {
    this.animation = wx.createAnimation({
      duration: 1,
      timingFunction: "step-start",
    })
    this.animation.translate(isRight ? this.initXPos : -this.initXPos, this.initYPos).scale(0.5).opacity(0).step()
    return this.animation
  },

  /**
   * 左右移动缩放飘出
   */
  move: function (time) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "linear",
    })
    this.animation.translate(0).scale(1).opacity(1).step()
    return this.animation
  },

  /**
   * 打断后回到初始位置
   */
  interrupt: function (time, isRight) {
    this.animation = wx.createAnimation({
      duration: time,
      timingFunction: "linear",
    })
    this.animation.translate(isRight ? this.initXPos : -this.initXPos, this.initYPos).scale(0.5).opacity(0).step()
    return this.animation
  }
}

module.exports = anim_sun_cloud