//인풋에 검색어 엔터 시 tag ui 출력
// let searchTags = [];

// function search(ele) {
//   if (event.key === "Enter" || event.type === "click") {
//     //inut value
//     let txtval = document.querySelector('input[name="searchTag"]').value;

//     if (searchTags.includes(txtval) || searchTags.length > 16) {
//       // console.log("포함");
//     } else if (txtval == "") {
//       //do nothing
//     } else {
//       // console.log("불포함");

//       searchTags.push(txtval);

//       const lastValue = searchTags[searchTags.length - 1];

//       let html = `<div id="seachTagBtn" class="ui-searching-tag alert alert-primary alert-dismissible fade show me-2 mb-2" role="alert">
// 				${lastValue}
// 				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
// 				</button>
// 			</div>`;

//       $("#searching_tag").append(html);
//     }
//   }
// }

//인풋에 추가 검색어 엔터 시 tag ui 출력
// const addSearchTags = [];
// const lastValue = addSearchTags[addSearchTags.length - 1];

// function addSearch(ele) {
//   if (event.key === "Enter" || event.type === "click") {
//     //inut value 검색창
//     let txtval = document.querySelector('input[name="addSearchTag"]').value;
//     //and & or
//     let conjunction = document.getElementById("conjunction").value;
//     //target select 
//     let sortTest = document.getElementById("sortTest").value;

//     if (addSearchTags.includes(txtval) || addSearchTags.length > 16) {
//       // console.log("포함");
//     } else if (txtval == "") {
//       //do nothing
//     } else {
//       // console.log("불포함");
      
//       addSearchTags.push(txtval);
//       const lastValue = addSearchTags[addSearchTags.length - 1];

//       let html = `<div id="seachTagBtn" class="ui-searching-tag alert alert-primary alert-dismissible fade show me-2 mb-2" role="alert">
//         <span class="badge bg-secondary">${conjunction}</span>
//         <span class="badge bg-secondary">${sortTest}</span>
// 				${lastValue}
// 				</button>
// 			</div>`;

//       $("#searching_tag").append(html);
//     }
//   }
// }

// input mirroring
// $("#searchVal").bind("keypress keyup blur", function() {
//   $("#fillterVal").val($(this).val());
// });

// $("#fillterVal").bind("keypress keyup blur", function() {
//   $("#searchVal").val($(this).val());
// });

function safeVal(value){
		return (typeof value  !== "undefined" && value)? value:"NONE";
}

function addRow(event) {
  let html = `
  <div class="mt-2 addingSearchRow" id="addingSearch">
    <label for="">검색어 추가 :</label>
    <div class="d-flex">
      <!-- and & or -->
      <div class="flex-shrink-0">
        <select id="conjunction" class="form-select" name="conjunction">   
          <option value="and">AND</option>   
          <option value="or">OR</option>
        </select>
      </div>
      <div class="flex-shrink-0 mx-2 col-2">
        <!-- 분류 -->
        <!-- 전체 -->
        <select id="sortTest" name="" class="form-select">
          <option selected="selected" value="ENTIRE">전체</option>
          <option value="전체">URI - 전체</option>
          <option value="IP">URI - IP</option>
          <option value="국가정보">URI - 국가정보</option>
          <option value="">URI - URL</option>
          <option value="">URI - 스코어</option>
          <option value="">FILE - 전체</option>
          <option value="">FILE - 파일명</option>
          <option value="">FILE - MD5</option>
          <option value="">FILE - 파일 크기</option>
          <option value="">FILE - 유사도</option>
          <option value="">FILE - 공격 유형</option>
        </select>
      </div>

      <!-- 검색창 -->
      <div class="input-group">
        <input id="addSearchTag" type="text" name="addSearchTag" class="form-control px-35px" placeholder="Filter orders">
        <div class="input-group-text position-absolute top-0 bottom-0 bg-none border-0 start-0" style="z-index: 1020;">
          <i class="fa fa-search opacity-5"></i>
        </div>
      </div>

      <!-- 검색 버튼 -->
      <button 
        class="btn btn-outline-default rounded-0 px-4 flex-shrink-0" 
        type="button" 
        onclick="">
          검색
      </button>

      <button 
      class="deleteRow btn btn-outline-default rounded-0 flex-shrink-0" 
      type="button">
        <i class="bi bi-x"></i>
    </button>
    </div>
  </div>
  `
  if($('.addingSearchRow').length < 5) {
    $("#def2").append(html);
  }
}

$(document).on("click", ".deleteRow", function(){
  $(this).parent().parent().remove();
});


// rating star
$(".kv-ltr-theme-fas-star").rating({
  displayOnly: true,
  hoverOnClear: false,
  theme: "krajee-fas",
  defaultCaption: "{rating}",
  starCaptions: function(rating) {
    // return rating == 1 ? 'One heart' : rating + ' hearts';
  },
  filledStar: '<i class="fas fa-circle"></i>',
  emptyStar: '<i class="far fa-circle"></i>',
});

// datetime picker
jQuery.datetimepicker.setLocale("kr");

jQuery(function() {
  jQuery("#date_timepicker_start").datetimepicker({
    i18n: {
      de: {
        months: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ],
        dayOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
      },
    },
    format: "Y/m/d H:i",
    onShow: function(ct) {
      this.setOptions({
        maxDate: jQuery("#date_timepicker_end").val()
          ? jQuery("#date_timepicker_end").val()
          : false,
      });
    },
  });
  jQuery("#date_timepicker_end").datetimepicker({
    format: "Y/m/d H:i",
    onShow: function(ct) {
      this.setOptions({
        minDate: jQuery("#date_timepicker_start").val()
          ? jQuery("#date_timepicker_start").val()
          : false,
      });
    },
  });
});

//fiiler 버튼 클릭 시 fillter panel 활성화
$("#fillterBtn").click(function() {
  $(".app-theme-panel").toggleClass("active");
});

//자세히 버튼 클릭 시 화살표 아이콘 toggle
$(".btn-more").click(function() {
  if ($(this).attr("aria-expanded") == "true") {
    $(this)
      .find("i")
      .removeClass("bi-chevron-down");
    $(this)
      .find("i")
      .addClass(" bi-chevron-up");
  } else {
    $(this)
      .find("i")
      .removeClass("bi-chevron-up");
    $(this)
      .find("i")
      .addClass("bi-chevron-down");
  }
});

$('#modalFile').on('shown.bs.modal', function (e) {
  var data = window.esdata[window.row_index];
  var m = data._source.ai_file_analysis_result.detail_info.data.detection_percentage.Malware;
  var n = data._source.ai_file_analysis_result.detail_info.data.detection_percentage.Normal;

  var bac = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Backdoor;
  var dow = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Downloader;
  var dro = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Dropper;
  var key = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Keylogger;
  var ran = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Ransom;
  var tro = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Trojan;
  var wor = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Worm;

  console.log(m,n);
  // ai 분석결과
  chart_analisys_result = {
    chart: {
      // width: 200,
      height: 260,
      type: "pie",
    },
    // series: type_chart_series,
    // labels: type_chart_labels,
    series: [m, n],
    labels: ["Malware", "Normal"],
    colors: ["#ed495c", "#3cd2a5"],
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: 10,
    },
  };
  
  (chart = new ApexCharts(
    document.querySelector("#chartAnalisysResult"),
    chart_analisys_result
  )).render();

  // 유형 유사도
  var options = {
      series: [{
      name: 'Ransomware',
      data: [ran, bac, wor, tro, dow, dro, key],
    }]
    ,
      chart: {
        width: '100%',
        height: 268,
        type: 'radar',
        offsetY: -20,
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        },
        toolbar : {
          show: false,
        },
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 0
    },
    
    yaxis: {
      // categories: ['April', 'May', 'June', 'July', 'August', 'September'],
      labels: {
        show: true,
        style: {
          colors: "rgba(255,255,255,.75)"
        }
      }
    },
    xaxis: {
      categories: ['Ransomre', 'Backdoor', 'Worm', 'Trojan', 'Downloader', 'Dropper', 'Keylogger', ],
      labels: {
       style: {
         colors: ['rgb(255,96,96)','#30beff', '#3cd2a5', '#ff9f0c', '#bba4ff', '#f9e80d', '#777' ]
       } 
      }
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chartSimilarity"), options);
  chart.render();
});

// 분석 통계 차트
type_chart2 = {
  chart: {
    width: 200,
    height: 280,
    type: "donut",
  },
  // series: type_chart_series,
  // labels: type_chart_labels,
  series: [23, 37],
  labels: ["ETC", "Network"],
  colors: ["#ed495c", "#f79246", "#febb2a", "#81c784", "#35b1e3"],
  legend: {
    show: !0,
    position: "bottom",
    horizontalAlign: "center",
    verticalAlign: "middle",
    floating: !1,
    fontSize: "14px",
    offsetX: 0,
    offsetY: 0,
  },
};

(chart = new ApexCharts(
  document.querySelector("#type_chart"),
  type_chart2
)).render();

//selection change upto URI or FILE
// const divisionSelection = document.querySelector('#divisionSelection');
// const uriUi = document.querySelectorAll('.uri-ui');
// const fileUi = document.querySelectorAll('.file-ui');

// function divisionSelectionToggle() {
//   if (divisionSelection.value === 'URI') {
//     uriUi.forEach(function (uriUi ) {
//       uriUi.classList.add('visible');
//     });

//     fileUi.forEach(function (fileUi ) {
//       fileUi.classList.remove('visible');
//     });
//   } else {
//     fileUi.forEach(function (fileUi ) {
//       fileUi.classList.add('visible');
//     });

//     fileUi.forEach(function (uriUi ) {
//       uriUi.classList.remove('visible');
//     });
//   }
// }

// divisionSelection.addEventListener("change",divisionSelectionToggle);
// $("#divisionSelection").on("change", function(){
//   console.log($(this).val());

//   if($(this).val() === "URI") {
//     $(".uri-ui").addClass("visible");
//     $(".file-ui").removeClass("visible");
//     $(".entire-ui").removeClass("visible");
//   } else if($(this).val() === "FILE"){
//     $(".file-ui").addClass("visible");
//     $(".uri-ui").removeClass("visible");
//     $(".entire-ui").removeClass("visible");
//   }
// });

//network chart
var nodes = null;
var edges = null;
var network = null;

var DIR = "../assets/img/network-icon/";
var EDGE_LENGTH_MAIN = 150;
var EDGE_LENGTH_SUB = 50;

// Called when the Visualization API is loaded.
function draw() {
  // Create a data table with nodes.
  nodes = [];

  // Create a data table with links.
  edges = [];

  nodes.push({
    id: 1,
    label: "Main",
    image: DIR + "api.png",
    shape: "image",
  });
  nodes.push({
    id: 2,
    label: "Office",
    image: DIR + "file.png",
    shape: "image",
  });
  nodes.push({
    id: 3,
    label: "Wireless",
    image: DIR + "memory.png",
    shape: "image",
  });
  edges.push({ from: 1, to: 2, length: EDGE_LENGTH_MAIN });
  edges.push({ from: 1, to: 3, length: EDGE_LENGTH_MAIN });

  for (var i = 4; i <= 7; i++) {
    nodes.push({
      id: i,
      label: "Computer",
      image: DIR + "network.png",
      shape: "image",
    });
    edges.push({ from: 2, to: i, length: EDGE_LENGTH_SUB });
  }

  nodes.push({
    id: 101,
    label: "Printer",
    image: DIR + "process.png",
    shape: "image",
  });
  edges.push({ from: 2, to: 101, length: EDGE_LENGTH_SUB });

  nodes.push({
    id: 102,
    label: "Laptop",
    image: DIR + "process_.png",
    shape: "image",
  });
  edges.push({ from: 3, to: 102, length: EDGE_LENGTH_SUB });

  nodes.push({
    id: 103,
    label: "network drive",
    image: DIR + "registry.png",
    shape: "image",
  });
  edges.push({ from: 1, to: 103, length: EDGE_LENGTH_SUB });

  // create a network
  var container = document.getElementById("mynetwork");
  var data = {
    nodes: nodes,
    edges: edges,
  };
  var options = {
    nodes: {
      font: {
        color: '#fff'
      }
    }
  };
  network = new vis.Network(container, data, options);
}

window.addEventListener("load", () => {
  draw();
});

function formatDate(date) {
  var d = new Date(date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) 
    month = '0' + month;
  if (day.length < 2) 
    day = '0' + day;

  return [year, month, day].join('-');
}

function urlModelFunction(data) {
  console.log(data._source.ai_url_analysis_result.is_result);
  console.log(data);
  if(data._source.ai_url_analysis_result.is_result == false)
  {
    $("#url1").replaceWith("NONE");
    $("#url11").replaceWith("NONE");
    $("#url12").replaceWith("NONE");
    $("#url13").replaceWith("NONE");
    $("#url14").replaceWith("NONE");
    $("#url15").replaceWith("NONE");
    $("#url16").replaceWith("NONE");
    $("#url17").replaceWith("NONE");
    $("#url18").replaceWith("NONE");
    $("#url19").replaceWith("NONE");
    $("#url20").replaceWith("NONE");
    $("#url21").replaceWith("NONE");
    $("#url22").replaceWith("NONE");
    $("#url23").replaceWith("NONE");
    $("#url24").replaceWith("NONE");
    $("#url25").replaceWith("NONE");
    $("#url26").replaceWith("NONE");
    $("#url27").replaceWith("NONE");
    $("#url28").replaceWith("NONE");
    $("#url29").replaceWith("NONE");
    $("#url30").replaceWith("NONE");
    $("#url31").replaceWith("NONE");
    $("#url32").replaceWith("NONE");
    $("#url33").replaceWith("NONE");
    $("#url34").replaceWith("NONE");
    $("#url35").replaceWith("NONE");
    $("#url36").replaceWith("NONE");
  }
  else
  {
    $("#url1").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.prediction_score));
    $("#url11").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.html_lenth));
    $("#url12").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.windows_popup_cnt));
    $("#url13").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.redirect_cnt));
    $("#url14").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.short_and_redirect));
    $("#url15").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.ssl_remain_day));
    $("#url16").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.onmouseover_cnt));
    $("#url17").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.mouseevent_right_cnt));
    $("#url18").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.alexa_top));
    $("#url19").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.having_iframe));
    $("#url20").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.external_link_ratio));
    $("#url21").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.sharp_tag_link_ratio));
    $("#url22").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.meta_script_link_tag_ratio));
    $("#url23").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.form_tag_link));
    $("#url24").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.email_tag_link));
    $("#url25").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.external_script_link_ratio));
    $("#url26").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.open_port));
    $("#url27").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.having_at_cnt));
    $("#url28").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.url_length));
    $("#url29").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.having_ip_address));
    $("#url30").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.hyphen_cnt));
    $("#url31").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.slash_cnt));
    $("#url32").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.having_https_protocol));
    $("#url33").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.https_in_domain));
    $("#url34").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.url_number_cnt_ratio));
    $("#url35").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.ssl_remain_day));
    $("#url36").replaceWith(safeVal(data._source.ai_url_analysis_result.detail_info.msg.feature.whois_domain_expiration));
  }
  const d = new Date(data._source.collect_info.collect_date);
  $("#url2").replaceWith(formatDate(d)+' '+d.toLocaleTimeString());
  $("#url3").replaceWith(safeVal(data._source.collect_info.collect_server_ip));
  var str4 = "";
  if(data._source.url_reputation_result.detail_info.is_malicious_url)
  {
    str4 = "악성(malware)";
  }
  else
  {
    str4 = "정상(normal)";
  }
  $("#url4").replaceWith(str4);
  $("#url5").replaceWith(safeVal(data._source.collect_info.country));
  $("#url6").replaceWith(safeVal(data._source.collect_info.url));
  const d2 = new Date(data._source.reg_date);
  $("#url7").replaceWith(formatDate(d2)+' '+d2.toLocaleTimeString());
  $("#url8").replaceWith("WIP");
  $("#url9").replaceWith(safeVal(data._source.collect_info.ip));
  $("#url10").replaceWith("WIP");
  
}

function urlROW_BS(data)
{
  var colorcode = "badge bg-danger";
  if(data._source.url_reputation_result.detail_info.is_malicious_url == false)
  {
    colorcode = "badge bg-danger";
  }
  else
  {
    colorcode = "badge bg-success";
  }
  var str = "NONE";
  if(data._source.ai_url_analysis_result.is_result == false)
  {
    str = "NONE";
  }
  else
  {
    str = data._source.ai_url_analysis_result.detail_info.msg.prediction_score;
  }
  const d = new Date(data._source.reg_date);
  let dataJson = { "field001": formatDate(d)+'<br>'+d.toLocaleTimeString(),
  "field002": data._source.collect_info.collect_server_ip,
  "field003": 'URI',
  "field004": '<ul><li>서버 IP : '+data._source.collect_info.ip+' ( '+data._source.collect_info.country+' )</li><li>URL : <a href="#">'+data._source.collect_info.url+'</a></li></ul>',
  "field005": '평판분석: <span class="'+colorcode+'">악성</span>',
  "field006": '<strong class="text-theme">'+str+'</strong>' };
  return dataJson;
  }

  function fileModelFunction(data) {
  $("#file1").replaceWith(safeVal(data._source.collect_info.file_name));
  $("#file2").replaceWith(safeVal(data._source.file_info.length));
  $("#file3").replaceWith(safeVal(data._source.type));
  $("#file4").replaceWith("WIP");
  $("#file5").replaceWith(safeVal(data._source.file_info.length));
  $("#file6").replaceWith(safeVal(data._source.file_info.sha1));
  $("#file7").replaceWith(safeVal(data._source.file_info.sha256));
  $("#file8").replaceWith(safeVal(data._source.file_info.sha512));
  $("#file9").replaceWith(safeVal(data._source.file_info.magic_mime) + " " + safeVal(data._source.file_info.guess_extension));
  $("#file10").replaceWith(safeVal(data._source.file_info.pe_info.digital_sign.subject));
  $("#file11").replaceWith(safeVal(data._source.file_info.pe_info.digital_sign.algorithm));
  $("#file12").replaceWith(safeVal(data._source.file_info.pe_info.digital_sign.hash_algorithm));
  $("#file13").replaceWith(safeVal(data._source.file_info.pe_info.digital_sign.valid_from));
  $("#file14").replaceWith(safeVal(data._source.file_info.pe_info.digital_sign.valid_to));
  $("#file15").replaceWith(safeVal(data._source.file_info.pe_info.digital_sign.issuer));
  $("#file16").replaceWith(safeVal(data._source.file_info.pe_info.digital_sign.serial_number));
  $("#file17").replaceWith(safeVal(data._source.zzero_analysis_result.detail_info.vaccine_detect_result));
  $("#file18").replaceWith(safeVal(data._source.zzero_analysis_result.detail_info.vaccine_detail_result));
  $("#file19").val(data._source.zzero_analysis_result.detail_info.static_result);
  $("#file20").replaceWith(safeVal(data._source.zzero_analysis_result.detail_info.detail_analysis_info.static_yara_rule));
  $("#file21").val(data._source.zzero_analysis_result.detail_info.dynamic_result);
  $("#file22").replaceWith(safeVal(data._source.zzero_analysis_result.detail_info.detail_analysis_info.dynamic_analysis));

  $("#file_tab1_1_2").replaceWith(safeVal(data._source.ai_file_analysis_result.detail_info.data.detection_percentage.Malware)+'% <span class="text-danger">'+safeVal(data._source.ai_file_analysis_result.detail_info.data.detection)+'</span>') ;
  $("#file_tab1_3").replaceWith(safeVal(data._source.ai_file_analysis_result.execute_time));
  $("#file_tab1_4_5").replaceWith(safeVal(data._source.ai_file_analysis_result.detail_info.data.malware));

  var bac = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Backdoor;
  var dow = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Downloader;
  var dro = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Dropper;
  var key = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Keylogger;
  var ran = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Ransom;
  var tro = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Trojan;
  var wor = data._source.ai_file_analysis_result.detail_info.data.malware_type_percentage.Worm;
  $("#file_tab1_6").replaceWith(Math.max(ran, bac, wor, tro, dow, dro, key)+'%');

  //var tot = ran+ bac+ wor+ tro+ dow+ dro+ key;
  //ran*100/tot
  html = `<ul class="px-3 d-flex">
            <li><span class="text-danger">Ransomware : </span>`+ran+`%</li>
            <li class="mx-2"><span class="text-info">Backdoor : </span>`+bac+`%</li>
            <li><span class="text-teal">Worm : </span>`+wor+`%</li>
          </ul>
          <ul class="px-3 d-flex">
            <li><span class="text-warning">Trojan : </span>`+tro+`%</li>
            <li class="mx-2"><span class="text-indigo">Downloader : </span>`+dow+`%</li>
            <li><span class="text-yellow">Dropper : </span>`+dro+`%</li>
            </ul>
          <ul class="px-3 d-flex">
            <li><span class="text-muted">Keylogger : </span>`+key+`%</li>
          </ul>`;
  $("#art001").replaceWith(html);
  
  //$("#file_tab1_7").replaceWith("");
}

function fileROW_BS(data)
{
  const d = new Date(data._source.reg_date);
  const d1 = new Date(data._source.zzero_analysis_result.execute_time);
  const d2 = new Date(data._source.ai_file_analysis_result.execute_time);
  var colorcode = "badge bg-danger";
  if(data._source.zzero_analysis_result.detail_info.total_result == false)
  {
    colorcode = "badge bg-danger";
  }
  else
  {
    colorcode = "badge bg-success";
  }
  let dataJson = { "field001": formatDate(d)+'<br>'+d.toLocaleTimeString(),
        "field002": 'OSINT1<br>'+data._source.collect_info.collect_server_ip,
        "field003": 'FILE',
        "field004": '<ul>' +
                    '<li>' +
                    '		분석 대상(File) :' + 
                    '		<span class="text-success text-decoration-underline">'+data._source.collect_info.file_name+'</span>' +
                    '	</li>' +
                    '	<li>MD5 : '+data._source.file_info.md5+'</li>' +
                    '	<li>파일 크기 : '+data._source.file_info.length+'</li>' +
                    '	<li>행위 분석 완료 시간 : '+formatDate(d1)+' '+d1.toLocaleTimeString()+'</li>' +
                    '	<li>AI 분석 완료 시간 :    '+formatDate(d2)+' '+d2.toLocaleTimeString()+'</li>' +
                    '	<li>총 분석 시간 : '+data._source.total_execute_time+'</li>' +
                  '</ul>',
      "field005": '<ul>' +
                    '<li class="d-flex align-items-center">' +
                      'AV분석 : <span class="badge badge-overflow-ellipsis">'+data._source.zzero_analysis_result.detail_info.static_result+'</span></li>' +
                      '<li class="d-flex align-items-center">' +
                        '	정적 분석 :' + 
                        '	<input' + 
                        '	name="input-1-ltr-star-xs"' + 
                        '	class="kv-ltr-theme-fas-star rating-loading"' + 
                        '	value="'+data._source.zzero_analysis_result.detail_info.static_result+'"' + 
                        '	dir="ltr"' + 
                        '	data-size="xs" />' +
                      '</li>' +
                    '<li class="d-flex align-items-center">' +
                      '	동적 분석 :' + 
                      '	<input' + 
                      '	name="input-1-ltr-star-xs"' + 
                      '	class="kv-ltr-theme-fas-star rating-loading"' + 
                      '	value="'+data._source.zzero_analysis_result.detail_info.dynamic_result+'"' + 
                      '	dir="ltr"' + 
                      '	data-size="xs" />' +
                      '	</li>' +
                    '	<li>분석 결과: <span class="badge '+colorcode+'">악성</span></li>' +
                  '	</ul>',
      "field006": '	유사도 : <strong class="text-theme">'+data._source.ai_file_analysis_result.detail_info.data.detection_percentage.Malware+'</strong><br>' +
                  '	공격 유형 : <span class="badge">'+data._source.ai_file_analysis_result.detail_info.data.malware+'</span>' };

  return dataJson;
}

function downloadObjectAsJson(exportName){
  var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(window.esdata));
  var downloadAnchorNode = document.createElement('a');
  downloadAnchorNode.setAttribute("href",     dataStr);
  downloadAnchorNode.setAttribute("download", exportName + ".json");
  document.body.appendChild(downloadAnchorNode); // required for firefox
  downloadAnchorNode.click();
  downloadAnchorNode.remove();
}

function docReady(){
  window.pageno = 1;
  $.ajax({
    url: 'http://106.254.248.154:40002/es',
    type: 'GET',
    success: function (data) {
      window.esdata = data;
      //alert(esdata.length);
      for (let i = 0; i < esdata.length; i++) {
          if(esdata[i]._source.type.toUpperCase() === "URL" )
          {
            var json = urlROW_BS(window.esdata[i]);
            $('#table').bootstrapTable('append',json);
          }
          else
          {
            var json = fileROW_BS(window.esdata[i]);
             $('#table').bootstrapTable('append',json);
          }
        }
    },
    error: function (data) {
      debugger;
      alert("Error");
    }
  });
  $('#table').on("page-change.bs.table", function (number, size) {
    window.pageno = size;
    console.log("Page No: "+window.pageno);
  });
  $('#table').on("refresh.bs.table", function (params) {
    console.log("refresh.bs.table clicked");
    window.location.reload();
  });
  $('#table').on("click-row.bs.table", function (e, row, element) {
    //console.log("Page No: "+pageno);
    //console.log("Page Size: "+pagesize);
    //var ind = (element.index()+((pageno-1)*pagesize));
    window.row_index = element.attr('data-index');
    console.log("Index: "+ window.row_index);
    var data = window.esdata[window.row_index];
    if(data._source.type.toUpperCase()==="URL"){
      urlModelFunction(data);
      $( "#modalUri" ).modal('show');
    }
    else{
      fileModelFunction(data);
      $( "#modalFile" ).modal('show');
    }
  });
  $('#table').on("post-body.bs.table", function (data) {
    $(".kv-ltr-theme-fas-star").rating({
      displayOnly: true,
      hoverOnClear: false,
      theme: "krajee-fas",
      defaultCaption: "{rating}",
      starCaptions: function(rating) {
        // return rating == 1 ? 'One heart' : rating + ' hearts';
      },
      filledStar: '<i class="fas fa-circle"></i>',
      emptyStar: '<i class="far fa-circle"></i>',
    });
  });
}
