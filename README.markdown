# Interection


## 폴더별 정리
### 1_apple

- 애플 홈페이지 인터렉션 따라하기 (with. Vanilla JS)
- [https://www.inflearn.com/course/애플-웹사이트-인터랙션-클론](https://www.inflearn.com/course/%EC%95%A0%ED%94%8C-%EC%9B%B9%EC%82%AC%EC%9D%B4%ED%8A%B8-%EC%9D%B8%ED%84%B0%EB%9E%99%EC%85%98-%ED%81%B4%EB%A1%A0)  강의 시청 및 실습


### 2_apple_text 
-  1번 폴더에서 들은 강의 내용으로 실무에서 쓸수 있는 플러그인으로 만들어보기
   1차는 jquery로, 2차는 javascript 로 만들어보기


### 3_apple_video
- 1번의 비디오 실습 파일 (3종)
   01_video_ver  --> .mp4파일로 만들기 (저해상vs고해상 mp4) 
   02_image_ver  --> .jpg 파일로 만들기 (동영상 프레임 추출. 압축필수)
   03_canvas_ver --> canvas로 만들기 (apple방식)
- 실습에서 쓸만한 플러그인으로 만들어보기

### 4_apple_canvas_blend 
- canvas 이용해서 스크롤 인터랙션 구현하기 
- 23.03.28 30강까지 !

### 5_apple_stroke
- 아이패드 에어 스트로크 효과 인터렉션
- svg 사용
- 플러그인으로 만들어보기

## 공통 변수 및 함수, 작동 컨셉 정리

각 섹션별로 sceneInfo 를 주고
sceneInfo 마다 objs/value를 미리 지정

페이지(/섹션) 시작 ( setLayout ) or 스크롤시 마다 () value값 넘겨줌


### 함수별 기능 정리
- setLayout : 말그대로 레이아웃을 세팅. (섹션 용도별 높이, 현재 섹션 표시) --> 한번만 실행 (스크롤마다 실행 X, 이벤트별 필요시마다 실행 (resize, oreientationchange .. )) 
- calcValues : 섹션별로 스크롤 된 범위를 구해서 각 obj들의 value에 값을 넘겨주어 시작/종료할 시점을 정함 
- playAnimation : calcValues에서 받아온 값을 css 스타일 값을 반영하여 실제로 애니메이션을 실행
- scrollLoop : 현재 섹션이 어디인지 계산, 각종 버그들 방지
