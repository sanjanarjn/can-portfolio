import githubIcon from "../images/github.png"
import linkedInIcon from "../images/linkedin.png"
import gmailIcon from "../images/gmail.png"
import twitterIcon from "../images/twitter.png"
import youtubeIcon from "../images/youtube.png"




function PortfolioHeader() {
  return (
    <div class="flex h-[600px] w-11/12 mx-14 my-8 rounded-3xl bg-gradient-to-r from-amber-100 to-yellow-400 font-serif">
      <div class="w-1/12 flex flex-col p-9 gap-6 items-center justify-center">
        <img src={githubIcon} class="opacity-100" alt="Github"/>
        <img src={linkedInIcon} class="opacity-100" alt="LinkedIn"/>
        <img src={gmailIcon} class="opacity-100" alt="Gmail" />
        <img src={twitterIcon} class="opacity-100" alt="Twitter"/>
        <img src={youtubeIcon} class="opacity-100" alt="Youtube"/>
      </div>

      <div class="w-2/3 p-8 mt-24 ml-12">
        <div></div>
        <span class="text-shadow text-6xl text-stone-900 tracking-wide text-amber">
          CAN CONSULTING
        </span>
      </div>
    </div>
  );
}

export default PortfolioHeader;
