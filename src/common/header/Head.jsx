import React from "react"

const Head = () => {
  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <div className='left row'>
            <i className='fa fa-phone'></i>
            <label> +250789574860</label>
            
            <a href="mailto:Urumrinoella@gmail.com" style={{ color:"white"}}><i className='fa fa-envelope'></i></a>
            <label > <a href="mailto:Urumurinoella@gmail.com" style={{ color:"white"}}>Send us an email</a></label>
            
          </div>
          <div className='right row RText'>
            <label>Theme FAQ"s</label>

            <label > <a href="https://wa.me/250789574860" style={{color:"white"}}>Need Help?</a> </label>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Head
