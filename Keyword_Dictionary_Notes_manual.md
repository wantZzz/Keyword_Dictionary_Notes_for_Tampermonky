# Keyword Dictionary Notes 使用手冊

### **❗備註: Keyword Dictionary Notes 使用手冊現處於 v0.1.2.dev-0 ，若有 新版 發布本使用手冊可能會修改**

一個能夠在各網站以關鍵字紀錄筆記的油猴插件 \
A Tampermonky plug-in that can record notes based on keywords on various websites

**注意 | Notice :** \
現有版本只支持繁體中文 | The current version only supports Traditional Chinese

## 🔝 取得所有版本

https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/releases

## 📖 使用須知

**注意! 部分網站可能會無法正常顯示插件或是被遮擋!**

## 📥 如何安裝本插件
**你能從 [這裡](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/releases/latest) 取得最新版本並下載 `Keyword Dictionary Notes.user.js` 以供後續步驟使用**

1. 到 [chrome 線上應用程式商店](https://chrome.google.com/webstore/category/extensions) 
2. 搜尋 **tampermonkey** 並加到chrome
3. 在 chrome 右上角找到 **擴充功能(圖標為🧩)** 並點選
4. 點下你剛下載的擴充功能，名稱為 **竄改猴** 或 **Tampermonky**
5. 進入 Tampermonky 的控制台(會新開分頁)
6. 進到 **匯入匯出工具**
7. 找到 **匯入** 並選擇檔案 **Keyword Dictionary Notes.user.js**
8. 點下 **安裝** 完成插件安裝

## 🔠 文檔裡的名詞解釋

### 側邊欄

> 到網頁左上角找到 **一半露出來的圓形圖示** 並點擊彈出的功能欄

![image](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/github_manual_img/0-0-0.png)![image](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/github_manual_img/0-0-1.png)
### 簡易關鍵字懸浮視窗

> 將滑鼠移到在網頁中被標記起來的關鍵字，懸停並等待幾秒所彈出的懸浮視窗

![image](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/github_manual_img/0-1-0.png)

### 詳細關鍵字視窗

> 方法1.開啟側邊欄在搜尋框輸入其關鍵字名稱並按下enter後所彈出的視窗

> 方法2.在簡易關鍵字懸浮視窗並按下 `顯示所有筆記` 按鈕後所彈出的視窗

![image](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/github_manual_img/0-2-0.png)

## 📥 基礎功能

### 搜尋網頁中的關鍵字

> 開啟側邊欄找到 `Start up` 並滑動下方滑桿開啟功能

### 新增關鍵字

> 開啟側邊欄並點擊 `Add new keyword`

### 刪除關鍵字

> 方法1.在詳細關鍵字視窗點下 `🗑️` 即可

> 方法2.在簡易關鍵字並按下 `刪除本關鍵字` 按鈕

### 編輯關鍵字

> 在詳細關鍵字視窗點下 `✏️` 即可

### 新增關鍵字筆記

> 從頁面上找到標記起的關鍵字並開啟簡易關鍵字懸浮視窗，在文字框輸入筆記內容，若要儲存筆記使用快捷鍵 `Ctrl + S`

tips: 使用快捷鍵 `Ctrl + N` 可再寫一份新筆記，但 **請先儲存之前對筆記的更改(不會自動儲存)**

### 刪除關鍵字筆記

> 在詳細關鍵字視窗並找到該筆記並點下 `🗑️` 即可

### 編輯關鍵字筆記

> 在詳細關鍵字視窗並找到該筆記並點下 `✏️` 即可，儲存更改只需再點一次即可儲存

### 切換 明亮/黑暗 模式

> 開啟側邊欄找到 `Light/Dark mode` 並滑動下方滑桿切換模式

## 📥 進階功能

### 重置詳細關鍵字視窗

> 開啟側邊欄並按下 `Refresh notes`

### 顯示/隱藏 所有關鍵字標記

> 在 **搜尋網頁中的關鍵字後** 開啟側邊欄找到 `Show/Hide mark` 並滑動下方滑桿切換所有標記的顯示與否

### 顯示/隱藏 特定關鍵字標記

> 在簡易關鍵字並按下 `隱藏本關鍵字` 即可隱藏關鍵字，**若要重新顯示需 顯示所有關鍵字標記**

### 設定自動在特定網頁開啟關鍵字標記

> 在特定網頁開啟側邊欄並按下 `Setting` ，找到 `此網域 "手動" 尋找關鍵字` 切換成 `此網域 "自動" 尋找關鍵字`

### 自訂關鍵字標記 css 樣式

> 開啟側邊欄並按下 `Setting` ，在 `關鍵字css樣式` 下方的輸入框輸入 css 樣式，輸入後按下 `儲存` 保存設定\
> **只需 '屬性與其值' 不需設定 '選擇器'**
