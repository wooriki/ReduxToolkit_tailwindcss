# ReduxToolkit_tailwindcss_practice

## Deployment 
https://redux-toolkit-tailwindcss.vercel.app/

### Summury

사용자 인증 정보 관리 - authSlice</br>
상품 상태 관리 - productsSlice

'authSlice'
login 리듀서는 사용자 이름과 비밀번호의 유효성을 검사하고,</br>
유효한 경우 상태를 업데이트하며 세션 스토리지에 저장.</br>
logout 리듀서는 사용자 정보를 초기 상태로 재설정하고 세션 스토리지를 삭제.

'productsSlice'
제품 목록을 필터링 및 정렬하는 기능을 제공하며,</br>
각각의 리듀서는 필터링 및 정렬 로직을 실행하고, 결과를 세션 스토리지에 저장하여 상태를 유지.

이 두 슬라이스를 Store에 저장하여 전역상태관리를 설정.

Redux Toolkit을 사용하여 웹 스토어 만들기.</br>
TailWind css를 통한 ui 스타일링.</br>
dummy data를 불러오고, 성별, 가격순, 컬러별, 사이즈 필터링.</br>
가입한 유저 - cart에 담기.

## Captures 

![스크린샷 2024-07-16 오전 1 59 58](https://github.com/user-attachments/assets/e62915a2-64cf-4d4c-ab87-304be919cbe6)
![스크린샷 2024-07-16 오전 2 00 18](https://github.com/user-attachments/assets/521db885-690f-49e8-a887-77edbf9f9c72)
![스크린샷 2024-07-16 오전 2 00 28](https://github.com/user-attachments/assets/dacaa8d1-7c90-4fa8-b945-b1215c3b4d42)
![스크린샷 2024-07-16 오전 2 00 54](https://github.com/user-attachments/assets/efa25c13-aba5-45de-a03c-26fa53bd07e1)
![스크린샷 2024-07-16 오전 2 01 19](https://github.com/user-attachments/assets/8edff967-0728-45fa-9a50-936bd3c4ae27)
![스크린샷 2024-07-16 오전 2 02 14](https://github.com/user-attachments/assets/367a7a32-a350-4544-9b1a-8d8b8a9f99d3)
![스크린샷 2024-07-16 오전 2 02 34](https://github.com/user-attachments/assets/8c5ddd7f-8122-482f-a32b-60e84ffe5215)
![스크린샷 2024-07-16 오전 2 02 48](https://github.com/user-attachments/assets/771aba20-edb4-4a14-ab14-3caa010cd0fa)
