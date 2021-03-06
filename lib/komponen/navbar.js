// import ss from '../../pages/info'
// import dd from '../../pages/index'
export default function Navbar(){
    return(
      <nav class="navbar navbar-expand-md navbar-light">
      <div class="container"> <button class="navbar-toggler navbar-toggler-right border-0" type="button" data-toggle="collapse" data-target="#navbar6">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar6"> <a class="navbar-brand text-primary d-none d-md-block" href="../../">
            <i class="fa d-inline fa-lg fa-circle"></i>
            <b> BRAND</b>
          </a>
          <ul class="navbar-nav mx-auto">
            <li class="nav-item"> <a class="nav-link" href="../../info">Info</a> </li>
            <li class="nav-item"> <a class="nav-link" href="../../bantuan">Bantuan</a> </li>
          </ul>
          <ul class="navbar-nav">
          <li class="nav-item"> <a class="nav-link" href="../login">Log in</a> </li>
            <li class="nav-item"> <a class="nav-link text-primary" href="../admin/adduser">Register</a> </li>
          </ul>
        </div>
      </div>
    </nav>
     
    )
}