[English](README.md) | 简体中文



# 体验

Weex Playground 扫码体验 [Weex Playground下载地址](http://weex.apache.org/cn/playground.html)

# 运行

## 安装依赖包

```
$ npm install
```

## 运行web

web工程打包

```
$ npm run build 
```

构建web工程 & 启动服务

```
$ npm run dev & npm run serve 
```

## 运行ios
ios打包需要开发者帐号，如果不是付费用户就只能通过xcode调试的方式安装在自己的关联手机上（就是手机需要使用此帐号登录）或者虚拟机调试。
以下是无开发者付费帐号的执行方法
安装ios框架

``` 
$ weexpack platform add ios
```

执行打包命令

```
$ weex build ios
```

## 运行android
ios打包需要开发者帐号，如果不是付费用户就只能通过xcode调试的方式安装在自己的关联手机上（就是手机需要使用此帐号登录）或者虚拟机调试。
以下是无开发者付费帐号的执行方法
安装ios框架

``` 
$ weexpack platform add android
```

执行打包命令

```
$ weexpack build android
```

执行签名，发布

```
// 生成签名文件
keytool -genkey -alias quant.keystore -keyalg RSA -validity 1000 -keystore quant.keystore

// 开始签名
jarsigner -verbose -keystore quant.keystore -signedjar quant.apk app-release-unsigned.apk quant.keystore

```

