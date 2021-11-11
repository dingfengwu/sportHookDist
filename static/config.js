var config = {
	title: "KK体育",
	lang: "zh-CN",
	merchant: "sport",
	scalePrizeGroup: 10, //创建开户链接时，奖金组小于自己的点数
	defaultTheme: "ora",
	refreshMatchSpan: 60, //刷新比赛详情的间隔
	handleFee: 0.05, //中奖将扣减的手续费
	defaultFastAmount: [100, 200, 500],
	startDSTTime: "2021-10-01", //开始使用夏时令时时间(UTC时间)
	stopDSTTime: "2021-12-01", //停止使用夏时令的时间(UTC时间)
	intervalDST: 1, //执行夏冬时令的间隔
	defaultPassword: "aa123456", //手工开户时的默认密码
	forceUpdatePassword: false, //TODO 如果使用的是默认密码，强制修改密码
	appUrl: "",//挂机APP的下载地址,含IOS与ANDROID
};

//合并merchant.js配置到当前配置
if (window.$sMerchant !== undefined) {
	config.merchant = $sMerchant;
	config.lang = $lang;
	config.title = $aSiteNames[config.lang];
	config.defaultTheme = $sTheme.substr(6);
}
