/**
 * Run an AJAX Action
 * @param  {[type]} action       [description]
 * @param  {[type]} data         [description]
 * @param  {[type]} success_func [description]
 * @return {[type]}              [description]
 */
function run_ajax_action(action, data, success_func) {
    var d = {
        "action": action,
        "data": data
    };
    $.ajax({
        url: window.location.pathname,
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(d),
        type: 'POST',
        success: function(response) {
            // Save the local_data to localStorage
            console.log("ajax action: " + d["action"] + " success")
            if (success_func) {
                success_func(response);
            }
        },
        error: function(error) {
            console.log("ajax action: " + d["action"] + " failure")
            console.log(error);
        }
    });
}


function action_init() {
    var data = {};

    function success(response) {
        console.log("UPDATING: action_init");
        console.log(response['init']);
        $("#spa").empty();
        $("#spa").html(response['init']);
        init_blockly(response['toolbox_url'])
    }
    run_ajax_action("init", data, success);
}


function action_generate_site() {

    var data = {
        "domain": $($("#domain")[0]).val(),
        "color": $($("#color")[0]).val()
    };

    function success(response) {
        console.log("UPDATING: action_generate_site");
        console.log(response['action_generate_site']);
        $("#spa").empty();
        $("#spa").html(response['generate_site']);
    }
    run_ajax_action("generate_site", data, success);
}



function action_post_project_json() {

    var data = {
        "domain": $($("#domain")[0]).val(),
        "color": $($("#color")[0]).val(),
        "pages": [{
            "name": "about",
            "is_home": true,
            "html": `<!DOCTYPE html>
<html>
<body>

<h1>about</h1>

<p>My first paragraph.</p>

</body>
</html>`
        }, {
            "name": "pagetwo",
            "is_home": false,
            "html": `<!DOCTYPE html>
<html>
<body>

<h1>pagetwo</h1>

<p>My first paragraph.</p>

</body>
</html>`
        }]
    };

    function success(response) {
        console.log("UPDATING: action_post_project_json");
        console.log(response['action_post_project_json']);
        $("#spa").empty();
        $("#spa").html(response['post_project_json']);
    }
    run_ajax_action("post_project_json", data, success);
}


/**
 * Initialize Blockly Workspace
 */
function init_blockly(toolbox_url){

  // Get toolbox
  $( function() {
    $.ajax({
        type: "GET",
    url: toolbox_url,
    dataType: "xml",
    success: function(xml) {

      $("#spa").append($(xml).find("#toolbox"));

      window.workspace = Blockly.inject('#blocklyDiv', {
      toolbox: document.getElementById('toolbox'),
      zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
          },
          sounds: false
      });
    }
    });
  }); 
}


/** 
 * Sleep time expects milliseconds
 * @param  {[type]}
 * @return {[type]}
 */
function sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}


/** Workspace Main
 * occurs on jquery's document pagecreate
 * 
 */
$(document).ready(function() {

    sleep(1000).then(() => {
        action_init()
    });


    // End
});
