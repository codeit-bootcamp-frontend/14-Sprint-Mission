import './Likes.css';
import heartIcon from '../../assets/icons/heart.svg';

function Likes({ count }) {
  return (
    <div className="likeContainer">
      <img src={heartIcon} alt="heart" />
      <span className="count">{count}</span>
    </div>
  );
}

export default Likes;
