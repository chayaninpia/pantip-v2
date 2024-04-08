import { connect } from "react-redux";
import { RootState } from "../../store";
import { Highlight } from "../../store/highlight/types";
interface HighlightProps {
  highlights: Highlight[];
}

const HighlightCard = ({ highlights }: HighlightProps) => {
  return (
    <>
      {highlights.map((post, index) => (
        <div
          key={index}
          className="flex-none my-5 mx-3 rounded-md overflow-hidden w-48 md:w-72 text-white border border-purple-4 hover:cursor-pointer"
        >
          <img className="block md:hidden" alt="hightlight-pic" src={post.image_url[0]} />
          <img className="hidden md:block" alt="hightlight-pic" src={post.image_url[2]} />
          <p className="m-2">{post.name}</p>
        </div>
      ))}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({
  highlights: state.highlight,
});

export default connect(mapStateToProps)(HighlightCard);
