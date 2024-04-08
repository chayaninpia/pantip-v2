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
          className="flex-none my-5 mx-3 rounded-md overflow-hidden w-72 text-white border border-purple-4"
        >
          <img alt="hightlight-pic" src={post.image_url[2]} />
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
