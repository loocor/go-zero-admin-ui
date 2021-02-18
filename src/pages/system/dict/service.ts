import {request} from 'umi';
import type {TableListItem, TableListParams} from './data.d';

export async function queryRule(params?: TableListParams) {
  return request('/api/sys/dict/list', {
    params,
  });
}

export async function removeRuleOne(params: { id: number }) {
  return request('/api/sys/dict/delete', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function removeRule(params: { key: number[] }) {
  return request('/api/sys/dict/delete', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params: TableListItem) {
  return request('/api/sys/dict/add', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params: TableListParams) {
  return request('/api/sys/dict/update', {
    method: 'POST',
    data: {
      ...params,
      method: 'update',
    },
  });
}
