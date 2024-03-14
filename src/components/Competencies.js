import mobileIcon from "../images/mobile.png"
import webIcon from "../images/web.png"
import backendIcon from "../images/backend.png"
import competitorIcon from "../images/competitor-analysis.png"

import "./portfolio.css";

function Competencies() {
  return (
    <div class="ease-in-out h-full w-11/12 mx-14 mt-8 mb-8 rounded-3xl p-8">
      <div className="mb-8">
      <p class="p-6 font-arvo text-5xl">Our key competencies...</p>
      </div>
      <div class="flex flex-row mx-4 my-2 gap-6">
        <div class="flex flex-row gap-1 w-1/4 h-full">
          <img src={mobileIcon} class="w-24 h-24" alt="Mobile"/>
          <span class="text-lg text-stone-900 tracking-wide mt-5">
            Mobile App Development
          </span>
        </div>

        <div class="flex flex-row gap-2 w-1/4 h-full" >
          <img src={webIcon} class="w-24 h-24" alt="Web"/>
          <span class="text-lg text-stone-900 tracking-wide mt-5">
            Web App Development
          </span>
        </div>
        <div class="flex flex-row gap-2 w-1/4 h-full">
          <img src={backendIcon} class="w-24 h-24" alt="Backend"/>
          <span class="text-lg text-stone-900 tracking-wide mt-5">
            Backend Development
          </span>
        </div>
        <div class="flex flex-row gap-2 w-1/4 h-full">
          <img src={competitorIcon} class="w-24 h-24" alt="Competitor"/>
          <span class="text-lg text-stone-900 tracking-wide mt-5">
            Competitor Analysis
          </span>
        </div>
      </div>
    </div>
  );
}

export default Competencies;
