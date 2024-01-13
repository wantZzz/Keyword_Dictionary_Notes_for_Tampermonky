// ==UserScript==
// @name         Keyword Dictionary Notes
// @namespace    https://github.com/wantZzz
// @version      0.1.2.dev-1
// @description  Just highlight keyword in webpage and show up / write down your note about this keyword.
// @author       WannaZzz
// @require      https://cdn.ckeditor.com/ckeditor5/40.2.0/balloon-block/ckeditor.js
// @require      https://cdn.ckeditor.com/ckeditor5/40.2.0/balloon-block/translations/zh.js
// @match        https://hackmd.io/?nav=overview
// @icon         data:image/png;base64,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
// @downloadURL  https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/raw/main/Keyword%20Dictionary%20Notes.user.js
// @updateURL    https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/raw/main/Keyword%20Dictionary%20Notes.user.js
// @grant 		 GM_setValue
// @grant 		 GM_getValue
// @grant 		 GM_deleteValue
// @grant 		 GM_addStyle
// @noframes
// ==/UserScript==

(function() {
    'use strict';
	if(document.querySelector('keywordnote')){
		return
	}
	
	var is_keywordPositions = false;// 是否開啟紀錄關鍵字位置
    var keywordPositions = {};// 用於紀錄關鍵字-位置的空字典
	var keywordsToSearch = [];// 已記錄的關鍵字清單
	var keyword_reserved_words = ['keywordsNote_priority', 'keywordsToSearch', 'keywordsSetting', 'AutoTriggerUrl'];
	var is_areadysearch = false;

	var popup_keyword = '';
	var popup_keyword_note_showup_id = 0;
	var popup_new_keyword_note_id = 1;
	var popup_is_needrefresh = true;
    var is_append = false;
	var new_keyword_note_ckeditor;

	var timeout_popup_mouseon;
	var timeout_popup_mouseout;
	var is_popuphide = true;
	var list_popuphide = [];

	var window_keyword = '';
	var window_is_needrefresh = true;
	var is_editing_id = null;

	var textarea_is_composing = false;

	var trigger_alert_id = 0;

	function set_up(){
		var keywordsToSearch_set = GM_getValue("keywordsToSearch", null);
		if(keywordsToSearch_set == null){
			keywordsToSearch_set = [["这是一个圆角矩形。 \n它的高度会随着文本内容而变化，但上下边距保持8px。","test",false],["我好想睡覺，我的夢想是攀登枕頭山山峰","2023/9/9 10:20:36",false],["早安","2023/9/1 14:3:23",false]];
			GM_setValue("keywordsToSearch", ['標籤']);
            GM_setValue("標籤", keywordsToSearch_set);
		}

		var keywordsNote_priority_set = GM_getValue("keywordsNote_priority", null);
		if(keywordsNote_priority_set == null){
			keywordsNote_priority_set = {"標籤": 1};
			GM_setValue("keywordsNote_priority", keywordsNote_priority_set);
		}

		var keywordsSetting_set = GM_getValue("keywordsSetting", null);
		if(keywordsSetting_set == null){
			keywordsSetting_set = {"init_darkmode": false,"keywordspancss": "{\n\n}"};
			GM_setValue("keywordsSetting", keywordsSetting_set);
		}

		var AutoTriggerUrl_set = GM_getValue("AutoTriggerUrl", null);
		if(AutoTriggerUrl_set == null){
			AutoTriggerUrl_set = [];
			GM_setValue("AutoTriggerUrl", AutoTriggerUrl_set);
		}

		keywordsToSearch = GM_getValue("keywordsToSearch", null);
	}

	//資料處理 函式
	function get_keyword_data(keyword){
		const Keyword_data = GM_getValue(keyword, null);
		if(Keyword_data === null){
			return [[`無 ${keyword} 筆記資料，可能資料損毀或關鍵字不存在`, 'error', false]]
		}
		return Keyword_data
	}

	function get_note_priority(keyword){
		const note_priority = GM_getValue("keywordsNote_priority", null);
		if(note_priority[keyword]){
			return note_priority[keyword]
		}else{
			return 0
		}
	}

	function isin_autostartup_list(){
		const domain = window.location.host;

		const AutoTriggerUrl = GM_getValue("AutoTriggerUrl", null);
		if(AutoTriggerUrl.indexOf(domain) >= 0){
			return true
		}else{
			return false
		}
	}

	function addin_autostartup_list(){
		try{
			const domain = window.location.host;

			var AutoTriggerUrl = GM_getValue("AutoTriggerUrl", null);

			AutoTriggerUrl.push(domain);

			GM_setValue("AutoTriggerUrl", AutoTriggerUrl);

			trigger_alert_window("已開啟自動尋找在該網域", 'ok');
			return true
		}catch(e){
			trigger_alert_window("無法開啟自動尋找在該網域 錯誤:" + e.name, 'error');
			console.log(e);

			return false
		}
	}

	function removeout_autostartup_list(){
		try{
			const domain = window.location.host;

			var AutoTriggerUrl = GM_getValue("AutoTriggerUrl", null);

			const index = AutoTriggerUrl.indexOf(domain);
			if (index > -1) {
			  AutoTriggerUrl.splice(index, 1);
			}

			GM_setValue("AutoTriggerUrl", AutoTriggerUrl);

			trigger_alert_window("已關閉自動尋找在該網域", 'ok');
			return true
		}catch(e){
			trigger_alert_window("無法關閉自動尋找在該網域 錯誤:" + e.name, 'error');
			console.log(e);

			return false
		}
	}

	function quest_init_setting(setting_name){
		const keywordsSetting = GM_getValue("keywordsSetting", null);
		if(keywordsSetting[setting_name]){
			return keywordsSetting[setting_name]
		}else{
			return null
		}
	}

	function setting_init_setting(setting_name, value){
		try{
			var keywordsSetting = GM_getValue("keywordsSetting", null);

			keywordsSetting[setting_name] = value;

			GM_setValue("keywordsSetting", keywordsSetting);

			trigger_alert_window("設定成功", 'ok');
			return true
		}catch(e){
			trigger_alert_window("設定失效 錯誤:" + e.name, 'error');
			console.log(e);

			return false
		}
	}

	function add_newkeyword(new_keyword, note){
		var is_StoreKeywordData = false;

		if(keyword_reserved_words.indexOf(new_keyword) >= 0){
			trigger_alert_window("這個關鍵字為系統保留字，無法新增", 'error');
			return false
		}

		if(keywordsToSearch.indexOf(new_keyword) >= 0){
			trigger_alert_window("該關鍵字已存在", 'error');
			return false
		}

		try{
			var new_datetime = datetime_output_format();
			var keywordsToSearch_copy = keywordsToSearch;
			keywordsToSearch_copy.push(new_keyword);

			var data = null;
			if(note !== ""){
				data = [[note, new_datetime, false]];
			}else{
				data = [];
			}

			GM_setValue(new_keyword, data);
			is_StoreKeywordData = true;

			GM_setValue("keywordsToSearch", keywordsToSearch_copy);

			keywordsToSearch = keywordsToSearch_copy;
			trigger_alert_window(`新關鍵字 ${new_keyword} 已儲存`, 'ok');

			return true
		}catch(e){
			trigger_alert_window("無法儲存新關鍵字 錯誤:" + e.name, 'error');
			console.log(e);

			if(is_StoreKeywordData){
				GM_deleteValue(new_keyword);
			}

			return false
		}
	}

	function delete_keyword(keyword){
		var is_KeywordNotInList = false;

		try{
			var keywordsToSearch_copy = keywordsToSearch;
			const index = keywordsToSearch_copy.indexOf(keyword);
			if (index > -1) {
			  keywordsToSearch_copy.splice(index, 1);
			}

			GM_setValue("keywordsToSearch", keywordsToSearch_copy);
			is_KeywordNotInList = true;

			GM_deleteValue(keyword);

			keywordsToSearch = keywordsToSearch_copy;
			trigger_alert_window(`關鍵字 ${keyword} 已刪除`, 'ok');

			return true
		}catch(e){
			trigger_alert_window("無法刪除新關鍵字 錯誤:" + e.name, 'error');
			console.log(e);

			if(is_KeywordNotInList){
				GM_setValue("keywordsToSearch", keywordsToSearch);
			}

			return false
		}
	}

	function edit_keyword(new_keyword, old_keyword){
		if(keyword_reserved_words.indexOf(new_keyword) >= 0){
			trigger_alert_window("這個關鍵字為系統保留字，無法新增", 'error');
			return false
		}

		if(keywordsToSearch.indexOf(new_keyword) >= 0){
			trigger_alert_window("該關鍵字已存在", 'error');
			return false
		}

		var is_StoreNewKeywordData = false;
		var is_DeleteOldKeywordData = false;

		const old_Keyword_data = GM_getValue(old_keyword, null);
		if(old_Keyword_data === null){
			trigger_alert_window("無法編輯新關鍵字 錯誤: Old keyword does not exist", 'error');
			console.log("GM_getValue(keyword, null) === null --> error: Old keyword does not exist");
			return
		}

		try{
			var keywordsToSearch_copy = keywordsToSearch;
			const index = keywordsToSearch_copy.indexOf(old_keyword);
			if (index > -1) {
			  keywordsToSearch_copy[index] = new_keyword;
			}

			GM_setValue(new_keyword, old_Keyword_data);
			is_StoreNewKeywordData = true;

			GM_deleteValue(old_keyword);
			is_DeleteOldKeywordData = true;

			GM_setValue("keywordsToSearch", keywordsToSearch_copy);

			keywordsToSearch = keywordsToSearch_copy;
			trigger_alert_window(`關鍵字 ${old_keyword} 已變更為 ${new_keyword}`, 'ok');

			return true
		}catch(e){
			trigger_alert_window("無法編輯新關鍵字 錯誤:" + e.name, 'error');
			console.log(e);

			if(is_StoreNewKeywordData){
				GM_deleteValue(new_keyword);
			}
			if(is_DeleteOldKeywordData){
				GM_setValue(old_keyword, old_Keyword_data);
			}

			return false
		}
	}

	function add_keyword_note(keyword, note){
		var keyword_data = GM_getValue(keyword, null);
		if(keyword_data === null){
			trigger_alert_window("無法儲存新筆記 錯誤: keyword does not exist", 'error');
			console.log("GM_getValue(keyword, null) === null --> error: keyword does not exist");
			return false
		}
		var new_keyword_data_id = keyword_data.length;

		try{
			var new_datetime = datetime_output_format();
			var new_keyword_data = keyword_data;

			new_keyword_data.push([note, new_datetime, false]);

			GM_setValue(keyword, new_keyword_data);
			trigger_alert_window(`新筆記已儲存`, 'ok');

			return true
		}catch(e){
			trigger_alert_window("無法儲存新筆記 錯誤:" + e.name, 'error');
			console.log(e);

			return false
		}
	}

	function delete_keyword_note(keyword, keyword_data_id){
		var keyword_data = GM_getValue(keyword, null);
		if(keyword_data === null){
			trigger_alert_window("無法刪除該筆記 錯誤: Old keyword does not exist", 'error');
			console.log("GM_getValue(keyword, null) === null --> error: Old keyword does not exist");
			return false
		}

		try{
			var new_keyword_data = keyword_data;

			new_keyword_data.splice(keyword_data_id, 1);

			GM_setValue(keyword, new_keyword_data);
			trigger_alert_window(`筆記已刪除`, 'ok');

			return true
		}catch(e){
			trigger_alert_window("無法刪除該筆記 錯誤:" + e.name, 'error');
			console.log(e)

			return false
		}
	}

	function edit_keyword_note(keyword, note, keyword_data_id){
		var keyword_data = GM_getValue(keyword, null);
		if(keyword_data === null){
			trigger_alert_window("無法編輯該筆記 錯誤: Old keyword does not exist", 'error');
			console.log("GM_getValue(keyword, null) === null --> error: Old keyword does not exist");
			return false
		}

		try{
            var new_datetime = datetime_output_format();
			var new_keyword_data = keyword_data;

			new_keyword_data[keyword_data_id][0] = note;
            new_keyword_data[keyword_data_id][1] = new_datetime;

			GM_setValue(keyword, new_keyword_data);
			trigger_alert_window('編輯內容已儲存', 'ok');

			return true
		}catch(e){
			trigger_alert_window("無法編輯該筆記 錯誤:" + e.name, 'error');
			console.log(e)

			return false
		}
	}


    //-替換函數，將關鍵字高亮顯示
	function highlightKeyword(node) {
		if (node.nodeType === Node.TEXT_NODE) {
            var text = node.textContent;
			var html = text;
			if(!is_keywordPositions){
				keywordsToSearch.forEach(function(keyword) {
					html = html.replace(new RegExp(keyword, 'g'), '<span class="highlight-keyword keyword-mark-show">$&</span>');
				});
			}else{
				var keywords_in_text = []
				keywordsToSearch.forEach(function(keyword) {
					if(text.includes(keyword)){
						keywords_in_text.push(keyword);
					}
				});

				if (keywords_in_text.length === 0){
					return
				}else{
					var xpath = recordXPath(node);

					console.log(xpath)

					keywords_in_text.forEach(function(keyword) {
						html = html.replace(new RegExp(keyword, 'g'), '<span class="highlight-keyword keyword-mark-show">$&</span>');
						if(!keywordPositions[keywords_in_text]){
							keywordPositions[keywords_in_text] = [];
						}
						keywordPositions[keywords_in_text].push(xpath);
					});
				}
			}

			if (text === html){
                return
            }
			var replacement = document.createElement('span');
            replacement.style.backgroundColor = 'none';
            replacement.style.padding = '0';
			replacement.innerHTML = html;

			node.parentNode.replaceChild(replacement, node);
		}else if(node.nodeName === 'KEYWORDNOTE'){
			return
		}else if(is_there_has_class(node)){
			return
		}else if(isHidden(node)){
			return
		}else if (node.nodeType === Node.ELEMENT_NODE) {
			for (var i = 0; i < node.childNodes.length; i++) {
				highlightKeyword(node.childNodes[i]);
			}
		}
	}

	function is_there_has_class(node){
		try{
			return node.classList.contains('highlight-keyword');
		}catch{
			return false
		}
	}

	function isHidden(el) {
		return (el.offsetParent === null)
	}

	//-函式：記錄元素的 XPath
	function recordXPath(element) {
		if (!element || element === document.body) {
			return ''; // 已經到達了文檔的根節點，停止遞歸
		}

		const parent = element.parentNode;
		const tagName = element.tagName.toLowerCase();
		const index = Array.from(parent.children).indexOf(element) + 1;

		// 生成當前元素的 XPath 部分
		const currentXPathPart = `/${tagName}[${index}]`;

		// 遞歸找到上級元素的 XPath 部分
		return recordXPath(parent) + currentXPathPart;
	}

	//-函式：根據 XPath 查找元素
	function findElementByXPath(xpath) {
		return document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	}

	// 設定簡易關鍵字懸浮視窗在滑鼠觸碰 "網頁上關鍵字" 的事件
	function setting_keyword_eventlistener() {
		const popup = document.getElementById("popup");

        const keywordSpans = document.querySelectorAll(".highlight-keyword");

        keywordSpans.forEach(function (span) {
            span.addEventListener("mouseover", keyword_mouseover_event);
            span.addEventListener("mouseout", keyword_mouseout_event);
        });

		console.log(`該網頁中找到 ${keywordSpans.length} 個關鍵字`);
		console.log(keywordSpans);
		return keywordSpans.length
	}

	function keyword_mouseover_event(event){
		if(is_popuphide){
			return
		}

		const keyword_title = event.target.innerText;

		if(list_popuphide.indexOf(keyword_title) >= 0){
			return
		}

		if(popup_is_needrefresh || !(keyword_title === popup_keyword)){
			var keyword_data = get_keyword_data(keyword_title);

			var popup_keyword_note_showup_id = get_note_priority(keyword_title);

			document.getElementById("keyword_title").innerText = keyword_title;
			if(!keyword_data[popup_keyword_note_showup_id]){
				document.getElementById("keyword_note_showup").innerText = "你還沒有關於此關鍵字的筆記喔，趕快紀錄些什麼吧!";
			}else{
				document.getElementById("keyword_note_showup").innerText = keyword_data[popup_keyword_note_showup_id][0];
			}

			popup_new_keyword_note_id = keyword_data.length;
			popup_keyword = keyword_title;

			new_keyword_note_ckeditor.setData('');
			popup_is_needrefresh = false;
			is_append = false;
		}

		clearTimeout(timeout_popup_mouseout);

		
		popup.style.opacity = "0";
		popup.style.animation = "none";
		popup.style.display = "block";

		timeout_popup_mouseon = setTimeout(function () {
			popup.style.animation = "fade 0.5s linear";

			const mouseX = event.clientX + 10;
			const mouseY = event.clientY + 10 + window.scrollY;

			popup.style.left = mouseX + "px";
			popup.style.top = mouseY + "px";

			setTimeout(function () {
				popup.style.opacity = "1";
			}, 490);
		}, 1000);
	}

	function keyword_mouseout_event(){
		clearTimeout(timeout_popup_mouseon)
		
		timeout_popup_mouseout = setTimeout(function () {

			popup.style.animation = "fadeOut 0.2s linear";

			setTimeout(function () {
				popup.style.display = "none";
				popup.style.animation = "none";
				popup.style.opacity = "0";
			}, 190);
		}, 500);
	}

	//-遍歷網頁上顯示的文字
	function searchPageForKeywords() {
		var body = document.body;

		for (var i = 0; i < body.childNodes.length; i++) {
			highlightKeyword(body.childNodes[i]);
		}
	}

	function datetime_output_format(){
        var currentdate = new Date();
		var datetime = currentdate.getFullYear() + "/"
		+ (currentdate.getMonth()+1).toString().padStart(2,'0') + "/"
		+ currentdate.getDate().toString().padStart(2,'0') + " "
		+ currentdate.getHours().toString().padStart(2,'0') + ":"
		+ currentdate.getMinutes().toString().padStart(2,'0') + ":"
		+ currentdate.getSeconds().toString().padStart(2,'0');

		return datetime
	}

	//設定初始設定與設定監控視窗事件 函式
    window.addEventListener('load', function() {
		if(document.querySelector('keywordnote')){
			return
		}

        set_up();

        console.log(keywordPositions);
        console.log(keywordsToSearch);

        keyword_insert_css();
        keyword_insert_html();

        const keywordnote = document.querySelector('keywordnote');
        const sidebar = document.querySelector('nav.keyword-sidebar');
        const toggle = keywordnote.querySelector(".toggle");

        toggle.addEventListener("click", () => {
            sidebar.classList.toggle("keyword-closed");
        });

		// 設定側邊功能欄滑桿事件
        const startUpHead = keywordnote.querySelector(".start-up");
        const startUpSwitch = keywordnote.querySelector(".toggle-switch-start");
        const startUpText = keywordnote.querySelector(".mode-text-start");
		const popup = document.getElementById("popup");

        startUpSwitch.addEventListener("click", () => {
            startUpHead.classList.toggle("on");

			if (startUpText.innerText === "Start up"){
				searchPageForKeywords();

				const keyword_length = setting_keyword_eventlistener();

				if(keyword_length <= 0){
					trigger_alert_window("未能在目前網頁上找到關鍵字", 'warning');
				}else{
					trigger_alert_window('網頁關鍵字內容已標記', 'ok');
				}

				is_areadysearch = true;
			}

            if (startUpHead.classList.contains("on")) {
                startUpText.innerText = "Hide mark";
				const keywordSpans = document.querySelectorAll(".highlight-keyword");

				keywordSpans.forEach(function (span) {
					span.classList.add("keyword-mark-show");
					//span.style.backgroundColor = "yellow";
				});
				is_popuphide = false;
				list_popuphide = [];

            } else {
                startUpText.innerText = "Show mark";
				const keywordSpans = document.querySelectorAll(".highlight-keyword");

				keywordSpans.forEach(function (span) {
					span.classList.remove("keyword-mark-show");
					//span.style.backgroundColor = null;
				});
				is_popuphide = true;
            }
        });

        const modeSwitch = keywordnote.querySelector(".toggle-switch-mode");
        const modeText = keywordnote.querySelector(".mode-text");

        modeSwitch.addEventListener("click", () => {
            keywordnote.classList.toggle("dark");

            if (keywordnote.classList.contains("dark")) {
                modeText.innerText = "Dark mode";
            } else {
                modeText.innerText = "Light mode";
            }
        });

		// 設定簡易關鍵字懸浮視窗按紐與輸入框快捷鍵事件
		document.getElementById("keyword_note_show_all").addEventListener (
			"click", keyword_note_show_all_click, false
		);
		document.getElementById("keyword_unknow_function").addEventListener (
			"click", keyword_unknow_function_click, false
		);
		document.getElementById("keyword_delete_data").addEventListener (
			"click", keyword_delete_data_click, false
		);

		function KeyPress(e) {
			var evtobj = window.event? event : e
			if (evtobj.keyCode == 78 && evtobj.ctrlKey){
				console.log("ctrlN press");
				new_keyword_note_input_ctrlN();//新開
				event.preventDefault();
			}
			else if (evtobj.keyCode == 83 && evtobj.ctrlKey){
				new_keyword_note_input_ctrlS();//儲存
				event.preventDefault();
			}
		}

		const popup_textarea = document.getElementById("new_keyword_note_input");

		popup_textarea.onkeydown = KeyPress;

		popup_textarea.addEventListener("compositionstart", () => {
			textarea_is_composing = true;
		});

		popup_textarea.addEventListener("compositionend", () => {
			textarea_is_composing = false;
		});

		// 設定簡易關鍵字懸浮視窗在滑鼠觸碰 "簡易關鍵字懸浮視窗" 上關鍵字的事件
        popup.addEventListener("mouseenter", function () {
            clearTimeout(timeout_popup_mouseout);
        });

        popup.addEventListener("mouseleave", function () {
            timeout_popup_mouseout = setTimeout(function () {
				var ckeditor_is_focus = document.activeElement.className.match("ck");
				if(textarea_is_composing || ckeditor_is_focus){
					return
				}
                popup.style.animation = "fadeOut 0.2s linear";

                setTimeout(function () {
                    popup.style.display = "none";
                    popup.style.animation = "none";
                    popup.style.opacity = "0";
                }, 190);
            }, 500); //
        });

		//CKEditor 5 文字編輯器設定
		var BalloonEditor = window.BalloonEditor;
		
		BalloonEditor.create(document.querySelector('#new_keyword_note_input'),{
                                toolbar:['bold','italic','link', 
                                         'bulletedList', 
                                         'numberedList', 
                                         '|','outdent','indent'],
								placeholder: '在此輸入新筆記',
								language: 'zh'
                            })
			.then( editor => {
				console.log('ckEditor was initialized');
				new_keyword_note_ckeditor = editor;
			} )
			.catch( error => {
				console.error( error );
			} );
		
		// 設定側邊功能欄按紐事件
		const overlay = document.getElementById('overlay');

		document.getElementById("sidebar-new-keword-button").addEventListener (
			"click", sidebar_new_keword_button_click, false
		);
		document.getElementById("sidebar-refresh-button").addEventListener (
			"click", sidebar_reload_button_click, false
		);
		document.getElementById("sidebar-research-button").addEventListener (
			"click", sidebar_research_button_click, false
		);
		document.getElementById("sidebar-setting-button").addEventListener('click', () => {
			overlay.style.display = 'flex';
		});
		document.getElementById("sidebar-export-notes-button").addEventListener (
			"click", sidebar_export_notes_button_click, false
		);
		document.getElementById("sidebar-inport-notes-button").addEventListener (
			"click", sidebar_inport_notes_button_click, false
		);

		// 設定模式時點擊界面以外處隱藏設定界面
		overlay.addEventListener('click', (event) => {
			if (event.target === overlay) {
				overlay.style.display = 'none';
			}
		});

		// 設定側邊輸入框按紐與輸入事件
		autocomplete(document.getElementById("keyword-search-input"), keywordsToSearch);

		// 載入設定彈窗
		const IsAutoHead = keywordnote.querySelector(".k-is-auto");
		const IsAutoSwitch = keywordnote.querySelector(".toggle-switch-on");
        const IsAutoText = keywordnote.querySelector(".isauto-text-start");

		const InitModeHead = keywordnote.querySelector(".k-init-mode");
		const InitModeSwitch = keywordnote.querySelector(".toggle-switch-initmode");
        const InitModeText = keywordnote.querySelector(".initmode-text-start");

		if(quest_init_setting('init_darkmode')){
			keywordnote.querySelector(".initmode-text-start").innerText = '初始 "黑暗" 模式';
			keywordnote.querySelector(".k-init-mode").classList.toggle("on");

			document.querySelector('keywordnote').classList.toggle("dark");
			keywordnote.querySelector(".mode-text").innerText = "Dark mode";
		}

		GM_addStyle('span.highlight-keyword{padding: 0 !important;}');

		const spancss = quest_init_setting('keywordspancss');
		if(spancss != "{\n\n}" && !(spancss.length <= 5)){
			document.getElementById("keyword-setting-css-input-box").value = spancss;
			GM_addStyle(`span.highlight-keyword.keyword-mark-show${spancss}`);
			console.log(`span.highlight-keyword.keyword-mark-show${spancss}`);
		}else{
			document.getElementById("keyword-setting-css-input-box").value = spancss;
			GM_addStyle('span.highlight-keyword.keyword-mark-show{background-color: yellow !important;}');
		}

		// 設定彈窗滑桿與按鈕事件
		IsAutoSwitch.addEventListener("click", () => {
            IsAutoHead.classList.toggle("on");

			if (IsAutoHead.classList.contains("on")) {
                IsAutoText.innerText = '此網域 "自動" 尋找關鍵字';

				addin_autostartup_list();
            } else {
                IsAutoText.innerText = '此網域 "手動" 尋找關鍵字';

				removeout_autostartup_list();
            }
        });

		InitModeSwitch.addEventListener("click", () => {
            InitModeHead.classList.toggle("on");

			if (InitModeHead.classList.contains("on")) {
                InitModeText.innerText = '初始 "黑暗" 模式';

				setting_init_setting('init_darkmode', true);
            } else {
                InitModeText.innerText = '初始 "明亮" 模式';

				setting_init_setting('init_darkmode', false);
            }
        });

		document.getElementById("keyword-setting-css-save-button").addEventListener (
			"click", setting_keyword_css_click, false
		);

		// 設定詳細關鍵字視窗標題按紐事件
		document.getElementById("windos-close-button").addEventListener (
			"click", windos_close_click, false
		);
		document.getElementById("windos-title-edit-button").addEventListener (
			"click", keyword_note_title_edit_click, false
		);
		document.getElementById("windos-title-delete-button").addEventListener (
			"click", keyword_note_title_delete_click, false
		);

		// 設定詳細關鍵字視窗標題移動事件
		var element = document.getElementById("windos-message-titlebar");
        var elementSelected = element.parentNode;
		var mouseX, mouseY;

		element.addEventListener('mousedown', function(event) {
                elementSelected = element.parentNode;
				mouseX = event.clientX - parseInt(getComputedStyle(elementSelected).left);
				mouseY = event.clientY - parseInt(getComputedStyle(elementSelected).top);
                elementSelected.style.transition = 'none';

				if(!document.body.classList.contains('windos-container-moving')){
					document.body.classList.add('windos-container-moving');
				}
		});

		element.addEventListener('mousemove', function(event) {
			if (elementSelected !== undefined) {
				elementSelected.style.left = event.clientX - mouseX + 'px';
				elementSelected.style.top = event.clientY - mouseY + 'px';
			}
		});

		element.addEventListener('mouseup', function(event) {
            elementSelected.style.transition = 'var(--tran-05)'
            elementSelected = undefined;

			if(document.body.classList.contains('windos-container-moving')){
				document.body.classList.remove('windos-container-moving');
			}
		});

		//監控詳細關鍵字視窗縮放的事件
		outputsize();
        var windos_container = document.getElementById("windos-container");
		new ResizeObserver(outputsize).observe(windos_container);

        windos_container.style.left = '0px';
        windos_container.style.top = '0px';
        windos_container.style.zIndex = -5;	
		
		//自動搜尋
		if(isin_autostartup_list()){
			setTimeout(function () {
				startUpSwitch.click();
			}, 1000);
		}
    }, false);
		
	//簡易關鍵字懸浮視窗 函式
	function keyword_note_show_all_click(button_item) {
        trigger_detailed_note(popup_keyword);

		var popup_frame = button_item.target.parentNode.parentNode;
		popup_frame.style.display = "none";
		popup_frame.style.animation = "none";
		popup_frame.style.opacity = "0";

		popup_is_needrefresh = true;
	}

	function keyword_unknow_function_click(button_item) {
		const keywordSpans = document.querySelectorAll(".highlight-keyword");

		keywordSpans.forEach(function (span) {
			if(span.innerText === popup_keyword){
				span.classList.toggle("keyword-mark-show");
			}
		});

		list_popuphide.push(popup_keyword);

		clearTimeout(timeout_popup_mouseout);

		var popup_frame = button_item.target.parentNode.parentNode;
		popup_frame.style.display = "none";
		popup_frame.style.animation = "none";
		popup_frame.style.opacity = "0";
	}

	function keyword_delete_data_click() {
		var result = confirm("刪除後該關鍵字與其相關筆記是無法找回的，你是否要刪除該關鍵字?");

		if (result === true) {
			if(delete_keyword(popup_keyword)){
				close_popup();
				if(window_keyword == popup_keyword){
					colse_windos();
				}
				remove_delete_keyword_span(popup_keyword);

				trigger_alert_window("該關鍵字與其相關筆記已刪除", 'ok');
			}
		} else {
			return
		}
	}

	function new_keyword_note_input_ctrlS() {
		var note = new_keyword_note_ckeditor.getData();
		if(!is_append){
			add_keyword_note(popup_keyword, note);
            is_append = true;
		}else{
			edit_keyword_note(popup_keyword, note, popup_new_keyword_note_id);
		}

        if(popup_keyword === window_keyword){
            window_is_needrefresh = true;
        }
	}

	function new_keyword_note_input_ctrlN() {
		new_keyword_note_ckeditor.setData('');

		var keyword_data = get_keyword_data(popup_keyword);
		popup_new_keyword_note_id = keyword_data.length;
		is_append = false;
	}

	function remove_delete_keyword_span(delete_keyword){
		const keywordSpans = document.querySelectorAll(".highlight-keyword");

		keywordSpans.forEach(function (span) {
			if(span.innerText === delete_keyword){
				var text = span.parentElement.innerHTML;
				var html = text.replace(new RegExp(`<span class="highlight-keyword keyword-mark-show">${delete_keyword}</span>`, 'g'), delete_keyword);
				html = html.replace(new RegExp(`<span class="highlight-keyword">${delete_keyword}</span>`, 'g'), delete_keyword);
				span.parentElement.innerHTML = html;
			}
		});
	}

	function close_popup(){
		const popup = document.getElementById("popup");

		popup.style.opacity = "0";
		popup_keyword = "";
	}

	//側邊功能欄 函式
	function sidebar_new_keword_button_click(){
		var new_keyword = window.prompt('請輸入新關鍵字', '');
		if (new_keyword !== null && new_keyword !== "") {
			if(keywordsToSearch.indexOf(new_keyword) >= 0){
				trigger_alert_window("該關鍵字已存在", 'error');
				return
			}

			if(keyword_reserved_words.indexOf(new_keyword) >= 0){
				trigger_alert_window("這個關鍵字為系統保留字，無法新增", 'error');
				return
			}

			var new_note = window.prompt('請為新關鍵字輸入新的筆記(可以留空表示建立此關鍵字但無筆記)', '');

			if (new_note !== null) {
				add_newkeyword(new_keyword, new_note);
			}else{
				return
			}

		}else if(new_keyword === ""){
			trigger_alert_window("關鍵字不可為空!", 'warning');
		}else{
			return
		}
	}

	function sidebar_reload_button_click(){
		window_is_needrefresh = true;

		if(!(window_keyword === "")){
			trigger_detailed_note(window_keyword);
		}else{
			trigger_detailed_note(popup_keyword);
		}
	}

	function sidebar_research_button_click(){
		if(!is_areadysearch){
			trigger_alert_window("你還沒有啟動關鍵字功能，請先啟動再使用本功能", 'warning');
			return
		}

		const keywordSpans = document.querySelectorAll(".highlight-keyword");

		keywordSpans.forEach(function (span) {
			span.removeEventListener("mouseover", keyword_mouseover_event);
            span.removeEventListener("mouseout", keyword_mouseout_event);
		});

		searchPageForKeywords();

		const keyword_length = setting_keyword_eventlistener();

		if(keyword_length <= 0){
			trigger_alert_window("未能在目前網頁上找到關鍵字", 'warning');
		}else{
			trigger_alert_window('網頁關鍵字內容已標記', 'ok');
		}
	}

	function sidebar_export_notes_button_click(){
		trigger_alert_window("此功能暫未開放", 'warning');
	}

	function sidebar_inport_notes_button_click(){
		trigger_alert_window("此功能暫未開放", 'warning');
	}

	function keyword_search_input_click(keyword_search_input){
		if(keywordsToSearch.includes(keyword_search_input)){
			trigger_detailed_note(keyword_search_input);
			return true
		}else{
			trigger_alert_window('這個關鍵字不存在', 'warning');
			return false
		}
	}

	//側邊功能欄建議輸入 函式
	function autocomplete(inp, arr) {
	    /*the autocomplete function takes two arguments,
	    the text field element and an array of possible autocompleted values:*/
	    var currentFocus;
	    /*execute a function when someone writes in the text field:*/

	    inp.addEventListener("input", function(e) {
		    var a, b, i, val = this.value;
		    /*close any already open lists of autocompleted values*/
		    closeAllLists();
		    if (!val) { return false;}
		    currentFocus = -1;
		    /*create a DIV element that will contain the items (values):*/
		    a = document.createElement("DIV");
		    a.setAttribute("id", this.id + "autocomplete-list");
		    a.setAttribute("class", "autocomplete-items");
		    /*append the DIV element as a child of the autocomplete container:*/
		    this.parentNode.appendChild(a);
		    /*for each item in the array...*/
		    for (i = 0; i < arr.length; i++) {
				/*check if the item starts with the same letters as the text field value:*/
				if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
					/*create a DIV element for each matching element:*/
					b = document.createElement("DIV");
					/*make the matching letters bold:*/
					b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
					b.innerHTML += arr[i].substr(val.length);
					/*insert a input field that will hold the current array item's value:*/
					b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
					/*execute a function when someone clicks on the item value (DIV element):*/
					b.addEventListener("click", function(e) {
						/*insert the value for the autocomplete text field:*/
						inp.value = this.getElementsByTagName("input")[0].value;
						/*close the list of autocompleted values,
						(or any other open lists of autocompleted values:*/
						closeAllLists();
					});
					a.appendChild(b);
				}
			}
		});

	    /*execute a function presses a key on the keyboard:*/
	    inp.addEventListener("keydown", function(e) {
		    var x = document.getElementById(this.id + "autocomplete-list");
		    if (x) x = x.getElementsByTagName("div");
		    if (e.keyCode == 40) {
				/*If the arrow DOWN key is pressed,
				increase the currentFocus variable:*/
				currentFocus++;
				/*and and make the current item more visible:*/
				addActive(x);
		    } else if (e.keyCode == 38) { //up
				/*If the arrow UP key is pressed,
				decrease the currentFocus variable:*/
				currentFocus--;
				/*and and make the current item more visible:*/
				addActive(x);
		    } else if (e.keyCode == 13) {
				/*If the ENTER key is pressed, prevent the form from being submitted,*/
				e.preventDefault();
				if (currentFocus > -1) {
					/*and simulate a click on the "active" item:*/
					if (x) x[currentFocus].click();
				}
				if (x === null && !(inp.value === "")){
					if(keyword_search_input_click(inp.value)){
						inp.value = "";
					}
				}
			}
		});

		function addActive(x) {
			/*a function to classify an item as "active":*/
			if (!x) return false;
			/*start by removing the "active" class on all items:*/
			removeActive(x);
			if (currentFocus >= x.length) currentFocus = 0;
			if (currentFocus < 0) currentFocus = (x.length - 1);
			/*add class "autocomplete-active":*/
			x[currentFocus].classList.add("autocomplete-active");
		}

		function removeActive(x) {
			/*a function to remove the "active" class from all autocomplete items:*/
			for (var i = 0; i < x.length; i++) {
			x[i].classList.remove("autocomplete-active");
			}
		}

		function closeAllLists(elmnt) {
			/*close all autocomplete lists in the document,
			except the one passed as an argument:*/
			var x = document.getElementsByClassName("autocomplete-items");
			for (var i = 0; i < x.length; i++) {
				if (elmnt != x[i] && elmnt != inp) {
					x[i].parentNode.removeChild(x[i]);
					}
				}
		}

		/*execute a function when someone clicks in the document:*/
		document.addEventListener("click", function (e) {
			closeAllLists(e.target);
		});
	}

	//詳細關鍵字視窗 函式
	function trigger_detailed_note(keyword){
		if(keyword === ""){
			trigger_alert_window('沒有預選關鍵字，是不能打開視窗的\n(請先將滑鼠滑到畫面的關鍵字並在跳出的視窗選"顯示所有筆記")', 'warning');
			return
		}

		var keyword_data = get_keyword_data(keyword);
		var priority_id = get_note_priority(keyword);
        var container = document.getElementById("windos-container");

		if(window_is_needrefresh || !(keyword === window_keyword)){
			var message_container = document.getElementById("windos-message-container");

			var message_blocks = message_container.querySelectorAll(".windos-message-block");

			var count_id = 0;
            //console.log(container.querySelector(".windos-message-title").value);
			container.querySelector(".windos-message-title").innerText = keyword;
			window_keyword = keyword;

			if(keyword_data.length === 0){
				var message_block = document.createElement('div');

				message_block.className = 'windos-message-block';

				message_block.innerHTML = `<div class="windos-message-box">
												<div class="windos-message-content">
													你還沒有關於此關鍵字的筆記喔，趕快紀錄些什麼吧!
												</div>
											</div>
											<div class="windos-timestamp-container">
												<div class="windos-message-timestamp">
													寫程式是件既痛苦又樂在其中的事
												</div>
												<div class="windos-message-buttons-small">
													<button class="windos-message-button" note_id="-1">✏️</button>
													<button class="windos-message-button" note_id="-1">🗑️</button>
												</div>
											</div>`;

				message_buttons = message_block.querySelectorAll(".windos-message-button");

				message_buttons[0].addEventListener('click', windos_message_edit_button_click, false);
				message_buttons[1].addEventListener('click', windos_message_delete_button_click, false);

				message_container.innerHTML = "";
				message_container.appendChild(message_block);
			}else{
				if(message_blocks.length === 1){
					var first_message_block = message_blocks[0].querySelectorAll(".windos-message-button");

					first_message_block.forEach(function (button_data) {
						button_data.setAttribute("note_id", "0");
					});
				}

				keyword_data.forEach(function (note_data) {
					var note_content = note_data[0]

					if(!message_blocks[count_id]){
						var message_block = document.createElement('div');
						message_block.className = 'windos-message-block';
						note_content = note_content.replace(/\r\n/g, "<br />");
						note_content = note_content.replace(/\n/g, "<br />");

						message_block.innerHTML = `<div class="windos-message-box">
														<div class="windos-message-content">
															${note_content}
														</div>
													</div>
													<div class="windos-timestamp-container">
														<div class="windos-message-timestamp">
															${note_data[1]}
														</div>
														<div class="windos-message-buttons-small">
															<button class="windos-message-button" note_id="${count_id}">✏️</button>
															<button class="windos-message-button" note_id="${count_id}">🗑️</button>
														</div>
													</div>`;

						message_buttons = message_block.querySelectorAll(".windos-message-button");

						message_buttons[0].addEventListener('click', windos_message_edit_button_click, false);
						message_buttons[1].addEventListener('click', windos_message_delete_button_click, false);

						message_container.appendChild(message_block);
					}else{
						var exist_block = message_blocks[count_id];
						note_content = note_content.replace(/\r\n/g, "<br />");
						note_content = note_content.replace(/\n/g, "<br />");

						exist_block.querySelector(".windos-message-content").innerHTML = note_content;
						exist_block.querySelector(".windos-message-timestamp").innerText = note_data[1];
					}

					count_id += 1;
				});

				if(count_id < message_blocks.length){
					for (var i = count_id; i < message_blocks.length; i++) {
						var message_buttons = message_blocks[i].querySelectorAll(".windos-message-button");

						message_buttons[0].removeEventListener('click', windos_message_edit_button_click, false);
						message_buttons[1].removeEventListener('click', windos_message_delete_button_click, false);

						message_container.removeChild(message_blocks[i])
					}
				}
			}
		}
		var kewword_sidebar = document.getElementById("kewword_sidebar");

		container.style.top = `${10 + window.scrollY}px`;
        if(getComputedStyle(kewword_sidebar).boxShadow === 'none'){
            container.style.left = '10px';
        }else{
            container.style.left = '260px';
        }

        container.style.zIndex = 10599;
		container.style.opacity = 1;
		window_is_needrefresh = false;
	}

	function windos_message_edit_button_click(trigger_element_data){
		var note_id = trigger_element_data.target.getAttribute('note_id');

		//trigger_alert_window(`此功能暫未開放，but button trigger and note_id is ${note_id}`, 'warning');

		if(note_id == '-1'){
			trigger_alert_window("不存在的筆記不能編輯，因為它只是提示 (你不能編輯提示)", 'warning');
			return
		}

		if(is_editing_id == null){
			const windos_message_block = trigger_element_data.target.parentNode.parentNode.parentNode

			const windos_message_content = windos_message_block.querySelector('.windos-message-content');
			const windos_message_box = windos_message_block.querySelector('.windos-message-box');

			var message_block_edit = document.createElement('textarea');
			message_block_edit.className = 'windos-input-element';
			message_block_edit.value = windos_message_content.innerText.replace("<br />", /\n/g);;
			message_block_edit.setAttribute('type','text');
			message_block_edit.style.height = `${windos_message_box.offsetHeight}px`;

			windos_message_box.replaceWith(message_block_edit);
			is_editing_id = note_id;

		}else if(is_editing_id == note_id){
			const windos_message_block = trigger_element_data.target.parentNode.parentNode.parentNode

			const message_block_edit = windos_message_block.querySelector('.windos-input-element');

			edit_keyword_note(window_keyword, message_block_edit.value, note_id)

			var keyword_data = get_keyword_data(window_keyword);
			var note_content = keyword_data[note_id][0];

			note_content = note_content.replace(/\r\n/g, "<br />");
			note_content = note_content.replace(/\n/g, "<br />");

			var windos_message_box = document.createElement('div');
			windos_message_box.className = 'windos-message-box';

			windos_message_box.innerHTML = `<div class="windos-message-content">
												${note_content}
											</div>`;

			message_block_edit.replaceWith(windos_message_box);
			is_editing_id = null;

		}else{
			trigger_alert_window("你不能在編輯筆記中又編輯其他筆記", 'warning');
			return
		}
	}

	function windos_message_delete_button_click(trigger_element_data){
		var note_id = trigger_element_data.target.getAttribute('note_id');

		if(is_editing_id != null){
			trigger_alert_window('你還在編輯筆記中，不能刪除任何筆記', 'warning');
			return
		}

		if(note_id < 0){
			trigger_alert_window("不存在的筆記不須刪除，因為它本來就不存在 (你不能刪除提示)", 'warning');
			return
		}

		var result = confirm("刪除後該筆記是無法找回的，你是否要刪除該筆記?");

		if (result === true) {
			if(delete_keyword_note(window_keyword, note_id)){
				window_is_needrefresh = true;
				trigger_alert_window("該筆記已刪除", 'ok');

				trigger_detailed_note(window_keyword);
			}
		} else {
			return
		}
	}

	function keyword_note_title_edit_click(){
		trigger_alert_window("此功能暫未開放", 'warning');

		if(is_editing_id != null){
			trigger_alert_window('你還在編輯筆記中，不能編輯任何關鍵字', 'warning');
			return
		}

		var new_keyword = window.prompt('請輸入新關鍵字', '');
		if (new_keyword !== null && new_keyword !== "") {
			if(edit_keyword(new_keyword, window_keyword)){
				window_is_needrefresh = true;

				remove_delete_keyword_span(window_keyword);
				trigger_detailed_note(new_keyword);
			}
		}else if(new_keyword === ""){
			trigger_alert_window("關鍵字不可為空!", 'warning');
		}else{
			return
		}
	}

	function keyword_note_title_delete_click(){
		if(is_editing_id != null){
			trigger_alert_window('你還在編輯筆記中，不能刪除任何關鍵字', 'warning');
			return
		}

		var result = confirm("刪除後該關鍵字與其相關筆記是無法找回的，你是否要刪除該關鍵字?");

		if (result === true) {
			if(delete_keyword(window_keyword)){
				colse_windos();
				remove_delete_keyword_span(window_keyword);

				trigger_alert_window("該關鍵字與其相關筆記已刪除", 'ok');
			}
		} else {
			return
		}
	}

	function windos_close_click(){
		if(is_editing_id != null){
			trigger_alert_window('你還在編輯筆記中，請回去儲存筆記以免損失進度', 'warning');
			return
		}

		var container = document.getElementById("windos-container");

		container.style.opacity = 0;
        container.style.zIndex = -5;
	}

	function outputsize() {
        var windos_container = document.getElementById("windos-container");
        windos_container.style.transition = 'none';
		document.getElementById("windos-message-container").style.height = `${windos_container.offsetHeight - 85}px`;
	}

	function colse_windos(){
		var windos = document.getElementById("windos-container");

		windos.style.zIndex = -5;
		windos.style.opacity = 0;
		window_keyword = "";
	}

	//警報彈窗 函式
	function trigger_alert_window(message, type){
		const alertContainer = document.getElementById('keyword-alertContainer');
		var message_copy = message;
		trigger_alert_id += 1;
		var class_trigger_alert_id = trigger_alert_id;

		if(!alertContainer.classList.contains('keyword-alert-show')){
			alertContainer.classList.add('keyword-alert-show');
		}

		message_copy = message_copy.replace(/\r\n/g,"<br>");
		message_copy = message_copy.replace(/\n/g,"<br>");
		document.getElementById('keyword-alertMessage').innerHTML = message_copy;
		const alertSign = document.getElementById('keyword-alertSign')

		switch (type) {
			case 'error':
				alertContainer.style.backgroundColor = '#EA0000';
				alertSign.innerText = '✖';
				break;

			case 'warning':
				alertContainer.style.backgroundColor = '#FFD306';
				alertSign.innerText = '!';
				break;

			case 'ok':
				alertContainer.style.backgroundColor = '#00A600';
				alertSign.innerText = '✔';
				break;

			default:
				return
		}

		setTimeout(() => {
			if(class_trigger_alert_id == trigger_alert_id){
				alertContainer.classList.remove('keyword-alert-show');
			}
		}, 2000);
	}

	//設定彈窗 函式
	function setting_keyword_css_click(){
		var input_box = document.getElementById("keyword-setting-css-input-box");

		setting_init_setting('keywordspancss', input_box.value);
	}

	//插入可視元素與樣式到網頁上 函式
	function keyword_insert_html(){
		var keyword_container = document.createElement('keywordnote');

        keyword_container.innerHTML = '	<nav class="keyword-sidebar keyword-closed" id="kewword_sidebar">\
											<header>\
												<div class="image-text">\
													<span class="keyword-image">\
														<img src="data:image/png;base64,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" alt="">\
													</span>\
													<div class="keyword-text logo-text">\
														<span class="name">Keyword Notes</span>\
														<span class="profession">by Wannazzz</span>\
													</div>\
												</div>\
												<i class="bx bx-chevron-right toggle"></i>\
											</header>\
											<div class="menu-bar">\
												<div class="menu-keyword">\
													<li class="search-box">\
														<i class="bx bx-search keyword-icon"></i>\
														<form autocomplete="off" action="">\
															<input id="keyword-search-input" type="text" placeholder="search note...">\
														</form>\
													</li>\
													<ul class="menu-links">\
														<li class="nav-link">\
															<button id="sidebar-new-keword-button">\
																<i class="bx bx-append-alt keyword-icon"></i>\
																<span class="keyword-text nav-text">Add new keyword</span>\
															</button>\
														</li>\
														<li class="nav-link">\
															<button id="sidebar-refresh-button">\
																<i class="bx bx-refresh-alt keyword-icon"></i>\
																<span class="keyword-text nav-text">Refresh notes</span>\
															</button>\
														</li>\
														<li class="nav-link">\
															<button id="sidebar-research-button">\
																<i class="bx bx-refresh-alt keyword-icon"></i>\
																<span class="keyword-text nav-text">Research marks</span>\
															</button>\
														</li>\
														<li class="nav-link">\
															<button id="sidebar-setting-button">\
																<i class="bx bx-setting-alt keyword-icon"></i>\
																<span class="keyword-text nav-text">Setting</span>\
															</button>\
														</li>\
														<li class="nav-link">\
															<button id="sidebar-export-notes-button">\
																<i class="bx bx-export-alt keyword-icon"></i>\
																<span class="keyword-text nav-text">Export notes</span>\
															</button>\
														</li>\
														<li class="nav-link">\
															<button id="sidebar-inport-notes-button">\
																<i class="bx bx-import-alt keyword-icon"></i>\
																<span class="keyword-text nav-text">Import notes</span>\
															</button>\
														</li>\
													</ul>\
												</div>\
												<div class="bottom-content">\
													<li class="start-up">\
														<div class="show_unshow">\
															<i class="bx bx-show keyword-icon k-show"></i>\
															<i class="bx bx-unshow keyword-icon k-unshow"></i>\
														</div>\
														<span class="mode-text-start keyword-text">Start up</span>\
														<div class="toggle-switch-start">\
															<span class="switch-start"></span>\
														</div>\
													</li>\
													<li class="mode">\
														<div class="sun-moon">\
															<i class="bx bx-moon keyword-icon k-moon"></i>\
															<i class="bx bx-sun keyword-icon k-sun"></i>\
														</div>\
														<span class="mode-text keyword-text">Light mode</span>\
														<div class="toggle-switch-mode">\
															<span class="switch-mode"></span>\
														</div>\
													</li>\
												</div>\
											</div>\
										</nav>\
										<div class="popup" id="popup">\
											<h1 id="keyword_title">某個關鍵字</h1>\
											<div class="keyword-button-container">\
												<button id="keyword_note_show_all" class="button">顯示所有筆記</button>\
												<button id="keyword_unknow_function" class="button">隱藏本關鍵字</button>\
												<button id="keyword_delete_data" class="button">刪除本關鍵字</button>\
											</div>\
											<div class="text-container">\
												<div id="keyword_note_showup" class="rounded-rectangle">\
													這是一個圓角矩形。<br>\
													它的高度會隨著文字內容而變化，但上下邊距保持8px。\
												</div>\
												<div id="new_keyword_note_input" class="input-element"></div>\
											</div>\
										</div>\
										<div class="windos-container" id="windos-container">\
											<div class="windos-message-titlebar" id="windos-message-titlebar">\
												<button class="windos-message-button" id="windos-close-button">❌</button>\
											</div>\
											<div class="windos-workspace">\
												<div class="windos-message-header">\
													<h1 class="windos-message-title" id="windos-message-title">標題</h1>\
													<div class="windos-message-buttons">\
														<button class="windos-message-button" id="windos-title-edit-button">✏️</button>\
														<button class="windos-message-button" id="windos-title-delete-button">🗑️</button>\
													</div>\
												</div>\
												<div class="windos-message-container" id="windos-message-container">\
												</div>\
											</div>\
										</div>\
										<div id="keyword-alertContainer">\
											<i id="keyword-alertSign" class="keyword-alert-exclamation">!</i>\
											<div id="keyword-alertMessage">\
												此功能暫未開放\
											</div>\
										</div>\
										<div class="keyword-overlay" id="overlay">\
											<div class="keyword-settings-container">\
												<h2>設定</h2>\
												<li class="k-is-auto">\
													<span class="isauto-text-start keyword-text-setting">此網域 "手動" 尋找關鍵字</span>\
													<div class="toggle-switch-on">\
														<span class="switch-on"></span>\
													</div>\
												</li>\
												<li class="k-init-mode">\
													<span class="initmode-text-start keyword-text-setting">初始 "明亮" 模式</span>\
													<div class="toggle-switch-initmode">\
														<span class="switch-initmode"></span>\
													</div>\
												</li>\
												<div class="k-span-style">\
													<div class="k-span-style-box">\
														<span class="keyword-text-setting">關鍵字css樣式</span>\
														<textarea id="keyword-setting-css-input-box" rows="4" class="input-box" placeholder="在此輸入關鍵字css樣式"></textarea>\
													</div>\
													<div style="display: flex;justify-content: flex-end;">\
														<button id="keyword-setting-css-save-button" class="save-button">儲存</button>\
													</div>\
												</div>\
											</div>\
										</div>';

        document.body.appendChild(keyword_container);
	}

	function keyword_insert_css(){
		//設定彈窗
		GM_addStyle('keywordnote .keyword-overlay {\
						display: none;\
						position: fixed;\
						top: 0;\
						left: 0;\
						width: 100%;\
						height: 100%;\
						background-color: rgba(0, 0, 0, 0.5);\
						align-items: center;\
						justify-content: center;\
						transition: var(--tran-03);\
						z-index: 15000;\
					}\
					keywordnote .keyword-settings-container {\
						background-color: var(--sidebar-color);\
						color: var(--text-color);\
						transition: var(--tran-05);\
						border-radius: 6px;\
						padding: 20px;\
						width: 350px;\
						text-align: center;\
					}\
					keywordnote .save-button {\
						list-style: none;\
						background-color: transparent;\
						display: flex;\
						align-items: center;\
						border-radius: 6px;\
						text-decoration: none;\
						transition: var(--tran-03);\
						border: none;\
						width: 50px;\
						position: relative;\
						margin-bottom: 12px;\
						margin-right: 15px;\
						justify-content: center;\
					}\
					keywordnote .save-button:hover{\
						background-color: var(--primary-color-light-popup);\
						color: var(--primary-text-light-popup);\
					}\
					keywordnote .keyword-settings-container li{\
						height: 50px;\
						list-style: none;\
						display: flex;\
						align-items: center;\
						margin-top: 10px;\
					}\
					keywordnote .keyword-settings-container .k-is-auto,\
					keywordnote .keyword-settings-container .k-init-mode{\
						border-radius: 6px;\
						background-color: var(--primary-color-light);\
						position: relative;\
						transition: var(--tran-05);\
						padding: 0 15px;\
					}\
					keywordnote .keyword-settings-container .k-span-style {\
						display: flex;\
						border-radius: 6px;\
						background-color: var(--primary-color-light);\
						position: relative;\
						transition: var(--tran-05);\
						margin-top: 10px;\
						flex-direction: column;\
					}\
					keywordnote .keyword-settings-container .k-span-style-box{\
						display: flex;\
						flex-direction: column;\
						align-items: flex-start;\
						padding: 9px 15px;\
					}\
					keywordnote .keyword-settings-container .toggle-switch-on,\
					keywordnote .keyword-settings-container .toggle-switch-initmode{\
						position: absolute;\
						right: 0;\
						height: 100%;\
						min-width: 60px;\
						display: flex;\
						align-items: center;\
						justify-content: center;\
						border-radius: 6px;\
						cursor: pointer;\
					}\
					keywordnote .keyword-settings-container .switch-on,\
					keywordnote .keyword-settings-container .switch-initmode{\
						position: relative;\
						height: 22px;\
						width: 40px;\
						border-radius: 25px;\
						background-color: var(--toggle-color);\
						transition: var(--tran-05);\
					}\
					keywordnote .keyword-settings-container .switch-on::before,\
					keywordnote .keyword-settings-container .switch-initmode::before{\
						content: "";\
						position: absolute;\
						height: 15px;\
						width: 15px;\
						border-radius: 50%;\
						top: 50%;\
						left: 5px;\
						transform: translateY(-50%);\
						background-color: var(--sidebar-color);\
						transition: var(--tran-04);\
					}\
					keywordnote .keyword-settings-container .k-is-auto.on .switch-on::before,\
					keywordnote .keyword-settings-container .k-init-mode.on .switch-initmode::before{\
						left: 20px;\
					}\
					keywordnote .keyword-settings-container .keyword-text-setting{\
						font-size: 17px;\
						font-weight: 500;\
						white-space: nowrap;\
						opacity: 1;\
					}\
					keywordnote .keyword-settings-container .keyword-text-setting{\
						color: var(--text-color);\
						transition: var(--tran-03);\
					}\
					keywordnote .keyword-settings-container .input-box{\
						height: 200px;\
						resize: vertical;\
						margin-top: 5px;\
						max-height: 360px;\
						min-height: 100px;\
						width: 100%;\
						border-radius: 6px;\
						padding: 8px;\
						font-size: 15px;\
						box-sizing: border-box;\
						background-color: var(--primary-color-light);\
						color: var(--text-color);\
						border: 1px solid #ccc;\
					}\
					keywordnote h2{\
						display: block;\
						font-size: 25px;\
						margin-block-start: 0.83em;\
						margin-block-end: 0.83em;\
						margin-inline-start: 0px;\
						margin-inline-end: 0px;\
						font-weight: bold;\
					}\
		');

		//警報彈窗
		GM_addStyle('keywordnote .keyword-alert-show {\
						right: 0 !important; /* 弹出到右上角 */\
						opacity: 1 !important; /* 可见 */\
					}\
					keywordnote .keyword-alert-exclamation {\
						font-size: 25px;\
						color: white;\
						font-family: sans-serif;\
						font-style: normal;\
						padding: 2.5px 20px 2.5px 0;\
						font-weight: bold;\
					}\
					keywordnote #keyword-alertContainer {\
						display: flex;\
						position: fixed;\
						top: 20px;\
						right: -300px;\
						background-color: #00A600;\
						padding: 5px 0px 3px 20px;\
						box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);\
						transition: right 0.5s ease-in-out, opacity 0.5s ease-in-out;\
						opacity: 0;\
						flex-direction: row;\
						align-items: flex-start;\
						z-index: 10600;\
					}\
					keywordnote #keyword-alertMessage {\
						background-color: #FFFFFF;\
						padding: 10px;\
						height: 100%;\
						font-family: "Poppins", sans-serif;\
						color: #707070;\
						font-weight: bold;\
					}\
		');

		//側邊功能欄建議輸入
		GM_addStyle('.autocomplete-items {\
						position: absolute;\
						border: 1px solid #d4d4d4;\
						border-bottom: none;\
						border-top: none;\
						z-index: 10599;\
						/*position the autocomplete items to be the same width as the container:*/\
						left: 0;\
						right: 0;\
					}\
					.autocomplete-items div {\
						padding: 10px;\
						cursor: pointer;\
						background-color: var(--sidebar-color); \
						border-bottom: 1px solid #d4d4d4; \
						color: var(--text-color);\
					}\
					/*when hovering an item:*/\
					.autocomplete-items div:hover {\
						background-color: #e9e9e9; \
						color: var(--sidebar-color);\
					}\
					/*when navigating through the items using the arrow keys:*/\
					.autocomplete-active {\
						background-color: DodgerBlue !important; \
						color: #ffffff; \
					}\
		');

		//簡易關鍵字懸浮視窗
		GM_addStyle('@keyframes fade {from {opacity: 0;}to {opacity: 1;}}\
					@keyframes fadeOut {from {opacity: 1;}to {opacity: 0;}}\
					keywordnote .popup {\
						display: none;\
						position: absolute;\
						background-color: var(--sidebar-color);\
						color: var(--text-color);\
						padding: 10px;\
						box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\
						text-align: center; /* 居中文本 */\
						border-radius: 15px;\
						z-index: 10600;\
					}\
					/* 標題樣式 */\
					keywordnote .popup h1 {\
						font-size: 24px;\
						margin-top: 5px; /* 與下方按鈕保持間距 */\
						margin-bottom: 10px;\
					}\
					/* 三個並排的按鈕樣式 */\
					keywordnote .popup .keyword-button-container {\
						display: flex;\
						justify-content: space-between;\
						margin-bottom: 16px; /* 與下方圓角矩形保持間距 */\
					}\
					keywordnote .popup .text-container {\
						display: flex;\
						flex-direction: column; /* 垂直布局 */\
						align-items: stretch; /* 拉伸元素以填充整个宽度 */\
						text-align: left; /* 居中文本 */\
					}\
					keywordnote .popup .button {\
						flex: 1;\
						padding: 8px;\
						border: none;\
						border-radius: 4px;\
						cursor: pointer;\
						margin-right: 8px; /* 按鈕間距 */\
						background-color: var(--primary-color-light);\
						color: var(--text-color);\
					}\
					keywordnote .popup .button:hover{\
						background-color: var(--primary-color-light-popup);\
						color: var(--primary-text-light-popup);\
						transition: var(--tran-05);\
					}\
					/* 圓角矩形樣式 */\
					keywordnote .popup .rounded-rectangle{\
						font-size: 15px;\
						background-color: var(--primary-color-light);\
						border-radius: 8px;\
						margin-bottom: 8px; /* 與下方輸入框保持間距 */\
						flex: 1; /* 將寬度設置為彼此相等 */\
						padding: 8px; /* 可以根據需要添加內邊距 */\
						resize: none;\
					}\
					keywordnote .popup .input-element{\
						font-size: 15px;\
						box-sizing: border-box;\
						background-color: var(--primary-color-light);\
						color: var(--text-color);\
						border-radius: 8px !important;\
						margin-bottom: 8px; /* 與下方輸入框保持間距 */\
						resize: vertical;\
						overflow: hidden;\
						border: 1px solid #ccc;\
						padding: 8px;\
						list-style-position: inside;\
					}\
		');

		//側邊功能欄
		GM_addStyle('keywordnote .bx-chevron-right:before {\
						content:">"\
					}\
					\
					keywordnote .bx-search:before{\
						content:"🔍"\
					}\
					\
					keywordnote .bx-refresh-alt:before{\
						content:"🔄"\
					}\
					\
					keywordnote .bx-setting-alt:before{\
						content:"⚙️"\
					}\
					\
					keywordnote .bx-export-alt:before{\
						content:"📤"\
					}\
					\
					keywordnote .bx-import-alt:before{\
						content:"📥"\
					}\
					\
					keywordnote .bx-append-alt:before{\
						content:"🗒️"\
					}\
					\
					.bx-sun:before {\
						content: "☀️";\
					}\
					\
					.bx-moon:before {\
						content: "🌙";\
					}\
					\
					.bx-show:before {\
						content: "🟢";\
					}\
					\
					.bx-unshow:before {\
						content: "🔴";\
					}\
					\
					keywordnote .bx{\
						font-family:boxicons!important;\
						font-weight:400;\
						font-style:normal;\
						font-variant:normal;\
						line-height:1;\
						text-rendering:auto;\
						display:inline-block;\
						text-transform:none;\
						speak:none;\
						-webkit-font-smoothing:antialiased;\
						-moz-osx-font-smoothing:grayscale\
					}\
					\
					keywordnote *{\
						margin: 0;\
						padding: 0;\
						box-sizing: border-box;\
						font-family: "Poppins", sans-serif;\
					}\
					\
					keywordnote ::selection{\
						background-color: var(--primary-color-light-popup);\
						color: var(--primary-text-light-popup);\
					}\
					\
					keywordnote{\
						background-color: var(--body-color);\
						transition: var(--tran-05);\
					}\
					\
					keywordnote{\
						/* ===== Colors ===== */\
						--body-color: #E4E9F7;\
						--sidebar-color: #FFF;\
						--primary-color: #695CFE;\
						--primary-color-light: #F6F5FF;\
						--primary-color-light-popup: #695CFE;\
						--primary-text-light-popup: #FFF;\
						--toggle-color: #DDD;\
						--text-color: #707070;\
						/* ====== Transition ====== */\
						--tran-03: all 0.2s ease;\
						--tran-03: all 0.3s ease;\
						--tran-04: all 0.3s ease;\
						--tran-05: all 0.3s ease;\
					}\
					\
					keywordnote.dark{\
						--body-color: #18191a;\
						--sidebar-color: #242526;\
						--primary-color: #3a3b3c;\
						--primary-color-light: #3a3b3c;\
						--primary-color-light-popup: #4D4F51;\
						--primary-text-light-popup: #ccc;\
						--toggle-color: #fff;\
						--text-color: #ccc;\
					}\
					\
					/* ===== Sidebar ===== */\
					\
					keywordnote .keyword-sidebar{\
						position: fixed;\
						top: 0;\
						left: 0;\
						height: 100%;\
						width: 250px;\
						padding: 10px 14px;\
						background: var(--sidebar-color);\
						transition: var(--tran-05);\
						z-index: 10600;  \
						box-shadow: 10px 0px 10px rgba(0, 0, 0, 0.2);\
						border-radius: 0 15px 15px 0;\
					}\
					\
					keywordnote .keyword-sidebar.keyword-closed {\
						transform: translateX(-100%);\
						box-shadow: none;\
					}\
					\
					/* ===== Reusable code - Here ===== */\
					keywordnote .keyword-sidebar li{\
						height: 50px;\
						list-style: none;\
						display: flex;\
						align-items: center;\
						margin-top: 10px;\
					}\
					keywordnote .keyword-sidebar header .keyword-image,\
					keywordnote .keyword-sidebar .keyword-icon{\
						min-width: 60px;\
						border-radius: 6px;\
					}\
					keywordnote .keyword-sidebar .keyword-icon{\
						min-width: 60px;\
						border-radius: 6px;\
						height: 100%;\
						display: flex;\
						align-items: center;\
						justify-content: center;\
						font-size: 20px;\
					}\
					keywordnote .keyword-sidebar .keyword-text,\
					keywordnote .keyword-sidebar .keyword-icon{\
						color: var(--text-color);\
						transition: var(--tran-03);\
					}\
					keywordnote .keyword-sidebar .keyword-text{\
						font-size: 17px;\
						font-weight: 500;\
						white-space: nowrap;\
						opacity: 1;\
					}\
					keywordnote .keyword-sidebar.keyword-closed .keyword-text{\
						opacity: 0;\
					}\
					/* =========================== */\
					\
					keywordnote .keyword-sidebar header{\
						position: relative;\
					}\
					keywordnote .keyword-sidebar header .image-text{\
						display: flex;\
						align-items: center;\
					}\
					keywordnote .keyword-sidebar header .logo-text{\
						display: flex;\
						flex-direction: column;\
					}\
					keywordnote header .image-text .name {\
						margin-top: 2px;\
						font-size: 18px;\
						font-weight: 600;\
					}\
					keywordnote header .image-text .profession{\
						margin-top: 2px;\
						font-size: 12px;\
						display: block;\
					}\
					keywordnote .keyword-sidebar header .keyword-image{\
						display: flex;\
						align-items: center;\
						justify-content: center;\
					}\
					keywordnote .keyword-sidebar header .keyword-image img{\
						width: 40px;\
						border-radius: 6px;\
					}\
					\
					keywordnote .keyword-sidebar.keyword-closed header .toggle{\
						transform: translateY(-50%) rotate(0deg);\
						box-shadow: none;\
					}\
					\
					keywordnote .keyword-sidebar header .toggle{\
						position: absolute;\
						top: 50%;\
						right: -25px;\
						transform: translateY(-50%) rotate(180deg);\
						height: 25px;\
						width: 25px;\
						background-color: var(--primary-color);\
						color: var(--sidebar-color);\
						border-radius: 50%;\
						display: flex;\
						align-items: center;\
						justify-content: center;\
						font-size: 22px;\
						cursor: pointer;\
						transition: var(--tran-05);\
						box-shadow: -10px 0px 10px rgba(0, 0, 0, 0.2);\
					}\
					\
					keywordnote.dark .keyword-sidebar header .toggle{\
						color: var(--text-color);\
					}\
					\
					keywordnote .keyword-sidebar .menu-keyword{\
						margin-top: 20px;\
					}\
					\
					keywordnote .keyword-sidebar li.search-box{\
						border-radius: 6px;\
						background-color: var(--primary-color-light);\
						cursor: pointer;\
						transition: var(--tran-05);\
					}\
					keywordnote .keyword-sidebar li.search-box input{\
						height: 100%;\
						width: 100%;\
						outline: none;\
						border: none;\
						background-color: var(--primary-color-light);\
						color: var(--text-color);\
						border-radius: 6px;\
						font-size: 17px;\
						font-weight: 500;\
						transition: var(--tran-05);\
					}\
					keywordnote .keyword-sidebar li button{\
						list-style: none;\
						height: 100%;\
						background-color: transparent;\
						display: flex;\
						align-items: center;\
						height: 100%;\
						width: 100%;\
						border-radius: 6px;\
						text-decoration: none;\
						transition: var(--tran-03);\
						border: none;\
					}\
					keywordnote .keyword-sidebar li button:hover{\
						background-color: var(--primary-color);\
					}\
					keywordnote .keyword-sidebar li button:hover .keyword-icon,\
					keywordnote .keyword-sidebar li button:hover .keyword-text{\
						color: var(--sidebar-color);\
					}\
					keywordnote.dark .keyword-sidebar li button:hover .keyword-icon,\
					keywordnote.dark .keyword-sidebar li button:hover .keyword-text{\
						color: var(--text-color);\
					}\
					keywordnote .keyword-sidebar .menu-bar{\
						height: calc(100% - 55px);\
						display: flex;\
						flex-direction: column;\
						justify-content: space-between;\
						overflow-y: scroll;\
					}\
					keywordnote .menu-bar::-webkit-scrollbar{\
						display: none;\
					}\
					keywordnote .keyword-sidebar .menu-bar .mode,\
					keywordnote .keyword-sidebar .menu-bar .start-up{\
						border-radius: 6px;\
						background-color: var(--primary-color-light);\
						position: relative;\
						transition: var(--tran-05);\
					}\
					keywordnote .menu-bar .mode .sun-moon,\
					keywordnote .menu-bar .start-up .show_unshow{\
						height: 50px;\
						width: 60px;\
					}\
					keywordnote .mode .sun-moon i,\
					keywordnote .start-up .show_unshow i{\
						position: absolute;\
					}\
					keywordnote .mode .sun-moon i.k-moon,\
					keywordnote .start-up .show_unshow i.k-show{\
						opacity: 0;\
					}\
					keywordnote.dark .mode .sun-moon i.k-moon,\
					keywordnote .start-up.on .show_unshow i.k-show{\
						opacity: 1;\
					}\
					keywordnote.dark .mode .sun-moon i.k-sun,\
					keywordnote .start-up.on .show_unshow i.k-unshow{\
						opacity: 0;\
					}\
					keywordnote .menu-bar .bottom-content .toggle-switch-mode,\
					keywordnote .menu-bar .bottom-content .toggle-switch-start{\
						position: absolute;\
						right: 0;\
						height: 100%;\
						min-width: 60px;\
						display: flex;\
						align-items: center;\
						justify-content: center;\
						border-radius: 6px;\
						cursor: pointer;\
					}\
					keywordnote .toggle-switch-mode .switch-mode,\
					keywordnote .toggle-switch-start .switch-start{\
						position: relative;\
						height: 22px;\
						width: 40px;\
						border-radius: 25px;\
						background-color: var(--toggle-color);\
						transition: var(--tran-05);\
					}\
					keywordnote .switch-mode::before,\
					keywordnote .switch-start::before{\
						content: "";\
						position: absolute;\
						height: 15px;\
						width: 15px;\
						border-radius: 50%;\
						top: 50%;\
						left: 5px;\
						transform: translateY(-50%);\
						background-color: var(--sidebar-color);\
						transition: var(--tran-04);\
					}\
					keywordnote.dark .switch-mode::before{\
						left: 20px;\
					}\
					\
					keywordnote .start-up.on .switch-start::before{\
						left: 20px;\
					}\
		');

		//詳細關鍵字視窗
		GM_addStyle('body.windos-container-moving{\
						user-select:none; /* standard syntax */\
						  -webkit-user-select:none; /* for Chrome、Safari */\
						  -moz-user-select:none; /* for Mozilla、Firefox */\
					}\
					keywordnote .windos-container {\
						opacity: 0;\
						margin: 10px;\
						border-radius: 10px;\
						position: absolute;\
						width: 400px;\
						background-color: var(--sidebar-color);\
						color: var(--text-color);\
						box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);\
						resize: both;\
						overflow: hidden;\
						height: 400px;\
						max-width: 700px;\
						max-height: 600px;\
						min-width: 300px;\
						min-height: 300px;\
						z-index: -5;\
						transition: var(--tran-05);\
					}\
					\
					keywordnote .windos-message-box {\
						display: flex;\
						flex-direction: column;\
						align-items: stretch;\
						margin-top: 10px;\
						padding: 8px;\
						border-radius: 10px;\
						background-color: var(--primary-color-light);\
						transition: var(--tran-05);\
					}\
					keywordnote .windos-input-element {\
						font-size: 15px;\
						box-sizing: border-box;\
						background-color: var(--primary-color-light);\
						color: var(--text-color);\
						margin-top: 10px;\
						padding: 8px;\
						border-radius: 10px;\
						resize: vertical;\
						overflow: hidden;\
						border: 1px solid #ccc;\
						padding: 8px;\
						width: 100%;\
					}\
					\
					keywordnote .windos-message-titlebar {\
						height: 35px;\
						display: flex;\
						align-items: center;\
						flex-direction: row-reverse;\
						padding: 5px 5px;\
						background-color: var(--primary-color-light);\
						transition: var(--tran-05);\
						border-radius: 10px 10px 0 0;\
					}\
					\
					keywordnote .windos-workspace {\
						padding: 5px 8px 8px;\
					}\
					\
					keywordnote .windos-message-header {\
						display: flex;\
						align-items: flex-end;\
						justify-content: space-between;\
						margin-bottom: 5px;\
						margin-left: 8px;\
						margin-right: 8px;\
					}\
					\
					keywordnote .windos-message-title {\
						text-align: left;\
						font-size: 28px;\
						margin: 0;\
					}\
					\
					keywordnote .windos-message-buttons {\
						text-align: right;\
					}\
					\
					keywordnote .windos-message-container {\
						margin: 0 0 8px;\
						overflow-y: scroll;\
						width: 100%;\
						/*max-height: 510px;*/\
					}\
					\
					keywordnote .windos-message-content {\
						list-style-position: inside;\
					}\
					keywordnote .windos-message-content .table table{\
						border: 1px double #b3b3b3;\
						border-collapse: collapse;\
						border-spacing: 0;\
						height: 100%;\
						width: 100%;\
					}\
					keywordnote .windos-message-content .table table td, keywordnote .windos-message-content .table table th {\
						border: 1px solid #bfbfbf;\
						min-width: 2em;\
						padding: 0.4em;\
					}\
					\
					keywordnote .windos-message-timestamp {\
						text-align: left;\
						float: left;\
						font-size: 12px;\
						line-height: 12px;\
						color: #a3a3a3;\
					}\
					\
					.windos-message-buttons-small {\
						text-align: right;\
						float: right;\
					}\
					\
					keywordnote .windos-message-button {\
						display: inline-block;\
						padding: 1px 5px;\
						border: none;\
						border-radius: 5px;\
						cursor: pointer;\
						font-size: 12px;\
						background-color: var(--primary-color-light);\
						color: var(--text-color);\
						transition: var(--tran-05);\
					}\
					keywordnote .windos-message-button:hover{\
						background-color: var(--primary-color-light-popup);\
						color: var(--primary-text-light-popup);\
					}\
					\
					keywordnote .windos-timestamp-container {\
						display: flex;\
						justify-content: space-between;\
						align-items: center;\
						margin: 2px 8px 8px;\
					}\
					\
					keywordnote .windos-message-block {\
						margin: 0 8px;\
						border-bottom: 1px solid #e3e3e3;\
					}\
		');
	
		//CKEditor 5 文字編輯器設定
		GM_addStyle(':root {\
						--ck-z-default: 10000 !important;\
					}\
		');
	}
})();