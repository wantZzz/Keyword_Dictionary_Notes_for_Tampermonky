# Tampermonky_Keyword_Dictionary_Notes
一個能夠在各網站以關鍵字紀錄筆記的油猴插件 \
A Tampermonky plug-in that can record notes based on keywords on various websites

**注意 | Notice :** \
現有版本只支持繁體中文 | The current version only supports Traditional Chinese

## 🔝 取得最新版本

https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/releases

## 📖 使用須知

**注意! 部分網站可能會無法正常顯示插件或是被遮擋!**

已知會引發錯誤的網站:
- ~~https://stackoverflow.com/ (側邊欄無法正常開啟與插件視窗被遮擋)~~

## 📥 如何安裝與使用

### 安裝
1. 到 [chrome 線上應用程式商店](https://chrome.google.com/webstore/category/extensions) 
2. 搜尋 **tampermonkey** 並加到chrome
3. 在 chrome 右上角找到 **擴充功能(圖標為🧩)** 並點選
4. 點下你剛下載的擴充功能，名稱為 **竄改猴** 或 **Tampermonky**
5. 進入 Tampermonky 的控制台(會新開分頁)
6. 進到 **匯入匯出工具**
7. 找到 **匯入** 並選擇檔案 **Keyword Dictionary Notes.user.js**
8. 點下 **安裝** 完成插件安裝

### 使用
1. 開啟任意 **http** / **https** 網頁並等待載入完成
2. 到左上角找到 **一半露出來的圓形圖示** 並點擊

![image](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/using_clip1.png)

3. 開啟 **Start up** 即可開啟插件

![image](https://github.com/wantZzz/Tampermonky_Keyword_Dictionary_Notes/blob/main/using_clip2.png)


## 🈲 如何手動屏蔽出現錯誤的網站

1. 進入 Tampermonky 的控制台(會新開分頁)
6. 點擊 **Keyword Dictionary Notes**
7. 進到 **設定**
8. 找到 **自訂 excludes** 並手動添加該網站
(範例:`https://stackoverflow.com/questions/......` -> `https://stackoverflow.com/*`)

## 📰 更新歷史

- 0.1 **bata測試版** 支援搜尋、新增、刪除關鍵字與筆記
