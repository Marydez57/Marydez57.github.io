import {useState} from 'react'

const EditUser = ({user}) => {
    const[comment, setComment] = useState(user.comment)
    
    // update author's comment
    const updateComment = async(e) => {
      e.preventDefault();
      try {
        const memo = {comment}
        const res = await fetch(`http://localhost:5000/users/${user.users_id}`, {
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(memo)
        })
        window.location ="/"
      } catch (err) {
        console.error(err.message)
        
      }
    }
    return (
        <div>
           
<button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${user.users_id}`}>
  Edit
</button>


<div className="modal" id={`id${user.users_id}`} onClick={() => setComment(user.comment)}>
  <div className="modal-dialog">
    <div className="modal-content">

      
      <div className="modal-header">
        <h4 className="modal-title">Edit User</h4>
        <button type="button" className="btn-close" data-bs-dismiss="modal" onClick={() => setComment(user.comment)}></button>
      </div>

      

      <div className="modal-body">
        <input type = "text" className='form-control' value ={comment} onChange ={e => setComment(e.target.value)}/>
      </div>

      <div className="modal-footer">
      <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={e => updateComment(e)}>Edit</button>
        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => setComment(user.comment)}>Close</button>
      </div>
      

    </div>
  </div>
</div> 
        </div>
    )
}

export default EditUser
