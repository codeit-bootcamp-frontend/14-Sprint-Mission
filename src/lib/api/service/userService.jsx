import requestor from '../client/requestor'

class UserService {
  getUser() {
    return requestor.get(`/users/me`)
  }

  patchUser(body) {
    // 틀릴수도
    return requestor.patch(`/users/me`, {
      data: body,
    })
  }

  patchUserPassword(body) {
    // 틀릴수도
    return requestor.patch(`/users/me/password`, {
      data: body,
    })
  }

  getUserProducts(page, pageSize, keyword) {
    return requestor.get(
      `/users/me/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    )
  }

  getUserFavorite(page, pageSize, keyword) {
    return requestor.get(
      `users/me/favorites?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    )
  }
}

const userService = new UserService()

export default userService
