import appleIcon from "../images/apple-logo.png"
import qaIcon from "../images/quality-assurance.png"
import javaIcon from "../images/java.png"

function Experience () {

    return (
        <div
      class="ease-in-out h-full w-11/12 mx-14 my-8 rounded-3xl font-serif p-8"
    >
      <p class="p-6 font-serif text-4xl">Decades of experience in...</p>
      <div class="flex flex-row mx-4 my-2 gap-10">
        <div class="flex flex-row gap-1 w-1/3 h-full">
          <img src={appleIcon} class="w-28 h-28" />
          <span class="text-xl text-stone-900 tracking-wide mt-8"
            >Apple Ecosystem</span
          >
        </div>

        <div class="flex flex-row gap-2 w-1/3 h-full">
          <img src={qaIcon} class="w-28 h-28" />
          <span class="text-xl text-stone-900 tracking-wide mt-5"
            >Quality Assurance</span
          >
        </div>
        <div class="flex flex-row gap-2 w-1/3 h-full">
          <img src={javaIcon} class="w-28 h-28" />
          <span class="text-xl text-stone-900 tracking-wide mt-5"
            >Java Development</span
          >
        </div>
      </div>
    </div>
    )
}

export default Experience;