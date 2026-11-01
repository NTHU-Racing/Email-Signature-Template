# NTHU Racing 電子郵件簽名檔使用說明

本專案提供清大賽車工廠（NTHU Racing）團隊成員統一規範之電子郵件簽名檔。
網頁透過 GitHub Pages 託管，並提供線上即時產生與複製工具。

專案網址：https://nthu-racing.github.io/Email-Signature-Template/

## 使用步驟

### 步驟一：開啟簽名檔產生器
請前往 GitHub Pages 專案網址：
https://nthu-racing.github.io/Email-Signature-Template/

### 步驟二：輸入個人資訊
於頁面左側依序填寫個人資訊：
- 中文姓名（例如：陳冠宇）
- 英文姓名（例如：Kuan-Yu Chen，系統將自動加上括號）
- 組別：點選所屬組別（流力組、底盤組、電系組、車輛動態組、動力組、行政組）
- 職稱：點選職稱（隊長、副隊長、組長、組員），亦可直接於下方文字框手動調整
- 聯絡電話
- 電子信箱
- 隊部地址（預設為新竹市光復路二段101號 科儀中心 S11）

### 步驟三：複製簽名檔
確認右側預覽畫面無誤後，點選「一鍵複製簽名檔」按鈕，系統會將格式化簽名檔複製至剪貼簿。

### 步驟四：開啟 Gmail 設定
開啟 Gmail，點選右上角齒輪圖示，進入「設定」或「查看所有設定」。

![開啟 Gmail 設定](img_readme/step%206.png)

### 步驟五：建立新簽名
向下捲動至「簽名」設定區塊，點選「建立新簽名」。

![建立新簽名](img_readme/step%207.png)

### 步驟六：輸入簽名檔名稱
輸入簽名檔名稱（例如年份與姓名）。

![輸入簽名檔名稱](img_readme/step%208.png)

### 步驟七：貼上簽名檔
於右側簽名編輯框內，使用鍵盤快捷鍵 `Ctrl + V`（macOS 請使用 `Cmd + V`）直接貼上剛剛複製的簽名檔。

![貼上簽名檔](img_readme/step%209.png)

![貼上簽名檔預覽](img_readme/step%209-1.png)

### 步驟八：儲存變更
捲動至頁面最底端，點選「儲存變更」即完成設定。

![儲存變更](img_readme/step%2010.png)

---

## 組別與職稱規範對照

### 組別 (Group)
| 中文組別 | 英文名稱 |
| :--- | :--- |
| 流力組 | Aerodynamic Group |
| 底盤組 | Chassis Group |
| 電系組 | Electrical Group |
| 車輛動態組 | Vehicle Dynamics Group |
| 動力組 | Powertrain Group |
| 行政組 | Administration |

### 職稱 (Title)
| 職稱 | 英文格式 |
| :--- | :--- |
| 隊長 | Team Captain |
| 副隊長 | Vice Captain |
| 組長 | Leader of [Group Name] |
| 組員 | [Group Name] \| Member |

---

## 備註說明
- 本專案採用純前端靜態架構，所有簽名檔圖示與隊徽皆引用託管於 GitHub Pages 上的公開圖片路徑，以確保外寄郵件時圖檔能正常顯示。
- 若需更換隊徽圖檔，請將符合規範之透明背景圖檔放置於 `img/` 資料夾中。