import '../App.css';
import imgtest from './logo512.png';

let message = '감사합니다';

function msg() {
    return "오늘도 행복합시다"
}

let styleA = 'App-logo';
let appLogo = 'App-link';  // 변수명을 camelCasing
let app_logo = 'App-link'; // snake_casing
// let app-logo = 'App-link'; // kebob-casing 에러

let styleB = { color: 'blue', fontsize: '22px'};

function App(){
    // 리턴 밖의 주석
    return (
        <div>
            {/* <h2 className='App-logo'> 안녕하세요 </h2>
            <h2 className={styleA}> {message} </h2> */}
            {/* <h3> {msg()}</h3> */}
            <hr/>
            <h3 className={appLogo}>우리팀 화이팅1</h3>
            <h3 className={app_logo}>우리팀 화이팅2</h3>
            <hr/>
            <h3 style={styleB}>짝꿍님 안녕</h3>
            <h3 style={{color: 'red', fontsize: '22px'}}>짝꿍님 안녕2</h3>
            {/* {{}} 밖은 변수, 안은 객체형식임 나타냄  */}
            {/* <img src='logo192.png' /> */}
           
            {/* 이미지 삽입:
                (1) img태그 반드시 닫기
                (2) 이미지 현재 디렉토리 위치가 public 폴더임  */}

            {/* 만일 js 파일과 동일한 폴더에 이미지 파일이 있다면 */}
            {/* <img src='./logo192.png' /> 안됨. 위에서 import 해줘야 함 */}
            {/* import imgtest from './logo512.png'; */}
            <img src='./logo192.png' />
            {/* <img src={ imgtest }/> */}


        </div>
    );
}

export default App;

