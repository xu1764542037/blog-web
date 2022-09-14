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

export function selectArticleByType(type) {
  return request({
    url: "/article/select",
    method: "post",
    data: {
      type: type
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

export function selectAllArticle(id,name,summary,text,labels,type,state) {
  return request({
    url: "/article/selectAllArticle",
    method: "post",
    data: {
      id: id,
      name: name,
      summary: summary,
      text: text,
      labels: labels,
      type: type,
      state: state,
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

export function selectByPage(id,name,summary,text,labels,type,state,page,rowAccount) {
  return request({
    url: "/article/findByPage",
    method: "post",
    data: {
      id: id,
      name: name,
      summary: summary,
      text: text,
      labels: labels,
      type: type,
      state: state,
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