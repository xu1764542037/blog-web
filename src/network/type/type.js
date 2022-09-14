import {request} from "../request"

export function selectEverTypeNum() {
  return request({
    url: "/type/selectEverTypeNum",
    method: "post",
    data: {
    }
  })
}