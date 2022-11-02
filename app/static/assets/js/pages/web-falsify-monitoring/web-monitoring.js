//table tr을 클릭 하면 모달창 show
$(".pos-content-container").on("click", ".card", function (e) {
  //console.log(e.currentTarget.id);
  //console.log(window.maryadb_site_data[e.currentTarget.id])
  paintModelOfTheCard(window.maryadb_site_data[e.currentTarget.id]);
  $("#modalUri").modal("show");
});

//button modal event 흐름 막는 스크립트
$(".pos-content-container").on("click", "button", function (e) {
  e.stopPropagation();
});

//수정하기 버튼 toggle
$(".webMonitoringModify").on("click", function () {
  const $this = $(this);

  $this.toggleClass("def");

  if ($this.hasClass("def")) {
    $this.text("수정하기").addClass("btn-warning").removeClass("btn-success");
    $(".modify-web-monitoring input").attr("readonly", true);
    $(".modify-web-monitoring select").attr("disabled", true);
    // $this.attr('type', 'submit'); //이벤트 동시 발생하면서.. 순서대로 일어나야 할거같은..?
    // console.log("수정하기");
    // $this.attr('type', 'submit');
    Swal.fire({
      title: "수정 사항을 적용 하시겠습니까?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "적용",
      denyButtonText: `미적용`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("수정 성공!", "", "success");
        $(".modal").modal("hide");
      } else if (result.isDenied) {
        Swal.fire("수정사항이 저장 되지 않았습니다.", "", "info");
      } else {
        $(".modal").modal("hide");
      }
    });
  } else {
    $this.text("적용하기").addClass("btn-success").removeClass("btn-warning");
    $(".modify-web-monitoring input").attr("readonly", false);
    $(".modify-web-monitoring select").attr("disabled", false);
    // console.log("적용하기");
  }

  if (!$this.hasClass("def")) {
    // console.log("def 없음");
  }

  // $this.attr('type', 'submit');
  // $(this)
  // .closest("form")
  // .parsley()
  // .on("form:submit", function() {
  // 	Swal.fire({
  // 		title: "수정 사항을 적용 하시겠습니까?",
  // 		showDenyButton: true,
  // 		showCancelButton: false,
  // 		confirmButtonText: "적용",
  // 		denyButtonText: `미적용`,
  // 	}).then((result) => {
  // 		/* Read more about isConfirmed, isDenied below */
  // 		if (result.isConfirmed) {
  // 			Swal.fire("수정 성공!", "", "success");
  // 			$(".modal").modal("hide");
  // 		} else if (result.isDenied) {
  // 			Swal.fire("수정사항이 저장 되지 않았습니다.", "", "info");
  // 		} else {
  // 			$(".modal").modal("hide");
  // 		}
  // 	});
  // });
});

//삭제 알림창 ui
$(".message-delete").click(function () {
  Swal.fire({
    title: "정말로 삭제 하시겠습니까?",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc3741",
    confirmButtonClass: "danger-btn-focus",
    // cancelButtonColor: "#f46a6a",
    confirmButtonText: "네, 지우겠습니다.",
  }).then(function (result) {
    if (result.value) {
      Swal.fire("삭제", "삭제 되었습니다", "success");
    }
  });
});

//AI 분석 예측 결과 - 유사도, 스코어 - chart.js
const ctx = document.getElementById("doughnutChart");
const ctx2 = document.getElementById("doughnutChart2");

// chart1 and chart2 use "plugin"
let chart1 = new Chart(ctx, {
  type: "doughnut",
  data: {
    // labels: ['Total Visitor'],
    datasets: [
      {
        data: [90, 100],
        backgroundColor: [app.color.theme, app.color.white, app.color.gray900],
        hoverBackgroundColor: [
          app.color.theme,
          app.color.white,
          app.color.gray900,
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: 30,
    tooltips: {
      enabled: false,
    },
  },
});

let chart2 = new Chart(ctx2, {
  type: "doughnut",
  data: {
    // labels: ['Total Visitor'],
    datasets: [
      {
        data: [90, 100],
        backgroundColor: [app.color.theme, app.color.white, app.color.gray900],
        hoverBackgroundColor: [
          app.color.theme,
          app.color.white,
          app.color.gray900,
        ],
        borderWidth: 0,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: 30,
    tooltips: {
      enabled: false,
    },
  },
});

//인풋에 검색어 엔터 시 tag ui 출력
let searchTags = [];

function search(ele) {
  if (event.key === "Enter" || event.type === "click") {
    //inut value
    let txtval = document.querySelector('input[name="searchTag"]').value;

    if (searchTags.includes(txtval) || searchTags.length > 16) {
      // console.log("포함");
    } else if (txtval == "") {
      //do nothing
    } else {
      // console.log("불포함");

      searchTags.push(txtval);

      const lastValue = searchTags[searchTags.length - 1];

      let html = `<div id="seachTagBtn" class="ui-searching-tag alert alert-primary alert-dismissible fade show me-2 mb-2" role="alert">
				${lastValue}
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
				</button>
			</div>`;

      $("#searching_tag").append(html);
    }
  }
}

//인풋에 추가 검색어 엔터 시 tag ui 출력
let addSearchTags = [];

function addSearch(ele) {
  if (event.key === "Enter" || event.type === "click") {
    //inut value
    let txtval = document.querySelector('input[name="addSearchTag"]').value;
    let conjunction = document.getElementById("conjunction").value;
    let sortTest = document.getElementById("sortTest").value;

    if (searchTags.includes(txtval) || searchTags.length > 16) {
      // console.log("포함");
    } else if (txtval == "") {
      //do nothing
    } else {
      // console.log("불포함");

      searchTags.push(txtval);

      const lastValue = searchTags[searchTags.length - 1];

      let html = `<div id="seachTagBtn" class="ui-searching-tag alert alert-primary alert-dismissible fade show me-2 mb-2" role="alert">
				<span class="badge bg-secondary">${conjunction}</span>
				<span class="badge bg-secondary">${sortTest}</span>
				${lastValue}
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
				</button>
			</div>`;

      $("#searching_tag").append(html);
    }
  }
}

// input mirroring
$("#searchVal").bind("keypress keyup blur", function () {
  $("#fillterVal").val($(this).val());
});

$("#fillterVal").bind("keypress keyup blur", function () {
  $("#searchVal").val($(this).val());
});

// rating star
$(".kv-ltr-theme-fas-star").rating({
  displayOnly: true,
  hoverOnClear: false,
  theme: "krajee-fas",
  defaultCaption: "{rating}",
  starCaptions: function (rating) {
    // return rating == 1 ? 'One heart' : rating + ' hearts';
  },
  filledStar: '<i class="fas fa-circle"></i>',
  emptyStar: '<i class="far fa-circle"></i>',
});

// datetime picker
jQuery.datetimepicker.setLocale("kr");

jQuery(function () {
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
    onShow: function (ct) {
      this.setOptions({
        maxDate: jQuery("#date_timepicker_end").val()
          ? jQuery("#date_timepicker_end").val()
          : false,
      });
    },
  });
  jQuery("#date_timepicker_end").datetimepicker({
    format: "Y/m/d H:i",
    onShow: function (ct) {
      this.setOptions({
        minDate: jQuery("#date_timepicker_start").val()
          ? jQuery("#date_timepicker_start").val()
          : false,
      });
    },
  });
});

// e-mail alert permit ui - 이메일 알림 허용 ui
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

$("#permitEmailAlert").on("click", function () {
  $(this).toggleClass("notAllow");

  $(this).tooltip("hide");

  if ($(this).hasClass("notAllow")) {
    $(this).find("i").removeClass("bi-bell-fill").addClass("bi-bell-slash");
    $(this).attr("data-bs-original-title", "이메일 알림 비허용 중");
  } else {
    $(this).find("i").removeClass("bi-bell-slash").addClass("bi-bell-fill");
    $(this).attr("data-bs-original-title", "이메일 알림 허용 중");
  }
});

function addWidget(data, id) {
  //console.log(data);
  var val =
    data.reputation_result === "Y" || data.ai_result === "Y" || data.similarity < 0.6 || data.defaced == 1
      ? "detected"
      : "normal";
  var widg =
    `
	<!-- BEGIN web-monitoring card -->
	<div class="content-web-card col-xxl-3 col-xl-4 pb-4">
		<!-- BEGIN card -->
		<div class="card h-100 hand"  id = "` +
    id +
    `">
			<div class="card-body h-100 p-1">
				<a href="#" class="pos-product">
					<div class="img" style="background-image: url(` +
    "https://125.7.199.176/static/screenshots/" +
    data.screenshot +
    `)"></div>
					<div class="info">
						<div class="d-flex justify-content-between">
							<div class="title"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">` +
    data.site_name+
    `</font></font></div>
							<div class="dropdown">
								<button class="btn btn-sm btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
									<i class="bi bi-gear-fill"></i>
								</button>
								<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="">
									<li class="d-flex flex-column px-2">
										<button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#modalModify"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">correction</font></font></button>
						
										<button type="button" class="btn btn-danger mt-2 message-delete"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">delete</font></font></button>
									</li>
								</ul>
							</div>
						</div>
						<div class="desc"><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Address: ` +
    data.site_url +
    `</font></font></div>
						<div class=""><font style="vertical-align: inherit;"><font style="vertical-align: inherit;">Anomaly Detection: ` +
    val +
    `</font></font></div>
					</div>
				</a>
			</div>
			<div class="card-arrow">
				<div class="card-arrow-top-left"></div>
				<div class="card-arrow-top-right"></div>
				<div class="card-arrow-bottom-left"></div>
				<div class="card-arrow-bottom-right"></div>
			</div>
		</div>
		<!-- END card -->
	</div>
	<!-- END web-monitoring card -->
	`;
  //console.log(widg);
  $("#widgetpanel").append(widg);
}

function formatDate(date) {
  var d = new Date(date),
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

function getJsonRow(data) {
  //console.log(data);
  const d = new Date(data.check_date);

  var colorcode = "badge bg-danger";
  if (data.reputation_result == "Y") {
    colorcode = "badge bg-danger";
  } else {
    colorcode = "badge bg-success";
  }

  const brTag = "def";

  let dataJson = {
    field001: formatDate(d) + "<br>" + d.toLocaleTimeString(),
    field002: data.site_name,
    field003:
      `
							<div style="white-space: pre-line; max-width: 554px">
								분석 대상(URL) : 
								<span class="text-success" style="
								word-break: break-all;
								">` +
      data.pathname +
      `</span>
							
							<!-- <li>서버IP : 183.111.131.36:80 (  KR )</li> -->
						`,
    field004:
      `평판 분석 :
							<span class="` +
      colorcode +
      ` px-2 pt-5px pb-5px rounded fs-12px d-inline-flex align-items-center">
								정상
							</span>`,
    field005: "None",
    field006: `<ul>
							<li>상태 : <span class="badge bg-success">정상</span><br></li>
							<li class="mt-2">
								예외 설정 : <button type="button" class="exception-permit-btn btn btn-sm btn-danger fs-12px">예외 적용</button>
							</li>
							<li class="mt-2">
								파일 다운로드 : <button class="btn btn-primary btn-sm fs-12px">다운로드</button>
							</li>
						<ul>`,
  };
  return dataJson;
}

function paintModelOfTheCard(data) {
  //console.log(data);
  $("#site001").attr("src", "https://125.7.199.176/static/screenshots/"+data.screenshot);
  //$("#site002_3").replaceWith("None");
  var str1 = (data.similarity < 0.6) ? "bg-danger" : "bg-success";
  $("#site002_3").replaceWith('<span class="badge '+str1+'">정상</span> ('+data.similarity+')');
  var str2 = (data.defaced == 1) ? "bg-danger" : "bg-success";
  $("#site004").replaceWith('<span class="badge '+str2+'">정상</span>');
  var str3 = (data.reputation_result==='Y') ? "bg-danger" : "bg-success";
  $("#site005").replaceWith('<span class="badge '+str3+'">악성</span>');
  $("#site006").replaceWith(data.site_name);
  $("#site007").replaceWith(data.site_url);
  const d1 = new Date(data.reg_date);
  $("#site008").replaceWith(formatDate(d1)+' '+d1.toLocaleTimeString());
  const d2 = new Date(data.last_chk_date);
  $("#site009").replaceWith(formatDate(d2)+' '+d2.toLocaleTimeString());
  //$("#site010").replaceWith("None");
  //$("#site011").replaceWith("None");
  console.log(data.ai_score);
  $("#site012").replaceWith(data.ai_score);
  $.ajax({
    url: "http://125.7.199.174:8090/site_contents/" + data.no,
    type: "GET",
    success: function (data_local) {
		window.site_contents = data_local;
		for (let i = 0; i < window.site_contents.length; i++) {
			var json = getJsonRow(window.site_contents[i]);
			$("#table").bootstrapTable("append", json);
			$("#table thead th:eq(0)").css("min-width", "94px");
			$("#table thead th:eq(1)").css("min-width", "62px");
			$("#table thead th:eq(2)").css("max-width", "300px");
			$("#table thead th:eq(3)").css("min-width", "128px");
			$("#table thead th:eq(4)").css("min-width", "102px");
			$("#table thead th:eq(5)").css("min-width", "168px");
		}
    },
    error: function (data_local) {
      debugger;
      alert("Error");
    },
  });
}

function downloadObjectAsJson(exportName){
	var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(window.site_contents));
	var downloadAnchorNode = document.createElement('a');
	downloadAnchorNode.setAttribute("href",     dataStr);
	downloadAnchorNode.setAttribute("download", exportName + ".json");
	document.body.appendChild(downloadAnchorNode); // required for firefox
	downloadAnchorNode.click();
	downloadAnchorNode.remove();
}
  
//예외 적용 button click 시 상태 표시 정상 or 예외 event
$(document).ready(function () {
  //addWidget();
  $.ajax({
    url: "http://125.7.199.174:8090/sites",
    type: "GET",
    success: function (data) {
      //console.log(data);
      window.maryadb_site_data = data;
      for (let i = 0; i < window.maryadb_site_data.length; i++) {
        addWidget(window.maryadb_site_data[i], i);
      }
    },
    error: function (data) {
      debugger;
      alert("Error");
    },
  });
  $(".exception-permit-btn").on("click", function () {
    //예외 승인 & 다음 UI
    if ($(this).hasClass("btn-danger")) {
      const btn = $(this);
      Swal.fire({
        title: "예외 처리 하시겠습니까?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3741",
        confirmButtonClass: "danger-btn-focus",
        // cancelButtonColor: "#f46a6a",
        confirmButtonText: "네, 예외 처리 하겠습니다.",
      }).then(function (result) {
        if (result.isConfirmed) {
          Swal.fire("성공", "예외 처리 되었습니다", "success").then(
            function () {
              //button ui 버튼
              btn
                .removeClass("btn-danger")
                .addClass("btn-success")
                .html("예외 취소");
              //status ui 상태
              btn
                .parent()
                .parent()
                .find(".badge")
                .removeClass("bg-success")
                .addClass("bg-danger")
                .html("예외");
            }
          );
        }
      });

      //예외 츼소 승인 & 다음 UI
    } else {
      const btn = $(this);
      Swal.fire({
        title: "예외 취소 하시겠습니까?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#dc3741",
        confirmButtonClass: "danger-btn-focus",
        // cancelButtonColor: "#f46a6a",
        confirmButtonText: "네, 예외 취소 하겠습니다.",
      }).then(function (result) {
        if (result.isConfirmed) {
          Swal.fire("성공", "예외 취소 되었습니다", "success").then(
            function () {
              //button ui 버튼
              btn
                .removeClass("btn-success")
                .addClass("btn-danger")
                .html("예외 적용");
              //status ui 상태
              btn
                .parent()
                .parent()
                .find(".badge")
                .removeClass("bg-danger")
                .addClass("bg-success")
                .html("정상");
            }
          );
        }
      });
    }
  });
});
