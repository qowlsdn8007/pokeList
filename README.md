# 🔥포켓몬 리스트🔥

### 사내 코드, data를 포켓몬 데이터로 변경하여 재구성했습니다.

### commit 내역이 합쳐진 점 양해 부탁드립니다.

## GIF

![동작확인](https://github.com/qowlsdn8007/pokeList/assets/33804074/fa732cc1-95ee-404e-92e5-1afb83fd22ff)

## 기능

- data fetch를 통해 포켓몬 카드를 구성하며 특가 캐러셀의 아이템 조회 시 데이터패
  칭 후 해당 카드로 이동합니다.
  - 특가 캐러샐 조회
  - 전체 리스트 조회
  - 상세 페이지 조회 (모달)
- 전체 리스트는 최초 5개며 페이지네이션을 통해 한 페이지씩 추가로 불러올 수 있습
  니다.
- 특가 카드 중 전체 리스트에 나타나있지 않은 카드를 선택 시 그만큼 데이터 패칭후
  스크롤 이동을 진행합니다.

## 참고

- 디렉토리 구조:
  - 특정 기능을 수행하는 컴포넌트, 훅, 관련 테스트 등을 함께 위치시켰습니다.
- 로딩 및 에러처리:
  - react-error-boundary를 통해 data fetch 시 발생하는 에러를 선언적으로 처리했
    습니다.
  - react-router-dom에 페이지 단위로 발생하는 에러를 처리했습니다.
- 데이터패칭:
  - react-query를 통해 필요한 데이터를 선언적으로 fetch합니다.
  - suspense와 error-boundary를 활용할 수 있도록 설정합니다.
  - useQuery를 통한 조회, useInfiniteQuery를 통한 페이지네이션 조회를 사용합니다
    .
- 스타일:
  - styled-components 라이브러리를 통해 컴포넌트 내 스타일 정의를 했습니다.
  - globalStyle에서 모바일 웹뷰의 경우 어색할 수 있는 스타일 기능들을 제한했습니
    다.

## 🔥기술스택🔥

- 언어 및 ui 라이브러리: React, Typescript
- 스타일: styled-components
- 상태관리 및 http 통신 라이브러리: recoil, react-query, axios
- 라우팅 및 애러 페이지 관리, react-router-dom, react-error-boundary
- 코드 스타일: eslint, eslint-airbnb prettier
- etc..

## local에서 json-server 실행 방법

```
json-server db.json --routes routes.json --port 8080
 ==> yarn server로 실행
```

## api url

- 포켓몬 전체 리스트: `http://localhost:8080/pokeClasses`
- 포켓몬 상세 정보: `http://localhost:8080/pokeClasses/${pokeClassId}`
