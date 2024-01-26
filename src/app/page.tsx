
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <img
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>iPutzx</h1>
            <p>Programer Pemula</p>
            <div className="social-links">
              <a href="https://wa.me/6285658939117" target="_blank">
                <i className="fa fa-whatsapp" />
              </a>         
              <a href="https://github.com/putuofc" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="https://www.instagram.com/putuofc" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://youtube.com/@iPutu_?si=hcPCWOmjgMDVYk8f" target="_blank">
                <i className="fa fa-youtube" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
