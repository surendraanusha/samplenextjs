
import LeftPannel from "@/components/LeftPannel";
/* eslint-disable @next/next/no-img-element */
import {MdPlaylistAdd} from 'react-icons/md'
import SavedVideosCom from "@/components/SavedVideos";
const SavedVideos = (props) => {
  const { bgStatus, savedVideos } = props;
  const bgHexValue = bgStatus ? "#fff" : "#212121";
  const bannerHeadingBg = bgStatus ? "bg-[#F1F1F1]" : "bg-[#181818]";
  const bannerTitle = bgStatus ? `text-[#000]` : `text-[#fff]`;
  const iconBg = bgStatus ? "bg-[#E1E8F0]" : "bg-[#000]";

  function emptyView() {
    return (
      <div className="flex items-center flex-col justify-center h-[520px]">
        <div className="flex items-center flex-col p-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="logo"
            className="h-80 mb-4"
          />
          <h1 className={`${bannerTitle} font-sans font-bold text-2xl`}>
            No saved videos found
          </h1>
          <p
            className={`${bannerTitle} font-sans font-semibold text-xl text-center mt-3`}
          >
            You can save your videos while watching them
          </p>
        </div>
      </div>
    );
  }

  function successView(){
    return(
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-3">
        {savedVideos.map(eachItem=>(
          <SavedVideosCom key={eachItem.id} data={eachItem} bgStatus={bgStatus}/>
        ))}
      </div>
    )
  }
  return (
    <div className={`bg-[${bgHexValue}]`}>
      <div className="flex md:flex-row container mx-auto md:px-4 gap-4">
        <LeftPannel bgHexValue={bgHexValue} bgStatus={bgStatus} />
        <div className={`w-full lg:pl-3 h-[100vh]`}>
          <div className={`flex items-center p-3 ${bannerHeadingBg}`}>
            <div className={`${iconBg} p-5 rounded-full mr-3`}>
              <MdPlaylistAdd size={30} fill="red" />
            </div>
            <p className={`${bannerTitle} font-sans text-3xl font-bold`}>
              Saved Videos
            </p>
          </div>
          <div>
            {savedVideos.length === 0
              ? emptyView()
              : successView()}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SavedVideos;
