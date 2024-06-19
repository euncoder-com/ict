
import '../App.css';

//********************************
//컴포넌트명은 첫글자가 대문자여야 함
function App(){
    let title = '우리사이트22';
    return (
        // 리턴안에 작성 코드는 JSX 문법
        // 리턴값이 화면 출력됨
        // 최상위 태그가 반드시 1개여야 함
        <div className = "App">
            <div className="App-logo">{title}</div> 
        </div>
    );
}

export default App;