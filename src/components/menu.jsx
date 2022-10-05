import { Link } from "react-router-dom"
import Avatar from "./avatar"
import "./css/menu.css"
export default function Menu(){
    const url ="https://static.vecteezy.com/system/resources/previews/002/002/332/non_2x/ablack-man-avatar-character-isolated-icon-free-vector.jpg"
    return(
        <nav className="container" id='menu'>
            <section className="Logo">
         
                <h1>Miguel Estanga</h1>
                
                 
            </section>
            <section className="nav">
                {
                    //<input type="checkbox" id="che"></input>
                } 
               <label className="burger">
                    <img  width="50px"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAV1BMVEX///8AAACenp5hYWHPz88dHR3g4ODS0tKEhIQRERHv7+9BQUFERETExMQjIyM1NTWQkJD4+Pi6urp0dHQtLS1dXV3y8vJYWFiWlpZwcHDa2tp6enrp6ek7AyH4AAABbElEQVR4nO3dWU5CQRQE0GZQAUVFRRzY/zoVVmD1z02356ygKjzlmdyUrQEAAAAAAAAAAAAAAPA3d5vVODZ3cb/302Isp0NW8LytThzb7qKG99V5OzwkBffVabvsg4ar6rBdVkHDx+qwXR6DhjfVYbvcBA2fqsN2eQoaPleH7fIcNDxXh+1yDhq2ZXXaDsuk4IjPafKMXq3Heq25X6cFf92ux3Hb0Q8AAAAAAACAiRxeluN4Ca9LLz6qbw9CH+kHONqJ8GJxzBp+Vuft8JoU/KpO2+UraPhdHbbLd9DwrTpsl7eg4fwXtPN/hvP/HM7/u7S9VqftEH0ftnaszhsL32nGu4NO30vbP/jbAgAAAAAAAICZzL4TtR9s6yuZ9rzaVEeOhXtto92aXESbe2PuJiZDwuNtCl4kz+n8+6XzX9DOvyM8/xb0/Hve82+yt930u/rtMNqR8DG/MJ39/1sAAAAAAAAAAAAAAAD8Vz+xXS2AVeeEewAAAABJRU5ErkJggg==" />
                </label>
            
                <ul>
                    <li> <Link  to="/" >inicio</Link></li>
                    <li> <Link to="/" >Sobre mi</Link></li>
                </ul>
              
            </section>
        </nav>
    )
}