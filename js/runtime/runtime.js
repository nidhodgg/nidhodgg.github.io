var now = new Date();
function createtime() {
  var grt = new Date("01/01/2023 00:00:00");
  now.setTime(now.getTime() + 250);
  var days = (now - grt) / 1e3 / 60 / 60 / 24,
    dnum = Math.floor(days),
    hours = (now - grt) / 1e3 / 60 / 60 - 24 * dnum,
    hnum = Math.floor(hours);
  1 == String(hnum).length && (hnum = "0" + hnum);
  var minutes = (now - grt) / 1e3 / 60 - 1440 * dnum - 60 * hnum,
    mnum = Math.floor(minutes);
  1 == String(mnum).length && (mnum = "0" + mnum);
  var seconds = (now - grt) / 1e3 - 86400 * dnum - 3600 * hnum - 60 * mnum,
    snum = Math.round(seconds);
  1 == String(snum).length && (snum = "0" + snum);
  let currentTimeHtml = "";
  (currentTimeHtml =
    hnum < 18 && hnum >= 9
      ? `<img class='boardsign' src='https://img.shields.io/badge/Nidhog-%E5%AD%A6%E4%B9%A0%E4%B8%AD-Hex
      ' title='距离月入25k也就还差一个大佬带我~'><span class='textTip'> <br> 本站运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`
      : `<img class='boardsign' src='https://img.shields.io/badge/NIdhog-%E4%BC%91%E6%81%AF%E4%B8%AD-bule
      ' title='下班了就该开开心心的玩耍'><span class='textTip'> <br> 本站运行了 ${dnum} 天</span><span id='runtime'> ${hnum} 小时 ${mnum} 分 ${snum} 秒 </span> <i class='fas fa-heartbeat' style='color:red'></i>`),
    document.getElementById("workboard") && (document.getElementById("workboard").innerHTML = currentTimeHtml);
}
setInterval(() => {
  createtime();
}, 250);