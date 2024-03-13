function ProjectDetail({ title, image, subheading, description }) {
  return (
    <div className="border shadow font-mono mx-40 mb-10 items-center rounded-3xl h-[500px] w-3/4 p-3">
      <h3 className="text-center m-2 text-xl">{title}</h3>
      <div className="flex flex-row w-full">
        <img src={image} alt="Project pic" className="w-2/3 h-full" />
        <div className="w-1/2 m-2">
          <div className="py-3">{subheading}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
