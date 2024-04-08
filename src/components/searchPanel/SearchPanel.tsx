import { connect } from "react-redux";
import MyFeed from "../../assets/ic-my_feedback-512px.png";
import PantipPick from "../../assets/ic-pantip_pick-512px.png";
import PantipHitz from "../../assets/ic-pantip_hitz-512px.png";
import Explore from "../../assets/ic_explore-512px.png";
const SearchPanel = () => {
  return (
    <div className="flex justify-evenly items-center w-7/12 h-12 bg-purple-3 rounded-full border border-purple-4">
      <button className="hidden md:block">หน้าแรก</button>
      <div className="hidden md:block h-[70%] border-l-[1px] border-purple-4 "></div>
      <button className="hidden md:block">
        <img alt="pantip logo" src={MyFeed} className="w-6 h-6" />
      </button>
      <div className="hidden md:block h-[70%] border-l-[1px] border-purple-4"></div>
      <button className="hidden md:block">
        <img alt="pantip logo" src={PantipPick} className="w-6 h-6" />
      </button>
      <div className="hidden md:block h-[70%] border-l-[1px] border-purple-4"></div>
      <button className="hidden md:block">
        <img alt="pantip logo" src={PantipHitz} className="w-6 h-6" />
      </button>
      <div className="hidden md:block h-[70%] border-l-[1px] border-purple-4"></div>
      <button className="hidden md:block">
        <img alt="pantip logo" src={Explore} className="w-6 h-6" />
      </button>
      <div className="hidden md:block h-[70%] border-l-[1px] border-purple-4"></div>
      <input
        placeholder="ค้นหาบน Pantip"
        className="bg-transparent  h-full focus:outline-none"
      />
    </div>
  );
};

export default connect()(SearchPanel);
