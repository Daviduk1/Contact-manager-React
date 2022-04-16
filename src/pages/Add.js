import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Add = ({ dataToBeUpdated, setIsUpdating, isUpdating, addUser, getUpdatedData }) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate()

  const handleSubmit = (evt) => {
    evt.preventDefault()
    if (isUpdating) {
      let data = dataToBeUpdated;
      data.name = name;
      data.email = email;
      data.phone = phone;
      getUpdatedData(data)
      setIsUpdating(false)
      navigate('/home')
    } else {
      addUser({name, email, phone })
      navigate('/home')
    }
  }

  useEffect(() => {
    if (isUpdating) {
      setEmail(dataToBeUpdated.email)
      setName(dataToBeUpdated.name)
      setPhone(dataToBeUpdated.phone)
    }
  }, [isUpdating])
  

  return (
    <div className='form'>
        <div className='formContainer'>
            <form className='add' onSubmit={handleSubmit}>
              <h3>{isUpdating ? 'Update Contact' : 'Add contact'}</h3>
              <label>Name</label>
              <input type="text" placeholder='Enter your name....' onChange={evt => setName(evt.target.value)} /><br></br>
              <label>Email</label>
              <input type="text" placeholder='Enter your email....' onChange={evt => setEmail(evt.target.value)} /><br></br>
              <label>Phone</label>
              <input type="text" placeholder='Enter your phone....' onChange={evt => setPhone(evt.target.value)} /><br></br>
              <button>{isUpdating? 'update' : 'submit'}</button>
            </form>
        </div>
        <footer>
          <a href="#">&copy;2022. David Ukpalichi</a>
        </footer>
    </div>
  )
}

export default Add
