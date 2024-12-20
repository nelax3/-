/*模糊搜索*/
var arr = ["和音：开启中巴关系下一个“黄金五十年","第二届中国期刊高质量发展论坛在长沙举办","黄晓春-为党建引领基层治理提供社会学支撑","我国新能源电池回收利用产业成熟度不断提升","江西全南：培育特色产业 激活乡村活力","江西：推进社会化服务 助力农民增收国","2024年出版学科专业共建工作交流会在京召开","习近平会见马来西亚总理安瓦尔牙","习近平参观秦汉简牍：善加保护，做好研究","北京延庆：野鸭湖成“候鸟天堂”","广东惠州大亚湾为贵州黔西南州捐赠御寒物资伯","印河南三门峡：家门口看专家号 群众看病有“医”靠","贵州：“企业之家”激活民营经济内生动力"];
var search = document.getElementsByClassName("blue-input")[0];
var selectedId = document.getElementById("selectedId")

function showList(){
    var res = searchByIndexOf(search.value,arr);
    for(var i=0;i<res.length;i++){
        var li = document.createElement("li");
        li.innerHTML = res[i];
        document.getElementById("drop").appendChild(li);
    }
}

search.oninput = function getMoreContents() {	
    //删除ul
    var drop = document.getElementById("drop");
    selectedId.removeChild(drop);
    //把ul添加回来
    var originalUl = document.createElement("ul");
    originalUl.id = "drop";
    selectedId.appendChild(originalUl);
    
    showList();
}
// 添加获取焦点事件
search.onfocus = function(){
        // 初始下拉列表
        var originalUl = document.createElement("ul");
        originalUl.id = "drop";
        selectedId.appendChild(originalUl);
    showList();
}
//添加失去焦点事件
search.onblur = function(){
//	console.log("soutsout")
    var drop = document.getElementById("drop");
    selectedId.removeChild(drop);
}
//模糊查询:利用字符串的indexOf方法
function searchByIndexOf(keyWord, list){
    if(!(list instanceof Array)){
        return ;
    }
    if(keyWord == ""){
        return [];
    }else{
        var len = list.length;
        var arr = [];
        for(var i=0;i<len;i++){
            //如果字符串中不包含目标字符会返回-1
            if(list[i].indexOf(keyWord)>=0){
                arr.push(list[i]);
            }
        }
        return arr;
    }
    
}