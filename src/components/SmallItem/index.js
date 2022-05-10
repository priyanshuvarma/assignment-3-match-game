import './index.css'

const SmallItem = props => {
  const {thumbnailDetails, getRandomImage, idToBeMatched} = props
  const {thumbnailUrl, id} = thumbnailDetails

  const onClickThumbnail = () => {
    idToBeMatched(id)
  }

  return (
    <li className="app-item">
      <button onClick={onClickThumbnail} className="thumbnail-button">
        <img className="app-image" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default SmallItem
