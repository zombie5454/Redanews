# 2022 Fall NTU Web Programming Final Project

## RedactNews

- **TRY IT NOW** [Online link](https://redanews-fullstack.onrender.com/) (It may take a few seconds...)
- A modify version of [redactle](https://redactle.anybrowser.org/).

![HomePage](截圖/img2.png)![Game](截圖/img1.png)

## 安裝與測試步驟

### 安裝及環境建構

1. 安裝所需套件：分別在 /backend 和 /frontend 下執行 `yarn install` ( 請先確認 Node.js 是否已更新到最新版 )
2. 確認套件皆有完成安裝，無出現 Error Messages
3. 在 backend 資料夾下，放置 .env 檔案，其中包含以下內容：
   ```
   MONGO_URL=mongodb+srv://zombie5454:Chapman5454@cluster0.6rofyn7.mongodb.net/Redanews?retryWrites=true&w=majority
   GUARDIANS_KEY=82b7bed4-ca51-411f-b641-aabac0ac696f
   ```
   - 以上內容為開發者提供之資料庫及相關 API Token 請避免外流。
   - `GUARDIANS_KEY` 為本專案新聞相關 API 使用之 Token。
4. 確認已在與此 README 同資料夾下，開啟兩個 terminal 中分別完成以下兩步驟：
   - 執行 `yarn start` 開啟前端
   - 執行 `yarn server` 開啟後端

### 功能測試

1. 支援登入、註冊基本功能
   - 帳戶註冊時，密碼須為長度 > 8 的字串，且 Email 也須符合 Email 格式（使用 Regular Expression 檢查）。
   - 帳戶註冊時檢查是否為 Unique 的 Username。
   - 若登入、註冊有異常情形，會跳出 Toast 告訴用戶是哪裡有錯、異常。
   - 註冊成功會跳轉至登入介面，登入成功則會進入遊戲。
2. 遊戲功能：
   - 不論是否登入，皆可進行遊戲。惟登入才能保存作答紀錄，未登入作答紀錄則會在重新整理後被清除。
   - 遊戲進行方式同 Redactle ，在輸入框中輸入想猜測的單字，點按 Enter 或是 + 會送出該筆作答紀錄。
     - 成功送出符合條件的猜測內容，會顯示在畫面右側的 Table 中， Hits! 顯示之數字則為該單字（大小寫皆可）出現在該新聞（含標題）之次數。
     - 若已猜測該單字，則會跳出 Toast 訊息提醒，並滾動右側 Table 至該單字猜測紀錄；錯誤、不符格式之猜測，亦會顯示 Toast 訊息告知。
     - 成功猜測，且有 Hits > 0 的單字，在猜測送出，或點擊該筆猜測時，左方文章會 Highlight 該單字出現之處，並滾動至第一個出現該單字的地方，再次點擊猜測紀錄時，則會依序滾動至接續出現該詞的地方。
     - 點按下方 Input 旁的 Top 則會將左邊文章處滾動至最上方。
   - 登入狀態時，若先前已有相關猜測紀錄，則會自動顯示在右方 Table 中。
3. 帳號功能：僅限登入帳號使用
   - 點按 Header 右上角的按鈕展開選單，選擇 Profile 會進入帳戶資訊頁面。
   - 帳戶資訊主頁可以看到用戶姓名及信箱。
   - 選擇 Settings 可進行帳戶名稱、信箱修改（修改規則同註冊）。
   - 選擇 Change Password 可以更改帳號密碼。
4. 歷史紀錄功能：僅限登入帳號使用
   - 點按 Header 右上角的按鈕展開選單，選擇 History 會進入帳戶歷史紀錄頁面。
   - Table 呈現有猜測紀錄的每一筆資料，包含猜測單字數、平均猜中率、所用猜測者平均猜中率。
   - 點按標題可以開啟 Record Modal。
   - Record Modal 中，點按新聞標題將連結至該篇新聞，下方 Your Guess 處則可開啟歷史遊戲畫面，瀏覽該日猜測紀錄。

## 分工項目

- 洪易（B08902065，資工四）：負責後端 API 開發、佈署，以及專案 Repo 初始建置。
- 張翔宇（B08902129，資工四）：負責前端介面設計、開發（History、Record、Header、Info），並進行階段功能測試。
- 施芊羽（B08705034，資管四）：負責前端介面設計、開發（Game、Account、Auth）、前端佈署、分工及 Issue 派發管理。
