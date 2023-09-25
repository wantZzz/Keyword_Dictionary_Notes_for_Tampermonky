# Tampermonky_Keyword_Dictionary_Notes
一個能夠在各網站以關鍵字紀錄筆記的油猴插件 \
A Tampermonky plug-in that can record notes based on keywords on various websites

![image](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/github_sidepicture.png)

**❗注意 | Notice :** 
1. 現有版本只支持繁體中文 | The current version only supports Traditional Chinese
2. 本腳本如需升級版本需手動更新 | You need to update manually if you need to upgrade to the new version

**詳細的使用請見手冊 | Please refer to the manual for detailed usage:** \
[Keyword Dictionary Notes 使用手冊](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/Keyword_Dictionary_Notes_manual.md)

## 🔝 取得所有版本

https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/releases

或者 [點我](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/releases/latest) 取得最新版本

## 📖 使用須知

**注意! 部分網站可能會無法正常顯示插件或是被遮擋!**

已知會引發錯誤的網站:
- ~~https://stackoverflow.com/ (側邊欄無法正常開啟與插件視窗被遮擋)~~

## 📥 如何安裝與使用

### 安裝
**你能從 [這裡](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/releases/latest) 取得最新版本並下載 `Keyword Dictionary Notes.user.js` 以供後續步驟使用**

1. 到 [chrome 線上應用程式商店](https://chrome.google.com/webstore/category/extensions) 
2. 搜尋 **tampermonkey** 並加到chrome
3. 在 chrome 右上角找到 **擴充功能(圖標為🧩)** 並點選
4. 點下你剛下載的擴充功能，名稱為 **竄改猴** 或 **Tampermonky**
5. 進入 Tampermonky 的控制台(會新開分頁)
6. 進到 **匯入匯出工具**
7. 找到 **匯入** 並 "選擇檔案" ，找到你剛下載本的 **Keyword Dictionary Notes.user.js** 選擇並匯入
8. 點下 **安裝** 完成插件安裝

### 使用

> 詳細的使用請見手冊: [Keyword Dictionary Notes 使用手冊](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/Keyword_Dictionary_Notes_manual.md)

1. 開啟任意 **http** / **https** 網頁並等待載入完成
2. 到左上角找到 **一半露出來的圓形圖示** 並點擊

![image](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/using_clip1.png)

3. 開啟 **Start up** 即可開啟插件

![image](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/using_clip2.png)

### 更新
1. 在 chrome 右上角找到 **擴充功能(圖標為🧩)** 並點選
2. 點下擴充功能，名稱為 **竄改猴** 或 **Tampermonky**
3. 進入 Tampermonky 的控制台(會新開分頁)
4. 進到 **匯入匯出工具**
7. 找到 **匯入** 並選擇要更新的版本中名為 **Keyword Dictionary Notes.user.js** 的檔案
8. 點下 **更新** 完成插件更新

## 🈲 如何手動屏蔽出現錯誤的網站

1. 進入 Tampermonky 的控制台(會新開分頁)
6. 點擊 **Keyword Dictionary Notes**
7. 進到 **設定**
8. 找到 **自訂 excludes** 並手動添加該網站
(範例:`https://stackoverflow.com/questions/......` -> `https://stackoverflow.com/*`)

## 📰 更新歷史

- v0.1 **正式版** 支援編輯關鍵字與筆記、調整插件在網頁的顯示與功能相容性、變更樣式
- v0.1-beta **beta測試版** 支援搜尋、新增、刪除關鍵字與筆記
