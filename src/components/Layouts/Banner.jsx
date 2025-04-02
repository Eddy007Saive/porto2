import { useEffect, useState } from "react";
import Eddy from "../../assets/images/Eddy.png";

export default function Banner() {
  const [animatedText, setAnimatedText] = useState(""); // Texte animé
  const [animatedText2, setAnimatedText2] = useState(""); // Texte animé

  const Text1 = "Hello Am Eddy.";
  const Text2 = `Junior Web Developer | Laravel VueJs Symfony.
  I am passionate about building high-performing applications tailored to user's needs.
   Explore my work, and let's collaborate on your projects
 ` ;

 const downloadCV = () => {
  const link = document.createElement("a");
  link.href = "/cv/Curriculum Vitae.pdf"; // Assurez-vous que le fichier est bien dans public/
  link.download = "Eddy_CV.pdf"; 
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  useEffect(() => {
    const displayText = async (textToDisplay, callback) => {
      let nextText = "";
      for (let index = 0; index < textToDisplay.length; index++) {
        await new Promise((resolve) => setTimeout(resolve, 100)).then(() => {
          nextText += textToDisplay[index];
          callback(nextText);
        });
      }
      await new Promise((resolve) => setTimeout(resolve, 3000)).then(() => {
        setAnimatedText2("");
        displayText(
          textToDisplay === Text1 ? Text2 : Text1,
          callback === setAnimatedText ? setAnimatedText2 : setAnimatedText
        );
      });
    };

    displayText(Text1, setAnimatedText);
  }, []);

  return (
    <div className="banner_section layout_padding">
      <section className="slide-wrapper">
        <div className="container-fluid">
          <div id="myCarousel" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
              <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
              <li data-target="#myCarousel" data-slide-to="1"></li>
              <li data-target="#myCarousel" data-slide-to="2"></li>
              <li data-target="#myCarousel" data-slide-to="3"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 d-flex flex-column justify-content-between">
                      <div className="banner_taital_main">
                        <h1 className="banner_taital">{animatedText}</h1>
                        <h3 className="banner_text">{animatedText2}</h3>
                      </div>

                      <div className="d-flex justify-content-center gap-4 p-3">
  <div>
    <button onClick={downloadCV} className="btn btn-outline-light rounded-4 d-flex align-items-center shadow-sm hover-shadow">
      <i className="fa fa-download me-2"></i> Download CV
    </button>
  </div>


  <div>
    <button className="btn btn-outline-light rounded-4 d-flex align-items-center shadow-sm hover-shadow">
      <i className="fa fa-linkedin me-2"></i> <a className="text-dark" href="https://www.linkedin.com/in/eddy-andrianomenjanahary-734544347/">Linkedin</a>
    </button>
  </div>
</div>

                    </div>

                    <div className="col-md-6">
                      <div className="social_icon">
                        <ul>
                          <li>
                            <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                          </li>
                          <li>
                            <a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a>
                          </li>
                        </ul>

                        <div className="image">
                          <img src={Eddy} alt="Eddy" className="img-fluid" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Autres éléments du carousel */}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
