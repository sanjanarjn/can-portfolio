import "./portfolio.css";
import VideoComponent from "./VideoComponent";

function CoRideProjectDetail({ title, subheading, description }) {
  return (
    <div className="border shadow mb-10 items-center rounded-3xl h-fit w-full p-8">
      <h3 className="text-center m-2 text-4xl font-medium font-arvo">
        {title}
      </h3>
      <div className="flex flex-row w-full mt-8 gap-2">
        <VideoComponent videoPath="/videos/RideCreationFlow.mp4"/>
        <VideoComponent videoPath="/videos/RideSearchFlow.mp4"/>
        <div className="w-1/2 m-2 text-base">
          <div className="py-3 font-semibold">{subheading}</div>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
}

export default CoRideProjectDetail;
