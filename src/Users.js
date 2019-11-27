import React from 'react';

const Users = ({users}) =>{

    return(
        <div className="container">
            
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <td>Avatar</td>
                        <td>Name</td>
                        <td>LastName</td>
                        <td>Email</td>
                    </tr>
                </thead>
                <tbody>
            {
                users.map((user, i) => {
                    return (
                        <tr>
                            <td><img src={user.avatar} height="50" width="50"/></td>
                            <td>{user.first_name}</td>
                            <td>{user.last_name}</td>
                            <td>{user.email}</td>
                        </tr>
                    )
                        
                })

            } 
                </tbody>
            </table>
              
        </div>
    )
        
}
export default Users;