import Mock from 'mockjs';

export const demolist = Mock.mock({
  [`array|20`]: [{
    'name': '@cname',
    'type|1-4': 1,
    'count|1-99': 1,
    'age|18-99': 1,
    'sex|1-2': 1,
    'isdamge|1': true,
    'number|1000-9999': 1000,
    'payway|1-2': 1,
    'pay|1-500.2': 1.11,
    'doc': '@cname',
    'hushi': '@cname',
    'day|1-60': 1,
    'critical|1': true
  }]
})