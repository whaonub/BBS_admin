import request from '@/common/js/request'

// 创建
export function createApi (data) {
  return request({
    url: '/api/role/create',
    method: 'post',
    data
  })
}

// 编辑
export function updateApi (data) {
  return request({
    url: '/api/role/update',
    method: 'put',
    data
  })
}

// 删除
export function deleteApi (id) {
  return request({
    url: `/api/role/delete/${id}`,
    method: 'delete'
  })
}

// 得到单条数据
export function getRowApi (id) {
  return request({
    url: `/api/role/getRow/${id}`,
    method: 'get'
  })
}

// 获取列表
export function getListApi (params) {
  return request({
    url: '/api/role/getList',
    method: 'get',
    params
  })
}

// 获取所有
export function getAllApi () {
  return request({
    url: `/api/role/getAll`,
    method: 'get'
  })
}
