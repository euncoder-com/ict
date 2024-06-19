
/*
    리액트의 장점 -> 리액트를 사용하는 이유

    1> 태그 재사용
    2> 데이타 바인딩
*/

import '../App.css';
import { Component } from 'react';

// [1] 함수형 컴포넌트
function MyHeader(){
    return(
        <header>
            <h1 className='App-link'> 우리 사이트 </h1> 
            우리는 리액트를 한다
        </header>
    )
}

// [2] MyFooter 클래스형 컴포넌트 

class MyFooter extends Component{
    render(){
        let title = '우리사이트';
        return (
            <div className='App-logo'>
               <h3> 광고 사이트 </h3>
            </div>
        );
    };
}


function App(){
    return (
        <div className='App'>
            <MyHeader></MyHeader>
            <MyHeader></MyHeader>
            <MyHeader/>
            <hr/>
            <MyFooter></MyFooter>
            <MyFooter/>
        </div>
    );
}

export default App;