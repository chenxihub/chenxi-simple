<template>
  <div class="polyline">
    <div id="polylineChartNode"></div>
  </div>
</template>

<script>
  import G2 from "@antv/g2";

  export default {
    props: {},
    methods: {
      init() {
        let totalMemory = {}; let systemLoadAverage = {}; const
data = [];
        const uptime = _.chain(result.load)
          .keyBy("uptime")
          .forEach((value, time) => {
            const thisTime = result.startTime + Number(time);
            totalMemory = {};
            totalMemory.type = "totalMemory";
            totalMemory.value = value.totalMemory;
            totalMemory.date = $dateFormat("yyyy-MM-dd hh:mm", new Date(thisTime));
            data.push(totalMemory);
            systemLoadAverage = {};
            systemLoadAverage.type = "systemLoadAverage";
            systemLoadAverage.value = value.systemLoadAverage * 1000;
            systemLoadAverage.date = $dateFormat("yyyy-MM-dd hh:mm", new Date(thisTime));
            data.push(systemLoadAverage);
          })
          .value();
        const chart = new G2.Chart({
          container: "systemDataRender",
          forceFit: true,
          height: 400,
          padding: [100, 20, 30, 45], // 上右下左
        });
        chart.source(data);
        chart.tooltip({
          follow: false,
          crosshairs: "y",
          htmlContent: function htmlContent(title, items) {
            const alias = {
              totalMemory: lang.cpu,
              systemLoadAverage: lang.mem,
            };
            let html = "<div class=\"custom-tooltip\">";
            for (let i = 0; i < items.length; i++) {
              const item = items[i];
              const color = item.color;
              const name = alias[item.name];
              const value = item.value;
              const domHead = "<div class=\"custom-tooltip-item\" style=\"border-left-color:" + color + "\">";
              const domName = "<div class=\"custom-tooltip-item-name\">" + name + "</div>";
              const domValue = "<div class=\"custom-tooltip-item-value\">" + value + "</div>";
              const domTail = "</div>";
              html += domHead + domName + domValue + domTail;
            }
            return html + "</div>";
          },
        });
        chart.axis("date", {
          label: {
            textStyle: {
              fill: "#aaaaaa",
            },
          },
        });
        chart.axis("value", {
          label: {
            textStyle: {
              fill: "#aaaaaa",
            },
            formatter: function formatter(text) {
              return text.replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
            },
          },
        });
        chart.legend(false);
        chart.line().position("date*value").color("type");
        chart.render();
        chart.showTooltip({
          x: $("#systemDataRender").width() - 20,
          y: 100,
        });
        setTimeout(
          () => {
            this.update(2);
          }, 6000,
        );
      },
    },
  };
</script>
<style lang="scss" >
  @import "Polyline";
</style>
