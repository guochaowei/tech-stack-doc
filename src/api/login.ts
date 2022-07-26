// import axios from "axios";
/**
 * @name 登录模块
 */
// * 用户登录接口

type LoginForm = {
  username: string;
  password: string;
};

const defaultUsername = "jack";
const defaultPwd = "redballoon";
export const loginApi = (params: LoginForm): Promise<string> => {
  //   axios
  //     .post("/api/user/login", params)
  //     .then(function (response) {
  //       console.log(response);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  const { username, password } = params;
  console.log(params);
  return new Promise((resolve, reject) => {
    if (username === defaultUsername && password === defaultPwd) {
      resolve("登陆成功");
    } else {
      reject("登陆失败");
    }
  });
};
