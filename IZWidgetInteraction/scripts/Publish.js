function executeWidgetCode() {
    require(["UWA/Drivers/jQuery", "DS/PlatformAPI/PlatformAPI"], function($, PlatformAPI) {
        var myWidget = {
            dataFull: [
                { firstName: "John", lastName: "Doe", userId: "JD1" },
                { firstName: "Jane", lastName: "Doe", userId: "JD2" },
                { firstName: "David", lastName: "Doe", userId: "DD1" },
                { firstName: "David", lastName: "Black", userId: "DB1" },
                { firstName: "David", lastName: "White", userId: "DW1" },
                { firstName: "Walter", lastName: "White", userId: "WW1" }
            ],

            topicName: "clickUserId",

            displayData: function(arrData) {
                //Do it properly with jQuery

                var $wdgBody = $(widget.body);
                $wdgBody.empty();

                var $table = $("<table id = 'data'></table>");

                $table.append("<thead><tr><th>First Name</th><th>Last Name</th><th>userId</th></tr></thead>");

                var $tBody = $("<tbody></tbody>");

                for (var i = 0; i < arrData.length; i++) {
                    var $tr = $(
                        "<tr id='" +
                            arrData[i].firstName + "&nbsp " + arrData[i].lastName + "&nbsp "+ arrData[i].userId +
                            "' rowSelected='false'>" + 
							"<td>" +
                            arrData[i].firstName +
                            "</td><td>" +
                            arrData[i].lastName +
                            "</td><td>" +
                            arrData[i].userId +
                            "</td></tr>"
                    );
                    $tr.on("click", myWidget.clickOnRow);
                    $tBody.append($tr);
                }
                $table.append($tBody);
                $wdgBody.append($table);
            },
            onLoadWidget: function() {
                myWidget.displayData(myWidget.dataFull);
            },
        };

        widget.myWidget = myWidget;

        widget.addEvent("onLoad", myWidget.onLoadWidget);
    });
}



