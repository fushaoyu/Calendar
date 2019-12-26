# 日历

>

## 使用方式

``` bash
npm i --save f-calendar

import F_Calender from 'f-calendar';

Vue.use(F_Calender);

配置：

主题颜色      theme
默认选中颜色  defaultColor
默认选中日期  defaultOpt          数组
上个月       formerly            回调
下个月       future              回调
选中日期     receiveDate         回调
开始时间     startTime          '2019-12-03'
结束时间     endTime            '2019-12-31'

默认选中日期只需要传入日就可以年和月是不需要的。
如： [24, 27, 1, 30, 25, 11, 5, 4, 3, 9, 29, 18]


