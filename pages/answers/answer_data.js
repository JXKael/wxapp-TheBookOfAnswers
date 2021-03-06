function answer_data() {
  this.defaultContent = ""
  this.defaultSubContent = ""
  this.tutorialTxt = ["默想一个问题", "比如\n明天会顺利吗？\n接下来我该怎么办？\n到底要不要告诉她？", "长按圆圈\n\n太阳升起\n\n它会给你一个答案"]
  this.answers = [
    { content: "寤寐思服，辗转反侧", subContent: "改自：《诗经·关雎》", exp: "求之不得..." },
    { content: "桃之夭夭，灼灼其华", subContent: "取自：《诗经·桃夭》", exp: "红红火火..." },
    { content: "汉有游女，不可求思", subContent: "取自：《诗经·汉广》", exp: "可望不可即..." },
    { content: "鹊有巢，鸠居之", subContent: "取自：《诗经·鹊巢》", exp: "化被动为主动..." },
    { content: "摽有梅，其实三兮", subContent: "取自：《诗经·摽有梅》", exp: "剩下的不多了..." },
    { content: "契阔，与子成说", subContent: "取自：《诗经·击鼓》", exp: "尝试表达出来..." },
    { content: "巧笑倩兮", subContent: "取自：《诗经·硕人》", exp: "别忘记微笑..." },
    { content: "无耽", subContent: "改自：《诗经·氓》", exp: "别沉溺..." },
    { content: "洵美且好", subContent: "改自：《诗经·叔于田》", exp: "完美..." },
    { content: "青青子衿，悠悠我心", subContent: "取自：《诗经·子衿》", exp: "那是自己的心思..." },
    { content: "宛在水中央", subContent: "取自：《诗经·蒹葭》", exp: "只可远观..." },
    { content: "七月流火", subContent: "取自：《诗经·七月》", exp: "照顾好自己..." },
    { content: "维常之花", subContent: "改自：《诗经·采薇》", exp: "好兄弟..." },

    { content: "毋自辱", subContent: "取自：《论语·颜渊》", exp: "别自讨没趣..." },
    { content: "知之为知之", subContent: "取自：《论语·为政》", exp: "不必刻意隐瞒..." },
    { content: "欲速则不达", subContent: "取自：《论语·子路》", exp: "没事，慢慢来..." },
    { content: "思无邪", subContent: "取自：《论语·为政》", exp: "这是一个肯定..." },
    { content: "行有余力", subContent: "取自：《论语·学而》", exp: "如果还有多余精力的话..." },
    { content: "和为贵", subContent: "取自：《论语·学而》", exp: "和谐得当..." },
    { content: "智者不惑", subContent: "取自：《论语·子罕》", exp: "让自己变得更好..." },
    { content: "弃之", subContent: "取自：《论语·子路》", exp: "扔掉它..." },
    { content: "从心所欲", subContent: "取自：《论语·为政》", exp: "服从自己的内心..." },
    { content: "任重而道远", subContent: "取自：《论语·泰伯》", exp: "长路漫漫..." },
    { content: "寡悔", subContent: "取自：《论语·为政》", exp: "少点后悔..." },
    { content: "不孤，必有邻", subContent: "取自：《论语·里仁》", exp: "必有佳人相伴..." },
    { content: "如浮云", subContent: "取自：《论语·述而》", exp: "那都不是事儿..." },
    { content: "非礼勿言", subContent: "取自：《论语·颜渊》", exp: "慎言..." },
    { content: "无倦", subContent: "取自：《论语·子路》", exp: "不要懈怠..." },
    { content: "不谋其政", subContent: "取自：《论语·宪问》", exp: "做好自己分内之事..." },
    { content: "当仁不让", subContent: "取自：《论语·卫灵公》", exp: "该出手了..." },
    { content: "鸟兽不可与同群", subContent: "取自：《论语·微子》", exp: "不是一路人..." },

    { content: "独善其身", subContent: "取自：《孟子·尽心章句上》", exp: "善待自己..." },
    { content: "何必曰利", subContent: "取自：《孟子·梁惠王章句上》", exp: "无用也没关系..." },
    { content: "同乐", subContent: "取自：《孟子·梁惠王章句下》", exp: "一起嗨..." },
    { content: "养浩然之气", subContent: "改自：《孟子·公孙丑章句上》", exp: "身正影不歪..." },
    { content: "地利不如人和", subContent: "取自：《孟子·公孙丑章句下》", exp: "快乐来自良好的人际关系..." },
    { content: "得道多助", subContent: "取自：《孟子·公孙丑章句下》", exp: "得到大多数的支持..." },
    { content: "鱼和熊掌不可得兼", subContent: "改自：《孟子·告子章句上》", exp: "抉择..." },
    { content: "天降大任", subContent: "改自：《孟子·告子章句下》", exp: "加油干..." },
    { content: "生于忧患", subContent: "取自：《孟子·告子章句下》", exp: "提前预防一下..." },
    { content: "养心则寡欲", subContent: "改自：《孟子·尽心章句下》", exp: "别太复杂..." },


    { content: "忘是非，心之适", subContent: "取自：《庄子·达生》", exp: "不如忘掉这个问题..." },
    { content: "春秋冬夏，四时行", subContent: "取自：《庄子·至乐》", exp: "步步从容..." },
    { content: "有涯", subContent: "取自：《庄子·养生主》", exp: "总有个尽头..." },
    { content: "辩荣辱之境", subContent: "改自：《庄子·逍遥游》", exp: "身外之物..." },
    { content: "依天理", subContent: "改自：《庄子·养生主》", exp: "上天自有安排..." },
    { content: "不如相忘于江湖", subContent: "取自：《庄子·大宗师》", exp: "逍遥..." },

    { content: "自知者明", subContent: "取自：《道德经·第三十三章》", exp: "跟自己交个朋友..." },
    { content: "自胜者强", subContent: "取自：《道德经·第三十三章》", exp: "战胜自己..." },
    { content: "涣兮，若冰之将释", subContent: "取自：《道德经·第十五章》", exp: "不必耿耿于怀..." },
    { content: "大象无形", subContent: "取自：《道德经·第四十一章》", exp: "看见的都不是真的..." },
    { content: "千里之行，始于足下", subContent: "取自：《道德经·第六十四章》", exp: "这是起跑线..." },
    { content: "大，作于细", subContent: "改自：《道德经·第六十三章》", exp: "复杂的事情简单做..." },

    { content: "知彼知己", subContent: "改自：《孙子·谋攻篇》", exp: "多了解了解..." },
    { content: "同欲", subContent: "改自：《孙子·谋攻篇》", exp: "也是这么想的..." },

    { content: "千里之堤，毁于蚁穴", subContent: "改自：《韩非子·喻老》", exp: "别忽略小问题..." },

    { content: "流水不腐", subContent: "改自：《吕氏春秋》", exp: "动起来..." },

    { content: "一鼓作气", subContent: "取自：《左传·庄公十年》", exp: "出发..." },
    { content: "多行不义必自毙", subContent: "取自：《左传·隐公元年》", exp: "坦坦荡荡..." },
    { content: "未能远谋", subContent: "取自：《左传·庄公十年》", exp: "看得更远一些..." },
    { content: "川溃，伤人必多", subContent: "取自：《国语·卷一》", exp: "疏通..." },
    { content: "亡羊补牢，未为迟也", subContent: "取自：《战国策·楚策四》", exp: "及时补救..." },
    { content: "之南，奚为北行", subContent: "改自：《战国策·魏策四》", exp: "背道而驰..." },
    { content: "前事之不忘后事之师", subContent: "改自：《战国策·赵策一》", exp: "吸取教训..." },
    { content: "行百里者半九十", subContent: "改自：《战国策·秦策五》", exp: "越后面越难..." },

    { content: "猛虎之犹豫，不若蜂之螫", subContent: "改自：《史记·淮阴侯列传》", exp: "不要再犹豫了..." },
    { content: "抱薪救火", subContent: "取自：《史记·魏世家》", exp: "越弄越糟..." },
    { content: "虽不能至，心向往之", subContent: "改自：《史记·孔子世家》", exp: "那是心的方向..." },
    { content: "桃李不言，下自成蹊", subContent: "改自：《史记·李将军列传》", exp: "自有公论..." },
    { content: "智者有一失，愚者有一得", subContent: "改自：《史记·淮阴侯列传》", exp: "简单点..." },
    { content: "当断不断，反受其乱", subContent: "改自：《史记·齐悼惠王世家》", exp: "斩乱麻..." },
    { content: "岂不谬哉", subContent: "取自：《史记·项羽本纪》", exp: "荒唐..." },
    { content: "大风起兮云飞扬", subContent: "取自：《史记·高祖本纪》", exp: "风云起..." },
    { content: "无戏言", subContent: "取自：《史记·晋世家》", exp: "少开点笑话..." },
    { content: "无相忘", subContent: "取自：《史记·陈涉世家》", exp: "别忘得太快..." },

    { content: "何陋之有", subContent: "取自：《陋室铭》", exp: "心安理得..." },
    { content: "葡萄美酒夜光杯", subContent: "取自：《凉州词》", exp: "值得来一杯..." },
    { content: "定不负相思意", subContent: "取自：《卜算子·我住长江头》", exp: "不辜负..." },
    { content: "效穷途之哭", subContent: "取自：《滕王阁序》", exp: "试着哭一场..." },
    { content: "金缕衣和少年时", subContent: "改自：《金缕衣》", exp: "趁着还有机会..." },
    { content: "多情应笑我", subContent: "取自：《念奴娇·赤壁怀古》", exp: "别人看来都不是事儿..." },
    { content: "春风吹又生", subContent: "取自：《赋得古原草送别》", exp: "萌芽..." },
    { content: "盈盈一水间，脉脉不得语", subContent: "取自：《迢迢牵牛星》", exp: "不需要表达出来..." },
    { content: "柳暗花明又一村", subContent: "取自：《游山西村》", exp: "事情会有转机..." },
    { content: "使我不得开心颜", subContent: "取自：《梦游天咾呤留别》", exp: "会有痛苦..." },
    { content: "东方既白", subContent: "改自：《赤壁赋》", exp: "下一个天亮..." },
    { content: "浮生若梦，为欢几何", subContent: "取自：《春夜宴从弟桃花园序》", exp: "岁月静好..." },
    { content: "李广难封", subContent: "取自：《滕王阁序》", exp: "这就是命..." },
    { content: "常在于险远", subContent: "取自：《游褒禅山记》", exp: "会有一些挑战..." },
    { content: "此情无计可消除", subContent: "取自：《一剪梅·红藕香残玉簟秋》", exp: "无解..." },
    { content: "过尽千帆皆不是", subContent: "取自：《望江南·梳洗罢》", exp: "这些都不是答案..." },
    { content: "只缘身在此山中", subContent: "取自：《题西林壁》", exp: "当局者迷..." },
    { content: "望尽天涯路", subContent: "取自：《蝶恋花·槛菊愁烟兰泣露》", exp: "一直走下去..." },
    { content: "路转溪桥忽见", subContent: "取自：《西江月·夜行黄沙道中》", exp: "转角处遇到..." },
    { content: "莫待无花空折枝", subContent: "取自：《金缕衣》", exp: "早点开始..." },
    { content: "只有香如故", subContent: "取自：《卜算子·咏梅》", exp: "自我欣赏..." },
    { content: "赢得生前身后名", subContent: "取自：《破阵子·为陈同甫赋壮词以寄之》", exp: "平平安安..." },
    { content: "迷途未远", subContent: "改自：《归去来兮辞》", exp: "别一条道走到黑..." },
    { content: "尽是他乡之客", subContent: "取自：《滕王阁序》", exp: "回家..." },
    { content: "不宜妄自菲薄", subContent: "取自：《出师表》", exp: "别小看了自己..." },
    { content: "非有志者不能至", subContent: "取自：《游褒禅山记》", exp: "这需要点毅力..." },
    { content: "恰似一江春水向东流", subContent: "取自：《虞美人·春花秋月何时了》", exp: "细水长流..." },
    { content: "不以物喜，不以己悲", subContent: "改自：《岳阳楼记》", exp: "物是物，我是我..." },
    { content: "放浪形骸之外", subContent: "取自：《兰亭集序》", exp: "放纵一下..." },
    { content: "忽逢桃花林", subContent: "取自：《桃花源记》", exp: "意外的惊喜..." },
    { content: "不求甚解", subContent: "取自：《五柳先生传》", exp: "别太较真..." },
    { content: "不坠青云之志", subContent: "取自：《滕王阁序》", exp: "坚定..." },
    { content: "哀之而鉴之", subContent: "改自：《阿房宫赋》", exp: "回头想想..." },
    { content: "千里马常有而伯乐不常有", subContent: "取自：《马说》", exp: "得不到认可..." },
    { content: "人非生而知之", subContent: "改自：《师说》", exp: "不断充电..." },
    { content: "精，于勤", subContent: "改自：《进学解》", exp: "勤勉..." },
    { content: "虽爱之，实害之", subContent: "改自：《种树郭橐驼传》", exp: "有时候，爱也是一种伤害..." },
    { content: "波澜不惊", subContent: "取自：《岳阳楼记》", exp: "心态平和..." },
    { content: "心旷神怡，宠辱偕忘", subContent: "取自：《岳阳楼记》", exp: "享受..." },
    { content: "祸患，常积于忽微", subContent: "改自：《伶官传序》", exp: "注意细节..." },
    { content: "醉翁之意不在酒", subContent: "取自：《醉翁亭记》", exp: "山水之乐..." },
    { content: "遗世独立，羽化登仙", subContent: "改自：《赤壁赋》", exp: "丰富的精神世界..." },
    { content: "寄蜉蝣于天地", subContent: "取自：《赤壁赋》", exp: "苦短..." },
    { content: "物各有主", subContent: "取自：《赤壁赋》", exp: "不是自己的东西..." },
    { content: "那是离人泪", subContent: "取自：《水龙吟·次韵章质夫杨花词》", exp: "伤感..." },
    { content: "生当作人杰", subContent: "取自：《夏日绝句》", exp: "活出自己的样子..." },
    { content: "为伊消得人憔悴", subContent: "取自：《蝶恋花·伫倚危楼风细细》", exp: "欲罢不能..." },
    { content: "剪不断，理还乱", subContent: "取自：《相见欢·无言独上西楼》", exp: "放空..." },
    { content: "好梦留人睡", subContent: "取自：《苏幕遮·碧云天》", exp: "睡一觉会更好..." },
    { content: "老夫聊发少年狂", subContent: "取自：《江城子·密州出猎》", exp: "老当益壮..." },
    { content: "寂寞沙洲冷", subContent: "取自：《卜算子·缺月挂疏桐》", exp: "寒..." },
    { content: "惟有泪千行", subContent: "取自：《江城子·乙卯正月二十日夜记梦》", exp: "泪流满面..." },
    { content: "如今俱是异乡人", subContent: "取自：《荷叶杯·记得那年花下》", exp: "无缘..." },
    { content: "为有暗香来", subContent: "取自：《梅花》", exp: "低调之光..." },
    { content: "总把新桃换旧符", subContent: "取自：《元日》", exp: "吐故纳新..." },
    { content: "相逢是梦中", subContent: "取自：《鹧鸪天·彩袖殷勤捧玉钟》", exp: "缱绻..." },
    { content: "淡妆浓抹总相宜", subContent: "取自：《饮湖上初晴后雨二首》", exp: "都可以..." },
    { content: "也无风雨也无晴", subContent: "取自：《定风波·三月七日》", exp: "豁达..." },
    { content: "天涯何处无芳草", subContent: "取自：《蝶恋花·花褪残红青杏小》", exp: "在远方..." },
    { content: "腹有诗书气自华", subContent: "取自：《和董传留别》", exp: "气质..." },
    { content: "又岂在朝朝暮暮", subContent: "取自：《鹊桥仙·纤云弄巧》", exp: "来日方长..." },
    { content: "物是人非事事休", subContent: "取自：《武陵春·春晚》", exp: "怀念..." },
    { content: "世味薄似纱", subContent: "改自：《临安春雨初霁》", exp: "一双冷眼..." },
    { content: "此事古难全", subContent: "取自：《水调歌头·明月几时有》", exp: "不必追求完美..." },
    { content: "为有源头活水来", subContent: "取自：《观书有感》", exp: "源源不断..." },
    { content: "莫等闲，白了少年头", subContent: "取自：《满江红·写怀》", exp: "光阴不再..." },
    { content: "能饮一杯无", subContent: "取自：《问刘十九》", exp: "约朋友喝一杯..." },
    { content: "润物细无声", subContent: "取自：《春夜喜雨》", exp: "改变在悄悄发生..." },
    { content: "一岁一枯荣", subContent: "取自：《赋得古原草送别》", exp: "再生..." },
    { content: "门始为君开", subContent: "取自：《客至》", exp: "迎接..." },
    { content: "海内存知己", subContent: "取自：《送杜少府之任蜀州》", exp: "知音..." },
    { content: "更尽一杯酒", subContent: "取自：《送元二使安西》", exp: "酣畅..." },
    { content: "青春作伴好还乡", subContent: "取自：《闻官军收河南河北》", exp: "回家的路..." },
    { content: "天下谁人不识君", subContent: "取自：《别董大》", exp: "存知己..." },
    { content: "天生我材必有用", subContent: "取自：《将进酒·君不见》", exp: "自信一点..." },
    { content: "徒劳恨费声", subContent: "取自：《蝉》", exp: "无用功..." },
    { content: "幽人应未眠", subContent: "取自：《秋夜寄邱员外》", exp: "还在等待..." },
    { content: "坐观垂钓者", subContent: "取自：《望洞庭湖赠张丞相》", exp: "羡慕..." },
    { content: "何处春江无月明", subContent: "取自：《春江花月夜》", exp: "无处不在..." },
    { content: "此心安处是吾乡", subContent: "取自：《定风波·常羡人间琢玉郎》", exp: "勿忘心安..." },
    { content: "一曲红绡不知数", subContent: "取自：《琵琶行》", exp: "终归平淡..." }

  ]
}

answer_data.prototype={

  getAnswerByIndex: function (index) {
    return this.answers[index]
  },

  getAnswerLength: function () {
    return this.answers.length
  },

  getDefaultContent: function () {
    return this.defaultContent
  },

  getDefaultSubContent: function () {
    return this.defaultSubContent
  },

  getDefaultExp: function () {
    return ""
  },

  getTutorialTxt: function () {
    return this.tutorialTxt
  },
}

module.exports = answer_data