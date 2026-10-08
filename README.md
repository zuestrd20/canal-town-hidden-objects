# 拾光古鎮 · River Town Little Finds

原創繁體中文古鎮尋物遊戲。漫遊晨光河巷、茶院與燈市，在三幅原創插畫中尋回 18 件小物與日常故事。

## 玩法

- 每關 8 件物品；清單與場景使用相同 SVG 插畫，精確對應點選區域。
- 自由拖曳、滾輪／雙指縮放、全景及鍵盤操作。
- 休閒不限時；挑戰模式三分鐘；每日六件種子小品。
- 提示冷卻 15 秒，找齊獲 1–3 星；收藏故事自動保存。
- 暫停、離開和分頁隱藏停止計時。重新開啟可續玩。
- 不含廣告、分析追蹤、付費功能或外部字型。

## 本地開發

需要 Node.js 22 或更新版本，無第三方 npm 相依套件。

```sh
npm test
npm run check
npm run build
python3 -m http.server 8080 --directory dist
```

`build.mjs` 會將 `assets/encoded/` 的文字片段還原為三張原始 WebP，核對大小及 SHA256 後輸出 `dist/`。部署成品使用正常 WebP 圖片，訪客不會下載分段檔。

## 發布

GitHub Pages 使用 GitHub Actions。工作流程先執行測試與語法檢查，再建置、上傳 Pages artifact 與部署。`release.json` 記錄實際部署 commit 與美術 hash。

## 美術與來源

- 三張 1536×1024 原創場景由 OpenAI imagegen 生成，提示詞見 [art-prompts.md](art-prompts.md)。不使用參考廣告的原圖像素、品牌或文案。
- 18 件 SVG 小物為本專案原創向量插畫，與尋物清單共用同一份 symbol。
- 音效由瀏覽器 Web Audio 即時合成，預設關閉。
- 使用系統字型，不需外部 CDN。

## 驗證

請見 [QA.md](QA.md) 區分已通過的程式測試、實際瀏覽器驗收與尚未驗證部分。原始需求：[dot-tasks #43](https://github.com/zuestrd20/dot-tasks/issues/43)。
