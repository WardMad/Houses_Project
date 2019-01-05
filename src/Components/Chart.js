import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import { inject, observer } from "mobx-react";

@inject("SomeStore")
@observer
class Chart extends Component {
  constructor(props) {
    super(props);
    this.props.SomeStore.showHouse();
  }

  render() {
    function graphData() {
      let chartData = {
        labels: chartDay,
        datasets: [
          {
            label: "Price ",
            backgroundColor: "rgba(255,99,132,0.2)",
            borderColor: "rgba(255,99,132,1)",
            borderWidth: 1,
            hoverBackgroundColor: "rgba(255,99,132,0.4)",
            hoverBorderColor: "rgba(255,99,132,1)",

            data: chartPrice
          }
        ]
      };
      return chartData;
    }

    const { SomeStore } = this.props;

    function refactorDate(num) {
      let element = Date.now() + -num * 24 * 3600 * 1000;
      return [new Date(element).toUTCString()];
    }

    const chartPrice = SomeStore.jitems.map((item, index) => {
      let averige = item.price.Amount / 2;
      // console.log(averige)
      return item.price.Amount.replace(/\D/g, "");
    });

    const chartDay = SomeStore.jitems.map((item, index) => {
      let numb = parseInt(item.price.Amount);

      let day = [item.added.replace(/\D/g, "")];

      let dd = refactorDate(day).map((it, i) => {
        return it;
      });
      var validInfo = dd.filter((el, i) => {
        if (el === "Sun, 23 Dec 2018 19:54:09 GMT") {
          return i;
        } else {
          console.log(typeof el);
          return el;
        }
      });
      // console.log(validInfo)
      //  console.log(refactorDate(day)+ ' == '+ numb)

      return refactorDate(day);
    });

    // console.log(chartPrice +chartDay);

    return (
      <div>
        <h2>Averige Price</h2>

        <Line
          data={graphData()}
          width={300}
          height={350}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }
}
export default Chart;
