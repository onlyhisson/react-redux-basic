const React = require('react')
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const { createStore } = require('redux')
const reducers = require('./modules/rdc_index')
const routes = require('./routes')

// Provider 컴포넌트는 스토어의 데이터를 컴포넌트로 주입
// Provider 컴포넌트를 사용시 모든 자식 컴포넌트가 스토어에 접근 가능
// store 속성으로 스토어를 전달해야 한다.
// createStore() 메서드는 리듀서를 전달받아 스토어 객체를 반환
module.exports = render((
    <Provider store={createStore(reducers)}>
        {routes}
    </Provider>
), document.getElementById('app'))
