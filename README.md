# 清大賽車工廠 NTHU Racing - 電子郵件簽名檔自動產生器

本專案為 **清大賽車工廠 (NTHU Racing)** 團隊成員專用的電子郵件簽名檔線上產生器。  
透過託管於 **GitHub Pages**，提供公開可存取的圖檔伺服路徑，並提供**全自動化表單輸入**與**一鍵富文本複製**功能，完全不需要開啟瀏覽器開發者工具（F12）或手動修改 HTML 原始碼！

🔗 **線上使用網址 (GitHub Pages)**:  
👉 **[https://nthu-racing.github.io/Email-Signature-Template/](https://nthu-racing.github.io/Email-Signature-Template/)**

---

## 🚀 簽名檔建立步驟（30 秒完成！）

1. **開啟產生器網頁**  
   進入 [GitHub Pages 產生器](https://nthu-racing.github.io/Email-Signature-Template/)。

2. **在左側面板填寫個人資訊**  
   - **中文姓名**：如 `陳冠宇`
   - **英文姓名**：如 `Kuan-Yu Chen` 或 `David Chen`（系統會自動格式化加上括號）
   - **組別與職稱**：可直接點擊快捷標籤（如 `車架組 Chassis Group`、`技術總監 Technical Director`、`電裝組組長` 等），也可在輸入框自由補充與修改
   - **聯絡電話**：如 `+(886) 912-345678`
   - **電子信箱**：如 `nthuracing@gmail.com`
   - **隊部基地**：預設為 `新竹市光復路二段101號 科儀中心 S11`
   - **隊徽樣式**：可選 2025 經典藍色漸層版 或 2025 透底白標版

3. **點擊「一鍵複製簽名檔」**  
   - 點擊按鈕後，系統會自動將符合郵件用戶端高相容性標準的富文本 HTML 及雲端圖檔路徑寫入剪貼簿。

4. **前往 Gmail 設定並貼上**  
   - 點擊網頁上方的 **「開啟 Gmail 設定」** 或手動前往 Gmail → 點選右上角齒輪「設定」→「查看所有設定」→「一般設定」。
   - 捲動至 **「簽名」** 區塊，點擊 **「建立新簽名」**。
   - 在右側簽名編輯框內直接按 **`Ctrl + V`**（Mac 使用 **`Cmd + V`**）貼上。
   - 捲動至頁面最下方點擊 **「儲存變更」**，大功告成！

---

## ✨ 核心特色與功能

- **⚡ 全自動化表單與即時預覽**：免去過去必須按 `F12`、尋找 DOM 節點、手動改 HTML 文字的繁瑣流程，打字同時右側擬真 Gmail 視窗同步即時渲染。
- **📋 智慧剪貼簿複製 (Rich Text Clipboard)**：
  - 支援現代 `navigator.clipboard.write` (`ClipboardItem` text/html + text/plain)。
  - 內建相容舊版瀏覽器的 Selection Fallback 機制。
  - 直接貼上即自帶排版、樣式、顏色與隊徽，無需再次排版。
- **🌐 圖片雲端路徑自動轉換**：
  - 自動將隊徽與圖示路徑轉換為 GitHub Pages 的完整絕對網址（`https://nthu-racing.github.io/Email-Signature-Template/img/...`）。
  - 無論收件者使用手機、電腦、Outlook、Gmail 或 Apple Mail，隊徽與圖示皆能穩定載入不破圖。
- **💾 自動記憶功能 (LocalStorage)**：
  - 瀏覽器會自動記住您上次輸入的姓名與電話，下次進入網頁免重新輸入。
- **🎨 視覺主題與範例**：
  - 內建「隊長範例」、「電裝組組長範例」、「隊員範例」快速套用按鈕。
  - 支援黑底測試切換，方便檢視在深色模式下的顯示效果。
  - 支援「檢視 / 複製 HTML 原始碼」以供進階需求。
- **🏁 100% 維持於 GitHub Pages**：
  - 純靜態（HTML5 + CSS3 + Vanilla ES6 JS），零依賴、無建置步驟，Push 至 `master` 分支即自動於 GitHub Pages 上線。

---

## 🛠️ 開發與維護指南

### 常用組別與職稱對照表
| 職稱 (Title) | 組別 (Group) |
| :--- | :--- |
| Team Captain (隊長) | Aerodynamic Group (空力組) |
| Vice Captain (副隊長) | Administration (行政公關組) |
| Technical Director (技術總監) | Chassis Group (車架組) |
| Leader (組長) | Driverless Group (無人車組) |
| Member (隊員) | Drivetrain Group (傳動組) |
| Public Relations (公關) | Electrical Group (電裝組) |
| Treasurer (財務) | Suspension Group (懸吊組) |
| | Vehicle Dynamics Group (動態組) |

### 更換 Logo 隊徽圖檔
1. 將新隊徽圖檔縮放或裁剪為適合寬度（建議寬度約 130~140 px，背景透明 PNG 格式）。
2. 將圖檔置於 `img/` 資料夾中。
3. 若需新增為選單選項，在 `index.html` 中的 `.logo-select-grid` 新增對應選項，並在 `js/app.js` 調整即可。
4. Commit 並 Push 至 GitHub 即會自動於 GitHub Pages 更新。

### 色彩規範 (Color Code)
- **車隊電光藍 (Electric Blue)**: `#0474cf`
- **競速深藍 (Racing Navy)**: `#0f3b7d`
- 2025 車隊主視覺漸層色即採用 `#0474cf` 與 `#0f3b7d`。