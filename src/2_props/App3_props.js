/*
    [ props ]
        ' 컴포넌트에 전달된 데이타 객체
        ' 읽기 전용
        ' 리액트 컴포넌트의 porps는 바꿀 수 없음
*/

/*
    1) MyHeader 컴포넌트 만들기

        <header>
            <h1> 여기는 제목 </h1>
            <p> 여기는 내용 </p>
        </header>

    2) App 컴포넌트에서 MyHeader 엘리먼트를 2개 생성
        - 제목과 내용은 알아서
*/

function MyHeader(props){
    console.log(props.title);
    //직접 변경
    // props.title = '나의 메뉴'; ==> 에러발생

    let mytitle = props.title + "변경됨" ;


    return(
        <header>
            <h1>{ mytitle }</h1>
            <p>{props.content}</p>
        </header>
    )    
}

function App(){
    return(
        <div className="App">
            <MyHeader title='강아지' content='사랑스러워'></MyHeader>
            <MyHeader title='고양이' content='귀여워'></MyHeader>
        </div>
    )

}

export default App;