import React from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [{
  'id':1,
  /* 랜덤으로 이미지를 보여주는 웹 사이트(64는크기) */
  'image':'http://placeimg.com/64/64/1',
  'name' : '홍길동',
  'birthday' : '960101',
  'gender' : 'man',
  'job' : '대학생'
},{
  'id':2,
  'image':'http://placeimg.com/64/64/2',
  'name' : '둘리',
  'birthday' : '670101',
  'gender' : 'man',
  'job' : '공룡'
},{
  'id':3,
  'image':'http://placeimg.com/64/64/3',
  'name' : '도우너',
  'birthday' : '660101',
  'gender' : 'man',
  'job' : '외계인'
},
]

function App() {
  return(
    <div>
      {customers.map(c=>{
         return(<Customer 
          key={c.id}
          id={c.id}
          image={c.image}
          name={c.name}
          birthday={c.birthday}
          gender={c.gender}
          job={c.job}
          />)
        })}
    </div>
  )
}

export default App;
