import githubIcon from "../images/github.png";
import linkedInIcon from "../images/linkedin.png";
import gmailIcon from "../images/gmail.png";
import twitterIcon from "../images/twitter.png";
import youtubeIcon from "../images/youtube.png";
import bgImage from "../images/panel-bg.jpeg"
import "./portfolio.css";

function PortfolioHeader() {
  return (
    <div className="eb-garamond-font flex h-[600px] w-11/12 mx-14 my-8 rounded-3xl bg-gradient-to-r from-amber-100 to-yellow-400">
      <div className="w-1/12 flex flex-col p-9 gap-6 items-center justify-center">
        <img src={githubIcon} class="opacity-100" alt="Github" />
        <img src={linkedInIcon} class="opacity-100" alt="LinkedIn" />
        <img src={gmailIcon} class="opacity-100" alt="Gmail" />
        <img src={twitterIcon} class="opacity-100" alt="Twitter" />
        <img src={youtubeIcon} class="opacity-100" alt="Youtube" />
      </div>

      <div className="w-2/3 p-8 mt-24 ml-12">
        <div>
          <span className="text-shadow text-6xl text-stone-900 tracking-wide text-amber">
            CAN CONSULTING
          </span>
        </div>
        <div className="text-justify my-8 w-full">
          <span className="  text-lg text-stone-900 tracking-wide text-amber">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </span>
        </div>
      </div>
      <img src={bgImage} />
    </div>
  );
}

export default PortfolioHeader;
