# todolist
todo-list 可以記錄待辦事項清單。

## 產品功能
- 使用者可以註冊。
- 使用者可以登入。
- 使用者可以透過FACEBOOK登入。
- 登入後使用者可以建立屬於自己的待辦清單。
- 使用者可以新增待辦事項。
- 使用者可以編輯待辦事項。
- 使用者可以刪除待辦事項。
- 使用者可以瀏覽特定待辦事項。

## 環境設置
- express: 4.7.1
- express-handlebars: 5.2.0
- connect-flash：0.1.1
- express-session: 1.17.1
- method-override: 3.0.0
- passport: 0.4.1
- passport-facebook": 3.0.0
- passport-local": 1.0.0
- bcryptjs: 2.4.3"

## 安裝流程

專案資料clone到本地

```
$ git clone https://github.com/ddssads/todo-sequelize.git
```
安裝npm

```
$ npm install
```
連線資料庫
```
npm install mysql2 sequelize sequelize-cli
```
創建資料庫
```
drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;
```

同步資料庫
```
npx sequelize db:migrate
```
執行種子資料

```
npx sequelize db:seed:all
```

測試帳號
```
root@example.com
12345678
```
