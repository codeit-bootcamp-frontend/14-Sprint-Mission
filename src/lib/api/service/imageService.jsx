import requestor from '../client/requestor'

class ImageService {
  // 틀릴 수도
  postImage(image, body) {
    const requestBody = {
      ...body,
      image: image,
    }
    return requestor.post(`/images/upload`, requestBody)
  }
}

const imageService = new ImageService()

export default imageService
