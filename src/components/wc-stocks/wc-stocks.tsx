import { Component, State, h, Element, Prop } from '@stencil/core';
import axios from 'axios';
import { Chart } from 'chart.js/auto';

@Component({
  tag: 'wc-stocks',
  styleUrl: 'wc-stocks.scss',
  shadow: true,
})
export class WcStocks {
  @Prop() symbol: string = 'IBM';
  @State() stockData: { [key: string]: any };
  @Element() private element: HTMLElement;

  private APIKey: string = 'IF751ZLI7R25YVTE';

  async componentWillLoad() {
    const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${this.symbol}&outputsize=compact&apikey=${this.APIKey}`);
    const data = response.data['Time Series (Daily)'];
    const labels = Object.keys(data);
    const prices = labels.map(label => {
      return parseFloat(data[label]['4. close']);
    });

    this.stockData = { labels, prices };

    console.log(this.stockData);
  }

  componentDidLoad() {
    const canvas = this.element.shadowRoot.querySelector('#chart') as any;
    const ctx = canvas.getContext('2d');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.stockData.labels,
        datasets: [
          {
            label: `${this.symbol} Stock Price`,
            data: this.stockData.prices,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
    });
  }

  render() {
    return (
      <div>
        <h2>Stock Market Info About {this.symbol} </h2>
        <canvas id="chart"></canvas>
      </div>
    );
  }
}
