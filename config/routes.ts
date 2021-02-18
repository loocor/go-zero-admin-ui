export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login',
      },
    ],
  },
  {
    path: '/',
    redirect: '/system',
  },
  {
    path: '/system',
    name: '系统管理',
    icon: 'crown',
    routes: [
      {
        name: '用户列表',
        icon: 'table',
        path: '/system/user/list',
        component: './system/user',
      },
      {
        name: '角色列表',
        icon: 'table',
        path: '/system/role/list',
        component: './system/role',
      },
      {
        name: '菜单列表',
        icon: 'table',
        path: '/system/menu/list',
        component: './system/menu',
      },
      {
        name: '机构列表',
        icon: 'table',
        path: '/system/dept/list',
        component: './system/dept',
      },
      {
        name: '字典列表',
        icon: 'table',
        path: '/system/dict/list',
        component: './system/dict',
      },
      {
        name: '参数管理',
        icon: 'table',
        path: '/system/param/list',
        component: './system/param',
      },
    ],
  },
  {
    path: '/log',
    name: '日志管理',
    icon: 'crown',
    routes: [
      {
        name: '登录日志',
        icon: 'table',
        path: '/log/loginLog/list',
        component: './log/loginLog',
      },
      {
        name: '操作日志',
        icon: 'table',
        path: '/log/sysLog/list',
        component: './log/sysLog',
      },
    ],
  },
  {
    path: '/ums',
    name: '会员管理',
    icon: 'crown',
    routes: [
      {
        name: '会员列表',
        icon: 'table',
        path: '/ums/member/list',
        component: './404',
      },
      {
        name: '会员等级',
        icon: 'table',
        path: '/ums/member/level',
        component: './404',
      },
      {
        name: '会员地址',
        icon: 'table',
        path: '/ums/member/address',
        component: './404',
      },
      {
        name: '登录记录',
        icon: 'table',
        path: '/ums/member/loginLog',
        component: './404',
      },
    ],
  },
  {
    path: '/pms',
    name: '商品管理',
    icon: 'crown',
    routes: [
      {
        name: '商品列表',
        icon: 'table',
        path: '/pms/product/list',
        component: './404',
      },
      {
        name: '商品分类',
        icon: 'table',
        path: '/pms/product/category',
        component: './404',
      },
      {
        name: '商品类型',
        icon: 'table',
        path: '/pms/product/type',
        component: './404',
      },
      {
        name: '品牌管理',
        icon: 'table',
        path: '/pms/product/brand',
        component: './404',
      },
    ],
  },
  {
    path: '/oms',
    name: '订单管理',
    icon: 'crown',
    routes: [
      {
        name: '订单列表',
        icon: 'table',
        path: '/oms/order/list',
        component: './404',
      },
      {
        name: '订单设置',
        icon: 'table',
        path: '/oms/order/setting',
        component: './404',
      },
      {
        name: '退货申请',
        icon: 'table',
        path: '/oms/return/apply',
        component: './404',
      },
      {
        name: '退货原因',
        icon: 'table',
        path: '/oms/return/reason',
        component: './404',
      },
    ],
  },
  {
    path: '/sms',
    name: '营销管理',
    icon: 'crown',
    routes: [
      {
        name: '秒杀活动',
        icon: 'table',
        path: '/sms/promotion/flash',
        component: './404',
      },
      {
        name: '品牌推荐',
        icon: 'table',
        path: '/sms/recommend/brand',
        component: './404',
      },
      {
        name: '新品推荐',
        icon: 'table',
        path: '/sms/recommend/new',
        component: './404',
      },
      {
        name: '人气推荐',
        icon: 'table',
        path: '/sms/recommend/product',
        component: './404',
      },
      {
        name: '专题推荐',
        icon: 'table',
        path: '/sms/recommend/subject',
        component: './404',
      },
      {
        name: '广告列表',
        icon: 'table',
        path: '/sms/advertise/list',
        component: './404',
      },
      {
        name: '优惠券',
        icon: 'table',
        path: '/sms/promotion/list',
        component: './404',
      },
    ],
  },
  {
    component: './404',
  },
];
