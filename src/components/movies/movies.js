const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const movie_data = require('../../movies.json') // 정적 데이터 호출, json-loader로 가능
const { fetchMoviesActionCreator } = require('modules/rdc_movies.js') // 액션 생성자를 호출
const styles = require('./movies.css')

// (1) componentWillMount()
// (2) render(), 빈 데이터
// (3) componentDidMount()
// (4) render(), store 데이터 O
// (5) 하위 movie item 선택시에도 렌더링 호출된다.

class Movies extends React.Component {
    componentWillMount() {  /* Deprecated */
        // fetchMoviesActionCreator(Action Name) change to fetchMovies
        // fetchMovies 로 액션을 전달 한다.
        // moives 데이터와 함계 fetchMoviesActionCreator를 이용해서 액션을 전달, AJAX/XHR 요청으로 대체 가능
        this.props.fetchMovies(movie_data);
    }

    componentDidMount() {
        // React 팀이 AJAX/XHR 요청을 보내는 위치로 추천, fetch, axios 등..
        // 위의 this.props.fetchMovies(movies) 대신 아래 코드
        //fetch('/src/movies.json', {method: 'GET'})
        //    .then((response)=>{return response.json()})
        //    .then((movies)=>{
        //        this.props.fetchMovies(movies)
        //    })
    }

    render() {
        const { 
            children,
            r_movies = [],    // 빈 배열 또는 this.props.movies를 해체할당
            params = {}
        } = this.props

        return (
            <div className={styles.movies}>
                <div className={params.id ? styles.listHidden : styles.list}>
                    {r_movies.map((movie, index) => (
                        <Link key={index} to={`/movies/${index + 1}`}>
                            <div className={styles.movie} style={{backgroundImage: `url(${movie.cover})`}}></div>
                        </Link>
                    ))}
                </div>
                {children}
            </div>
        )
    }
}


// connect() 로 반환한 함수로 Movies 컴포넌트를 감싸서 내보낸다.
// 상위에 Provider 컴포넌트가 있으므로 Movies 컴포넌트를 스토어에 연결
// 컴포넌트 속성을 통해 스토어의 데이터와 fetchMoviesActionCreator() 액션 생성자에 접근할 수 있게 한다.
// connect 의 1번째 인자는 애플리케이션 상태를 컴포넌트 속성에 연결, 애플리케이션 상태를 전달 받아 r_movies 속성을 가진 순수한 객체를 반환
module.exports = connect(
    ({rdc_movies}) => ({    // state를 해체 할당함
        r_movies: rdc_movies.all                      // 1번째 인자: 전체 상태의 일부, movies 속성 추가 후 데이터를 연결
    }),
    { 
        fetchMovies: fetchMoviesActionCreator   // 액션 메서드의 이름을 변경
    }
)(Movies)
/*
module.exports = connect(state => ({
    movies: state.movies.all
}), {
    fetchMoviesActionCreator
})(Movies)

*/
