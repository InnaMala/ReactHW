
import React from 'react';
import UserCard from './components/User/UserCard';
import './index.css';
 // импорт компонента карточки пользователя

const App = () => {
    
   const users = [
        {
            id: 1,
            name: 'Василий Петров',
            age: 32,   
        },
        {
            id: 2,
            name: 'Петр Васильев',
            age: 25,
            
        },
    ];
    return (
        <div className='cards'> <UserCard users ={users} />
            
        </div>
    );
};

export default App;


