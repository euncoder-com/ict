
import { Component } from "react";
import '../App.css';

/*
    컴포넌트 만들기

    1) 클래스 컴포넌트
        1 - Component 클래스 상속
        2 - render()함수 필요

    2) 함수형 컴포넌트

*/

class App extends Component {
    render(){
        let title = '우리사이트';
        return (
            // 리턴안에 작성 코드는 JSX 문법
            // 리턴값이 화면 출력됨
            // 최상위 태그가 반드시 1개여야 함
            <div className = "App">
                <div className="App-logo">{title}</div> 
            </div>
        );
    };

}

export default App;
// export default App;
//export default { App };