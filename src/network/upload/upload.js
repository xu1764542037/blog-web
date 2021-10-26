import {request} from "../request"
import axios from "axios";

//上传md文件
export function postMd(name,typeId,content) {
  return request({
    url: "/api/saveMd",
    method: "post",
    data: {
      name: name,
      typeId: typeId,
      content: content
    }
  })
}


export function uploadFile(params) {
  return request({
    url: "/api/uploadFile",
    method: "post",
    data:  params,
    headers: {
      'Content-Type': 'multipart/form-data'
    },
  })
}







