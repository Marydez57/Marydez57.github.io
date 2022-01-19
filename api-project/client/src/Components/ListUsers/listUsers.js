import {useEffect, useState} from 'react'
import EditUser from '../EditUsers/editUsers'


const ListUsers = () => {
  const [users, setUsers] = useState([])
  //delete user function
  const deleteUser = async(id) =>{
    try {
      const deleteUser = await fetch(`http://localhost:5000/users/${id}`, {
        method:'DELETE'
      })
      //console.log(deleteUser)
      setUsers(users.filter(user => user.users_id !== id))
    } catch (err) {
      console.error(err.message)
    }
  }
    const getUsers = async() => {
        try {
            const res = await fetch("http://localhost:5000/users")
            const data = await res.json()
            setUsers(data)
            
        } catch (err) {
            console.error(err.message)
    }
}

    useEffect(() =>{
        getUsers();
    }, []) 
    return (
        <div>
         <h1> List users</h1>
         <table className="table mt-5 text-center">
    <thead>
      <tr>
      <th>Author</th>
        <th>Comment</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {/*<tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>mary@example.com</td>
      </tr>*/ }
      {users.map(user => (
        <tr key = {user.users_id}>
          <td>{user.author}</td>
          <td>{user.comment}</td>
          <td><EditUser  user ={user}/></td>
          <td><button className='btn btn-danger' onClick={() => deleteUser(user.users_id)}>Delete</button></td>
        </tr>
      ))}
      

    </tbody>
  </table>
           
        </div>
    )
}

export default ListUsers
