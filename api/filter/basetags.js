/**
 * NAME 2016/8/8
 * DATE 2016/8/8
 * AUTHOR shangxinbo
 */
var Mock = require('mockjs');
var Random = Mock.Random;
module.exports = function (req, res) {
    var data = {
        "area": {
            "label": "地域",
            "rows": [
                {"code": 30001, "val": "未知"}, {"code": 30002, "val": "北京市"}, {
                    "code": 30003,
                    "val": "天津市"
                }, {"code": 30004, "val": "河北省"}, {"code": 30005, "val": "山西省"}, {
                    "code": 30006,
                    "val": "内蒙古自治区"
                }, {"code": 30007, "val": "辽宁省"}, {"code": 30008, "val": "吉林省"}, {
                    "code": 30009,
                    "val": "黑龙江省"
                }, {"code": 30010, "val": "上海市"}, {"code": 30011, "val": "江苏省"}, {
                    "code": 30012,
                    "val": "浙江省"
                }, {"code": 30013, "val": "安徽省"}, {"code": 30014, "val": "福建省"}, {
                    "code": 30015,
                    "val": "江西省"
                }, {"code": 30016, "val": "山东省"}, {"code": 30017, "val": "河南省"}, {
                    "code": 30018,
                    "val": "湖北省"
                }, {"code": 30019, "val": "湖南省"}, {"code": 30020, "val": "广东省"}, {
                    "code": 30021,
                    "val": "广西壮族自治区"
                }, {"code": 30022, "val": "海南省"}, {"code": 30023, "val": "重庆市"}, {
                    "code": 30024,
                    "val": "四川省"
                }, {"code": 30025, "val": "贵州省"}, {"code": 30026, "val": "云南省"}, {
                    "code": 30027,
                    "val": "西藏自治区"
                }, {"code": 30028, "val": "陕西省"}, {"code": 30029, "val": "甘肃省"}, {
                    "code": 30030,
                    "val": "青海省"
                }, {"code": 30031, "val": "宁夏回族自治区"}, {"code": 30032, "val": "新疆维吾尔自治区"}, {
                    "code": 30033,
                    "val": "台湾省"
                }, {"code": 30034, "val": "香港特别行政区"}, {"code": 30035, "val": "澳门特别行政区"}
            ]
        },
        "interest": {
            "label": "兴趣偏好",
            "rows": [
                {"code": 101, "val": "电商"}, {"code": 102, "val": "旅游"}, {"code": 104, "val": "运动健身"}, {
                    "code": 105,
                    "val": "外卖团购"
                }, {"code": 106, "val": "汽车"}, {"code": 107, "val": "新闻"}, {"code": 108, "val": "财经"}, {
                    "code": 109,
                    "val": "娱乐"
                }, {"code": 110, "val": "体育"}, {"code": 111, "val": "时尚"}, {"code": 112, "val": "奢侈品"}, {
                    "code": 113,
                    "val": "彩票"
                }, {"code": 114, "val": "电子银行"}, {"code": 115, "val": "餐饮美食"}, {"code": 116, "val": "影音"}, {
                    "code": 117,
                    "val": "阅读"
                }, {"code": 118, "val": "社交社区"}, {"code": 201, "val": "母婴亲子"}, {"code": 202, "val": "教育培训"}, {
                    "code": 203,
                    "val": "房产家居"
                }, {"code": 204, "val": "保健医疗"}, {"code": 205, "val": "数码家电"}, {
                    "code": 206,
                    "val": "信用卡"
                }, {"code": 2070208, "val": "理财"}, {"code": 209, "val": "基金"}, {"code": 210, "val": "贵金属"}, {
                    "code": 211,
                    "val": "股票"
                }, {"code": 212, "val": "期货"}, {"code": 213, "val": "贷款"}, {"code": 214, "val": "保险"}, {
                    "code": 215,
                    "val": "外汇"
                }
            ]
        },
        "sex": {
            "label": "性别",
            "rows": [{"code": 10000, "val": "未知"}, {"code": 10001, "val": "男"}, {"code": 10002, "val": "女"}]
        },
        "mobile": {
            "label": "终端品牌",
            "rows": [{"code": 410001000000000000, "val": "苹果"}, {
                "code": 410002000000000000,
                "val": "小米"
            }, {"code": 410003000000000000, "val": "三星"}, {
                "code": 410004000000000000,
                "val": "华为"
            }, {"code": 410005000000000000, "val": "OPPO"}, {
                "code": 410006000000000000,
                "val": "联想"
            }, {"code": 410007000000000000, "val": "酷派"}, {
                "code": 410008000000000000,
                "val": "中兴"
            }, {"code": 410009000000000000, "val": "LG"}, {
                "code": 410010000000000000,
                "val": "vivo"
            }, {"code": 410011000000000000, "val": "HTC"}, {
                "code": 410012000000000000,
                "val": "诺基亚"
            }, {"code": 410013000000000000, "val": "索尼"}, {
                "code": 410014000000000000,
                "val": "金立"
            }, {"code": 410015000000000000, "val": "酷比"}, {
                "code": 410016000000000000,
                "val": "魅族"
            }, {"code": 410017000000000000, "val": "摩托罗拉"}, {
                "code": 410018000000000000,
                "val": "天语"
            }, {"code": 410020000000000000, "val": "诺亚信"}, {
                "code": 410021000000000000,
                "val": "TCL"
            }, {"code": 410022000000000000, "val": "波导"}, {
                "code": 410023000000000000,
                "val": "朵唯"
            }, {"code": 410024000000000000, "val": "泛泰"}]
        },
        "age": {
            "label": "年龄段",
            "rows": [{"code": 20000, "val": "未知"}, {"code": 20001, "val": "0-18"}, {
                "code": 20002,
                "val": "19-24"
            }, {"code": 20003, "val": "25-34"}, {"code": 20004, "val": "35-49"}, {"code": 20005, "val": "50-120"}]
        }
    };
    return Mock.mock(data);
}