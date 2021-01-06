const Header=({login,setLogin})=>{
    return(
        <div>
            <h1>Users List</h1>
            <button onClick={()=> setLogin(!login)}>{!login ? 'Login' : 'Logout'}</button>
        </div>
    )
}
export default Header