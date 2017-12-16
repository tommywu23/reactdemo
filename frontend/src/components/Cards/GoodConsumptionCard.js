import React, { Component } from 'react';

import LineChart from '../Charts/LineChart/LineChart';
import CardWithHead from './CommonCards/CardWithHead';

const GoodConsumption = class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card">
        <CardWithHead title="扫描统计" tips={tips} />
        <LineChart />
      </div>
    );
  }
};

const tips = ['出货', '12个月'];

export default GoodConsumption;
