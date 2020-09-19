const { combineReducers } = require('redux')
const { reducer: movies } = require('./rdc_movies') // ./rdc_movies.js의 reducer 속성을 불러와서 리듀서 객체인 movies를 생성

// 안전한 데이터 변경을 위해 애플리케이션 상태를 여러 개의 부분으로 분리한 뒤 하나의 스토어로 결합해야 한다.
// redux의 combineReducers() 메서드를 사용하면 여러 개의 리듀서를 결합 할 수 있다.
// movies를 포함하여 결합된 리듀서를 export
// ./rdc_movies 모든 액션은 movies에 해당하는 부분만 변경
// 이렇게 스토어에 분리된 부분을 선언
module.exports = combineReducers({  
    rdc_movies: movies  // movies
    // ... 리듀서 계속 추가 가능
})