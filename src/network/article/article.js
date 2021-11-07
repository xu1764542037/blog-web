import {request} from "../request"

export function addArticle(name,summary,text,labels,type,state,StartTime,EndTime) {
  return request({
    url: "/article/addArticle",
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

export function selectArticle(id) {
  return request({
    url: "/article/select",
    method: "post",
    data: {
      id: id
    }
  })
}

export function selectAllArticleByCondition(name,type) {
  return request({
    url: "/article/selectAllArticle",
    method: "post",
    data: {
      name: name,
      type: ""+type+""
    }
  })
}

export function selectAllArticle() {
  return request({
    url: "/article/selectAllArticle",
    method: "post",
    data: {
    }
  })
}

export function selectLabel() {
  return request({
    url: "/label/batchSelect",
    method: "post",
    data: {

    }
  })
}

export function selectType() {
  return request({
    url: "/type/batchSelect",
    method: "post",
    data: {

    }
  })
}

export function setLabelByArticle(label_ids) {
  return request({
    url: "/label/setLabelByArticle",
    method: "post",
    data: {
      article_id: 1,
      label_ids: label_ids
    }
  })
}

export function selectByPage(page,rowAccount) {
  return request({
    url: "/article/findByPage",
    method: "post",
    data: {
      page: page-1,
      rowAccount: rowAccount,
    },
  })
}

export function deleteArticle(id) {
  return request({
    url: "/article/delete",
    method: "post",
    data: {
      id: id
    },
  })
}

export function updateArticle(id,name,summary,text,labels,type) {
  return request({
    url: "/article/update",
    method: "post",
    data: {
      id: id,
      name: name,
      summary: summary,
      text: text,
      labels: labels,
      type: type,
    },
  })
}