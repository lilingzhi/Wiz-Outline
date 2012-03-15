var strCheckStatusDefault = "111111"
//
var WizExplorerApp = window.external;
//
var objApp = WizExplorerApp;
var objWindow = objApp.Window;
var objHtmlDocument = objWindow.CurrentDocumentHtmlDocument;
//
var pluginPath = objApp.GetPluginPathByScriptFileName("Outline.js");
var languangeFileName = pluginPath + "plugin.ini";
//
var htmlText = "";
var htmlTextLink = "";
//
btnInsertContentToDoc.value = objApp.LoadStringFromFile(languangeFileName, "strBtnInsertContent");
btnDeleteContentToDoc.value = objApp.LoadStringFromFile(languangeFileName, "strBtnDeleteContent");
btnInsertBookmarkToDoc.value = objApp.LoadStringFromFile(languangeFileName, "strBtnInsertBookmark");
btnDeleteBookmarkToDoc.value = objApp.LoadStringFromFile(languangeFileName, "strBtnDeleteBookmark");
btnInsertOutlineToDoc.value = objApp.LoadStringFromFile(languangeFileName, "strBtnInsertOutline");
btnDeleteOutlineToDoc.value = objApp.LoadStringFromFile(languangeFileName, "strBtnDeleteOutline");
////
var objCheckboxContent = document.getElementById("chkContent");
var objCheckboxBookmark = document.getElementById("chkBookmark");
var objCheckboxWiki = document.getElementById("chkWiki");
var objCheckboxH16 = document.getElementById("chkH16");
var objCheckboxBold = document.getElementById("chkBold");
////
var objAPageTop = objHtmlDocument.getElementById("KMContentPageTopID");
////
var listContent = [];
var listBookmark = [];
var listWiki = [];
var listH16 = [];
var listBold = [];
////
////==========================================================================================================================
////添加大纲
Initial();
//
function Initial() {
	if (!objAPageTop || !objAPageTop.KMCheckStatus) { var strCheckStatus = strCheckStatusDefault; }
	else {var strCheckStatus = objAPageTop.KMCheckStatus; }
	objCheckboxContent.setAttribute("checked", getCheckStatus(strCheckStatus.substr(0,1),1));
	objCheckboxBookmark.setAttribute("checked", getCheckStatus(strCheckStatus.substr(1,1),1));
	objCheckboxWiki.setAttribute("checked", getCheckStatus(strCheckStatus.substr(2,1),1));
	objCheckboxH16.setAttribute("checked", getCheckStatus(strCheckStatus.substr(3,1),1));
	objCheckboxBold.setAttribute("checked", getCheckStatus(strCheckStatus.substr(4,1),1));
	//
	GetAndPrintContent();
	GetAndPrintBookmark();
	GetAndPrintWiki();
	GetAndPrintH16();
	GetAndPrintBold();
}
////
////==========================================================================================================================
////
//
function GetContent() {
	// 添加目录形式【KMContentClass=1~5】的大纲
	listContent = [];
<<<<<<< HEAD
=======
	var objAs = objHtmlDocument.getElementsByTagName("A");
	for (var i = 0; i < objAs.length; i++) {
		var elem = objAs[i];
		var id = elem.id;
		var iClass = parseInt(elem.KMContentClass);
		var name = elem.name;
		if (iClass) { listContent.push(elem); }
	}
	// H1~H6
	for (var k = 1; k <= 6; k++){
		var objH16 = objHtmlDocument.getElementsByTagName("H"+k);
		for (var i = 0; i < objH16.length; i++) {
			var elem = objH16[i];
			var text = elem.innerText;
			var iClass = parseInt(elem.KMContentClass);
			if (iClass && text != null && text != "") { 
				listContent.push(elem); 
			}
		}
	}
	// Wiki
	var objWiki = objHtmlDocument.getElementsByTagName("DIV");
	for (var i = 0; i < objWiki.length; i++) {
		var elem = objWiki[i];
		var text = elem.innerText;
		var iClass = parseInt(elem.KMContentClass);
		if  (iClass && text != null && text != "" && text.search(/^=[^<>]+=$/) > -1) { 
			listContent.push(elem); 
		}
	}
	// Bold
	var objBold = objHtmlDocument.getElementsByTagName("B");
	for (var i = 0; i < objBold.length; i++) {
		var elem = objBold[i];
		var text = elem.innerText;
		var iClass = parseInt(elem.KMContentClass);
		if  (iClass && text != null && text != "") { 
			listContent.push(elem); 
		}
	}
	// Strong
	var objStrongs = objHtmlDocument.getElementsByTagName("STRONG");
	for (var i = 0; i < objStrongs.length; i++) {
		var elem = objStrongs[i];
		var text = elem.innerText;
		var iClass = parseInt(elem.KMContentClass);
		if  (iClass && text != null && text != "") { 
			listContent.push(elem); 
		}
	}
}
//
function GetBookmark() {
	// 添加书签形式【<a name="bookmarkname">】的大纲
	listBookmark = [];
>>>>>>> devmaster
	var objAs = objHtmlDocument.getElementsByTagName("A");
	for (var i = 0; i < objAs.length; i++) {
		var elem = objAs[i];
		var id = elem.id;
		var name = elem.name;
		var iClass = parseInt(elem.KMContentClass);
		var isHide = elem.KMContentHide;
		if  ((!isHide || isHide != "1") && !iClass && id!="KMContentPageTopID" && name != null && name != "") { 
			listBookmark.push(elem); 
		}
	}
}
//
function GetContent() {
	// ����Ŀ¼��ʽ��KMContentClass=1~5���Ĵ��
	listContent = [];
	var objAs = objHtmlDocument.getElementsByTagName("A");
	for (var i = 0; i < objAs.length; i++) {
		var elem = objAs[i];
		var id = elem.id;
		var iClass = parseInt(elem.KMContentClass);
		var name = elem.name;
		if (iClass) { listContent.push(elem); }
	}
	// H1~H6
	for (var k = 1; k <= 6; k++){
		var objH16 = objHtmlDocument.getElementsByTagName("H"+k);
		for (var i = 0; i < objH16.length; i++) {
			var elem = objH16[i];
			var text = elem.innerText;
			var iClass = parseInt(elem.KMContentClass);
			if (iClass && text != null && text != "") { 
				listContent.push(elem); 
			}
		}
	}
	// Wiki
	var objWiki = objHtmlDocument.getElementsByTagName("DIV");
	for (var i = 0; i < objWiki.length; i++) {
		var elem = objWiki[i];
		var text = elem.innerText;
		var iClass = parseInt(elem.KMContentClass);
		if  (iClass && text != null && text != "" && text.search(/^=[^<>]+=$/) > -1) { 
			listContent.push(elem); 
		}
	}
	// Bold
	var objBold = objHtmlDocument.getElementsByTagName("B");
	for (var i = 0; i < objBold.length; i++) {
		var elem = objBold[i];
		var text = elem.innerText;
		var iClass = parseInt(elem.KMContentClass);
		if  (iClass && text != null && text != "") { 
			listContent.push(elem); 
		}
	}
	// Strong
	var objStrongs = objHtmlDocument.getElementsByTagName("STRONG");
	for (var i = 0; i < objStrongs.length; i++) {
		var elem = objStrongs[i];
		var text = elem.innerText;
		var iClass = parseInt(elem.KMContentClass);
		if  (iClass && text != null && text != "") { 
			listContent.push(elem); 
		}
	}
<<<<<<< HEAD
}
//
function GetBookmark() {
	// 添加书签形式【<a name="bookmarkname">】的大纲
=======
	alert("124");
	alert(listContent.length);
}
//
function GetBookmark() {
	// ������ǩ��ʽ��<a name="bookmarkname">���Ĵ��
>>>>>>> devmaster
	listBookmark = [];
	var objAs = objHtmlDocument.getElementsByTagName("A");
	for (var i = 0; i < objAs.length; i++) {
		var elem = objAs[i];
		var id = elem.id;
<<<<<<< HEAD
		var name = elem.name;
		var iClass = parseInt(elem.KMContentClass);
		var isHide = elem.KMContentHide;
		if  ((!isHide || isHide != "1") && !iClass && id!="KMContentPageTopID" && name != null && name != "") { 
=======
		var iClass = parseInt(elem.KMContentClass);
		var name = elem.name;
		if (!iClass && id!="KMContentPageTopID" && name != null && name != "") { 
>>>>>>> devmaster
			listBookmark.push(elem); 
		}
	}
}
//
function GetH16(){
	// 添加标题样式【<h1>,<h2>,<h3>,<h4>,<h5>,<h6>】的大纲
	listWiki = [];
	for (var k = 1; k <= 6; k++){
		var objH16 = objHtmlDocument.getElementsByTagName("H"+k);
		for (var i = 0; i < objH16.length; i++) {
			var elem = objH16[i];
			var text = elem.innerText;
			var iClass = parseInt(elem.KMContentClass);
<<<<<<< HEAD
			var isHide = elem.KMContentHide;
			if  ((!isHide || isHide != "1") && !iClass && text != null && text != "") { 
=======
<<<<<<< HEAD
			if  (!iClass && text != null && text != "") { 
=======
			var isHide = elem.KMContentHide;
			if  ((!isHide || isHide != "1") && !iClass && text != null && text != "") { 
>>>>>>> master
>>>>>>> devmaster
				listH16.push(elem);
			}
		}
	}
	listH16.sort(getCompare);
}
//
function GetWiki(){
	// 添加 google code wiki 大纲
	listH16 = [];
	var objWiki = objHtmlDocument.getElementsByTagName("DIV");
	for (var i = 0; i < objWiki.length; i++) {
		var elem = objWiki[i];
		var text = elem.innerText;
		var iClass = parseInt(elem.KMContentClass);
<<<<<<< HEAD
		var isHide = elem.KMContentHide;
		if  ((!isHide || isHide != "1") && !iClass && text != null && text != "" && text.search(/^=[^<>]+=$/) > -1) { 
=======
<<<<<<< HEAD
		if  (!iClass && text != null && text != "" && text.search(/^=[^<>]+=$/) > -1) { 
=======
		var isHide = elem.KMContentHide;
		if  ((!isHide || isHide != "1") && !iClass && text != null && text != "" && text.search(/^=[^<>]+=$/) > -1) { 
>>>>>>> master
>>>>>>> devmaster
			listWiki.push(elem); 
		}
	}
}
//
function GetBold(){
	// 添加加粗样式【<strong>,<b>】的大纲
	listBold = [];
	var objBold = objHtmlDocument.getElementsByTagName("B");
	for (var i = 0; i < objBold.length; i++) {
		var elem = objBold[i];
		var text = elem.innerText;
		var iClass = parseInt(elem.KMContentClass);
<<<<<<< HEAD
=======
<<<<<<< HEAD
		if  (!iClass && text != null && text != "") { listBold.push(elem); }
=======
>>>>>>> devmaster
		var isHide = elem.KMContentHide;
		if  ((!isHide || isHide != "1") && !iClass && text != null && text != "") { 
			listBold.push(elem); 
		}
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> devmaster
	}
	var objStrongs = objHtmlDocument.getElementsByTagName("STRONG");
	for (var i = 0; i < objStrongs.length; i++) {
		var elem = objStrongs[i];
		var text = elem.innerText;
		var iClass = parseInt(elem.KMContentClass);
<<<<<<< HEAD
=======
<<<<<<< HEAD
		if  (!iClass && text != null && text != "") { listBold.push(elem); }
=======
>>>>>>> devmaster
		var isHide = elem.KMContentHide;
		if  ((!isHide || isHide != "1") && !iClass && text != null && text != "") { 
			listBold.push(elem); 
		}
<<<<<<< HEAD
=======
>>>>>>> master
>>>>>>> devmaster
	}
}
////
////==========================================================================================================================
////添加目录形式【id="WizKMContent_XXX"】的大纲
function PrintContent() {
	if (listContent.length > 0) {
		var htmlContent = "";
		for (i=0; i<listContent.length; i++) {
			var elem = listContent[i];
			//alert(elem.KMContentClass + " : " + elem.innerText);
			iClass = parseInt(elem.KMContentClass);
			htmlContent += getRepStr("KMContent_Begin", iClass-1);
			htmlContent += "<li><a href=\"javascript:void(0);\" onclick=\"gotoElem('" + elem.offsetTop + "');\">" + elem.innerText + "</a>";
			htmlContent += " <a style=\"text-decoration:none; color:gray\" href=\"javascript:void(0);\" onclick=\"ClassContent('"+ i + "',-1);\"><</a>";
			htmlContent += " <a style=\"text-decoration:none; color:gray\" href=\"javascript:void(0);\" onclick=\"UnContent('"+ i + "');\">X</a>";
			htmlContent += " <a style=\"text-decoration:none; color:gray\" href=\"javascript:void(0);\" onclick=\"ContentToOutline('" + i + "');\">0</a>";
			htmlContent += " <a style=\"text-decoration:none; color:gray\" href=\"javascript:void(0);\" onclick=\"ClassContent('"+ i + "',1);\">></a></li>";
			htmlContent += getRepStr("KMContent_End", iClass-1);
		}
		//
		while (htmlContent.length > htmlContent.replace(/KMContent_EndKMContent_Begin/g,"").length) {
			htmlContent = htmlContent.replace(/KMContent_EndKMContent_Begin/g,"");
		}
		htmlContent = htmlContent.replace(/KMContent_Begin/g,"<UL style=\"MARGIN: 0px 0px 0px 30px\">");
		htmlContent = htmlContent.replace(/KMContent_End/g,"</UL>");
		//
		htmlContent = "<div style=\"font-weight:bold; border-bottom-style:groove;\">Wizhelper contents :</div><UL style=\"margin:0px 0px 0px 30px\">" + htmlContent + "</UL>";
		document.getElementById("divKMContent").innerHTML = htmlContent;
		document.getElementById("divKMContent").style.display = "";
		CheckIfContentExist();
	}
	else { document.getElementById("divKMContent").style.display = "none"; }
}
//
//添加书签形式【<a name="bookmarkname">】的大纲
function PrintBookmark() {
	if (listBookmark.length > 0) {
		var htmlBookmark = "";
		for (i=0; i<listBookmark.length; i++) {
			var elem = listBookmark[i];
			if (elem.KMContentHide == "1" || elem.id == "KMContentPageTopID") { continue; }
			htmlBookmark += getHtmlString(1, i, elem.offsetTop, elem.innerText);
		}
		if (htmlBookmark.length>0){
			htmlBookmark = "<div style=\"font-weight:bold; border-bottom-style:groove;\">Bookmarks :</div><ul style=\"margin:0px 0px 0px 20px\">" + htmlBookmark + "</ul>";
			document.getElementById("divKMBookmark").innerHTML = htmlBookmark;
			document.getElementById("divKMBookmark").style.display = "";
			CheckIfBookmarkExist();
		}
	}
	else { document.getElementById("divKMBookmark").style.display = "none"; }
}
//
//添加 google code wiki 大纲
function PrintWiki() {
	if (listWiki.length > 0) {
		var htmlWiki = "";
		for (i=0; i<listWiki.length; i++) {
			var elem = listWiki[i];
			if (elem.KMContentHide == "1") { continue; }
			htmlWiki += getHtmlString(2, i, elem.offsetTop, elem.innerText);
		}
		if (htmlWiki.length>0) {
			htmlWiki = "<div style=\"font-weight:bold; border-bottom-style:groove;\">Wiki outline :</div><ul style=\"margin:0px 0px 0px 20px\">" + htmlWiki + "</ul>";
			document.getElementById("divKMWiki").innerHTML = htmlWiki;
			document.getElementById("divKMWiki").style.display = "";
		}
	}
	else { document.getElementById("divKMWiki").style.display = "none"; }
}
//
//添加标题样式【<h1>,<h2>,<h3>,<h4>,<h5>,<h6>】的大纲
function PrintH16() {
	if (listH16.length > 0) {
		var htmlH16 = "";
		for (i=0; i<listH16.length; i++) {
			var elem = listH16[i];
			if (elem.KMContentHide == "1") { continue; }
			iClass = parseInt(elem.tagName.substr(1,1));
			htmlH16 += getRepStr("KMContent_Begin", iClass-1);
			htmlH16 += getHtmlString(3, i, elem.offsetTop, elem.innerText);
			htmlH16 += getRepStr("KMContent_End", iClass-1);
		}
		if (htmlH16.length>0) {
			while (htmlH16.length > htmlH16.replace(/KMContent_EndKMContent_Begin/g,"").length) {
				htmlH16 = htmlH16.replace(/KMContent_EndKMContent_Begin/g,"");
			}
			htmlH16 = htmlH16.replace(/KMContent_Begin/g,"<UL style=\"MARGIN: 0px 0px 0px 30px\">");
			htmlH16 = htmlH16.replace(/KMContent_End/g,"</UL>");
			htmlH16 = "<div style=\"font-weight:bold; border-bottom-style:groove;\">H1~H6 outline :</div><ul style=\"margin:0px 0px 0px 20px\">" + htmlH16 + "</ul>";
			document.getElementById("divKMH16").innerHTML = htmlH16;
			document.getElementById("divKMH16").style.display = "";
			CheckIfOutlineExist();
		}
	}
	else { document.getElementById("divKMH16").style.display = "none"; }
}
//
//添加加粗样式【<strong>,<b>】的大纲
function PrintBold() {
	if (listBold.length > 0) {
		var htmlBold = "";
		for (i=0; i<listBold.length; i++) {
			var elem = listBold[i];
			if (elem.KMContentHide == "1") { continue; }
			htmlBold += getHtmlString(4, i, elem.offsetTop, elem.innerText);
		}
		if (htmlBold.length>0) {
			htmlBold = "<div style=\"font-weight:bold; border-bottom-style:groove;\">Bold outline :</div><ul style=\"margin:0px 0px 0px 20px\">" + htmlBold + "</ul>";
			document.getElementById("divKMBold").innerHTML = htmlBold;
			document.getElementById("divKMBold").style.display = "";
		}
	}
	else { document.getElementById("divKMBold").style.display = "none"; }
}
////
////==========================================================================================================================
////
function GetAndPrintContent() {
	if (objCheckboxContent.checked) {
		GetContent();
		PrintContent();
	}
	else { document.getElementById("divKMContent").style.display = "none"; }
}
//
function GetAndPrintBookmark() {
	if (objCheckboxBookmark.checked) {
		GetBookmark();
		PrintBookmark();
	}
	else { document.getElementById("divKMBookmark").style.display = "none"; }
}
//
function GetAndPrintWiki() {
	if (objCheckboxWiki.checked) {
		GetWiki();
		PrintWiki();
	}
	else { document.getElementById("divKMWiki").style.display = "none"; }
}
//
function GetAndPrintH16() {
	if (objCheckboxH16.checked) {
		GetH16();
		PrintH16();
	}
	else { document.getElementById("divKMH16").style.display = "none"; }
}
//	
function GetAndPrintBold() {
	if (objCheckboxBold.checked) {
		GetBold();
		PrintBold();
	}
	else { document.getElementById("divKMBold").style.display = "none"; }
}
////
////==========================================================================================================================
//// 生成大纲条目
function getHtmlString(itype,i,pos,text) {
	var str = "";
	str += "<li><a href=\"javascript:void(0);\" onclick=\"gotoElem('" + pos + "');\">"  + text + "</a>";
	str += " <a style=\"text-decoration:none; color:gray\" href=\"javascript:void(0);\" onclick=\"OutlineToContent(" + itype + "," + i + ",1);\">1</a>";
	str += " <a style=\"text-decoration:none; color:gray\" href=\"javascript:void(0);\" onclick=\"OutlineToContent(" + itype + "," + i + ",2);\">2</a>";
	str += " <a style=\"text-decoration:none; color:gray\" href=\"javascript:void(0);\" onclick=\"OutlineToContent(" + itype + "," + i + ",3);\">3</a>";
	str += " <a style=\"text-decoration:none; color:gray\" href=\"javascript:void(0);\" onclick=\"OutlineToContent(" + itype + "," + i + ",4);\">4</a>";
	str += " <a style=\"text-decoration:none; color:gray\" href=\"javascript:void(0);\" onclick=\"OutlineToContent(" + itype + "," + i + ",5);\">5</a>";
	str += " <a style=\"text-decoration:none; color:gray\" href=\"javascript:void(0);\" onclick=\"UnOutline(" + itype + "," + i + ");\">X</a></li>";
	return str;
}
////
////==========================================================================================================================
//// 生成随机数字
function getRandomInt() {
	var objDate = new Date();
	var strRnd1 = objDate.getTime();
	var strRnd2 = Math.floor(100 + 900 * Math.random()); //100 ~ 999
	return strRnd1.toString() + strRnd2.toString();
}
//////
////==========================================================================================================================
////
function getRepStr(str,i) {
	return new Array(i+1).join(str);
}
////
////==========================================================================================================================
////
function getCompare(a,b) {
	if (a.offsetTop < b.offsetTop) { return -1; }
	else if (a.offsetTop == b.offsetTop && a.offsetLeft < b.offsetLeft) {return -1; }
	else { return 1; }
}
////
////==========================================================================================================================
////
function getCheckStatus(str,iType) {
	if (iType == 1) {
		if (str == "1") { return true; }
		else { return false; }
	}
	else {
		if (str) { return "1"; }
		else { return "0"; }
	}
}
////
////==========================================================================================================================
////跳转到页面元素位置
function gotoElem(pos) {
	objHtmlDocument.parentWindow.scrollTo(objHtmlDocument.body.offsetLeft, pos);
}
////
////==========================================================================================================================
////
//
//大纲项转为目录项
function OutlineToContent(itype,i,iClass) {
	// 书签形式【<a name="bookmarkname">】的大纲
	if (itype == 1) { 
		elem = listBookmark[i];
		listBookmark.splice(i,1);
		PrintBookmark();
		InsertBookmarkToDoc(1);
		CheckIfBookmarkExist();
	}
	// google code wiki 大纲
	else if (itype == 2) { 
		elem = listWiki[i]; 
		listWiki.splice(i,1);
		PrintWiki();
	}
	// 标题样式【<h1>,<h2>,<h3>,<h4>,<h5>,<h6>】的大纲
	else if (itype == 3) { 
		elem = listH16[i]; 
		listH16.splice(i,1); 

		PrintH16();
		CheckIfOutlineExist();
		InsertOutlineToDoc(1);
	}
	// 加粗样式【<strong>,<b>】的大纲
	else if (itype == 4) { 
		elem = listBold[i]; 
		listBold.splice(i,1); 
		PrintBold();
	}
	//
	elem.KMContentClass = iClass;
	if (!elem.id ) { 
		elem.id = "WizKMContent_" + getRandomInt();
	}
	listContent.push(elem);
	listContent.sort(getCompare);
	if (objCheckboxContent.checked) { PrintContent(); }
	InsertContentToDoc(1);
}
//目录项转为大纲项
function ContentToOutline(i) {
	var elem = listContent[i];
	elem.KMContentClass = "";
	listContent.splice(i,1);
	// 书签形式【<a name="bookmarkname">】的大纲
	if (elem.tagName=="A" && elem.name!=null && elem.name!="") { 
		listBookmark.push(elem);
		listBookmark.sort(getCompare);
		if (objCheckboxBookmark.checked) { PrintBookmark(); }
		InsertBookmarkToDoc(1);
		CheckIfBookmarkExist();
	}
	// google code wiki 大纲
	else if (elem.tagName == "DIV" && elem.innerText.search(/^=[^<>]+=$/) > -1) { 
		listWiki.push(elem); 
		listWiki.sort(getCompare);
		if (objCheckboxWiki.checked) { PrintWiki(); }
	}
	// 标题样式【<h1>,<h2>,<h3>,<h4>,<h5>,<h6>】的大纲
	else if ("H1H2H3H4H5H6".indexOf(elem.tagName) != -1)  { 
		listH16.push(elem);
		listH16.sort(getCompare);
		if (objCheckboxH16.checked) { PrintH16(); }
		InsertOutlineToDoc(1);
		CheckIfOutlineExist();
	}
	// 加粗样式【<strong>,<b>】的大纲
	else if (elem.tagName == "STRONG" || elem.tagName == "B") { 
		listBold.push(elem); 
		listBold.sort(getCompare);
		if (objCheckboxBold.checked) { PrintBold(); }
	}
	//
	PrintContent();
	InsertContentToDoc(1);
	CheckIfContentExist();
	objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
}
//
//改变目录项级别
function ClassContent(i,dClass) {
	var elem = listContent[i];
	if (elem) {
		var iClass = parseInt(elem.KMContentClass) + parseInt(dClass);
		if (iClass<1) { iClass = 1; }
		if (iClass>5) { iClass = 5; }
		elem.style.fontSize = (20-2*iClass).toString() + "pt";
		elem.KMContentClass = iClass;
	}
	PrintContent();
	InsertContentToDoc(1);
	CheckIfContentExist();
	objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
}
//
//取消目录项
function UnContent(i) {
	var elem = listContent[i];
	listContent.splice(i,1);
	if (elem) {
		elem.removeNode(false);
		var ojbLinkTop = objHtmlDocument.getElementById(elem.id + "_Top");
		if (ojbLinkTop) {
			ojbLinkTop.removeNode(true);
		}
	}
	PrintContent();
	InsertContentToDoc(1);
	CheckIfContentExist();
	objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
}
//
//
function UnOutline(itype,i) {
	// 书签形式【<a name="bookmarkname">】的大纲
	if (itype == 1) { 
		elem = listBookmark[i];
		listBookmark.splice(i,1);
		PrintBookmark();
		InsertBookmarkToDoc(1);
	}
	// google code wiki 大纲
	else if (itype == 2) { 
		elem = listWiki[i];
		listWiki.splice(i,1);
		PrintWiki();
	}
	// 标题样式【<h1>,<h2>,<h3>,<h4>,<h5>,<h6>】的大纲
	else if (itype == 3) { 
		elem = listH16[i]; 
		listH16.splice(i,1);
		PrintH16();
		InsertOutlineToDoc(1);
		CheckIfOutlineExist();
	}
	// 加粗样式【<strong>,<b>】的大纲
	else if (itype == 4) { 
		elem = listBold[i]; 
		listBold.splice(i,1); 
		PrintBold();
	}
	//
	elem.KMContentHide = "1";
	objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
}
////
////==========================================================================================================================
////
//
function SetCheckStatus(ynStatus,iPosition) {
	if (!objAPageTop) {
		objAPageTop = objHtmlDocument.createElement("a");
		objAPageTop.id="KMContentPageTopID";
		objHtmlDocument.body.insertBefore(objAPageTop,objHtmlDocument.body.firstChild);
		var strCheckStatus = strCheckStatusDefault;
	}
	else if (!objAPageTop.KMCheckStatus) { var strCheckStatus = strCheckStatusDefault; }
	else {var strCheckStatus = objAPageTop.KMCheckStatus; }
	strCheckStatus = strCheckStatus.substr(0,iPosition) + getCheckStatus(ynStatus,0) + strCheckStatus.substring(iPosition+1, strCheckStatus.length);
	objAPageTop.KMCheckStatus = strCheckStatus;
	objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
}
////
////==========================================================================================================================
////
function onclickContent() {
	GetAndPrintContent();
	SetCheckStatus(objCheckboxContent.checked,0);
}
//
function onclickBookmark() {
	GetAndPrintBookmark(); 
	SetCheckStatus(objCheckboxBookmark.checked,1);
}
//
function onclickWiki() {
	GetAndPrintWiki();
	SetCheckStatus(objCheckboxWiki.checked,2);
}
//
function onclickH16() {
	GetAndPrintH16(); 
	SetCheckStatus(objCheckboxH16.checked,3);
}
//	
function onclickBold() {
	GetAndPrintBold();
	SetCheckStatus(objCheckboxBold.checked,4);
}
////
////==========================================================================================================================
////添加文档顶部书签
function AddPageTopAnchor() {
	var objAPageTop = objHtmlDocument.getElementById("KMContentPageTopID");
	if (objAPageTop) {
		if (objHtmlDocument.body.firstChild.id!="KMContentPageTopID"){
			objAPageTop.removeNode(true);
			objAPageTop = objHtmlDocument.createElement("a");
			objAPageTop.id="KMContentPageTopID";
			objAPageTop.name = "KMContentPageTopID";
			//					objAPageTop.innerText = "返回文档顶部";
			//					objAPageTop.style.display = "none";
			objHtmlDocument.body.insertBefore(objAPageTop,objHtmlDocument.body.firstChild);
		}
	}
	else {
		objAPageTop = objHtmlDocument.createElement("a");
		objAPageTop.id="KMContentPageTopID";
		objAPageTop.name = "KMContentPageTopID";
		//				objAPageTop.innerText = "返回文档顶部";
		//				objAPageTop.style.display = "none";
		objHtmlDocument.body.insertBefore(objAPageTop,objHtmlDocument.body.firstChild);
	}
}
////
////==========================================================================================================================
////
//插入目录到文档顶部
function InsertContentToDoc(isUpdate) {
	if (listContent.length > 0) {
		var htmlContentLink = "";
		for (i=0; i<listContent.length; i++) {
			var elem = listContent[i];
			iClass = parseInt(elem.KMContentClass);
			htmlContentLink += getRepStr("KMContent_Begin", iClass-1);
			htmlContentLink += "<li><a href=\"#" + elem.id + "\"; >" + elem.innerText + "</a></li>";
			htmlContentLink += getRepStr("KMContent_End", iClass-1);
		}
		//
		while (htmlContentLink.length > htmlContentLink.replace(/KMContent_EndKMContent_Begin/g,"").length) {
			htmlContentLink = htmlContentLink.replace(/KMContent_EndKMContent_Begin/g,"");
		}
		htmlContentLink = htmlContentLink.replace(/KMContent_Begin/g,"<UL style=\"MARGIN: 0px 0px 0px 30px\">");
		htmlContentLink = htmlContentLink.replace(/KMContent_End/g,"</UL>");
		htmlContentLink = "<ul style=\"margin:0px 0px 0px 20px\">" + htmlContentLink + "</ul>";
		//
		var objdivContent = objHtmlDocument.getElementById("divKMContent");
		if (!objdivContent) { 
			if (isUpdate==1) { return; }
			else {
				var objdivContent = objHtmlDocument.createElement("div");
				objdivContent.id="divKMContent";
				objdivContent.style.cssText = "border-style:groove none groove none; margin:10px 0px;";
				objHtmlDocument.body.insertBefore(objdivContent,objHtmlDocument.body.firstChild);
			}
		}
		objdivContent.innerHTML = htmlContentLink;
		AddPageTopAnchor();
		objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
	}
	CheckIfContentExist();
}
//
//删除文档顶部的目录列表
function DeleteContentToDoc() {
	var objdivContent = objHtmlDocument.getElementById("divKMContent");
	if (objdivContent) {
		objdivContent.removeNode(true);
		objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
	}
	CheckIfContentExist();
}
//
//检查是否有文档顶部目录
function CheckIfContentExist() {
	var objdivContent = objHtmlDocument.getElementById("divKMContent");
	if (!objdivContent) {
		document.getElementById("btnInsertContentToDoc").style.display = "";
		document.getElementById("btnDeleteContentToDoc").style.display = "none";
		return true;
	}
	else {
		document.getElementById("btnInsertContentToDoc").style.display = "none";
		document.getElementById("btnDeleteContentToDoc").style.display = "";
		return false;
		re
	}
}
////
////==========================================================================================================================
////插入书签到文档顶部
function InsertBookmarkToDoc(isUpdate) {
	if (listBookmark.length > 0) {
		var htmlBookmarkLink = "";
		for (i=0; i<listBookmark.length; i++) {
			var elem = listBookmark[i];
			if (elem.KMContentHide == "1") { continue; }
			//var name = elem.name.replace(/\"|'|`/g,"");
			htmlBookmarkLink += "<li><a href=\"#" + elem.name + "\"; >" + elem.innerText + "</a></li>";
		}
		htmlBookmarkLink = "<ul style=\"margin:0px 0px 0px 20px\">" + htmlBookmarkLink + "</ul>";
		var objdivBookmark = objHtmlDocument.getElementById("divKMBookmark");
		if (!objdivBookmark) {
			if (isUpdate==1) { return; }
			else {
				var objdivBookmark = objHtmlDocument.createElement("div");
				objdivBookmark.id="divKMBookmark";
				objdivBookmark.style.cssText = "border-style:groove none groove none; margin:10px 0px;";
				var objdivContent = objHtmlDocument.getElementById("divKMContent");
				var objdivOutline = objHtmlDocument.getElementById("divKMOutline");
				if (objdivOutline) {
					objHtmlDocument.body.insertBefore(objdivBookmark,objdivOutline.nextSibling);
				}
				else if(objdivContent){
					objHtmlDocument.body.insertBefore(objdivBookmark,objdivContent.nextSibling);
				}
				else {
					objHtmlDocument.body.insertBefore(objdivBookmark,objHtmlDocument.body.firstChild);
				}
			}}
		objdivBookmark.innerHTML = htmlBookmarkLink;
		AddPageTopAnchor();
		objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
	}
	CheckIfBookmarkExist();
}
//
//删除文档顶部的书签列表
function DeleteBookmarkToDoc() {
	var objdivBookmark = objHtmlDocument.getElementById("divKMBookmark");
	if (objdivBookmark) {
		objdivBookmark.removeNode(true);
		objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
	}
	CheckIfBookmarkExist();
}
//
//检查是否有文档顶部书签列表
function CheckIfBookmarkExist() {
	var objdivBookmark = objHtmlDocument.getElementById("divKMBookmark");
	if (!objdivBookmark) {
		document.getElementById("btnInsertBookmarkToDoc").style.display = "";
		document.getElementById("btnDeleteBookmarkToDoc").style.display = "none";
	}
	else {
		document.getElementById("btnInsertBookmarkToDoc").style.display = "none";
		document.getElementById("btnDeleteBookmarkToDoc").style.display = "";
	}
}
////
////==========================================================================================================================
////插入【<h1>,<h2>,<h3>,<h4>,<h5>,<h6>】大纲到文档顶部
function InsertOutlineToDoc(isUpdate) {
	if (listH16.length > 0) {
		var htmlH16Link = "";
		for (i=0; i<listH16.length; i++) {
			var elem = listH16[i];
			if (elem.KMContentHide == "1") { continue; }
			if (!elem.id || elem.id.indexOf("WizKMOutline_")==0) {elem.id = "WizKMOutline_" + getRandomInt(); }
			iClass = parseInt(elem.tagName.substr(1,1));
			htmlH16Link += getRepStr("KMContent_Begin", iClass-1);
			htmlH16Link += "<li><a href=\"#" + elem.id + "\"; >" + elem.innerText + "</a></li>";
			htmlH16Link += getRepStr("KMContent_End", iClass-1);
		}
		if (htmlH16Link.length>0) {
			while (htmlH16Link.length > htmlH16Link.replace(/KMContent_EndKMContent_Begin/g,"").length) {
				htmlH16Link = htmlH16Link.replace(/KMContent_EndKMContent_Begin/g,"");
			}
			htmlH16Link = htmlH16Link.replace(/KMContent_Begin/g,"<UL style=\"MARGIN: 0px 0px 0px 30px\">");
			htmlH16Link = htmlH16Link.replace(/KMContent_End/g,"</UL>");
			htmlH16Link = "<ul style=\"margin:0px 0px 0px 20px\">" + htmlH16Link + "</ul>";
			//
			var objdivOutline = objHtmlDocument.getElementById("divKMOutline");
			if (!objdivOutline) {
				if (isUpdate==1) { return; }
				else {
					var objdivOutline = objHtmlDocument.createElement("div");
					objdivOutline.id="divKMOutline";
					objdivOutline.style.cssText = "border-style:groove none groove none; margin:10px 0px;";
					var objdivContent = objHtmlDocument.getElementById("divKMContent");
					if (objdivContent){
						objHtmlDocument.body.insertBefore(objdivOutline,objdivContent.nextSibling);
					}
					else {
						objHtmlDocument.body.insertBefore(objdivOutline,objHtmlDocument.body.firstChild);
					}
				}
			}
			objdivOutline.innerHTML = htmlH16Link;
			AddPageTopAnchor();
			objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
		}
		CheckIfOutlineExist();
	}
}
//
//删除【<h1>,<h2>,<h3>,<h4>,<h5>,<h6>】大纲
function DeleteOutlineToDoc() {
	var objdivOutline = objHtmlDocument.getElementById("divKMOutline");
	if (objdivOutline) {
		objdivOutline.removeNode(true);
		objHtmlDocument.body.setAttribute("wizKMDocumentModified", "1", 0);
	}
	CheckIfOutlineExist();
}
//
//检查【<h1>,<h2>,<h3>,<h4>,<h5>,<h6>】大纲
function CheckIfOutlineExist() {
	var objdivOutline = objHtmlDocument.getElementById("divKMOutline");
	if (!objdivOutline) {
		document.getElementById("btnInsertOutlineToDoc").style.display = "";
		document.getElementById("btnDeleteOutlineToDoc").style.display = "none";
	}
	else {
		document.getElementById("btnInsertOutlineToDoc").style.display = "none";
		document.getElementById("btnDeleteOutlineToDoc").style.display = "";
	}
}


////
////==========================================================================================================================
////

