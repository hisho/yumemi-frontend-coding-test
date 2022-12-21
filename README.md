# 株式会社ゆめみフロントエンドコーディング試験

https://notion.yumemi.co.jp/0e9ef27b55704d7882aab55cc86c999d

## 🚀URL
https://hisho-yumemi-frontend-coding-test.vercel.app



## 目次

- [開発環境](#開発環境)
- [セットアップ](#セットアップ)
- [コマンド](#コマンド)
- [API仕様](#API仕様)
- [トラブルシューティング](#トラブルシューティング)

## 開発環境

- Node.js v18.x
- Yarn v1.x
- macOS Ventura

## セットアップ

### 1.GitHub からリポジトリをクローン

GitHub からリポジトリをクローンしてください。

```shell
$ git clone git@github.com:hisho/yumemi-frontend-coding-test.git
$ cd yumemi-frontend-coding-test
```

### 2.依存パッケージのインストール

package.json に記載されている依存パッケージをインストールしてください。

```shell
$ yarn
```

### 3.env.localの設定
.env.localを作成して追記してください。

```shell
$ touch .env.local
```

.env.exampleに従い環境変数を設定してください。

RESAS_API_KEYは[こちら](https://opendata.resas-portal.go.jp)から取得してください。

### 4.開発環境を起動しブラウザで確認

開発環境を起動し、ブラウザで確認してください。

```shell
$ yarn dev
$ open http://localhost:3000
```

## コマンド

### dev

開発環境を起動する

```shell
$ yarn dev
```

### dev:next

Next.js の開発環境を起動する

```shell
$ yarn dev:next
```

### dev:tcm

src/**/*.module.cssの変更を監視し、型定義ファイルを出力する

```shell
$ yarn dev:tcm
```

---

### build

アプリケーションを本番用にビルドする

```shell
$ yarn build
```

### build:next

Next.js を本番用にビルドする

```shell
$ yarn build:next
```

### build:tcm

src/**/*.module.cssの型定義ファイルを出力する

```shell
$ yarn build:tcm
```


---

### start

Next.js を本番モードで起動する

```shell
$ yarn start
```

---

### lint

リントを実行する

```shell
$ yarn lint
```

### lint:next

Next.js の ESLint を実行する

```shell
$ yarn lint:next
```

### lint:prettier

Prettier を実行する

```shell
$ yarn lint:prettier
```

### lint:typecheck

tsc を実行する

```shell
$ yarn lint:typecheck
```

### lint:stylelint

stylelint を実行する

```shell
$ yarn lint:stylelint
```

---

### format

format を実行する

```shell
$ yarn format
```

### format:eslint

ESLint の--fix オプションを実行する

```shell
$ yarn format:eslint
```

### format:prettier

Prettier の--fix オプションを実行する

```shell
$ yarn format:prettier
```

### format:stylelint

Stylelint の--fix オプションを実行する

```shell
$ yarn format:stylelint
```


---

### test

すべてのtestを実行する

```shell
$ yarn test
```

### test:api

Next.jsのapi routeのtestを実行する

```shell
$ yarn test:api
```

### test:component

componentのtestを実行する

```shell
$ yarn test:component
```

## 👽API仕様
<a href="./documnet/api.md">API仕様ドキュメント</a>

## トラブルシューティング

[issue](https://github.com/hisho/yumemi-frontend-coding-test/issues/new)を作成または、ご連絡ください。
