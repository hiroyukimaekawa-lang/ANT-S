
  # Corporate Site Redesign

  This is a code bundle for Corporate Site Redesign. The original project is available at https://www.figma.com/design/eFBAtx8Ca3btISZ3fdZegM/Corporate-Site-Redesign.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.

---

## キャストページの更新方法

### キャスト追加

1. キャスト写真を用意する（推奨: 800×1067px以上、3:4縦長比率）
2. 画像を200KB以内に圧縮する（WebPまたはJPEG形式）
3. ファイル名は半角英数字とハイフンで統一する（例: `cast-yamada-taro.jpg`）
4. `assets/` へ画像を追加する
5. `cast.html` の `cast-grid--team` 内に以下のカードを追加する

```html
<article class="cast-item reveal">
    <div class="cast-photo placeholder"
        style="background-image: url('assets/cast-yamada-taro.jpg'); color: transparent;"
        role="img"
        aria-label="山田 太郎"></div>
    <div class="cast-info">
        <p class="cast-name">山田 太郎</p>
    </div>
</article>
```

6. 画像パス・キャスト名・`aria-label` をそれぞれ変更する
7. アニメーション用のクラスを必要に応じて設定する（`reveal-delay-1` / `reveal-delay-2` / `reveal-delay-3`）
8. PCとスマートフォンで表示確認する

> **注意**: 画像を `assets/` に配置するだけでは表示されません。`cast.html` の対象カードに `style="background-image: url('assets/ファイル名');"` を設定する必要があります。

### キャスト削除

1. `cast.html` から対象の `<article class="cast-item ...">` ブロックを削除する
2. 他で使用していないキャスト画像を `assets/` から削除する
3. カードの並び順を確認する
4. PCとスマートフォンで表示確認する
  