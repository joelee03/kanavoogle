const headerNoLogin = () => {
return (        
    <header>
        <div className="absolute top-0 left-0 p-4">
        <img className="h-[5rem] object-cover" src={Logo} alt="kanavoogle logo" />
      </div>
      <div id="nav">
          <a href="#"><span class="head_span">Register</span></a>
          <a href='#'>Login</a>
      </div>
    </header>
        )
}
export default headerNoLogin