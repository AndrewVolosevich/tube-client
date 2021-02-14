import axios from "axios";
import { User, UserCredentials } from "~/interfaces/api-types";

const apiServer = process.env.SERVER_URL;
console.log(apiServer);

export default {
  signUp: async (data: UserCredentials): Promise<{ message: string }> => {
    const resp = await axios.post(`${apiServer}/api/v1/auth/sign_up`, data);
    return resp.data;
  },
  signIn: async (data: UserCredentials): Promise<User> => {
    const resp = await axios.post(`${apiServer}/api/v1/auth/sign_in`, data);
    return resp.data;
  },
};
