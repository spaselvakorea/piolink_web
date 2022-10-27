// 시스템 정보 - CPU
c_cpu_percent = 0;
Highcharts.chart("container", {
  chart: {
    type: "area",
    events: {
      load: function() {
        // set up the updating of the chart each second
        var DetBPS = this.series[0];
         setInterval(function () {
         	var x = (new Date()).getTime();
         	DetBPS.addPoint([x, c_cpu_percent], true, true);
         }, 1000);
      },
    },
  },
  accessibility: {
    description: "",
  },
  title: {
    text: "",
  },
  xAxis: {
    visible: false,
    type: "datetime",
    tickPixelInterval: 120,
  },
  yAxis: {
    title: {
      text: "",
    },
    minTickInterval: 0,
    min: 0,
    max: 100,
    labels: {
      style: {
        color: "#c3cbe4",
      },
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080",
      },
    ],
  },
  tooltip: {
    formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' + this.y + '%'; //Highcharts.numberFormat(this.y, 2)
    }
},
  exporting: {
    enabled: false,
  },
  plotOptions: {
    area: {
      /*        pointStart: 1932, */
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "CPU",
      data: (function() {
        // generate an array of random data
        var data = [],
          time = new Date().getTime(),
          i;

        for (i = -30; i <= 0; i++) {
          data.push({ x: time + i * 1000, y: 0 });
        }
        return data;
      })(),
    },
  ],
});

// 시스템 정보 - RAM
c_mem_percent = 0;
Highcharts.chart("container2", {
  chart: {
    type: "area",
    events: {
      load: function() {
        // set up the updating of the chart each second
        var DetBPS = this.series[0];
         setInterval(function () {
         	var x = (new Date()).getTime();
         	DetBPS.addPoint([x, c_mem_percent], true, true);
         }, 1000);
      },
    },
  },
  accessibility: {
    description: "",
  },
  title: {
    text: "",

  },

  xAxis: {
    visible: false,
    type: "datetime",
    tickPixelInterval: 120,
  },
  yAxis: {
    title: {
      text: "",
    },
    minTickInterval: 0,
    min: 0,
    max: 100,
    labels: {
      style: {
        color: "#c3cbe4",
      },
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080",
      },
    ],
  },
  tooltip: {
    formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' + this.y + '%'; //Highcharts.numberFormat(this.y, 2)
    }
},
  exporting: {
    enabled: false,
  },
  plotOptions: {
    area: {
      /*        pointStart: 1932, */
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "RAM",
      data: (function() {
        // generate an array of random data
        var data = [],
          time = new Date().getTime(),
          i;

        for (i = -30; i <= 0; i++) {
          data.push({ x: time + i * 1000, y: 0 });
        }
        return data;
      })(),
    },
  ],
});

// 시스템 정보 - Network Traffic
c_network_percent = 0
Highcharts.chart("container3", {
  chart: {
    type: "area",
    events: {
      load: function() {
        // set up the updating of the chart each second
        var DetBPS = this.series[0];
         setInterval(function () {
         	var x = (new Date()).getTime();
         	DetBPS.addPoint([x, c_network_percent], true, true);
         }, 1000);
      },
    },
  },
  accessibility: {
    description: "",
  },
  title: {
    text: "",
  },
  xAxis: {
    visible: false,
    type: "datetime",
    tickPixelInterval: 120,
  },
  yAxis: {
    title: {
      text: "",
    },
    minTickInterval: 0,
    min: 0,
    max: 100,
    labels: {
      style: {
        color: "#c3cbe4",
      },
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080",
      },
    ],
  },
  tooltip: {
    formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' + this.y + '%'; //Highcharts.numberFormat(this.y, 2)
    }
},
  exporting: {
    enabled: false,
  },
  plotOptions: {
    area: {
      /*        pointStart: 1932, */
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "NETWORK",
      data: (function() {
        // generate an array of random data
        var data = [],
          time = new Date().getTime(),
          i;

        for (i = -30; i <= 0; i++) {
          data.push({ x: time + i * 1000, y: 0 });
        }
        return data;
      })(),
    },
  ],
});

// 시스템 정보 - DISK Info
c_disk_percent = 0;
Highcharts.chart("container4", {
  chart: {
    type: "area",
    events: {
      load: function() {
        // set up the updating of the chart each second
        var DetBPS = this.series[0];
         setInterval(function () {
         	var x = (new Date()).getTime();
         	DetBPS.addPoint([x, c_disk_percent], true, true);
         }, 1000);
      },
    },
  },
  accessibility: {
    description: "",
  },
  title: {
    text: "",
  },
  xAxis: {
    visible: false,
    type: "datetime",
    tickPixelInterval: 120,
  },
  yAxis: {
    title: {
      text: "",
    },
    minTickInterval: 0,
    min: 0,
    max: 100,
    labels: {
      style: {
        color: "#c3cbe4",
      },
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080",
      },
    ],
  },
  tooltip: {
    formatter: function () {
        return '<b>' + this.series.name + '</b><br/>' + this.y + '%'; //Highcharts.numberFormat(this.y, 2)
    }
},
  exporting: {
    enabled: false,
  },
  plotOptions: {
    area: {
      /*        pointStart: 1932, */
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "DISK",
      data: (function() {
        // generate an array of random data
        var data = [],
          time = new Date().getTime(),
          i;

        for (i = -30; i <= 0; i++) {
          data.push({ x: time + i * 1000, y: 0 });
        }
        return data;
      })(),
    },
  ],
});

//AI 분석 예측 결과 - 유사도, 스코어 - chart.js

const ctx2 = document.getElementById("pieChart2");

const ctx = document.getElementById("pieChart");
// chart1 and chart2 use "plugin"
const chart1 = new Chart(ctx, {
  // plugins: [ChartDataLabels], // chartjs-plugin-datalabels 불러오기
  type: "pie",
  data: {
    labels: [],
    datasets: [
      {
        label: "Dataset 1",
        data: [],
        backgroundColor: [
          app.color.theme,
          "rgba(" + app.color.themeRgb + ", .15)",
          "rgba(" + app.color.themeRgb + ", .35)",
          "rgba(" + app.color.themeRgb + ", .55)",
        ],
        hoverBackgroundColor: [
          app.color.theme,
          "rgba(" + app.color.themeRgb + ", .15)",
          "rgba(" + app.color.themeRgb + ", .35)",
          "rgba(" + app.color.themeRgb + ", .55)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          render: "label",
          color: "white",
          boxWidth: 10,
          font: {
            size: 10,
          },
        },
      },
      title: {
        display: true,
        text: "악성코드 유형",
        color: "#ffffff",
      },
      // datalabels: {
      //   // datalables 플러그인 세팅
      //   formatter: function(value, context) {
      //     var idx = context.dataIndex; // 각 데이터 인덱스

      //     // 출력 텍스트
      //     return context.chart.data.labels[idx] + ":" + value + "%";
      //   },
      //   align: "top", // 도넛 차트에서 툴팁이 잘리는 경우 사용
      //   color: "#ffffff",
      //   anchor: "center",
      //   // circumference: 1 * Math.PI,
      //   // clip: true,
      //   // arc: true,
      //   // clamp: true,
      //   // display: "auto",
      // },
    },
  },
});

const chart2 = new Chart(ctx2, {
  type: "pie",
  data: {
    labels: [],
    datasets: [
      {
        label: "Dataset 1",
        data: [],
        backgroundColor: [
          app.color.theme,
          "rgba(" + app.color.themeRgb + ", .15)",
          "rgba(" + app.color.themeRgb + ", .35)",
          "rgba(" + app.color.themeRgb + ", .55)",
        ],
        hoverBackgroundColor: [
          app.color.theme,
          "rgba(" + app.color.themeRgb + ", .15)",
          "rgba(" + app.color.themeRgb + ", .35)",
          "rgba(" + app.color.themeRgb + ", .55)",
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "top",
        labels: {
          render: "label",
          color: "white",
          boxWidth: 10,
          font: {
            size: 10,
          },
        },
      },
      title: {
        display: true,
        text: "URL 악성/정상",
        color: "#ffffff",
      },
    },
  },
});

//사고분석 chart
var options = {
  series: [
    {
      name: "",
      type: "column",
      data: [],
      color: "rgb(7, 181, 205)",
    },
    {
      name: "",
      type: "line",
      data: [],
      color: "rgb(60, 210, 165)",
    },
    {
      name: "",
      type: "line",
      data: [],
      color: "#ff6060",
    },
  ],
  chart: {
    height: 200,
    type: "line",
  },
  stroke: {
    width: 4,
  },
  // title: {
  //   text: 'Traffic Sources'
  // },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1, 2],
  },

  xaxis: {

    labels: {
      style: {
        colors: "rgba(255, 255, 255, 0.75)",
      },
    },
  },
  yaxis: [
    {
      labels: {
        style: {
          colors: "rgba(255, 255, 255, 0.75)",
        },
      },
    },
    {
      show: false,
      // opposite: true,
      // title: {
      //   text: 'Social Media',
      //   style: {
      //     color: 'rgba(255, 255, 255, 0.75)'
      //   }
      // }
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#apexMultiChart"), options);
chart.render();

// datepicker
$("#datepicker").datepicker({
  autoclose: true,
  format: "yyyy/mm/dd",
});

/* Controller
------------------------------------------------ */
$(document).ready(function() {
  document.addEventListener("theme-reload", function() {
    $('[data-render="apexchart"], #apexMultiChart, #datepicker').empty();
//    handleRenderChart();
//    handleRenderMap();
  });
});

function AddComma(num)
{
    var regexp = /\B(?=(\d{3})+(?!\d))/g;
    return num.toString().replace(regexp, ',');
}

function ChangeBpsType(bps) {
    if (isNaN(bps)) {
        return "";
    }
    else if (bps < 1000) {
        return parseFloat(bps, 10).toString().substring(0, 5) + " bps";
    }
    else if (bps < 1000000) {
        return parseFloat((bps / 1000), 10).toString().substring(0, 5) + " Kbps";
    }
    else if (bps < 1000000000) {
        return parseFloat((bps / 1000000), 10).toString().substring(0, 5) + " Mbps";
    }
    else {
        return parseFloat((bps / 1000000000), 10).toString().substring(0, 5) + " Gbps";
    }
}

function ChangeByteType(pByte) {

    if (isNaN(pByte)) {
        return "";
    }
    else if (pByte < 1024) {
        return parseFloat(pByte, 10).toString().substring(0, 5) + " byte";
    }
    else if (pByte < (1024 * 1024)) {
        return parseFloat((pByte / 1024), 10).toString().substring(0, 5) + " KB";
    }
    else if (pByte < (1024 * 1024 * 1024)) {
        return parseFloat((pByte / (1024 * 1024)), 10).toString().substring(0, 5) + " MB";
    }
    else {
        return parseFloat((pByte / (1024 * 1024 * 1024)), 10).toString().substring(0, 5) + " GB";
    }
}


function docReady(){
    dashboard_report_count();
    dashboard_report_ai_analysis_info();
    dashboard_system_info();
    dashboard_report_daily_analysis_info();
    dashboard_report_urlhunter_info();
}

function dashboard_report_count()
{
    $.ajax({
        url: 'http://106.254.248.154:40002/monitoring/count_info',
        type: 'GET',
        success: function (data) {

          $("#spnCrawlUrlCnt").text(AddComma(data['total_url_count']));
          $("#spnCrawlFileCnt").text(AddComma(data['total_file_count']));
          $("#spnUrlHunterCnt").text(AddComma(data['urlhunter_url_count']));

          $("#spnAnalysisWaitingFileCount").text(AddComma(data['analysis_waiting_file_count']));
          $("#spnAnalysisConsumingFileCount").text(AddComma(data['analysis_consuming_file_count']));
          $("#spnAnalysisCompleteFileCount").text(AddComma(data['crawler_file_count']));

          $("#spnAnalysisWaitingUrlCount").text(AddComma(data['analysis_waiting_url_count']));
          $("#spnAnalysisConsumingUrlCount").text(AddComma(data['analysis_consuming_url_count']));
          $("#spnAnalysisCompleteUrlCount").text(AddComma(data['crawler_url_count']));

        },
        error: function (data) {
         cRealTimeID = window.setTimeout("dashboard_report_count()", 10000);
        }
    });

    cRealTimeID = window.setTimeout("dashboard_report_count()", 60000 * 5);
}

function dashboard_system_info()
{
    $.ajax({
        url: 'http://106.254.248.154:40002/monitoring/system_info',
        type: 'GET',
        success: function (data) {
            m_cpu_model = data.system_resource_monitoring_data.cpu_model_name;
            if(m_cpu_model.length > 15)
            {
                m_cpu_model = m_cpu_model.substring(0,14);
            }
            $("#spnCpuInfo").text(m_cpu_model);
            $("#spnMemoryInfo").text(ChangeByteType(data.system_resource_monitoring_data.memory_usage) + " / " + ChangeByteType(data.system_resource_monitoring_data.memory_total));
            $("#spnNetworkInfo").text(ChangeBpsType(data.system_resource_monitoring_data.network_usage));
            $("#spnDiskInfo").text(ChangeByteType(data.system_resource_monitoring_data.disk_usage) + " / " + ChangeByteType(data.system_resource_monitoring_data.disk_total));

            c_cpu_percent = data.system_resource_monitoring_data.cpu_per;
            c_mem_percent = data.system_resource_monitoring_data.memory_per;
            c_network_percent = data.system_resource_monitoring_data.network_per;
            c_disk_percent = data.system_resource_monitoring_data.disk_per;

            if(data.server_status_data.zombiezero_status == 'normal')
            {
                $("#liZzeroSystemStatus_normal").attr("class", "active");
                $("#liZzeroSystemStatus_error").attr("class", "");
            }
            else
            {
                $("#liZzeroSystemStatus_normal").attr("class", "");
                $("#liZzeroSystemStatus_error").attr("class", "active");
            }

            if(data.server_status_data.file_ai_status == 'normal')
            {
                $("#liAiFileSystemStatus_normal").attr("class", "active");
                $("#liAiFileSystemStatus_error").attr("class", "");
            }
            else
            {
                $("#liAiFileSystemStatus_normal").attr("class", "");
                $("#liAiFileSystemStatus_error").attr("class", "active");
            }

            if(data.server_status_data.url_ai_status == 'normal')
            {
                $("#liAiUrlSystemStatus_normal").attr("class", "active");
                $("#liAiUrlSystemStatus_error").attr("class", "");
            }
            else
            {
                $("#liAiUrlSystemStatus_normal").attr("class", "");
                $("#liAiUrlSystemStatus_error").attr("class", "active");
            }
//        "server_status_data": {
//        "file_crawler_status": "normal",
//        "url_crawler_status": "normal",
//        "url_hunter_status": "normal",

            m_crawler_server_status_normal_cnt = 0;
            m_crawler_server_status_error_cnt = 0;
            if(data.server_status_data.file_crawler_status == 'normal')
            {
                m_crawler_server_status_normal_cnt = m_crawler_server_status_normal_cnt+1;
                $("#liFileCrawlerStatus").attr("class", "badge bg-success mx-3");
            }
            else
            {
                m_crawler_server_status_error_cnt = m_crawler_server_status_error_cnt + 1;
                $("#liFileCrawlerStatus").attr("class", "badge bg-bg-danger mx-3");
            }

            if(data.server_status_data.url_crawler_status == 'normal')
            {
                m_crawler_server_status_normal_cnt = m_crawler_server_status_normal_cnt+1;
                $("#liUrlCrawlerStatus").attr("class", "badge bg-success");
            }
            else
            {
                m_crawler_server_status_error_cnt = m_crawler_server_status_error_cnt + 1;
                $("#liUrlCrawlerStatus").attr("class", "badge bg-danger");
            }

            if(data.server_status_data.url_hunter_status == 'normal')
            {
                m_crawler_server_status_normal_cnt = m_crawler_server_status_normal_cnt+1;
                $("#liUrlHunterStatus").attr("class", "badge bg-success");
            }
            else
            {
                m_crawler_server_status_error_cnt = m_crawler_server_status_error_cnt + 1;
                $("#liUrlHunterStatus").attr("class", "badge bg-danger");
            }

            $("#spnCrawlerServerNormalCount").text(m_crawler_server_status_normal_cnt);
            $("#spnCrawlerServerErrorCount").text(m_crawler_server_status_error_cnt);



        },
        error: function (data) {
          cRealTimeID = window.setTimeout("dashboard_system_info()", 3000);
        }
    });
    cRealTimeID = window.setTimeout("dashboard_system_info()", 3000);
}

function dashboard_report_ai_analysis_info()
{
    $.ajax({
        url: 'http://106.254.248.154:40002/monitoring/ai_analysis_info',
        type: 'GET',
        success: function (data) {

        m_labels = [];
        m_data = [];
        for (var i = 0; i < data.ai_file_result.length; i++) {
            m_labels.push(data.ai_file_result[i].key);
            m_data.push(data.ai_file_result[i].doc_count);
        }

        chart1.data = {
            labels:m_labels,
            datasets: [
              {
                label: "Dataset 1",
                data: m_data,
                backgroundColor: [
                  "#00ffff",
          "#00dacd",
          "rgba(" + app.color.themeRgb + ", .15)",
          "rgba(" + app.color.themeRgb + ", .35)",
          "#00b690",
          "#009184",
          "rgba(" + app.color.themeRgb + ", .55)",
          "rgba(" + app.color.themeRgb + ", .85)",
          "#005260",
          "#0f728c",
                ],
                hoverBackgroundColor: [
                  "#00ffff",
          "#00dacd",
          "#00b690",
          "#009184",
          "#005260",
          "#0f728c",
          "rgba(" + app.color.themeRgb + ", .15)",
          "rgba(" + app.color.themeRgb + ", .35)",
          "rgba(" + app.color.themeRgb + ", .55)",
          "rgba(" + app.color.themeRgb + ", .85)",

                ],
                borderWidth: 0,
              },
            ],
          };
        chart1.update();

        m_labels = [];
        m_data = [];
        for (var i = 0; i < data.ai_url_result.length; i++) {
            m_labels.push(data.ai_url_result[i].key);
            m_data.push(data.ai_url_result[i].doc_count);
        }

        chart2.data = {
            labels:m_labels,
            datasets: [
              {
                label: "Dataset 1",
                data: m_data,
                backgroundColor: [
                  app.color.theme,
                  "rgba(" + app.color.themeRgb + ", .15)",
                  "rgba(" + app.color.themeRgb + ", .35)",
                  "rgba(" + app.color.themeRgb + ", .55)",
                ],
                hoverBackgroundColor: [
                  app.color.theme,
                  "rgba(" + app.color.themeRgb + ", .15)",
                  "rgba(" + app.color.themeRgb + ", .35)",
                  "rgba(" + app.color.themeRgb + ", .55)",
                ],
                borderWidth: 0,
              },
            ],
          };
        chart2.update();


        },
        error: function (data) {
            cRealTimeID = window.setTimeout("dashboard_report_ai_analysis_info()", 10000);

        }
    });

    cRealTimeID = window.setTimeout("dashboard_report_ai_analysis_info()", 60000 * 5);
}

function dashboard_report_daily_analysis_info()
{
    $.ajax({
        url: 'http://106.254.248.154:40002/monitoring/daily_analysis_info',
        type: 'GET',
        success: function (data) {

        m_data_collect = [];
        m_data_ai_malware = [];
        m_data_zzero_malware = [];
        for (var i = 0; i < data.collect_result.length; i++) {
            m_data_collect.push({'x':data.collect_result[i].key_as_string.substring(5,10), 'y':data.collect_result[i].doc_count});
            m_data_ai_malware.push({'x':data.collect_result[i].key_as_string.substring(5,10), 'y':data.ai_malware_result[i].doc_count});
            m_data_zzero_malware.push({'x':data.collect_result[i].key_as_string.substring(5,10), 'y':data.zzero_malware_result[i].doc_count});

        }


        chart.updateSeries([
            {
              name: "수집 파일",
              type: "column",
              data: m_data_collect,
              color: "rgb(7, 181, 205)",
            },
            {
              name: "AI 악성판정",
              type: "line",
              data: m_data_ai_malware,
              color: "rgb(60, 210, 165)",
            },
            {
              name: "행위분석 악성판정",
              type: "line",
              data: m_data_zzero_malware,
              color: "#ff6060",
            },
          ])


            for (var i = 0; i < data.vaccine_top3.length; i++) {
                m_key = data.vaccine_top3[i].key;
                if(m_key.length > 8)
                {
                    m_key = m_key.substring(0,7);
                }
                $("#spnAntivirusName" + (i+1)).text(m_key);
                $("#spnAntivirusCnt" + (i+1)).text(data.vaccine_top3[i].doc_count);
            }

            for (var i = 0; i < data.yara_top3.length; i++) {
                m_key = data.yara_top3[i].key;
                if(m_key.length > 8)
                {
                    m_key = m_key.substring(0,7);
                }
                $("#spnYaraName" + (i+1)).text(m_key);
                $("#spnYaraCnt" + (i+1)).text(data.yara_top3[i].doc_count);
            }

            for (var i = 0; i < data.ai_top3.length; i++) {
                m_key = data.ai_top3[i].key;
                if(m_key.length > 8)
                {
                    m_key = m_key.substring(0,7);
                }
                $("#spnAiName" + (i+1)).text(m_key);
                $("#spnAiCnt" + (i+1)).text(data.ai_top3[i].doc_count);
            }

        },
        error: function (data) {
         cRealTimeID = window.setTimeout("dashboard_report_daily_analysis_info()", 10000);
        }
    });

    cRealTimeID = window.setTimeout("dashboard_report_daily_analysis_info()", 60000 * 5);
}

function dashboard_report_urlhunter_info()
{
    $.ajax({
        url: 'http://106.254.248.154:40002/monitoring/urlhunter_info',
        type: 'GET',
        success: function (data) {

            for (var i = 0; i < data.url_list.length; i++) {
                if(data.url_list[i].is_detected=="Y")
                {
                    $("#divUrlHunterDataStatus" + (i+1)).attr("class", "border-danger web-image-frame");
                }
                else
                {
                    $("#divUrlHunterDataStatus" + (i+1)).attr("class", "border-success web-image-frame");
                }
                $("#imgUrlHunter" + (i+1)).attr("src", "https://125.7.199.176/static/screenshots/" + data.url_list[i].screenshot)

                $("#spnUrlHunterDataName" + (i+1)).text(data.url_list[i].site_name);
            }
            for (var i = data.url_list.length; i < 8; i++) {
                $("#divUrlHunterDataStatus" + (i+1)).attr("class", "border-success web-image-frame");
                $("#spnUrlHunterDataName" + (i+1)).text('-');
            }

            $('#spnUrlHunterDetectCount').text(data.total_detect_count);
            $('#spnUrlHunterNormalCount').text(data.total_normal_count);


        },
        error: function (data) {
         cRealTimeID = window.setTimeout("dashboard_report_urlhunter_info()", 10000);
        }
    });

    cRealTimeID = window.setTimeout("dashboard_report_urlhunter_info()", 60000 * 5);
}

