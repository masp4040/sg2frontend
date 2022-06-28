import React from 'react'
import '../App.css'


function Sidebars() {
  return (
    <div className='Sidebars-app  body-sidebars Sidebars'>
    
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link text-dark " >
          
          Home
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
         
          Dashboard
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          
          Orders
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          
          Products
        </a>
      </li>
      <li>
        <a href="#" class="nav-link text-white">
          
          Customers
        </a>
      </li>
    </ul>

    <div class="dropdown">
      <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        
        <strong>mdo</strong>
      </a>
      <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a class="dropdown-item" href="#">New project...</a></li>
        <li><a class="dropdown-item" href="#">Settings</a></li>
        <li><a class="dropdown-item" href="#">Profile</a></li>
        
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
    </div>
    
  
    
    
    
    
    
    
    
    
  )
}

export default Sidebars