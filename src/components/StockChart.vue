<template>
  <div class="control-section">
    <div>
      <ejs-stockchart id="stockchartcontainer" :primaryXAxis="primaryXAxis" :primaryYAxis="primaryYAxis" :title="title">
        <e-stockchart-periods>
          <e-stockchart-period intervalType="Minutes" interval="1" text="1m"></e-stockchart-period>
          <e-stockchart-period intervalType="Minutes" interval="30" text="30m"></e-stockchart-period>
          <e-stockchart-period intervalType="Hours" interval="1" text="1H"></e-stockchart-period>
          <e-stockchart-period intervalType="Hours" interval="12" text="12H" selected="true"></e-stockchart-period>
          <e-stockchart-period text="1D"></e-stockchart-period>
        </e-stockchart-periods>
        <e-stockchart-series-collection>
          <e-stockchart-series :dataSource="seriesData" type="Candle" volume='volume' xName='date' low='low' high='high'
            open='open' close='close'></e-stockchart-series>
        </e-stockchart-series-collection>
      </ejs-stockchart>
    </div>
  </div>
</template>
<script>

import { chartData } from "./datasource.js";
import {
  DateTime, CandleSeries, RangeTooltip, LineSeries, SplineSeries,
  HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator, BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
} from "@syncfusion/ej2-vue-charts";


export default {
  data() {
    return {
      seriesData: chartData,
      primaryXAxis: {
        valueType: "DateTime",
        majorGridLines: { color: "transparent" },
      },
      primaryYAxis: {
        majorTickLines: { color: "transparent", width: 0 }
      },
      title: 'AAPL Stock Price',
    };
  },
  provide: {
    stockChart: [
      DateTime, RangeTooltip, LineSeries, SplineSeries, CandleSeries, HiloOpenCloseSeries, HiloSeries, RangeAreaSeries, Trendlines, EmaIndicator, RsiIndicator,
      BollingerBands, TmaIndicator, MomentumIndicator, SmaIndicator, AtrIndicator, AccumulationDistributionIndicator, MacdIndicator, StochasticIndicator, Export
    ]
  }
};
</script>

<style>
#container {
  height: 350px;
}
</style>
