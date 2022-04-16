import { useEffect } from 'react'
import ContactCard from '../components/ContactCard'

const Home = ({ data, editContact, deleteContact, setIsUpdating }) => {
    useEffect(() => {
      setIsUpdating(false)
    }, [])
    
  return (
        <div className="home">
            <main>
                {
                    data.map((item, index) => (
                    <ContactCard key={index} contact={item} editContact={editContact} deleteContact={deleteContact} />
                ))
                  
                }
            </main>
            <footer>
                <a href="#">&copy;2022. David Ukpalichi</a>
            </footer>
        </div>
  )
}

export default Home

