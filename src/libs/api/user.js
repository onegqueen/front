import apiClient from "./apiClient"

const UserAPI = {
    getAllUsers: async (page) => {
        const {data} = apiClient.get(`/timer/all-users/${page}`)
        return data
    } 

}

export default UserAPI