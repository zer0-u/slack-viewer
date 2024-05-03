# slack-viewer

[学習用] slackからエクスポートしたファイルを閲覧するためのアプリケーション

自分しか使っていないワークスペースなので機能も最低限

## ファイル・フォルダ構造

https://slack.com/intl/ja-jp/help/articles/220556107-Slack-%E3%81%8B%E3%82%89%E3%82%A8%E3%82%AF%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%88%E3%81%97%E3%81%9F%E3%83%87%E3%83%BC%E3%82%BF%E3%81%AE%E8%AA%AD%E3%81%BF%E6%96%B9


## API設計

- /posts
  - 投稿を取得する
  - クエリパラメータ
    - word : 検索ワード
    - since : 開始日
    - until : 終了日
    - channel : チャンネル
  - 戻り値
    - time : 投稿日時
    - text : 本文
