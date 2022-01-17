<h1 align="center">
  <img align="center" height="50px" src='./assets/favicon.png'></img> QR Scanner Online
</h1>

<p align="center">
  <a href="https://github.com/wowry/qr-scanner-online/actions/workflows/main.yml">
    <img src="https://github.com/wowry/qr-scanner-online/actions/workflows/main.yml/badge.svg" alt="Build and Deploy App" />
  </a>

  <a href="https://www.codacy.com/gh/wowry/qr-scanner-online/dashboard?utm_source=github.com&utm_medium=referral&utm_content=wowry/qr-scanner-online&utm_campaign=Badge_Grade">
    <img src="https://app.codacy.com/project/badge/Grade/7b1fc129a21f4dad94fcf4d9a8dc3cc9" alt="Codacy Grade Status" />
  </a>

  <a href="https://github.com/wowry/qr-scanner-online/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/wowry/qr-scanner-online?style=plastic" alt="MIT License" />
  </a>
</p>

<p align="center">
  <b>スクリーンショットなどの画像からQRコードを検出するアプリ</b>
</p>

## App URL

### **https://qr-scanner-online.wowry.dev**

## DEMO

<p align="center">
  <img src="https://user-images.githubusercontent.com/35371161/149203839-9cd4f403-8c56-4333-bae8-67ee97aa194e.gif"></img>
</p>

## Features

**1. 画像のコピー&ペースト、ドラッグ&ドロップに対応**

**2. 複数の QR コード検出に対応**

**3. C++, WebAssembly を用いて、QR コード検出処理を高速化**

## アプリケーション構成

<p align="center">
  <img src="https://user-images.githubusercontent.com/35371161/148780298-24b46f8b-cc75-4006-a4f9-4fc3228d24f1.png"></img>
</p>

## Installation

**1. リポジトリの Clone**

```sh
git clone https://github.com/wowry/qr-scanner-online.git

cd qr-scanner-online
```

**2. 依存パッケージのインストール**

```sh
yarn install
```

**3. C++ソースコードを WebAssembly にコンパイル**

[Emscripten](https://emscripten.org/#) SDK の [Docker イメージ](https://hub.docker.com/r/emscripten/emsdk)を用いて、OpenCV を含む C++ソースコードを WebAssembly にコンパイル

```sh
./src/models/build.sh
```

## Usage

- Next.js を開発用ローカルサーバで実行

  ```sh
  yarn dev
  ```

  👉http://localhost:3000

- Next.js をビルド（サイトマップを同時生成）

  ```sh
  yarn build
  ```

- Next.js を本番用ローカルサーバで実行

  ```sh
  yarn start
  ```

- ESLint による静的解析を実行

  ```sh
  yarn lint
  ```

- Prettier によるコード整形を実行

  ```sh
  yarn format
  ```

  （ESLint による静的解析、および Prettier によるコード整形は、コミット時に毎回自動実行）

- [Storybook](https://storybook.js.org/) を起動

  ```sh
  yarn storybook
  ```

  👉http://localhost:6006

  ブラウザ上で UI コンポーネントの管理・テストを行うことができます。

## License

**QR Scanner Online** is under [MIT License](https://github.com/wowry/qr-scanner-online/blob/main/LICENSE)

## Author

[wowry](https://github.com/wowry)
