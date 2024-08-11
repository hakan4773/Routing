import { useParams,Link} from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
function User() {
    const { id } = useParams();

    const [loading,SetLoading]=useState(true)
    const [user,SetUser]=useState({})

    console.log(id)

useEffect(()=>{
axios(`https://jsonplaceholder.typicode.com/users/${id}`)
.then((res)=>SetUser(res.data))
.catch((error) => console.error('Error fetching user data:', error))  // Hata yakalama
.finally(()=>SetLoading(false))
},[id])


  return (
    <div>
      {loading && <div>Loading...</div>}
  
                {!loading &&   <code>  {/* Veriyi Json formatında yazdır. */}
                {JSON.stringify(user)}
               </code>}

            <br></br>

<Link to={`/Users/${parseInt(id) +1}`}> Next User ({parseInt(id) +1})</Link> {/* Sonraki sayfaya yönlenirme */}
<br>
</br>
<Link to={`/Users/${parseInt(id) -1}`}> Before User ({parseInt(id) -1})</Link> {/* Önceki sayfaya yönlenirme */}

    </div>
    
  );
}

export default User;
