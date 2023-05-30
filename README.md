# web-frontend

## 주의사항

- 🔥 **최종 코드 제출은 main 브랜치에 올려주세요. main 브랜치에 merge가 안되어있
  으면 불합격 입니다.** 🔥
- 🔥 **node.js 버전은 최소 16이상 ~ LTS 버전(현재 18.12.0)을 사용해주세요.** 🔥

## 참고

- 🔥 **기존 환경설정에 변경이 있거나 구현하신 내용에 설명이 필요할 시 README.md
  에 기재 부탁드립니다.** 🔥
- 프로젝트 구현 시 eslint, eslint-airbnb, prettier를 통해 코드 규칙을 정하고 포
  맷 정렬을 사용했습니다.
- 에러 처리에는 공식문서에서 권장하는 react-error-boundary 라이브러리를 설치해사
  용했습니다.
- css는 styled-components를 활용했습니다.
- 상태관리 및 http 통신 라이브러리로 recoil, react-query, axios를 설치해 사용했
  습니다.
- 라우팅 처리 관련해서 react-router-dom v6 라이브러리를 설치해 사용했습니다.
- tsconfig.json을 추가했습니다.

## 기술스택

- React
- JavaScript or TypeScript
  - TypeScript 사용 시
  ```
    npm install --save typescript @types/node @types/react @types/react-dom @types/jest
  ```
- 상태관리는 필요하다면 외부 패키지(redux, mobx, recoil, zustand, jotai 등) 사용
  가능
- 그 외 ui, event관련 패키지 (modal, chip button, scroll, animation등) 사용불가
- styling을 위한 css-in-js(styled-component, emotion 등) 형태의 패키지는 사용가
  능
- 라우팅을 위해 react-router는 사용가능

## 과제 내용

- 안내 메일에 첨부되어 있는 문서링크

## local에서 json-server 실행 방법

```
json-server db.json --routes routes.json --port 8080
```

## api url

- 포켓몬 전체 리스트: `http://localhost:8080/pokeClasses`
- 포켓몬 상세 정보: `http://localhost:8080/pokeClasses/${pokeClassId}`
