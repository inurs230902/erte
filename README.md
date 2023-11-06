### 프로젝트 생성하기

```jsx
npx create-react-app [app name]

cd 프로젝트

code . (vscode open)

npm run start (localhost 열기)
```

### 라이브러리 설치

- 새로 받은 라이브러리

```json
 		"cz-conventional-emoji": "^1.0.2",
    "eslint-config-prettier": "^9.0.0",
    "eslint-plugin-prettier": "^5.0.1",
    "react-router-dom": "^6.17.0",
    "recoil": "^0.7.7",
    "styled-components": "^6.1.0",
    "styled-reset": "^4.5.1",
```

- 커밋
    - commitizen 설치하기
        
        ## **1. Install**
        
        ```
        npm install -g commitizen
        npm install -g cz-conventional-changelog
        echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
        ```
        
        ## **2. commit 남기기**
        
        `git add .` 후에 `git cz` 또는 `cz c` 로 커밋을 생성할 수 있다.
        
        터미널에서 적절하게 입력하면 끝!
        
        ## **그 외 : 이모티콘으로 커밋 꾸미기😎**
        
        ```
        yarn add -D cz-conventional-emoji
        # or
        npm install -D cz-conventional-emoji
        
        # set as default adapter for your projects
        echo '{ "path": "./node_modules/commitizen-emoji" }' > ./.czrc
        ```
        
        OR add this to your package.json
        
        ```
          "config": {
            "commitizen": {
              "path": "./node_modules/cz-conventional-emoji"
            }
          },
        ```
        
        ### 3.
        
        deploy : dev, stg 배포 시
        
        release : prd 배포 시
        
        ---
        
        https://dailyheumsi.tistory.com/266
        
        https://github.com/gaoac/cz-conventional-emoji
        
    

### 파이어베이스 호스팅하기

```jsx
npm install -g firebase-tools
```

### VSCODE

- ****ES7+ React/Redux/****
- ****styled-components-snippets****
    - `imsc import styled from 'styled-components';`
    - 
        
        
        | scpd | ${({ ${1} }) => ${2}}; / Use props inside styled-component (destructured) |
        | --- | --- |
        | scpt | ${({ theme }) => theme.${1}}; |
        
        semantic
        

[flex-grow - CSS: Cascading Style Sheets | MDN](https://developer.mozilla.org/ko/docs/Web/CSS/flex-grow)
