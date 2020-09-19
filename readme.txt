src
    components
        app
            - app.js
        movie
            - movie.js  : (d)
        movies 
            - movies.js : (d)액션 생성자를 import, rdc_index.js에서 받은 데이터 연결

    modules
        - rdc_index.js  : (b)리듀서(rdc_movies.js...)들을 참조 & 결합하여 내보내면 렌더링을 하는 각 컴포넌트가 데이터에 접근할 수 있다.
        - rdc_movies.js : (c)리듀서, 스토어에서의 데이터 변경 방법을 명시하여 현재 상태를 다음 상태로 변환하는 과정을 설명

    - index.js      : (a)앱 진입, Provider 컴포넌트와 리듀서를 정의하고 전체 컴포넌트가 접근할 수 있도록 리듀서를 변수로 스토어를 생성 & 전달
    - movies.json   : static data
    - routes.js     : 요청 url 에 따라 렌더링할 컴포넌트 지정, 라우팅


1.  앱 구동(a)시 액션 생성자와 액션에 따른 처리를 명시한 각 리듀서(c)를 결합(b)하여 (a)에서 스토어를 생성한다.
2.  각 컴포넌트(d)는 컴포넌트 내부에서 1의 과정에서 생성한 스토어와 액션에 따른 처리를 맵핑하는 리듀서(c)의 액션 생성자를 호출하여 
    스토어와 액션에 따른 처리를 연결한다.
    
# npm run start
# 127.0.0.1:8080 
