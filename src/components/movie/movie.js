const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const { fetchMovieActionCreator } = require('modules/rdc_movies.js') // 액션 생성자를 호출
const styles = require('./movie.css')

class Movie extends React.Component {
    componentWillMount() {  /* Deprecated */
        this.props.fetchMovie(this.props.params.id)
    }

    componentWillUpdate(next) { // deprecated
        // AJAX/XHR 요청을 보낸다.
        if(this.props.params.id !== next.params.id) {   // URL 매개 변수가 변경된 경우에만 액션을 전달
            this.props.fetchMovie(next.params.id)
        }
    }

    render() {
        const {
            movie = {
                starring: []
            }
        } = this.props

        return (
            <div className={styles.movie} style={{
                backgroudImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(${movie.cover})`}}>
                <div className={styles.cover} style={{backgroundImage: `url(${movie.cover})`}}></div>
                <div className={styles.description}>
                <div className={styles.title}>{movie.title}</div>
                    <div className={styles.year}>{movie.year}</div>
                    <div className={styles.starring}>
                        {movie.starring.map((actor = {}, index) => (
                            <div key={index} className={styles.actor}>{actor.name}</div>
                        ))}
                    </div>
                </div>
                <Link className={styles.closeButton} to="/movies">←</Link>
            </div>
        )
    }
}

// 맴핑 함수를 connect() 메서드에 전달
module.exports = connect(
    ({rdc_movies}) => ({            // 맴핑함수, 첫번째 인자는 state
        movie: rdc_movies.current   // 애플리케이션 상태에서 movies.current 만 연결, 리듀서에서 전달된 데이터를 속성에 연결
    }),
    {fetchMovie: fetchMovieActionCreator}
)(Movie)