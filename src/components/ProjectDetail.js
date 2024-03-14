import "./portfolio.css"

function ProjectDetail({ title, image, subheading, description }) {
  return (
    <div className="border shadow mb-10 items-center rounded-3xl h-fit w-full p-8">
      <h3 className="text-center m-2 text-4xl font-medium font-arvo">{title}</h3>
      <div className="flex flex-row w-full mt-8">
        <img src={image} alt="Project pic" className="w-2/3 h-full" />
        <div className="w-1/2 m-2 text-base">
          <div className="py-3 font-semibold">{subheading}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
