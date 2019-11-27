import React from 'react';

const UsersList = ({users}) =>{
    
    return(
        <div>
              {users.length === 0 ? (
                   <div>Loading...</div>
               ) : (
                   users.map((e, i) => {
                       return <div key={i}>{e.first_name}</div>;
                    })
               )}
        </div>
    )
        
}

export default UsersList;