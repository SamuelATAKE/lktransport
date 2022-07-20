import React from 'react'

const NavBar = () => {
  return (
    <nav class="navbar navbar-expand-md navbar-dark navbar-transparent">
        <div class="container">
            <a class="navbar-brand" href="/">
                <i class="fas fa-fw fa-bus"></i>
                {/* <img src="logo.png" /> */}
                LK Transport
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="{{ __('Toggle navigation') }}">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Connexion</a>
                        </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/">Inscription</a>
                            </li>
                    
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar