import {request} from "../request"

export function addDraft(name,summary,text,labels,type,state,StartTime,EndTime) {
  return request({
    url: "/draft/addDraft",
    method: "post",
    data: {
      name: name,
      summary: summary,
      text: text,
      labels: labels,
      type: type,
      state: state,
    }
  })
}