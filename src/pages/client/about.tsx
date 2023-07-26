interface Props {
  className: string;
}

export default function About({ className }: Props) {
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "50% 25% 25%",
    padding: "10px 10px",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div id="about" style={style} className={className}>
      <div className="d-flex flex-column justify-content-evenly h-100 mt-5 px-5 ">
        <h1
          style={{ fontSize: "60px", paddingTop: "100px" }}
          className="text-wrap"
        >
          Sustainable <span id="inline-text-style"> environment </span> for a
          better world
        </h1>
        <div className="d-flex flex-column align-items-center w-100 h-auto ">
          <img
            style={{ maxHeight: "auto", maxWidth: "90%" }}
            src="./assets/img/about-illustration.png"
            alt="about page illustration"
          />
        </div>
      </div>
      <div className="d-flex flex-column justify-content-evenly h-100">
        <p className="text-white" style={{ fontSize: "20px" }}>
          ArteMIS is a Management Information System focusing on Waste. ArteMIS
          aims to bring efficiency on delivering waste management in the
          environment through utilizing modern technologies. It also aims to
          bridge newer generations to waste management, showing the status of
          the environment and actively monitor it. ArteMIS initialy focuses on
          being a Waste Management System but aims to progress towards the
          owning the purpose from it, offering sustainability for healthier
          environment
        </p>
        <img src="./assets/img/about-img2.png" alt="about img" />
      </div>
      <div className="d-flex flex-column justify-content-evenly h-100 px-5 ">
        <img src="./assets/img/about-img1.png" alt="about img" />
        <h2>
          GAIA -{" "}
          <span id="inline-text-style"> Management Information System </span>
        </h2>
        <p className="text-white">
          ArteMIS is initialy based in Batangas State Univesity - Alangilan
          Campus, with the help of said partners which handles the regulation of
          environmental sustainability of the campus. (General Office Unit,
          Enviromental Management Unit)
        </p>
      </div>
    </div>
  );
}
