import { Link } from "react-router-dom";
import { ItemListStyle } from "./ItemList.styles";

interface Item {
  postId: string;
  userId: {
    nickname: string;
  };
  nickname: string;
  image: string;
  title: string;
}

interface ContentProps {
  contents: Item[];
}

const ItemList = ({ contents }: ContentProps) => {
  if (contents.length === 0) {
    return (
      <div style={{ margin: "40px 0 20px 0" }}>작성한 게시물이 없습니다.</div>
    );
  } else {
    return (
      <ItemListStyle className="itemList">
        {contents.map((content) => {
          return (
            <div className="item" key={content.postId}>
              <span>@{content.userId.nickname}</span>
              <Link to={"/content/" + content.postId}>
                <div className="img">
                  <img src={content.image} alt={content.title} />
                </div>
                <div className="title">{content.title}</div>
              </Link>
            </div>
          );
        })}
      </ItemListStyle>
    );
  }
};

export default ItemList;
