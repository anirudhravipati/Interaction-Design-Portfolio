import CustomCursor from "../CustomCursor/CustomCursor";
import "../Footer/Footer.css";
import "./About.css";
import Sidemenu from "../Sidemenu/Sidemenu";
import Footer from "../Footer/Footer";

export default function About() {
  return (
    <>
      <div id="about-page">
        <Sidemenu/>
        <h1 id="about-title"> About </h1>
        <div id="about-content">
          <div id="about-text">
            <h4 style={
              {
                width: "100%",
                textAlign: 'center'
              }
            }>Aniruddh Ravipati</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Parturient montes nascetur ridiculus mus mauris vitae ultricies
              leo integer. Purus faucibus ornare suspendisse sed nisi lacus sed
              viverra tellus. A pellentesque sit amet porttitor eget dolor. Nisl
              rhoncus mattis rhoncus urna neque viverra justo nec. Vitae
              ultricies leo integer malesuada nunc vel risus commodo viverra.
              Arcu dui vivamus arcu felis bibendum ut. Faucibus interdum posuere
              lorem ipsum dolor. Enim neque volutpat ac tincidunt vitae semper
              quis. Adipiscing tristique risus nec feugiat in fermentum posuere.
              Consequat interdum varius sit amet mattis. Imperdiet proin
              fermentum leo vel orci porta non. Sit amet venenatis urna cursus
              eget nunc scelerisque viverra. Leo urna molestie at elementum. Sit
              amet consectetur adipiscing elit duis tristique. Libero enim sed
              faucibus turpis in eu mi bibendum neque. Imperdiet nulla malesuada
              pellentesque elit eget gravida cum sociis natoque. Dui faucibus in
              ornare quam. Erat imperdiet sed euismod nisi porta lorem mollis
              aliquam ut. Nunc sed velit dignissim sodales. Arcu ac tortor
              dignissim convallis aenean et tortor at risus. Gravida neque
              convallis a cras semper auctor neque vitae. Mollis aliquam ut
              porttitor leo a. Volutpat lacus laoreet non curabitur gravida
              arcu. Cras semper auctor neque vitae tempus quam pellentesque nec
              nam. Leo urna molestie at elementum eu facilisis sed odio. Vitae
              auctor eu augue ut lectus arcu. Sit amet facilisis magna etiam
              tempor orci eu. Adipiscing at in tellus integer feugiat
              scelerisque varius morbi. Porta non pulvinar neque laoreet
              suspendisse. Quis varius quam quisque id diam vel quam elementum
              pulvinar. Elementum sagittis vitae et leo duis ut diam. Nunc
              aliquet bibendum enim facilisis gravida neque convallis a cras.
            </p>
          </div>
          <div id="about-diagram"></div>
        </div>
        <Footer />
      </div>
      <CustomCursor />
    </>
  );
}
