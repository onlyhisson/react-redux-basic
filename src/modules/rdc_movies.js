
// handleActions 은 키는 액션, 값은 함수인 맵같은 형태의 객체를 받는다.
// 이렇게 하면 액션 종류에 따라 함수가 선택, 함수와 액션을 맵핑하는 형태에 더 가깝다.
const { handleActions } = require('redux-actions')

const FETCH_MOVIES  = 'movies/FETCH_MOVIES';    // 모듈이름 + 대문자(action name), 중복 가능성이 없다면 생략해도 무방
const FETCH_MOVIE   = 'movies/FETCH_MOVIE';     

module.exports = {

    // rendering 하는 각 컴포넌트에서 호출, components/movies/movies.js    
    fetchMoviesActionCreator: (f_movies) => ({  // 액션 객체를 반환하는 액션 생성자 정의
        type: FETCH_MOVIES,                     // 모든 액션은 최소한 하나 이상의 type 속성을 가진 순수한 객체
        f_movies                                // 핸들러에서 action.f_moives 와 같이 데이터 사용
    }),

    // rendering 하는 각 컴포넌트에서 호출, components/movie/movie.js
    fetchMovieActionCreator: (index) => ({      // 액션 객체를 반환하는 액션 생성자 정의
        type: FETCH_MOVIE,                      // 핸들러에서 action.index 와 같이 데이터 사용
        index
    }),

    // rdc_index에서 호출
    reducer: handleActions({
        [FETCH_MOVIES] : (state, action) => ({
            ...state,                               // 변경전 데이터
            all: action.f_movies                    // Movies 컴포넌트에서 모든 영화 목록을 저장, 변경
        }),
        [FETCH_MOVIE]: (state, action) => ({
            ...state,
            current: state.all[action.index - 1]    // Movie 컴포넌트에서 URL 매개변수의 영화 ID에 따라 특정 영화 저장, 변경
        })
    }, 
    {
        movies: [], // initial data, keyname 이 아무 영향을 미치치 않고 있음
        movie: {}   // initial data, keyname 이 아무 영향을 미치치 않고 있음
    })
}