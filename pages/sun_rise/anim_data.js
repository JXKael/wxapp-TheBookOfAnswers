function anim_data() {
  /* tutorial 单条文本淡入淡出时间 */
  this.tutorialTime = 1200
  /* tutorial 每条延迟 */
  this.tutorialDelay = 400
  /* 第一个延迟参数, delay / para */
  this.tutorialPara = 1

  /* 长按时间 */
  this.pressDuration = 1500
  /* 长按后缓冲时间 */
  this.afterPress = 500
  /* A文本出现时间 */
  this.contentDuration = 1000
  /* A文本与B文本间隔 */
  this.contentInteral = 500
  /* B文本出现时间 */
  this.subContentDuration =  1500
}

anim_data.prototype = {
  tutorialDuration: function() {
    return this.tutorialDelay / this.tutorialPara + this.tutorialTime + 2 * this.tutorialDelay
  }
}

module.exports = anim_data