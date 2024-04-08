import { connect } from "react-redux";
import PantipLogo from "../../assets/logo-mobile-pantip-white.png";
import PostInfoComponent from "../../components/postInfo/PostInfo";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addAllPostInfo } from "../../store/postInfo/actions";
import postInfos from "../../mockData/postInfo.json";
import highlights from "../../mockData/highlight.json";
import announces from "../../mockData/announce.json";
import rooms from "../../mockData/room.json";
import Highlight from "../../components/highlight/Highlight";
import { addAllHighlight } from "../../store/highlight/actions";
import Announce from "../../components/announce/Announce";
import { addAllAnnounce } from "../../store/announce/actions";
import SearchPanel from "../../components/searchPanel/SearchPanel";
import AddPost from "../../assets/icon-add_post.png";
import Communities from "../../assets/ic-pt_communities-outline-512px.png";
import User from "../../assets/user.svg";
const HomePage = () => {
  const headerBtnText = rooms;
  const dispatch = useDispatch();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // @ts-ignore
    dispatch(addAllPostInfo(postInfos));
    // @ts-ignore
    dispatch(addAllHighlight(highlights));
    // @ts-ignore
    dispatch(addAllAnnounce(announces));
  }, []);
  return (
    <>
      <div className="top-0 h-20  bg-purple-1 shadow-md sticky flex justify-evenly items-center text-white border-b border-purple-2  ">
        <div className="flex justify-start items-center w-2/12 px-1 md:px-5">
          <img alt="pantip logo" src={PantipLogo} className="md:h-16 " />
        </div>
        <SearchPanel />
        <div className="hidden md:flex justify-evenly items-center w-3/12 pr-3">
          <button>
            <img alt="pantip logo" src={AddPost} className="w-6 h-6" />
          </button>
          <button>
            <img alt="pantip logo" src={Communities} className="w-6 h-6" />
          </button>
          <button>เข้าสู่ระบบ</button>
        </div>
      </div>
      <div className="top-20 pt-3  bg-purple-1 shadow-md sticky text-white flex overflow-x-auto ">
        {headerBtnText.map((room, index) => {
          return (
            <div className="flex-none my-auto">
              <button
                className="flex flex-col items-center  mx-5 text-center h-full"
                onClick={() => setCurrentIndex(index)}
              >
                <img alt="pantip logo" src={PantipLogo} className="h-4" />
                {room.name}
              </button>
              <div className="mt-2 h-[2px]">
                {currentIndex === index && <hr className="border-b-2" />}
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-full bg-purple-3 py-1">
        <div className="border border-purple-4 mx-7 my-5 rounded-lg overflow-hidden">
          <div className="bg-purple-5 ">
            <p className="text-yellow-400 font-bold p-3">Announce</p>
          </div>
          <div className="bg-purple-6 ">
            <Announce />
          </div>
        </div>
        <div className="border border-purple-4 mx-7 my-5 rounded-lg overflow-hidden">
          <div className="bg-purple-5 ">
            <p className="text-yellow-400 font-bold p-3">Highlight</p>
          </div>
          <div className="flex overflow-x-auto p-4">
            <Highlight />
          </div>
        </div>
        <div className="border border-purple-4 mx-7 my-5 rounded-lg overflow-hidden">
          <div className="bg-purple-5 ">
            <p className="text-yellow-400 font-bold pt-3 px-3">Pantip Pick</p>
            <p className="text-gray-300 px-3 pb-3 text-xs">
              กระทู้คุณภาพคัดเลือกโดยทีมงาน Pantip
            </p>
          </div>
          <div className="bg-purple-6 ">
            <PostInfoComponent />
          </div>
        </div>
      </div>
      <div className="md:hidden bottom-0 py-3  bg-purple-1 shadow-md sticky text-white ">
        <div className="flex justify-evenly items-center">
          <button
            className="flex flex-col items-center  mx-5 text-center h-full text-xs"
          >
            <img alt="pantip logo" src={AddPost} className="w-6 " />
            Add Post
          </button>
          <button
            className="flex flex-col items-center  mx-5 text-center h-full text-xs"
          >
            <img alt="pantip logo" src={Communities} className="w-6 " />
            Communities
          </button>
          <button
            className="flex flex-col items-center  mx-5 text-center h-full text-xs"
          >
            <img alt="pantip logo" src={User} className="w-6 " />
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default connect()(HomePage);
