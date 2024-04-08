import { connect } from "react-redux";
import { RootState } from "../../store";
import { Announce } from "../../store/announce/types";
interface AnnounceProps {
  announces: Announce[];
}

const AnnounceCard = ({ announces }: AnnounceProps) => {
  return (
    <>
      {announces.map((post, index) => (
        <div key={index} className="flex p-3 border-b border-purple-4">
          <div
            dangerouslySetInnerHTML={{ __html: post.display_message }}
            className="[&>a>strong]:text-yellow-400 text-white"
          ></div>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  announces: state.announce,
});

export default connect(mapStateToProps)(AnnounceCard);
