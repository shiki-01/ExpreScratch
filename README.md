# ScrPression

## TL;DR;

1. [Releases](https://github.com/shiki-01/ScrPression/releases) より最新バージョンをインストール
2. ブロックを組む
3. 旗ボタンを押してクリップボードにコピー
4. Ae にて Expression を開いて貼り付ける
5. 完成！！！！！！

## インストール / Install

1. [Releases](https://github.com/shiki-01/ScrPression/releases) より、最新バージョンをダウンロードしてください。

> [!IMPORTANT]
> メジャーバージョンの更新以外は基本的に必要なバグ修正のため、最新バージョンのインストールを推奨します。

2. ダウンロードファイルをダブルクリックで起動して、手順に従いインストールしてください。

> [!NOTE]
> もし下記の画像のようになる場合は、「詳細情報」をクリックした後「インストール」をクリックするとインストールできます。
> 環境によっては、別途 windows の一部機能へのアクセスを求められますので、必要に応じて許可をしてください


3. インストール後は、スタートメニュー等から起動できます。

## 使い方 / Usage

### 基本的な使い方 / Main Usage

#### 画面の見方

- **メニューバー**
    - **タイトルロゴ** ( Made by ) : 何もありません
    - **タイトル** : 保存時のファイル名になります。保存後に名前を変えなければ上書き保存・変えれば新規保存になります。
    - **Undo / Redo** : 戻る・やり直しボタンです。両方とも 30 回を上限としていますが、設定から変更できます。
    - **保存** : 保存ボタンです。プロジェクトに対して、現在の状態を `.scrp` 形式 ( 独自バイナリ ) で保存します。可逆圧縮ですので、基本的なファイル共有の方法で共有可能です。
    - **追加** : ブロックまたはプロジェクトを追加・新規作成できます。ブロックに関しては、 [ブロックの追加について]() を参照してください。
    - **共有** : 現在の状態でブロックやプロジェクトを共有できます。詳細は [共有について]() も参照してください。
    - **設定** : 各種設定を行えます。詳細は [各種設定]() も参照してください。
- **ブロック一覧** : 各種ブロックの一覧です。種類ごとに色で分類しています。ここには、デフォルトで作られているブロックも、カスタムブロックも全て並べられています。
    - **カスタムブロックの作成** : オリジナルコードのカスタムブロックを作成できます。詳細は [ブロックの追加について]() を参照してください。
- **ワークスペース** : ブロックを繋げたり置いておく場所です。
- **アウトプットスペース** : スタートブロックにおいて、旗のマークを押すと、そのブロックに接続されている全てが出力されます。この時、同時にクリップボードにもコピーがされます。この仕様については、設定から変更可能です。

### 応用 / Application Usage

## Ae プラグイン

開発中

## 貢献 / Contribute

うぇるかむです。無理やり作ってるところ多いので、[Issues](https://github.com/shiki-01/ScrPression/issues) や [Pull Request](https://github.com/shiki-01/ScrPression/pulls) 立ててくれれば全然見ます。

### バグレポート・提案 / Bug Report, Suggest

イメージ像だけなら [Issues](https://github.com/shiki-01/ScrPression/issues) や [Discussions](https://github.com/shiki-01/ScrPression/discussions) 、コードまで書いてくれる場合は、変更点や仕様と一緒に [Pull Request](https://github.com/shiki-01/ScrPression/pulls) してください！
