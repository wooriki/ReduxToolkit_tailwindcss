# Store Page - ReduxToolkit / tailwindcss

## Deployment 
  - <a href="https://redux-toolkit-tailwindcss.vercel.app/">Store - RTK </a>

### Main Features

- **데이터 관리 :**
  - 사용자 인증 정보 관리 : authSlice를 설정하여 세션 스토리지에 사용자 정보를 저장 및 관리합니다.
  - 상품 상태 관리 : productsSlice {singleProduct , filteredProducts} 분류하여 관리합니다.

    'authSlice'
    login Reducer는 사용자 이름과 비밀번호의 유효성을 검사하고 유효한 경우 상태를 업데이트하며 세션 스토리지에 저장합니다.</br>
    logout Reducer는 사용자 정보를 초기 상태로 재설정하고 세션 스토리지를 삭제합니다.

    'productsSlice'
    제품 목록을 필터링 및 정렬하는 기능을 제공하며 각각의 리듀서는 필터링 및 정렬 로직을 실행하고, 결과를 세션 스토리지에 저장하여 상태를 유지할 수 있습니다.
<br/>해당 두 슬라이스를 Store에 저장하여 전역상태관리를 유지합니다.

- Dummy data에 상품을 요청하여 filteredProducts - 성별, 가격순, 컬러별, 사이즈 필터링하고 Clear 버튼을 통해 필드를 리셋하는 개선된 UX를 제공합니다.
- 사용자의 카트에 상품을 추가 및 삭제할 수 있습니다.

### Tech Stack

- **프레임워크 및 라이브러리:**
  - **React:** 효율적인 UI구성과 빠른 렌더링을 지원하는 컴포넌트 기반 JavaScript 라이브러리입니다.
  - **Redux Toolkit:** 리듀서와 액션 생성자를 자동으로 생성해주는 createSlice API를 제공하여 상태 관리를 더욱 직관적으로 만들어줍니다.
    -  configureStore를 사용하여 스토어를 쉽게 설정하고, Redux DevTools 및 thunk 미들웨어와 같은 필수 설정을 자동으로 포함합니다.
    -  복잡한 상태 관리 로직을 간단하게 처리할 수 있도록 도와주며, 생산성과 유지 보수성을 높이는 데 기여합니다.
  - **TailWind css:** 커스텀 디자인을 신속하게 구축할 수 있고 별도의 CSS를 작성하지 않고 HTML이나 JSX에 미리 정의된 클래스를 직접 적용하여 디자인을 빠르게 프로토타입하고 일관된 스타일링을 유지할 수 있습니다.
   


## Captures 

<details>
  <summary>펼칠 시 캡쳐 이미지</summary>
  
![스크린샷 2024-07-16 오전 1 59 58](https://github.com/user-attachments/assets/e62915a2-64cf-4d4c-ab87-304be919cbe6)
![스크린샷 2024-07-16 오전 2 00 18](https://github.com/user-attachments/assets/521db885-690f-49e8-a887-77edbf9f9c72)
![스크린샷 2024-07-16 오전 2 00 28](https://github.com/user-attachments/assets/dacaa8d1-7c90-4fa8-b945-b1215c3b4d42)
![스크린샷 2024-07-16 오전 2 00 54](https://github.com/user-attachments/assets/efa25c13-aba5-45de-a03c-26fa53bd07e1)
![스크린샷 2024-07-16 오전 2 01 19](https://github.com/user-attachments/assets/8edff967-0728-45fa-9a50-936bd3c4ae27)
![스크린샷 2024-07-16 오전 2 02 14](https://github.com/user-attachments/assets/367a7a32-a350-4544-9b1a-8d8b8a9f99d3)
![스크린샷 2024-07-16 오전 2 02 34](https://github.com/user-attachments/assets/8c5ddd7f-8122-482f-a32b-60e84ffe5215)
![스크린샷 2024-07-16 오전 2 02 48](https://github.com/user-attachments/assets/771aba20-edb4-4a14-ab14-3caa010cd0fa)

</details>
