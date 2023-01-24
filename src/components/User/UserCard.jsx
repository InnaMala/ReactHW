import React from 'react';

const UserCard = ({users}) => {
    return (
           <>
            {users.map(user=> {
                return ( 
                    <React.Fragment key={user.id}>
                    <div className= 'inform'>
                    <p className='id'>{user.id}</p>
                    <p className='name'>{user.name}</p>
                    <p className='age'>{user.age}</p>
                </div> </React.Fragment>
                )
                
            })}
        </>
    );
};

export default UserCard;

