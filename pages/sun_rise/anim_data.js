function anim_data() {
  /* tutorial 单条文本淡入淡出时间 */
  this.tutorialTime = 1200
  /* tutorial 每条延迟 */
  this.tutorialDelay = 400
  /* 第一个延迟参数, delay / para */
  this.tutorialPara = 1
  /* 圆圈淡入时间 */
  this.circleFadeIn = 1000
  /* 圆圈扩大时间 */
  this.circleLineDuration = 800
  /* 圆圈扩大间隔 */
  this.circleLineInterval = 3500

  /* 长按时间 */
  this.pressDuration = 1500
  /* 长按后缓冲时间 */
  this.afterPress = 500
  /* A文本出现时间 */
  this.contentDuration = 1000
  /* 出处文本间隔 */
  this.contentInteral = 500
  /* 出处文本出现时间 */
  this.subContentDuration =  1000
  /* B文本出现时间 */
  this.expDuration = 1000

  /* 上方云朵飘动时间 */
  this.cloudFloat = 5000

  /* B文本CSS transition */
  this.tran_exp_show = "exp-show"

  /* 保存按钮CSS transition */
  this.tran_save_btn_show = "save-btn-show"
}

anim_data.prototype = {
  tutorialDuration: function() {
    return this.tutorialDelay / this.tutorialPara + this.tutorialTime + 2 * this.tutorialDelay
  },
}

module.exports = anim_data