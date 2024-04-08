import { connect } from "react-redux";
import { RootState } from "../../store";
import { PostInfo } from "../../store/postInfo/types";
interface PostInfoProps {
  postInfos: PostInfo[]
}

const PostInfoCard = ({ postInfos }: PostInfoProps) => {
  return (
    <div>
      {postInfos.map((post, index) => (
        <div key={index} className="flex p-3 border-b border-purple-4">
          <div className="w-16 m-2">
            {post.thumbnail_url?.length > 0 && (
              <img alt="post-pic" src={post.thumbnail_url} />
            )}
          </div>
          <div>
            <p className="text-white font-bold">{post.title}</p>
            <div className="flex justify-evenly">
              {post.tags.map((tag, catIndex) => (
                <p key={catIndex} className="text-purple-text-2 mr-2 text-sm">
                  {tag.name}
                </p>
              ))}
            </div>
            <p className="text-purple-text-1 text-sm">
              {post.author.name} . {post.created_time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state: RootState) => ({
    postInfos: state.postInfo,
});

export default connect(mapStateToProps)(PostInfoCard);
