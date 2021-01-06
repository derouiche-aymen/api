import {useEffect,useState} from 'react'
import Carde from './Card'
import axios from 'axios'

const List =({login})=>{
    const [data, setData] = useState([]);
    

    useEffect(() => {
        function fetch(){
            axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => setData(res.data))
            
            .catch(err=> console.log(err))
        }
        fetch();
        }
    , []);
    return(
        <div className='list'>
        {login ? data.map(el=><Carde el={el}/>) : <h2 style={{color:'red'}}>login to show a list of users</h2>}
        </div>
    )
}

export default List
    