**BoilerPlateを利用の場合は`master`ブランチをclone**

## iOS

- Xcode, Command line tools for Xcode をインストール
- Homebrew をインストール
- cocoapods, watchman をインストール
```
$ brew install cocoapods
$ brew install watchman
```

npxコマンドでtemplateを作成する前に`node`と`watchman`を入れる必要がある

※ 公式曰くnodeのversionはnodebrewなどで管理した方が良いみたいだが(nodebrewでの管理方法は割愛)

```bash
brew install node
brew install watchman
```

### React Native Command Line Interface

React Native公式のCLIをグローバル環境にインストールするのはおすすめされていない。

そのため公式では`npx`コマンドを用いて最新バージョンのCLIを使用する事をおすすめしている。

> もしも過去にreact-native-cliパッケージをグローバルにインストールした事があるなら、予期せぬ問題を引き起こす可能性があるので削除した方が良い。

## React Native with TypeScript

公式がtemplate用のコマンドを用意してくれているので下記のコマンドを叩くだけでボイラープレートが作成される。

```bash
$ npx react-native init MyApp --template react-native-template-typescript
```

## プロジェクトを立ち上げる

インストールが完了したら下記コマンドをターミナルに入力する事でシミューレーターが立ち上がる。

```bash
$ cd poject

$ yarn ios or  npx react-native run-ios
```

## Android

1. Android Studio を インストール

2. Android Studio でいずれかの Virtual Device をインストール（機種は問わない）

3. 以下からJDKインストーラーをダウンロード、インストール
https://www.oracle.com/java/technologies/javase-jdk14-downloads.html

4. `~/.zshrc` に以下を追加
```
export ANDROID_SDK=/Users/{username}/Library/Android/sdk
export PATH="$PATH:/Users/{username}/Library/Android/sdk/platform-tools"
export ANDROID_SDK_ROOT=/home/oreore/Android/Sdk
```

4. 現在のシェルで .zshrc を実行
```
$ source ~/.zshrc
```

5. Android Studioで各種SDKをインストール

- Android Studio の Preferenceを開く
- 「android sdk」と検索して、サイドバーのAndroidSDK -> SDK Platformsタブへ移動
- 右下の「Show Package Details」をチェック
- 「Android 10.0（Q）」の中の `Android SDK Platform 29` , `Intel x86 Atom_64 System Image` をチェック
- 右下の「Apply」ボタンクリック

6. プロジェクト内の `/android` 直下に `local.properties` ファイルを作成し、以下を記述
```
sdk.dir = /Users/{username}/Library/Android/sdk  // Android SDKが置いてあるパス
```

※ yarn android (npx react-native androidと同義)コマンドを叩いた際にエラーが出た場合
```bash
# エラー
Starting a Gradle Daemon (subsequent builds will be faster)
java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7
	at org.codehaus.groovy.vmplugin.VMPluginFactory.<clinit>(VMPluginFactory.java:43)
....
FAILURE: Build failed with an exception.

* What went wrong:
Could not initialize class org.codehaus.groovy.reflection.ReflectionCache

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 3s

error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup. Run CLI with --verbose flag for more details.
Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081
java.lang.NoClassDefFoundError: Could not initialize class org.codehaus.groovy.vmplugin.v7.Java7
error Command failed with exit code 1.
```

オープンJDK14以降を使う場合は、Gradleを6.3で指定する

 ${project}/android/gradle/wrapper/gradle-wrapper.properties
```bash
distributionBase=GRADLE_USER_HOME
distributionPath=wrapper/dists
- distributionUrl=https\://services.gradle.org/distributions/gradle-6.2-bin.zip
+ distributionUrl=https\://services.gradle.org/distributions/gradle-6.3-all.zip # ここを変更する
zipStoreBase=GRADLE_USER_HOME
zipStorePath=wrapper/dists
```

## Firebaseの導入
React Native With Firebase
[公式Doc](https://rnfirebase.io/)

## Get Started
`@react-native-firebase/app`は他のFirebaseサービス(FireaStore, FirebaseAnalytics)を使用する前にインストールする必要がある。
```bash
yarn add @react-native-firebase/app
```
### Androidセットアップ
FirebaseコンソールでAndroid用のアプリケーションの作成を行う。

Androidパッケージ名は`android/`ディレクトリで確認可能な`applicationId`を登録する必要がある。

`/android/app/src/main/AndroidManifest.xml`
```xml
<manifest xmlns:android="http://schemas.android.com/apk/res/android" package="com.rnwithtypescript">
```

`android/app/build.gradle`
```java
defaultConfig {
        applicationId "com.rnwithtypescript" # アプリケーションID
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
}
```
google-services.json をFirebaseコンソールからダウンロードして/android/app/へ配置する。
### Configure Firebase with Android credentials
`/android/build.gradle`
```bash
buildscript {
  dependencies {
    // ... other dependencies
    classpath 'com.google.gms:google-services:4.3.3'
    // Add me --- /\
  }
}
```
最後に`/android/app/build.gradle`ファイルを下記の通り編集をしてプラグインを実行させる。

```bash
apply plugin: 'com.android.application'
apply plugin: 'com.google.gms.google-services' // <- Add this line
```

### iOSセットアップ
Firebaseコンソールからプロジェクトを作成

- アプリの登録iOS バンドル

Bundle ID: org.reactjs.native.example

Bundle IDはxCodeから参照可能

- 設定ファイルのダウンロード

GoogleService-Info.plistをダウンロードして`/ios/{projectName}`に配置する

- Firebase SDK の追加
- 初期化コードの追加

### Configure Firebase with iOS credentials
`/ios/{projectName}/AppDelegate.m`ファイル内に`#import <Firebase.h>`を追加する

```bash
#import "AppDelegate.h"

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>

#import <Firebase.h>
...
```
`/ios/{projectName}/AppDelegate.m`ファイル内の`didFinishLaunchingWithOptions`メソッドを以下のように修正する
```bash
- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {
 if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }
#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif
```

### AutoLinking & rebuilding

上記の設定が完了したらReact Native Firebaseライブラリをプロジェクトに紐付けて際ビルドする必要がある。

```bash
pod install --repo-update
yarn ios
```
