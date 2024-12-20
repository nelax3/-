 /*轮播图*/
 let items = document.querySelectorAll('.item');
 let current = 0;
 function showSlide() {
     items.forEach(item => {
         item.style.transform = `translateX(-${current * 100}%)`;
     });
     updateDots();
 }
 function prevSlide() {
     if (current > 0) {
         current--;
     } else {
         current = items.length - 1;
     }
     showSlide();
 }
 function nextSlide() {
     if (current < items.length - 1) {
         current++;
     } else {
         current = 0;
     }
     showSlide();
 }
 let timer = setInterval(nextSlide, 1500);
 function pauseTimer() {
     clearInterval(timer);
 }
 function resumeTimer() {
     timer = setInterval(nextSlide, 1500);
 }
 document.getElementById('carousel').addEventListener('mouseover', pauseTimer);
 document.getElementById('carousel').addEventListener('mouseout', resumeTimer);
 let dots = document.querySelectorAll('.dots li'); 
 function updateDots() {
     dots.forEach(dot => {
         dot.classList.remove('active');
     });
     dots[current].classList.add('active');
 }
 function jumpToSlide(index) {
     current = index;
     showSlide();
     updateDots();
 }
 /*意见征集*/
 window.onload = function () {
       //获取元素
       var div1 = document.getElementById("div1");
       var w = document.documentElement.clientWidth;
       var h = document.documentElement.clientHeight;
       var gox = 1;
       var goy = 1;
       //广告漂浮
       function move() {
         var x = div1.offsetLeft;
         var y = div1.offsetTop;
         if (x > w - 300 || x < 0) gox = -gox;
         div1.style.left = x + 10 * gox + "px";
         if (y > h - 300 || y < 0) goy = -gox
         div1.style.top = y + 10 * goy + "px";
       }
       //漂浮定时器
       var timer = setInterval(move, 200);
       //移入移出时广告的浮动
       div1.onmouseover = function () {
         clearInterval(timer);
       };
       div1.onmouseout = function () {
         timer = setInterval(move, 200);
       };
       //点击一次跳转到另一个页面，点击两次广告消失
       ad.onclick = function () {
         var neww = window.open("_blank");
         neww.location = "http://www.12380.gov.cn/";
       };
     };
     function closeAd() {
       var div1 = document.getElementById("div1");
       div1.style.display = "none";
     }
 /*时间*/
 function getTime() {
     var date = new Date();
     // 年、月、日
     var year = date.getFullYear();
     var month = date.getMonth() + 1;
     var day = date.getDate();
     // 时、分、秒
     var hour = date.getHours();
     var minute = date.getMinutes();
     var second = date.getSeconds();
     // 实时显示
     var element = document.getElementById('time-top');
     element.innerHTML = '<h1>' + year + '-' + month + '-' + day + ' ' + hour + ':' + minute + ':' + second;
 }
 setInterval('getTime()', 1000);