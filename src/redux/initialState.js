import { VisibilityFilters } from "./actions/actions"

export default {
    todos: [
        {
            id: 1,
            text: "你好, 图雀",
            completed: false
          },
          {
            id: 2,
            text: "我是一只小小小小图雀",
            completed: false
          },
          {
            id: 3,
            text: "小若燕雀，亦可一展宏图！",
            completed: false
          }
    ],
    visibilityFilter: VisibilityFilters.SHOW_ALl,
    shops: [
      {
        text: '小米手机11',
        id: 1
      }
    ],
}