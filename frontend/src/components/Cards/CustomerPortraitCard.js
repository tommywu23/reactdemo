import React from 'react';

import { BarChart, BarChartReverse } from '../Charts/BarChart/BarChart';
import PieChart from '../Charts/PieChart/PieChart';
import BarWithLink from './CommonCards/BarWithLink';

const CustomerPortraitBar = () => (
  <div className="page">
    <div className="card">
      <BarWithLink
        tips={barTips}
        pageType="customerGeneral"
        toPage="/CustomerGeneral"
      />
    </div>
    <div className="card">
      <span className="font-content-title">用户画像</span>
      <BarChart xData={xData} data={bardata} barWidth="30%" />
      <PieChart data={pieData} dataName="访问来源" legendData={legendData} />
      <BarChartReverse yData={reverseXData} data={reverseData} barWidth="60%" />
    </div>
  </div>
);

const barTips = ['122328个用户'];

let xData = ['18-24岁', '25-29岁', '30-39岁', '40-49岁', '50岁以上'];
let bardata = ['6', '10', '7', '3', '0'];

let pieData = [
  { value: 20, name: '男 20 76.9%' },
  { value: 6, name: '女 6 23.1%' }
];
let legendData = ['男 20 76.9%', '女 6 23.1%'];

let reverseXData = [
  '未知',
  '苹果iphone7 plius',
  '苹果iphone7',
  '苹果iphone6 plius',
  '苹果iphone6',
  '小米note',
  '苹果iphone6s',
  '苹果iphone5',
  '华为'
];
let reverseData = [1, 1, 1, 1, 2, 3, 3, 4, 5];

export default CustomerPortraitBar;
