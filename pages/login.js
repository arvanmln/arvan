import Link from 'next/link'

export default function Home() {
  return (
   
     <div className="container">
  
  <div className="row" id="pwd-container">
    <div className="col-md-4"></div>
    
    <div className="col-md-4">
      <section className="login-form">
        <form method="post" action="#" role="login">
          <img src="http://i.imgur.com/RcmcLv4.png" className="img-responsive" alt="" />
          <input type="text" name="email" placeholder="User" required className="form-control input-lg"  />
          
          <input type="password" className="form-control input-lg" id="password" placeholder="Password" required="" />
          
          
          <div className="pwstrength_viewport_progress"></div>
          
          
          <Link href="/data"><button type="submit" name="go" className="btn btn-lg btn-primary btn-block">Login</button></Link>
          <div>
            <Link href="/admin/adduser">Create account</Link>  <br></br>
            <Link href="/admin/datauser"> Data User </Link>
          </div>
          
        </form>
        
       
      </section>  
      </div>
      
      <div className="col-md-4"></div>
      
      </div>
  
  
  
</div>

  )
}
