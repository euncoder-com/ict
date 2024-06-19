// App1_Book.js


/*
    1. 컴포넌트와 엘리먼트 개념
        - 붕어빵틀 vs  팥붕어빵 / 크림붕어빵
        ( - 클래스   vs  객체(메모리에 올라오면) 자바의 ) 

        컴포넌트 (빈 구조)  ---> Virtual DOM (가상 돔) --->  브라우저 DOM  
                +   
                속성            ( react element )           ( dom element)
        

        리액트 앨리먼트 특징
            ' 생성되면 변하지 않음
            ' 엘리먼트 생성 후에는 자식이나(children) 속성(attribute) 변경 안됨
    
    2. props 개념
        - 컴포넌트에서 전달한 데이타 객체                
*/
import '../App.css'

function Book(props){

    console.log('--------');
    console.log(props); //브라우저의 콘솔

    return(
        <div>
            <h2>제목: {props.title}</h2>
            <h4>저자: {props.writer}</h4>
            <h5>가격: {props.price}</h5>
            {/* *********문자열 템플릿 양식으로********* */}
            <h5>{`가격: ${props.price}`}</h5>
        </div>
    );       
}
                                                                                    
function App(){
    return (
        <div className="App">
            <Book title='자바' writer='김쌤' price='100'></Book>
            <Book title='파이썬' writer='박쌤' price='200'></Book>
            <Book title='리액트' writer='최쌤' price='500'/>
        </div>
    );
}

export default App;