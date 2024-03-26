/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 1.0, "series": [{"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/request_leave/-104", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/connecttest.txt-78", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-136", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/connecttest.txt-77", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/dashboard.png-100", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-137", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/connecttest.txt-76", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/arrow-down.png-31", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-139", "isController": false}, {"data": [[800.0, 1.0]], "isOverall": false, "label": "/app-2", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-120", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/v2/api/groups/-43", "isController": false}, {"data": [[7200.0, 1.0]], "isOverall": false, "label": "Step 5 :- Log Out", "isController": true}, {"data": [[600.0, 1.0]], "isOverall": false, "label": "/v2/api/auth/login/-16", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-132", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/service/update2/json-14", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/reports.png-50", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-133", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-134", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-135", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-75", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-55", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-130", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-74", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-131", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/images/icons/download.png-32", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-71", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-72", "isController": false}, {"data": [[900.0, 1.0]], "isOverall": false, "label": "Step 4 :-Click on Apply Leave", "isController": true}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/toolbar.js-6", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-70", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/django-static/favicon.png-11", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-30", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/profilepic.png-60", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/Eye-blue.png-128", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/screenshots/-49", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/service/update2/json-89", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-46", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-68", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/images/Eye-blue.png-8", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-47", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-69", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-144", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-48", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-66", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/attendance/-73", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-145", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-67", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-64", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-types/-25", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-65", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-140", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-36", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-44", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-62", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-45", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-63", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-142", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/attendance/-58", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/generate_204-1", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-143", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-83", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/Eye.png-15", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-82", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-86", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/v2/api/groups/-20", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-85", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/close.png-103", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-105", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-106", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/groups/-123", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-88", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-99", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-97", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-93", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-91", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-92", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-90", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-138", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-98", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/images/icons/resource-management.png-33", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-types/-87", "isController": false}, {"data": [[3500.0, 1.0]], "isOverall": false, "label": "Step 3 :- Click on Leave", "isController": true}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-types/-84", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-17", "isController": false}, {"data": [[1700.0, 1.0]], "isOverall": false, "label": "/v2/api/permissions/-21", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/leave-w.svg-40", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/images/icons/feedback.png-51", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/work-diary.png-29", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-118", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-124", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/ei_calendar.png-28", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/delete.png-94", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-122", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-12", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-13", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-27", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-39", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-37", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-38", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-35", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-19", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-34", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/attendance/-141", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/leave-types/-116", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-107", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-114", "isController": false}, {"data": [[800.0, 1.0]], "isOverall": false, "label": "/v2/api/active-subscription/feature_list/-22", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-108", "isController": false}, {"data": [[500.0, 1.0]], "isOverall": false, "label": "/v2/api/attendance/-26", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-109", "isController": false}, {"data": [[300.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-112", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-113", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-110", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/images/clocksession-logo.png-7", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/toolbar.css-4", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-81", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-80", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/edit-green.png-96", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-101", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-102", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/print.css-9", "isController": false}, {"data": [[800.0, 1.0]], "isOverall": false, "label": "/v2/api/active-subscription/active_subscriptionplan_for_organisation/-23", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-61", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-111", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/description.png-95", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/attendance/-129", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/screenshots/-115", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-59", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/utils.js-10", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-57", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-56", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-54", "isController": false}, {"data": [[1200.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-119", "isController": false}, {"data": [[1400.0, 1.0]], "isOverall": false, "label": "Step 1 :- Launch Url", "isController": true}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/setting-w.svg-53", "isController": false}, {"data": [[200.0, 1.0]], "isOverall": false, "label": "/v2/api/attendance/-117", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-125", "isController": false}, {"data": [[100.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-126", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-127", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/images/icons/payroll.png-52", "isController": false}, {"data": [[400.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/-24", "isController": false}, {"data": [[800.0, 1.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-18", "isController": false}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/connecttest.txt-79", "isController": false}, {"data": [[15400.0, 1.0]], "isOverall": false, "label": "Step 2 :- Login", "isController": true}, {"data": [[0.0, 1.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-41", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 15400.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 131.0, "series": [{"data": [[0.0, 131.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 9.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 1.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 1.0, "minX": 1.70991684E12, "maxY": 1.0, "series": [{"data": [[1.70991684E12, 1.0], [1.7099169E12, 1.0]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7099169E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 16.0, "minX": 1.0, "maxY": 15486.0, "series": [{"data": [[1.0, 231.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/request_leave/-104", "isController": false}, {"data": [[1.0, 231.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/request_leave/-104-Aggregated", "isController": false}, {"data": [[1.0, 16.0]], "isOverall": false, "label": "/connecttest.txt-78", "isController": false}, {"data": [[1.0, 16.0]], "isOverall": false, "label": "/connecttest.txt-78-Aggregated", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-136", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-136-Aggregated", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "/connecttest.txt-77", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "/connecttest.txt-77-Aggregated", "isController": false}, {"data": [[1.0, 95.0]], "isOverall": false, "label": "/images/icons/dashboard.png-100", "isController": false}, {"data": [[1.0, 95.0]], "isOverall": false, "label": "/images/icons/dashboard.png-100-Aggregated", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-137", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-137-Aggregated", "isController": false}, {"data": [[1.0, 22.0]], "isOverall": false, "label": "/connecttest.txt-76", "isController": false}, {"data": [[1.0, 22.0]], "isOverall": false, "label": "/connecttest.txt-76-Aggregated", "isController": false}, {"data": [[1.0, 98.0]], "isOverall": false, "label": "/images/icons/arrow-down.png-31", "isController": false}, {"data": [[1.0, 98.0]], "isOverall": false, "label": "/images/icons/arrow-down.png-31-Aggregated", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-139", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-139-Aggregated", "isController": false}, {"data": [[1.0, 842.0]], "isOverall": false, "label": "/app-2", "isController": false}, {"data": [[1.0, 842.0]], "isOverall": false, "label": "/app-2-Aggregated", "isController": false}, {"data": [[1.0, 463.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-120", "isController": false}, {"data": [[1.0, 463.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-120-Aggregated", "isController": false}, {"data": [[1.0, 186.0]], "isOverall": false, "label": "/v2/api/groups/-43", "isController": false}, {"data": [[1.0, 186.0]], "isOverall": false, "label": "/v2/api/groups/-43-Aggregated", "isController": false}, {"data": [[1.0, 7296.0]], "isOverall": false, "label": "Step 5 :- Log Out", "isController": true}, {"data": [[1.0, 7296.0]], "isOverall": false, "label": "Step 5 :- Log Out-Aggregated", "isController": true}, {"data": [[1.0, 699.0]], "isOverall": false, "label": "/v2/api/auth/login/-16", "isController": false}, {"data": [[1.0, 699.0]], "isOverall": false, "label": "/v2/api/auth/login/-16-Aggregated", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-132", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-132-Aggregated", "isController": false}, {"data": [[1.0, 340.0]], "isOverall": false, "label": "/service/update2/json-14", "isController": false}, {"data": [[1.0, 340.0]], "isOverall": false, "label": "/service/update2/json-14-Aggregated", "isController": false}, {"data": [[1.0, 89.0]], "isOverall": false, "label": "/images/icons/reports.png-50", "isController": false}, {"data": [[1.0, 89.0]], "isOverall": false, "label": "/images/icons/reports.png-50-Aggregated", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-133", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-133-Aggregated", "isController": false}, {"data": [[1.0, 56.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-134", "isController": false}, {"data": [[1.0, 56.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-134-Aggregated", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-135", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-135-Aggregated", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-75", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-75-Aggregated", "isController": false}, {"data": [[1.0, 296.0]], "isOverall": false, "label": "/v2/api/employees/-55", "isController": false}, {"data": [[1.0, 296.0]], "isOverall": false, "label": "/v2/api/employees/-55-Aggregated", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-130", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-130-Aggregated", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-74", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-74-Aggregated", "isController": false}, {"data": [[1.0, 57.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-131", "isController": false}, {"data": [[1.0, 57.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-131-Aggregated", "isController": false}, {"data": [[1.0, 105.0]], "isOverall": false, "label": "/images/icons/download.png-32", "isController": false}, {"data": [[1.0, 105.0]], "isOverall": false, "label": "/images/icons/download.png-32-Aggregated", "isController": false}, {"data": [[1.0, 55.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-71", "isController": false}, {"data": [[1.0, 55.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-71-Aggregated", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-72", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-72-Aggregated", "isController": false}, {"data": [[1.0, 973.0]], "isOverall": false, "label": "Step 4 :-Click on Apply Leave", "isController": true}, {"data": [[1.0, 973.0]], "isOverall": false, "label": "Step 4 :-Click on Apply Leave-Aggregated", "isController": true}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/toolbar.js-6", "isController": false}, {"data": [[1.0, 42.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/toolbar.js-6-Aggregated", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-70", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-70-Aggregated", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "/django-static/favicon.png-11", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "/django-static/favicon.png-11-Aggregated", "isController": false}, {"data": [[1.0, 425.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-30", "isController": false}, {"data": [[1.0, 425.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-30-Aggregated", "isController": false}, {"data": [[1.0, 93.0]], "isOverall": false, "label": "/images/profilepic.png-60", "isController": false}, {"data": [[1.0, 93.0]], "isOverall": false, "label": "/images/profilepic.png-60-Aggregated", "isController": false}, {"data": [[1.0, 80.0]], "isOverall": false, "label": "/images/Eye-blue.png-128", "isController": false}, {"data": [[1.0, 80.0]], "isOverall": false, "label": "/images/Eye-blue.png-128-Aggregated", "isController": false}, {"data": [[1.0, 301.0]], "isOverall": false, "label": "/v2/api/screenshots/-49", "isController": false}, {"data": [[1.0, 301.0]], "isOverall": false, "label": "/v2/api/screenshots/-49-Aggregated", "isController": false}, {"data": [[1.0, 312.0]], "isOverall": false, "label": "/service/update2/json-89", "isController": false}, {"data": [[1.0, 312.0]], "isOverall": false, "label": "/service/update2/json-89-Aggregated", "isController": false}, {"data": [[1.0, 425.0]], "isOverall": false, "label": "/v2/api/employees/-46", "isController": false}, {"data": [[1.0, 425.0]], "isOverall": false, "label": "/v2/api/employees/-46-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-68", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-68-Aggregated", "isController": false}, {"data": [[1.0, 100.0]], "isOverall": false, "label": "/images/Eye-blue.png-8", "isController": false}, {"data": [[1.0, 100.0]], "isOverall": false, "label": "/images/Eye-blue.png-8-Aggregated", "isController": false}, {"data": [[1.0, 484.0]], "isOverall": false, "label": "/v2/api/employees/-47", "isController": false}, {"data": [[1.0, 484.0]], "isOverall": false, "label": "/v2/api/employees/-47-Aggregated", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-69", "isController": false}, {"data": [[1.0, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-69-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-144", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-144-Aggregated", "isController": false}, {"data": [[1.0, 284.0]], "isOverall": false, "label": "/v2/api/employees/-48", "isController": false}, {"data": [[1.0, 284.0]], "isOverall": false, "label": "/v2/api/employees/-48-Aggregated", "isController": false}, {"data": [[1.0, 56.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-66", "isController": false}, {"data": [[1.0, 56.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-66-Aggregated", "isController": false}, {"data": [[1.0, 278.0]], "isOverall": false, "label": "/v2/api/attendance/-73", "isController": false}, {"data": [[1.0, 278.0]], "isOverall": false, "label": "/v2/api/attendance/-73-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-145", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-145-Aggregated", "isController": false}, {"data": [[1.0, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-67", "isController": false}, {"data": [[1.0, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-67-Aggregated", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-64", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-64-Aggregated", "isController": false}, {"data": [[1.0, 299.0]], "isOverall": false, "label": "/v2/api/leave-types/-25", "isController": false}, {"data": [[1.0, 299.0]], "isOverall": false, "label": "/v2/api/leave-types/-25-Aggregated", "isController": false}, {"data": [[1.0, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-65", "isController": false}, {"data": [[1.0, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-65-Aggregated", "isController": false}, {"data": [[1.0, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-140", "isController": false}, {"data": [[1.0, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-140-Aggregated", "isController": false}, {"data": [[1.0, 1218.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-36", "isController": false}, {"data": [[1.0, 1218.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-36-Aggregated", "isController": false}, {"data": [[1.0, 331.0]], "isOverall": false, "label": "/v2/api/employees/-44", "isController": false}, {"data": [[1.0, 331.0]], "isOverall": false, "label": "/v2/api/employees/-44-Aggregated", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-62", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-62-Aggregated", "isController": false}, {"data": [[1.0, 370.0]], "isOverall": false, "label": "/v2/api/employees/-45", "isController": false}, {"data": [[1.0, 370.0]], "isOverall": false, "label": "/v2/api/employees/-45-Aggregated", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-63", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-63-Aggregated", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-142", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-142-Aggregated", "isController": false}, {"data": [[1.0, 231.0]], "isOverall": false, "label": "/v2/api/attendance/-58", "isController": false}, {"data": [[1.0, 231.0]], "isOverall": false, "label": "/v2/api/attendance/-58-Aggregated", "isController": false}, {"data": [[1.0, 163.0]], "isOverall": false, "label": "/generate_204-1", "isController": false}, {"data": [[1.0, 163.0]], "isOverall": false, "label": "/generate_204-1-Aggregated", "isController": false}, {"data": [[1.0, 91.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-143", "isController": false}, {"data": [[1.0, 91.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-143-Aggregated", "isController": false}, {"data": [[1.0, 338.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-83", "isController": false}, {"data": [[1.0, 338.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-83-Aggregated", "isController": false}, {"data": [[1.0, 94.0]], "isOverall": false, "label": "/images/Eye.png-15", "isController": false}, {"data": [[1.0, 94.0]], "isOverall": false, "label": "/images/Eye.png-15-Aggregated", "isController": false}, {"data": [[1.0, 216.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-82", "isController": false}, {"data": [[1.0, 216.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-82-Aggregated", "isController": false}, {"data": [[1.0, 221.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-86", "isController": false}, {"data": [[1.0, 221.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-86-Aggregated", "isController": false}, {"data": [[1.0, 196.0]], "isOverall": false, "label": "/v2/api/groups/-20", "isController": false}, {"data": [[1.0, 196.0]], "isOverall": false, "label": "/v2/api/groups/-20-Aggregated", "isController": false}, {"data": [[1.0, 324.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-85", "isController": false}, {"data": [[1.0, 324.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-85-Aggregated", "isController": false}, {"data": [[1.0, 92.0]], "isOverall": false, "label": "/images/close.png-103", "isController": false}, {"data": [[1.0, 92.0]], "isOverall": false, "label": "/images/close.png-103-Aggregated", "isController": false}, {"data": [[1.0, 301.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-105", "isController": false}, {"data": [[1.0, 301.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-105-Aggregated", "isController": false}, {"data": [[1.0, 292.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-106", "isController": false}, {"data": [[1.0, 292.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-106-Aggregated", "isController": false}, {"data": [[1.0, 201.0]], "isOverall": false, "label": "/v2/api/groups/-123", "isController": false}, {"data": [[1.0, 201.0]], "isOverall": false, "label": "/v2/api/groups/-123-Aggregated", "isController": false}, {"data": [[1.0, 254.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-88", "isController": false}, {"data": [[1.0, 254.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-88-Aggregated", "isController": false}, {"data": [[1.0, 60.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-99", "isController": false}, {"data": [[1.0, 60.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-99-Aggregated", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-97", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-97-Aggregated", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-93", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-93-Aggregated", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-91", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-91-Aggregated", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-92", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-92-Aggregated", "isController": false}, {"data": [[1.0, 59.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-90", "isController": false}, {"data": [[1.0, 59.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-90-Aggregated", "isController": false}, {"data": [[1.0, 322.0]], "isOverall": false, "label": "/v2/api/employees/-138", "isController": false}, {"data": [[1.0, 322.0]], "isOverall": false, "label": "/v2/api/employees/-138-Aggregated", "isController": false}, {"data": [[1.0, 234.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-98", "isController": false}, {"data": [[1.0, 234.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-98-Aggregated", "isController": false}, {"data": [[1.0, 155.0]], "isOverall": false, "label": "/images/icons/resource-management.png-33", "isController": false}, {"data": [[1.0, 155.0]], "isOverall": false, "label": "/images/icons/resource-management.png-33-Aggregated", "isController": false}, {"data": [[1.0, 295.0]], "isOverall": false, "label": "/v2/api/leave-types/-87", "isController": false}, {"data": [[1.0, 295.0]], "isOverall": false, "label": "/v2/api/leave-types/-87-Aggregated", "isController": false}, {"data": [[1.0, 3561.0]], "isOverall": false, "label": "Step 3 :- Click on Leave", "isController": true}, {"data": [[1.0, 3561.0]], "isOverall": false, "label": "Step 3 :- Click on Leave-Aggregated", "isController": true}, {"data": [[1.0, 291.0]], "isOverall": false, "label": "/v2/api/leave-types/-84", "isController": false}, {"data": [[1.0, 291.0]], "isOverall": false, "label": "/v2/api/leave-types/-84-Aggregated", "isController": false}, {"data": [[1.0, 190.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-17", "isController": false}, {"data": [[1.0, 190.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-17-Aggregated", "isController": false}, {"data": [[1.0, 1761.0]], "isOverall": false, "label": "/v2/api/permissions/-21", "isController": false}, {"data": [[1.0, 1761.0]], "isOverall": false, "label": "/v2/api/permissions/-21-Aggregated", "isController": false}, {"data": [[1.0, 85.0]], "isOverall": false, "label": "/images/icons/leave-w.svg-40", "isController": false}, {"data": [[1.0, 85.0]], "isOverall": false, "label": "/images/icons/leave-w.svg-40-Aggregated", "isController": false}, {"data": [[1.0, 105.0]], "isOverall": false, "label": "/images/icons/feedback.png-51", "isController": false}, {"data": [[1.0, 105.0]], "isOverall": false, "label": "/images/icons/feedback.png-51-Aggregated", "isController": false}, {"data": [[1.0, 94.0]], "isOverall": false, "label": "/images/icons/work-diary.png-29", "isController": false}, {"data": [[1.0, 94.0]], "isOverall": false, "label": "/images/icons/work-diary.png-29-Aggregated", "isController": false}, {"data": [[1.0, 171.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-118", "isController": false}, {"data": [[1.0, 171.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-118-Aggregated", "isController": false}, {"data": [[1.0, 399.0]], "isOverall": false, "label": "/v2/api/employees/-124", "isController": false}, {"data": [[1.0, 399.0]], "isOverall": false, "label": "/v2/api/employees/-124-Aggregated", "isController": false}, {"data": [[1.0, 93.0]], "isOverall": false, "label": "/images/icons/ei_calendar.png-28", "isController": false}, {"data": [[1.0, 93.0]], "isOverall": false, "label": "/images/icons/ei_calendar.png-28-Aggregated", "isController": false}, {"data": [[1.0, 83.0]], "isOverall": false, "label": "/images/icons/delete.png-94", "isController": false}, {"data": [[1.0, 83.0]], "isOverall": false, "label": "/images/icons/delete.png-94-Aggregated", "isController": false}, {"data": [[1.0, 329.0]], "isOverall": false, "label": "/v2/api/employees/-122", "isController": false}, {"data": [[1.0, 329.0]], "isOverall": false, "label": "/v2/api/employees/-122-Aggregated", "isController": false}, {"data": [[1.0, 92.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-12", "isController": false}, {"data": [[1.0, 92.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-12-Aggregated", "isController": false}, {"data": [[1.0, 79.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-13", "isController": false}, {"data": [[1.0, 79.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-13-Aggregated", "isController": false}, {"data": [[1.0, 528.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-27", "isController": false}, {"data": [[1.0, 528.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-27-Aggregated", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-39", "isController": false}, {"data": [[1.0, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-39-Aggregated", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-37", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-37-Aggregated", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-38", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-38-Aggregated", "isController": false}, {"data": [[1.0, 62.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-35", "isController": false}, {"data": [[1.0, 62.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-35-Aggregated", "isController": false}, {"data": [[1.0, 399.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-19", "isController": false}, {"data": [[1.0, 399.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-19-Aggregated", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-34", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-34-Aggregated", "isController": false}, {"data": [[1.0, 285.0]], "isOverall": false, "label": "/v2/api/attendance/-141", "isController": false}, {"data": [[1.0, 285.0]], "isOverall": false, "label": "/v2/api/attendance/-141-Aggregated", "isController": false}, {"data": [[1.0, 354.0]], "isOverall": false, "label": "/v2/api/leave-types/-116", "isController": false}, {"data": [[1.0, 354.0]], "isOverall": false, "label": "/v2/api/leave-types/-116-Aggregated", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-107", "isController": false}, {"data": [[1.0, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-107-Aggregated", "isController": false}, {"data": [[1.0, 234.0]], "isOverall": false, "label": "/v2/api/employees/-114", "isController": false}, {"data": [[1.0, 234.0]], "isOverall": false, "label": "/v2/api/employees/-114-Aggregated", "isController": false}, {"data": [[1.0, 808.0]], "isOverall": false, "label": "/v2/api/active-subscription/feature_list/-22", "isController": false}, {"data": [[1.0, 808.0]], "isOverall": false, "label": "/v2/api/active-subscription/feature_list/-22-Aggregated", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-108", "isController": false}, {"data": [[1.0, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-108-Aggregated", "isController": false}, {"data": [[1.0, 559.0]], "isOverall": false, "label": "/v2/api/attendance/-26", "isController": false}, {"data": [[1.0, 559.0]], "isOverall": false, "label": "/v2/api/attendance/-26-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-109", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-109-Aggregated", "isController": false}, {"data": [[1.0, 330.0]], "isOverall": false, "label": "/v2/api/employees/-112", "isController": false}, {"data": [[1.0, 330.0]], "isOverall": false, "label": "/v2/api/employees/-112-Aggregated", "isController": false}, {"data": [[1.0, 292.0]], "isOverall": false, "label": "/v2/api/employees/-113", "isController": false}, {"data": [[1.0, 292.0]], "isOverall": false, "label": "/v2/api/employees/-113-Aggregated", "isController": false}, {"data": [[1.0, 231.0]], "isOverall": false, "label": "/v2/api/employees/-110", "isController": false}, {"data": [[1.0, 231.0]], "isOverall": false, "label": "/v2/api/employees/-110-Aggregated", "isController": false}, {"data": [[1.0, 107.0]], "isOverall": false, "label": "/images/clocksession-logo.png-7", "isController": false}, {"data": [[1.0, 107.0]], "isOverall": false, "label": "/images/clocksession-logo.png-7-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/toolbar.css-4", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/toolbar.css-4-Aggregated", "isController": false}, {"data": [[1.0, 142.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-81", "isController": false}, {"data": [[1.0, 142.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-81-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-80", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-80-Aggregated", "isController": false}, {"data": [[1.0, 94.0]], "isOverall": false, "label": "/images/icons/edit-green.png-96", "isController": false}, {"data": [[1.0, 94.0]], "isOverall": false, "label": "/images/icons/edit-green.png-96-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-101", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-101-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-102", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-102-Aggregated", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/print.css-9", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/print.css-9-Aggregated", "isController": false}, {"data": [[1.0, 879.0]], "isOverall": false, "label": "/v2/api/active-subscription/active_subscriptionplan_for_organisation/-23", "isController": false}, {"data": [[1.0, 879.0]], "isOverall": false, "label": "/v2/api/active-subscription/active_subscriptionplan_for_organisation/-23-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-61", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-61-Aggregated", "isController": false}, {"data": [[1.0, 499.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-111", "isController": false}, {"data": [[1.0, 499.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-111-Aggregated", "isController": false}, {"data": [[1.0, 87.0]], "isOverall": false, "label": "/images/description.png-95", "isController": false}, {"data": [[1.0, 87.0]], "isOverall": false, "label": "/images/description.png-95-Aggregated", "isController": false}, {"data": [[1.0, 297.0]], "isOverall": false, "label": "/v2/api/attendance/-129", "isController": false}, {"data": [[1.0, 297.0]], "isOverall": false, "label": "/v2/api/attendance/-129-Aggregated", "isController": false}, {"data": [[1.0, 210.0]], "isOverall": false, "label": "/v2/api/screenshots/-115", "isController": false}, {"data": [[1.0, 210.0]], "isOverall": false, "label": "/v2/api/screenshots/-115-Aggregated", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-59", "isController": false}, {"data": [[1.0, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-59-Aggregated", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/utils.js-10", "isController": false}, {"data": [[1.0, 49.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/utils.js-10-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-57", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-57-Aggregated", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-56", "isController": false}, {"data": [[1.0, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-56-Aggregated", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-54", "isController": false}, {"data": [[1.0, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-54-Aggregated", "isController": false}, {"data": [[1.0, 1291.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-119", "isController": false}, {"data": [[1.0, 1291.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-119-Aggregated", "isController": false}, {"data": [[1.0, 1458.0]], "isOverall": false, "label": "Step 1 :- Launch Url", "isController": true}, {"data": [[1.0, 1458.0]], "isOverall": false, "label": "Step 1 :- Launch Url-Aggregated", "isController": true}, {"data": [[1.0, 92.0]], "isOverall": false, "label": "/images/icons/setting-w.svg-53", "isController": false}, {"data": [[1.0, 92.0]], "isOverall": false, "label": "/images/icons/setting-w.svg-53-Aggregated", "isController": false}, {"data": [[1.0, 240.0]], "isOverall": false, "label": "/v2/api/attendance/-117", "isController": false}, {"data": [[1.0, 240.0]], "isOverall": false, "label": "/v2/api/attendance/-117-Aggregated", "isController": false}, {"data": [[1.0, 65.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-125", "isController": false}, {"data": [[1.0, 65.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-125-Aggregated", "isController": false}, {"data": [[1.0, 184.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-126", "isController": false}, {"data": [[1.0, 184.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-126-Aggregated", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-127", "isController": false}, {"data": [[1.0, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-127-Aggregated", "isController": false}, {"data": [[1.0, 81.0]], "isOverall": false, "label": "/images/icons/payroll.png-52", "isController": false}, {"data": [[1.0, 81.0]], "isOverall": false, "label": "/images/icons/payroll.png-52-Aggregated", "isController": false}, {"data": [[1.0, 486.0]], "isOverall": false, "label": "/v2/api/employees/-24", "isController": false}, {"data": [[1.0, 486.0]], "isOverall": false, "label": "/v2/api/employees/-24-Aggregated", "isController": false}, {"data": [[1.0, 800.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-18", "isController": false}, {"data": [[1.0, 800.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-18-Aggregated", "isController": false}, {"data": [[1.0, 24.0]], "isOverall": false, "label": "/connecttest.txt-79", "isController": false}, {"data": [[1.0, 24.0]], "isOverall": false, "label": "/connecttest.txt-79-Aggregated", "isController": false}, {"data": [[1.0, 15486.0]], "isOverall": false, "label": "Step 2 :- Login", "isController": true}, {"data": [[1.0, 15486.0]], "isOverall": false, "label": "Step 2 :- Login-Aggregated", "isController": true}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-41", "isController": false}, {"data": [[1.0, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-41-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 1.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 225.98333333333332, "minX": 1.70991684E12, "maxY": 5243.066666666667, "series": [{"data": [[1.70991684E12, 5243.066666666667], [1.7099169E12, 345.81666666666666]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.70991684E12, 1544.9666666666667], [1.7099169E12, 225.98333333333332]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7099169E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 16.0, "minX": 1.70991684E12, "maxY": 15486.0, "series": [{"data": [[1.70991684E12, 231.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/request_leave/-104", "isController": false}, {"data": [[1.70991684E12, 16.0]], "isOverall": false, "label": "/connecttest.txt-78", "isController": false}, {"data": [[1.7099169E12, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-136", "isController": false}, {"data": [[1.70991684E12, 50.0]], "isOverall": false, "label": "/connecttest.txt-77", "isController": false}, {"data": [[1.70991684E12, 95.0]], "isOverall": false, "label": "/images/icons/dashboard.png-100", "isController": false}, {"data": [[1.7099169E12, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-137", "isController": false}, {"data": [[1.70991684E12, 22.0]], "isOverall": false, "label": "/connecttest.txt-76", "isController": false}, {"data": [[1.70991684E12, 98.0]], "isOverall": false, "label": "/images/icons/arrow-down.png-31", "isController": false}, {"data": [[1.7099169E12, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-139", "isController": false}, {"data": [[1.70991684E12, 842.0]], "isOverall": false, "label": "/app-2", "isController": false}, {"data": [[1.70991684E12, 463.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-120", "isController": false}, {"data": [[1.70991684E12, 186.0]], "isOverall": false, "label": "/v2/api/groups/-43", "isController": false}, {"data": [[1.7099169E12, 7296.0]], "isOverall": false, "label": "Step 5 :- Log Out", "isController": true}, {"data": [[1.70991684E12, 699.0]], "isOverall": false, "label": "/v2/api/auth/login/-16", "isController": false}, {"data": [[1.7099169E12, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-132", "isController": false}, {"data": [[1.70991684E12, 340.0]], "isOverall": false, "label": "/service/update2/json-14", "isController": false}, {"data": [[1.70991684E12, 89.0]], "isOverall": false, "label": "/images/icons/reports.png-50", "isController": false}, {"data": [[1.7099169E12, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-133", "isController": false}, {"data": [[1.7099169E12, 56.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-134", "isController": false}, {"data": [[1.7099169E12, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-135", "isController": false}, {"data": [[1.70991684E12, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-75", "isController": false}, {"data": [[1.70991684E12, 296.0]], "isOverall": false, "label": "/v2/api/employees/-55", "isController": false}, {"data": [[1.7099169E12, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-130", "isController": false}, {"data": [[1.70991684E12, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-74", "isController": false}, {"data": [[1.7099169E12, 57.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-131", "isController": false}, {"data": [[1.70991684E12, 105.0]], "isOverall": false, "label": "/images/icons/download.png-32", "isController": false}, {"data": [[1.70991684E12, 55.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-71", "isController": false}, {"data": [[1.70991684E12, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-72", "isController": false}, {"data": [[1.70991684E12, 973.0]], "isOverall": false, "label": "Step 4 :-Click on Apply Leave", "isController": true}, {"data": [[1.70991684E12, 42.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/toolbar.js-6", "isController": false}, {"data": [[1.70991684E12, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-70", "isController": false}, {"data": [[1.70991684E12, 48.0]], "isOverall": false, "label": "/django-static/favicon.png-11", "isController": false}, {"data": [[1.70991684E12, 425.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-30", "isController": false}, {"data": [[1.70991684E12, 93.0]], "isOverall": false, "label": "/images/profilepic.png-60", "isController": false}, {"data": [[1.7099169E12, 80.0]], "isOverall": false, "label": "/images/Eye-blue.png-128", "isController": false}, {"data": [[1.70991684E12, 301.0]], "isOverall": false, "label": "/v2/api/screenshots/-49", "isController": false}, {"data": [[1.70991684E12, 312.0]], "isOverall": false, "label": "/service/update2/json-89", "isController": false}, {"data": [[1.70991684E12, 425.0]], "isOverall": false, "label": "/v2/api/employees/-46", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-68", "isController": false}, {"data": [[1.70991684E12, 100.0]], "isOverall": false, "label": "/images/Eye-blue.png-8", "isController": false}, {"data": [[1.70991684E12, 484.0]], "isOverall": false, "label": "/v2/api/employees/-47", "isController": false}, {"data": [[1.70991684E12, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-69", "isController": false}, {"data": [[1.7099169E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-144", "isController": false}, {"data": [[1.70991684E12, 284.0]], "isOverall": false, "label": "/v2/api/employees/-48", "isController": false}, {"data": [[1.70991684E12, 56.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-66", "isController": false}, {"data": [[1.70991684E12, 278.0]], "isOverall": false, "label": "/v2/api/attendance/-73", "isController": false}, {"data": [[1.7099169E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-145", "isController": false}, {"data": [[1.70991684E12, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-67", "isController": false}, {"data": [[1.70991684E12, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-64", "isController": false}, {"data": [[1.70991684E12, 299.0]], "isOverall": false, "label": "/v2/api/leave-types/-25", "isController": false}, {"data": [[1.70991684E12, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-65", "isController": false}, {"data": [[1.7099169E12, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-140", "isController": false}, {"data": [[1.70991684E12, 1218.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-36", "isController": false}, {"data": [[1.70991684E12, 331.0]], "isOverall": false, "label": "/v2/api/employees/-44", "isController": false}, {"data": [[1.70991684E12, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-62", "isController": false}, {"data": [[1.70991684E12, 370.0]], "isOverall": false, "label": "/v2/api/employees/-45", "isController": false}, {"data": [[1.70991684E12, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-63", "isController": false}, {"data": [[1.7099169E12, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-142", "isController": false}, {"data": [[1.70991684E12, 231.0]], "isOverall": false, "label": "/v2/api/attendance/-58", "isController": false}, {"data": [[1.70991684E12, 163.0]], "isOverall": false, "label": "/generate_204-1", "isController": false}, {"data": [[1.7099169E12, 91.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-143", "isController": false}, {"data": [[1.70991684E12, 338.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-83", "isController": false}, {"data": [[1.70991684E12, 94.0]], "isOverall": false, "label": "/images/Eye.png-15", "isController": false}, {"data": [[1.70991684E12, 216.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-82", "isController": false}, {"data": [[1.70991684E12, 221.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-86", "isController": false}, {"data": [[1.70991684E12, 196.0]], "isOverall": false, "label": "/v2/api/groups/-20", "isController": false}, {"data": [[1.70991684E12, 324.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-85", "isController": false}, {"data": [[1.70991684E12, 92.0]], "isOverall": false, "label": "/images/close.png-103", "isController": false}, {"data": [[1.70991684E12, 301.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-105", "isController": false}, {"data": [[1.70991684E12, 292.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-106", "isController": false}, {"data": [[1.70991684E12, 201.0]], "isOverall": false, "label": "/v2/api/groups/-123", "isController": false}, {"data": [[1.70991684E12, 254.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-88", "isController": false}, {"data": [[1.70991684E12, 60.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-99", "isController": false}, {"data": [[1.70991684E12, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-97", "isController": false}, {"data": [[1.70991684E12, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-93", "isController": false}, {"data": [[1.70991684E12, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-91", "isController": false}, {"data": [[1.70991684E12, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-92", "isController": false}, {"data": [[1.70991684E12, 59.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-90", "isController": false}, {"data": [[1.7099169E12, 322.0]], "isOverall": false, "label": "/v2/api/employees/-138", "isController": false}, {"data": [[1.70991684E12, 234.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-98", "isController": false}, {"data": [[1.70991684E12, 155.0]], "isOverall": false, "label": "/images/icons/resource-management.png-33", "isController": false}, {"data": [[1.70991684E12, 295.0]], "isOverall": false, "label": "/v2/api/leave-types/-87", "isController": false}, {"data": [[1.70991684E12, 3561.0]], "isOverall": false, "label": "Step 3 :- Click on Leave", "isController": true}, {"data": [[1.70991684E12, 291.0]], "isOverall": false, "label": "/v2/api/leave-types/-84", "isController": false}, {"data": [[1.70991684E12, 190.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-17", "isController": false}, {"data": [[1.70991684E12, 1761.0]], "isOverall": false, "label": "/v2/api/permissions/-21", "isController": false}, {"data": [[1.70991684E12, 85.0]], "isOverall": false, "label": "/images/icons/leave-w.svg-40", "isController": false}, {"data": [[1.70991684E12, 105.0]], "isOverall": false, "label": "/images/icons/feedback.png-51", "isController": false}, {"data": [[1.70991684E12, 94.0]], "isOverall": false, "label": "/images/icons/work-diary.png-29", "isController": false}, {"data": [[1.70991684E12, 171.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-118", "isController": false}, {"data": [[1.70991684E12, 399.0]], "isOverall": false, "label": "/v2/api/employees/-124", "isController": false}, {"data": [[1.70991684E12, 93.0]], "isOverall": false, "label": "/images/icons/ei_calendar.png-28", "isController": false}, {"data": [[1.70991684E12, 83.0]], "isOverall": false, "label": "/images/icons/delete.png-94", "isController": false}, {"data": [[1.70991684E12, 329.0]], "isOverall": false, "label": "/v2/api/employees/-122", "isController": false}, {"data": [[1.70991684E12, 92.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-12", "isController": false}, {"data": [[1.70991684E12, 79.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-13", "isController": false}, {"data": [[1.70991684E12, 528.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-27", "isController": false}, {"data": [[1.70991684E12, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-39", "isController": false}, {"data": [[1.70991684E12, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-37", "isController": false}, {"data": [[1.70991684E12, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-38", "isController": false}, {"data": [[1.70991684E12, 62.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-35", "isController": false}, {"data": [[1.70991684E12, 399.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-19", "isController": false}, {"data": [[1.70991684E12, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-34", "isController": false}, {"data": [[1.7099169E12, 285.0]], "isOverall": false, "label": "/v2/api/attendance/-141", "isController": false}, {"data": [[1.70991684E12, 354.0]], "isOverall": false, "label": "/v2/api/leave-types/-116", "isController": false}, {"data": [[1.70991684E12, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-107", "isController": false}, {"data": [[1.70991684E12, 234.0]], "isOverall": false, "label": "/v2/api/employees/-114", "isController": false}, {"data": [[1.70991684E12, 808.0]], "isOverall": false, "label": "/v2/api/active-subscription/feature_list/-22", "isController": false}, {"data": [[1.70991684E12, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-108", "isController": false}, {"data": [[1.70991684E12, 559.0]], "isOverall": false, "label": "/v2/api/attendance/-26", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-109", "isController": false}, {"data": [[1.70991684E12, 330.0]], "isOverall": false, "label": "/v2/api/employees/-112", "isController": false}, {"data": [[1.70991684E12, 292.0]], "isOverall": false, "label": "/v2/api/employees/-113", "isController": false}, {"data": [[1.70991684E12, 231.0]], "isOverall": false, "label": "/v2/api/employees/-110", "isController": false}, {"data": [[1.70991684E12, 107.0]], "isOverall": false, "label": "/images/clocksession-logo.png-7", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/toolbar.css-4", "isController": false}, {"data": [[1.70991684E12, 142.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-81", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-80", "isController": false}, {"data": [[1.70991684E12, 94.0]], "isOverall": false, "label": "/images/icons/edit-green.png-96", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-101", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-102", "isController": false}, {"data": [[1.70991684E12, 61.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/print.css-9", "isController": false}, {"data": [[1.70991684E12, 879.0]], "isOverall": false, "label": "/v2/api/active-subscription/active_subscriptionplan_for_organisation/-23", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-61", "isController": false}, {"data": [[1.70991684E12, 499.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-111", "isController": false}, {"data": [[1.70991684E12, 87.0]], "isOverall": false, "label": "/images/description.png-95", "isController": false}, {"data": [[1.7099169E12, 297.0]], "isOverall": false, "label": "/v2/api/attendance/-129", "isController": false}, {"data": [[1.70991684E12, 210.0]], "isOverall": false, "label": "/v2/api/screenshots/-115", "isController": false}, {"data": [[1.70991684E12, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-59", "isController": false}, {"data": [[1.70991684E12, 49.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/utils.js-10", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-57", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-56", "isController": false}, {"data": [[1.70991684E12, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-54", "isController": false}, {"data": [[1.70991684E12, 1291.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-119", "isController": false}, {"data": [[1.70991684E12, 1458.0]], "isOverall": false, "label": "Step 1 :- Launch Url", "isController": true}, {"data": [[1.70991684E12, 92.0]], "isOverall": false, "label": "/images/icons/setting-w.svg-53", "isController": false}, {"data": [[1.70991684E12, 240.0]], "isOverall": false, "label": "/v2/api/attendance/-117", "isController": false}, {"data": [[1.70991684E12, 65.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-125", "isController": false}, {"data": [[1.7099169E12, 184.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-126", "isController": false}, {"data": [[1.7099169E12, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-127", "isController": false}, {"data": [[1.70991684E12, 81.0]], "isOverall": false, "label": "/images/icons/payroll.png-52", "isController": false}, {"data": [[1.70991684E12, 486.0]], "isOverall": false, "label": "/v2/api/employees/-24", "isController": false}, {"data": [[1.70991684E12, 800.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-18", "isController": false}, {"data": [[1.70991684E12, 24.0]], "isOverall": false, "label": "/connecttest.txt-79", "isController": false}, {"data": [[1.70991684E12, 15486.0]], "isOverall": false, "label": "Step 2 :- Login", "isController": true}, {"data": [[1.70991684E12, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-41", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7099169E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.70991684E12, "maxY": 1711.0, "series": [{"data": [[1.70991684E12, 231.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/request_leave/-104", "isController": false}, {"data": [[1.70991684E12, 16.0]], "isOverall": false, "label": "/connecttest.txt-78", "isController": false}, {"data": [[1.7099169E12, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-136", "isController": false}, {"data": [[1.70991684E12, 50.0]], "isOverall": false, "label": "/connecttest.txt-77", "isController": false}, {"data": [[1.70991684E12, 95.0]], "isOverall": false, "label": "/images/icons/dashboard.png-100", "isController": false}, {"data": [[1.7099169E12, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-137", "isController": false}, {"data": [[1.70991684E12, 22.0]], "isOverall": false, "label": "/connecttest.txt-76", "isController": false}, {"data": [[1.70991684E12, 98.0]], "isOverall": false, "label": "/images/icons/arrow-down.png-31", "isController": false}, {"data": [[1.7099169E12, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-139", "isController": false}, {"data": [[1.70991684E12, 796.0]], "isOverall": false, "label": "/app-2", "isController": false}, {"data": [[1.70991684E12, 463.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-120", "isController": false}, {"data": [[1.70991684E12, 186.0]], "isOverall": false, "label": "/v2/api/groups/-43", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "Step 5 :- Log Out", "isController": true}, {"data": [[1.70991684E12, 699.0]], "isOverall": false, "label": "/v2/api/auth/login/-16", "isController": false}, {"data": [[1.7099169E12, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-132", "isController": false}, {"data": [[1.70991684E12, 339.0]], "isOverall": false, "label": "/service/update2/json-14", "isController": false}, {"data": [[1.70991684E12, 89.0]], "isOverall": false, "label": "/images/icons/reports.png-50", "isController": false}, {"data": [[1.7099169E12, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-133", "isController": false}, {"data": [[1.7099169E12, 56.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-134", "isController": false}, {"data": [[1.7099169E12, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-135", "isController": false}, {"data": [[1.70991684E12, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-75", "isController": false}, {"data": [[1.70991684E12, 296.0]], "isOverall": false, "label": "/v2/api/employees/-55", "isController": false}, {"data": [[1.7099169E12, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-130", "isController": false}, {"data": [[1.70991684E12, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-74", "isController": false}, {"data": [[1.7099169E12, 57.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-131", "isController": false}, {"data": [[1.70991684E12, 105.0]], "isOverall": false, "label": "/images/icons/download.png-32", "isController": false}, {"data": [[1.70991684E12, 55.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-71", "isController": false}, {"data": [[1.70991684E12, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-72", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "Step 4 :-Click on Apply Leave", "isController": true}, {"data": [[1.70991684E12, 41.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/toolbar.js-6", "isController": false}, {"data": [[1.70991684E12, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-70", "isController": false}, {"data": [[1.70991684E12, 48.0]], "isOverall": false, "label": "/django-static/favicon.png-11", "isController": false}, {"data": [[1.70991684E12, 425.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-30", "isController": false}, {"data": [[1.70991684E12, 93.0]], "isOverall": false, "label": "/images/profilepic.png-60", "isController": false}, {"data": [[1.7099169E12, 80.0]], "isOverall": false, "label": "/images/Eye-blue.png-128", "isController": false}, {"data": [[1.70991684E12, 301.0]], "isOverall": false, "label": "/v2/api/screenshots/-49", "isController": false}, {"data": [[1.70991684E12, 312.0]], "isOverall": false, "label": "/service/update2/json-89", "isController": false}, {"data": [[1.70991684E12, 425.0]], "isOverall": false, "label": "/v2/api/employees/-46", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-68", "isController": false}, {"data": [[1.70991684E12, 100.0]], "isOverall": false, "label": "/images/Eye-blue.png-8", "isController": false}, {"data": [[1.70991684E12, 484.0]], "isOverall": false, "label": "/v2/api/employees/-47", "isController": false}, {"data": [[1.70991684E12, 54.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-69", "isController": false}, {"data": [[1.7099169E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-144", "isController": false}, {"data": [[1.70991684E12, 284.0]], "isOverall": false, "label": "/v2/api/employees/-48", "isController": false}, {"data": [[1.70991684E12, 56.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-66", "isController": false}, {"data": [[1.70991684E12, 278.0]], "isOverall": false, "label": "/v2/api/attendance/-73", "isController": false}, {"data": [[1.7099169E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-145", "isController": false}, {"data": [[1.70991684E12, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-67", "isController": false}, {"data": [[1.70991684E12, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-64", "isController": false}, {"data": [[1.70991684E12, 299.0]], "isOverall": false, "label": "/v2/api/leave-types/-25", "isController": false}, {"data": [[1.70991684E12, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-65", "isController": false}, {"data": [[1.7099169E12, 52.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-140", "isController": false}, {"data": [[1.70991684E12, 1218.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-36", "isController": false}, {"data": [[1.70991684E12, 330.0]], "isOverall": false, "label": "/v2/api/employees/-44", "isController": false}, {"data": [[1.70991684E12, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-62", "isController": false}, {"data": [[1.70991684E12, 370.0]], "isOverall": false, "label": "/v2/api/employees/-45", "isController": false}, {"data": [[1.70991684E12, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-63", "isController": false}, {"data": [[1.7099169E12, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-142", "isController": false}, {"data": [[1.70991684E12, 231.0]], "isOverall": false, "label": "/v2/api/attendance/-58", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/generate_204-1", "isController": false}, {"data": [[1.7099169E12, 91.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-143", "isController": false}, {"data": [[1.70991684E12, 338.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-83", "isController": false}, {"data": [[1.70991684E12, 94.0]], "isOverall": false, "label": "/images/Eye.png-15", "isController": false}, {"data": [[1.70991684E12, 216.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-82", "isController": false}, {"data": [[1.70991684E12, 221.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-86", "isController": false}, {"data": [[1.70991684E12, 196.0]], "isOverall": false, "label": "/v2/api/groups/-20", "isController": false}, {"data": [[1.70991684E12, 324.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-85", "isController": false}, {"data": [[1.70991684E12, 92.0]], "isOverall": false, "label": "/images/close.png-103", "isController": false}, {"data": [[1.70991684E12, 301.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-105", "isController": false}, {"data": [[1.70991684E12, 292.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-106", "isController": false}, {"data": [[1.70991684E12, 201.0]], "isOverall": false, "label": "/v2/api/groups/-123", "isController": false}, {"data": [[1.70991684E12, 254.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-88", "isController": false}, {"data": [[1.70991684E12, 60.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-99", "isController": false}, {"data": [[1.70991684E12, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-97", "isController": false}, {"data": [[1.70991684E12, 49.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-93", "isController": false}, {"data": [[1.70991684E12, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-91", "isController": false}, {"data": [[1.70991684E12, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-92", "isController": false}, {"data": [[1.70991684E12, 59.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-90", "isController": false}, {"data": [[1.7099169E12, 322.0]], "isOverall": false, "label": "/v2/api/employees/-138", "isController": false}, {"data": [[1.70991684E12, 234.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-98", "isController": false}, {"data": [[1.70991684E12, 155.0]], "isOverall": false, "label": "/images/icons/resource-management.png-33", "isController": false}, {"data": [[1.70991684E12, 295.0]], "isOverall": false, "label": "/v2/api/leave-types/-87", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "Step 3 :- Click on Leave", "isController": true}, {"data": [[1.70991684E12, 291.0]], "isOverall": false, "label": "/v2/api/leave-types/-84", "isController": false}, {"data": [[1.70991684E12, 189.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-17", "isController": false}, {"data": [[1.70991684E12, 1711.0]], "isOverall": false, "label": "/v2/api/permissions/-21", "isController": false}, {"data": [[1.70991684E12, 85.0]], "isOverall": false, "label": "/images/icons/leave-w.svg-40", "isController": false}, {"data": [[1.70991684E12, 105.0]], "isOverall": false, "label": "/images/icons/feedback.png-51", "isController": false}, {"data": [[1.70991684E12, 94.0]], "isOverall": false, "label": "/images/icons/work-diary.png-29", "isController": false}, {"data": [[1.70991684E12, 170.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-118", "isController": false}, {"data": [[1.70991684E12, 399.0]], "isOverall": false, "label": "/v2/api/employees/-124", "isController": false}, {"data": [[1.70991684E12, 93.0]], "isOverall": false, "label": "/images/icons/ei_calendar.png-28", "isController": false}, {"data": [[1.70991684E12, 83.0]], "isOverall": false, "label": "/images/icons/delete.png-94", "isController": false}, {"data": [[1.70991684E12, 329.0]], "isOverall": false, "label": "/v2/api/employees/-122", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-12", "isController": false}, {"data": [[1.70991684E12, 79.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-13", "isController": false}, {"data": [[1.70991684E12, 527.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-27", "isController": false}, {"data": [[1.70991684E12, 51.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-39", "isController": false}, {"data": [[1.70991684E12, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-37", "isController": false}, {"data": [[1.70991684E12, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-38", "isController": false}, {"data": [[1.70991684E12, 62.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-35", "isController": false}, {"data": [[1.70991684E12, 399.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-19", "isController": false}, {"data": [[1.70991684E12, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-34", "isController": false}, {"data": [[1.7099169E12, 285.0]], "isOverall": false, "label": "/v2/api/attendance/-141", "isController": false}, {"data": [[1.70991684E12, 354.0]], "isOverall": false, "label": "/v2/api/leave-types/-116", "isController": false}, {"data": [[1.70991684E12, 50.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-107", "isController": false}, {"data": [[1.70991684E12, 234.0]], "isOverall": false, "label": "/v2/api/employees/-114", "isController": false}, {"data": [[1.70991684E12, 808.0]], "isOverall": false, "label": "/v2/api/active-subscription/feature_list/-22", "isController": false}, {"data": [[1.70991684E12, 53.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-108", "isController": false}, {"data": [[1.70991684E12, 559.0]], "isOverall": false, "label": "/v2/api/attendance/-26", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-109", "isController": false}, {"data": [[1.70991684E12, 330.0]], "isOverall": false, "label": "/v2/api/employees/-112", "isController": false}, {"data": [[1.70991684E12, 292.0]], "isOverall": false, "label": "/v2/api/employees/-113", "isController": false}, {"data": [[1.70991684E12, 230.0]], "isOverall": false, "label": "/v2/api/employees/-110", "isController": false}, {"data": [[1.70991684E12, 107.0]], "isOverall": false, "label": "/images/clocksession-logo.png-7", "isController": false}, {"data": [[1.70991684E12, 45.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/toolbar.css-4", "isController": false}, {"data": [[1.70991684E12, 142.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-81", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-80", "isController": false}, {"data": [[1.70991684E12, 94.0]], "isOverall": false, "label": "/images/icons/edit-green.png-96", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-101", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-102", "isController": false}, {"data": [[1.70991684E12, 61.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/print.css-9", "isController": false}, {"data": [[1.70991684E12, 878.0]], "isOverall": false, "label": "/v2/api/active-subscription/active_subscriptionplan_for_organisation/-23", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-61", "isController": false}, {"data": [[1.70991684E12, 499.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-111", "isController": false}, {"data": [[1.70991684E12, 87.0]], "isOverall": false, "label": "/images/description.png-95", "isController": false}, {"data": [[1.7099169E12, 297.0]], "isOverall": false, "label": "/v2/api/attendance/-129", "isController": false}, {"data": [[1.70991684E12, 209.0]], "isOverall": false, "label": "/v2/api/screenshots/-115", "isController": false}, {"data": [[1.70991684E12, 61.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-59", "isController": false}, {"data": [[1.70991684E12, 49.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/utils.js-10", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-57", "isController": false}, {"data": [[1.70991684E12, 46.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-56", "isController": false}, {"data": [[1.70991684E12, 47.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-54", "isController": false}, {"data": [[1.70991684E12, 1290.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-119", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "Step 1 :- Launch Url", "isController": true}, {"data": [[1.70991684E12, 92.0]], "isOverall": false, "label": "/images/icons/setting-w.svg-53", "isController": false}, {"data": [[1.70991684E12, 240.0]], "isOverall": false, "label": "/v2/api/attendance/-117", "isController": false}, {"data": [[1.70991684E12, 65.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-125", "isController": false}, {"data": [[1.7099169E12, 184.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-126", "isController": false}, {"data": [[1.7099169E12, 48.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-127", "isController": false}, {"data": [[1.70991684E12, 81.0]], "isOverall": false, "label": "/images/icons/payroll.png-52", "isController": false}, {"data": [[1.70991684E12, 486.0]], "isOverall": false, "label": "/v2/api/employees/-24", "isController": false}, {"data": [[1.70991684E12, 786.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-18", "isController": false}, {"data": [[1.70991684E12, 24.0]], "isOverall": false, "label": "/connecttest.txt-79", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "Step 2 :- Login", "isController": true}, {"data": [[1.70991684E12, 58.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-41", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7099169E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.70991684E12, "maxY": 826.0, "series": [{"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/request_leave/-104", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/connecttest.txt-78", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-136", "isController": false}, {"data": [[1.70991684E12, 35.0]], "isOverall": false, "label": "/connecttest.txt-77", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/dashboard.png-100", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-137", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/connecttest.txt-76", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/arrow-down.png-31", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-139", "isController": false}, {"data": [[1.70991684E12, 704.0]], "isOverall": false, "label": "/app-2", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-120", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/groups/-43", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "Step 5 :- Log Out", "isController": true}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/auth/login/-16", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-132", "isController": false}, {"data": [[1.70991684E12, 51.0]], "isOverall": false, "label": "/service/update2/json-14", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/reports.png-50", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-133", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-134", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-135", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-75", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-55", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-130", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-74", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-131", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/download.png-32", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-71", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-72", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "Step 4 :-Click on Apply Leave", "isController": true}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/toolbar.js-6", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-70", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/django-static/favicon.png-11", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-30", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/profilepic.png-60", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/images/Eye-blue.png-128", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/screenshots/-49", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/service/update2/json-89", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-46", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-68", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/Eye-blue.png-8", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-47", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-69", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-144", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-48", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-66", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/attendance/-73", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-145", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-67", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-64", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-types/-25", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-65", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-140", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-36", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-44", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-62", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-45", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-63", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-142", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/attendance/-58", "isController": false}, {"data": [[1.70991684E12, 122.0]], "isOverall": false, "label": "/generate_204-1", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/images/icons/dashboard-active.png-143", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-83", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/Eye.png-15", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-82", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-86", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/groups/-20", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-85", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/close.png-103", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-105", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-106", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/groups/-123", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-88", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-99", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-97", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-93", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-91", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-92", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-90", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-138", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-98", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/resource-management.png-33", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-types/-87", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "Step 3 :- Click on Leave", "isController": true}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-types/-84", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-17", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/permissions/-21", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/leave-w.svg-40", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/feedback.png-51", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/work-diary.png-29", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-118", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-124", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/ei_calendar.png-28", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/delete.png-94", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-122", "isController": false}, {"data": [[1.70991684E12, 44.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-12", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-13", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-27", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-39", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-37", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-38", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-35", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-19", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-34", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/v2/api/attendance/-141", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/leave-types/-116", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-107", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-114", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/active-subscription/feature_list/-22", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-108", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/attendance/-26", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-109", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-112", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-113", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-110", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/clocksession-logo.png-7", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/toolbar.css-4", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-81", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-80", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/edit-green.png-96", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-101", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-102", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/django-static/debug_toolbar/css/print.css-9", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/active-subscription/active_subscriptionplan_for_organisation/-23", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-61", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-111", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/description.png-95", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/v2/api/attendance/-129", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/screenshots/-115", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-59", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/django-static/debug_toolbar/js/utils.js-10", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-57", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-56", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-54", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-119", "isController": false}, {"data": [[1.70991684E12, 826.0]], "isOverall": false, "label": "Step 1 :- Launch Url", "isController": true}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/setting-w.svg-53", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/attendance/-117", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-125", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-126", "isController": false}, {"data": [[1.7099169E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-127", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/images/icons/payroll.png-52", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/-24", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-18", "isController": false}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/connecttest.txt-79", "isController": false}, {"data": [[1.70991684E12, 130.0]], "isOverall": false, "label": "Step 2 :- Login", "isController": true}, {"data": [[1.70991684E12, 0.0]], "isOverall": false, "label": "/__debug__/history_sidebar/-41", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7099169E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 16.0, "minX": 1.70991684E12, "maxY": 1761.0, "series": [{"data": [[1.70991684E12, 1761.0], [1.7099169E12, 322.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.70991684E12, 485.6], [1.7099169E12, 295.8]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.70991684E12, 1657.6000000000006], [1.7099169E12, 322.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.70991684E12, 807.1999999999999], [1.7099169E12, 320.75]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.70991684E12, 16.0], [1.7099169E12, 46.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.70991684E12, 95.0], [1.7099169E12, 55.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7099169E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 52.0, "minX": 1.0, "maxY": 843.5, "series": [{"data": [[1.0, 843.5], [2.0, 384.5], [8.0, 72.5], [4.0, 247.0], [9.0, 61.0], [5.0, 284.0], [11.0, 61.0], [3.0, 528.0], [6.0, 142.0], [7.0, 98.0], [15.0, 52.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 52.0, "minX": 1.0, "maxY": 843.0, "series": [{"data": [[1.0, 843.0], [2.0, 384.5], [8.0, 72.5], [4.0, 247.0], [9.0, 61.0], [5.0, 284.0], [11.0, 59.0], [3.0, 527.0], [6.0, 141.5], [7.0, 98.0], [15.0, 52.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 15.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.31666666666666665, "minX": 1.70991684E12, "maxY": 2.033333333333333, "series": [{"data": [[1.70991684E12, 2.033333333333333], [1.7099169E12, 0.31666666666666665]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7099169E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.70991684E12, "maxY": 1.9833333333333334, "series": [{"data": [[1.70991684E12, 1.9833333333333334], [1.7099169E12, 0.3333333333333333]], "isOverall": false, "label": "200", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "201", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "204", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7099169E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.016666666666666666, "minX": 1.70991684E12, "maxY": 0.016666666666666666, "series": [{"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-136-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/close.png-103-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/dashboard.png-100-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-86-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-12-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-91-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-transaction-history/request_leave/-104-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-types/-116-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/description.png-95-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-types/-25-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/attendance/-141-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-57-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/profilepic.png-60-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/Eye-blue.png-8-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-55-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-108-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-72-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-38-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-114-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-142-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-118-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-113-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-99-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-66-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/attendance/-129-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/connecttest.txt-79-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/permissions/-21-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-35-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "Step 1 :- Launch Url-success", "isController": true}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/screenshots/-49-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-145-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-46-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/service/update2/json-89-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-62-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-111-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-133-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/django-static/debug_toolbar/js/utils.js-10-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/django-static/debug_toolbar/css/print.css-9-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/download.png-32-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/attendance/-117-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-75-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/generate_204-1-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-19-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/ei_calendar.png-28-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-107-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-135-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/service/update2/json-14-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-98-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/resource-management.png-33-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/django-static/favicon.png-11-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/work-diary.png-29-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-85-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-92-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-71-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/auth/login/-16-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-54-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/app-2-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/reports/dashbord_brief/-27-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-24-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-139-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-144-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/setting-w.svg-53-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-112-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-127-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-67-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "Step 4 :-Click on Apply Leave-success", "isController": true}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-45-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-63-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/feedback.png-51-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-34-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/edit-green.png-96-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-124-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-132-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-82-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/delete.png-94-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/connecttest.txt-76-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-types/-84-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/leave-w.svg-40-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-81-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/screenshots/-115-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-138-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/groups/-20-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-74-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-61-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-59-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/images/Eye-blue.png-128-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-36-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/attendance/-58-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-70-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/api/TimeZones/get_common_time_zones/-17-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/active-subscription/active_subscriptionplan_for_organisation/-23-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/groups/-123-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/attendance/-26-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/groups/-43-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-105-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/attendance/-73-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-88-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-125-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-68-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-37-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/connecttest.txt-77-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-119-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "Step 3 :- Click on Leave-success", "isController": true}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-44-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/payroll.png-52-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/-120-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-140-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/dashboard-active.png-30-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-97-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/reports.png-50-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-types/-87-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/dashboard-active.png-143-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-131-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-64-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-93-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/clocksession-logo.png-7-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-48-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/django-static/debug_toolbar/js/toolbar.js-6-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-102-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-122-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/5f9072b5-82d1-4c65-b256-834818d2da95/subordinates/-18-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-90-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-83-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "Step 2 :- Login-success", "isController": true}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/Eye.png-15-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-137-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/active-subscription/feature_list/-22-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/leave-transaction-history/-106-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-56-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "Step 5 :- Log Out-success", "isController": true}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/edgedl/diffgen-puffin/hfnkpimlhhgieaddgfemjhofmfblmnib/1.9425746766e04737f90fda18c53978e7a84a4e118888c3c239e002b5d432f56d/1.c6c0f4669a3e64afd73baa4b8f864984b1d8aef503fbd9df55a628aaff777f1e/508fc51d066140fec32701a4efbf6ae543557f8c0c572ba03f0198b47e403a24.puff-13-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-126-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-109-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-41-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-69-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/edgedl/diffgen-puffin/jflhchccmppkfebkiaminageehmchikm/1.80b62b263deb25ccd38c473cf8dcf18b621a77072c12d666c19e2a00a6d34d92/1.9232812c82dc381946ebc10eae2b328b9e510f9f45f0c5c7ed1ebe1f4f6c5c97/eb5a4fb22aa2857469119732d6a64be9ad57604cbd2df0d3d211737c0dffb804.puff-80-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/connecttest.txt-78-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-39-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/images/icons/arrow-down.png-31-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/django-static/debug_toolbar/css/toolbar.css-4-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-130-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-101-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-110-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-65-success", "isController": false}, {"data": [[1.7099169E12, 0.016666666666666666]], "isOverall": false, "label": "/__debug__/history_sidebar/-134-success", "isController": false}, {"data": [[1.70991684E12, 0.016666666666666666]], "isOverall": false, "label": "/v2/api/employees/-47-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7099169E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.35, "minX": 1.70991684E12, "maxY": 2.0833333333333335, "series": [{"data": [[1.70991684E12, 2.0833333333333335], [1.7099169E12, 0.35]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7099169E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, -18000000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}
