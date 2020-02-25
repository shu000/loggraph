ユーザー行動フロー表示ツール
====

Google Analytics のユーザーレポートjsonを可視化する個人用ツール

## Requirement
- Docker v19.03.5
- Docker Compose v1.25.2

## Usage
1. ユーザーレポートをエクスポート
![step1](https://user-images.githubusercontent.com/8524631/75248610-d0469480-5817-11ea-9992-f7f7ff3b725d.png)

1. 画面にドラッグ&ドロップ
![step2](https://user-images.githubusercontent.com/8524631/75248647-e2c0ce00-5817-11ea-94eb-29a97ff189da.png)

1.ユーザの行動経緯が表示　ルールの書き換えも可能
![step4](https://user-images.githubusercontent.com/8524631/75248673-eb190900-5817-11ea-8286-707d6b46c718.png)

## Development
以下の手順により、Dockerコンテナ上でNode.jsとMongoDBが走る。
VSCodeでコンテナにアクセスして開発する。

1. クローン
    ```
    git clone git@github.com:shu000/loggraph.git
    ```
1. Dockerコンテナから直接GitHubにアクセスしたいので鍵をコピーする
    ```
    cp ~/.ssh/id_rsa loggraph/docker/
    ```
1. Dockerコンテナを起動
    ```
    cd loggraph/docker
    docker-compose up
    ```
1. VSCodeでDockerコンテナ（`docker_tkg-app-1`）に入る
    - 開発用の拡張機能のインストールが促される
1. `npm start`
    - localhost:80 でExpressサーバと`webpack -w`が走る
