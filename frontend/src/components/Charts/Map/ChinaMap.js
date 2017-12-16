import React, { Component } from 'react';

import ReactEchartsCore from 'echarts-for-react/lib/core';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/map';
import 'echarts/map/js/china';

const ChinaMap = class extends Component {
  render() {
    const getOption = this.props.option ? this.props.option : option;
    getOption.title.text = this.props.title;
    return (
      <ReactEchartsCore
        echarts={echarts}
        option={getOption}
        notMerge={true}
        lazyUpdate={true}
        style={{ height: '400px' }}
        theme={'theme_name'}
        onChartReady={this.onChartReadyCallback}
      />
    );
  }
};

const geoCoordMap = {
  上海: [121.48, 31.22],
  深圳: [114.07, 22.62],
  北京: [116.46, 39.92]
};

const data = [
  {
    name: '上海',
    value: '200'
  },
  {
    name: '北京',
    value: '100'
  },
  {
    name: '深圳',
    value: '100'
  }
];

const convertData = function(data) {
  var res = [];
  for (var i = 0; i < data.length; i++) {
    var geoCoord = geoCoordMap[data[i].name];
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      });
    }
  }
  return res;
};

const convertedData = [
  convertData(data),
  convertData(
    data
      .sort(function(a, b) {
        return b.value - a.value;
      })
      .slice(0, 6)
  )
];

let option = {
  title: {},
  tooltip: {
    trigger: 'item',
    showDelay: '20',
    backgroundColor: '#4A4A4A;',
    padding: [0, 5, 0, 5]
  },
  visualMap: {
    show: false,
    min: 0,
    max: 200,
    splitNumber: 5,
    left: 'left',
    top: 'bottom',
    inRange: {
      color: ['red', 'red']
    },
    precision: 0
  },
  toolbox: {
    show: true,
    orient: 'horizontal',
    right: '2%',
    bottom: '5%',
    itemSize: 18
  },
  geo: {
    map: 'china',
    aspectScale: 0.8, // 地图长宽比
    height: '400px',
    label: {
      normal: {
        show: false
      },
      emphasis: {
        show: false,
        position: 'left'
      }
    },
    itemStyle: {
      normal: {
        areaColor: '#EEEEEE',
        borderWidth: 0.05
      },
      emphasis: {
        areaColor: '#EEEEEE',
        borderWidth: 0.5
      }
    },
    data: data
  },
  series: [
    {
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertedData[0],
      symbolSize: function(val) {
        return val[2] / 5;
      },
      label: {
        normal: {
          formatter: '{b}',
          position: 'right',
          show: false
        },
        emphasis: {
          show: true
        }
      },
      itemStyle: {
        normal: {
          color: '#FF8C00',
          position: 'right',
          show: true
        }
      }
    }
  ]
};

export default ChinaMap;
