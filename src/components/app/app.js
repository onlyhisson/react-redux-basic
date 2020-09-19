const React = require('react');
const { connect } = require('react-redux')
const styles = require('./app.css')

class App extends React.Component {
    render() {
        const {
            children
        } = this.props

        return (
            <div className={styles.app}>
                {children}
            </div>
        )
    }
}

// connect() 로 호출한 App 컴포넌트를 내보낸다.
// 상위에 Provider 컴포넌트가 있으므로 App 컴포넌트가 스토어에 연결
module.exports = connect()(App)