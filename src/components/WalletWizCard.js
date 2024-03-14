import "./portfolio.css"

function WalletWizCard({ title, image, subheading, description }) {
  return (
    <div className="border shadow mx-40 mb-10 items-center rounded-3xl h-[500px] w-3/4 p-3">
      <h3 className="text-center m-2 text-4xl font-medium font-arvo">{title}</h3>
      <div >
        <img src={image} alt="Project pic" className="w-full h-2/3"/>
      </div>
      <div className="text-lg">
          <div className="py-3">{subheading}</div>
          <div>{description}</div>
        </div>

    </div>
  );
}

export default WalletWizCard;
