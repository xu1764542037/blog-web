import {request} from "../request"

//接收邮箱验证码
export function sendEmailCheck() {
  return request({
    url: "/mail/getCheckCode",
    method: "post",
    data: {
      email: "1764542037@qq.com"
    },
  })
}

export function checkCode(code) {
  return request({
    url: "/mail/CheckCode",
    method: "post",
    data: {
      code: code
    },
  })
}