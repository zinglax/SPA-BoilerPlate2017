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
        init_local_saves();
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


function init_local_saves(){  

  $('#save_local').click(function(ev) {
      // on local save

      ev.stopPropagation();
      ev.preventDefault();

      var xml = Blockly.Xml.workspaceToDom(workspace);
      var xmlText = new XMLSerializer().serializeToString(xml);
      var save_name = "";
      var localsaves =  JSON.parse(localStorage.getItem('localsaves'));

      if (localsaves == null){
          localStorage.setItem('localsaves','{}');
          var temp = localStorage.getItem('localsaves');
          localsaves = JSON.parse(temp);
      }
      save_name = $("#save_local_name").val();
      localsaves[save_name] = xmlText;
      localStorage.setItem("localsaves",JSON.stringify(localsaves));
      console.log("LOCAL SAVE: " + save_name);
  });


  $('#load_local').click(function(ev) {
      // on load local
      ev.stopPropagation();
      ev.preventDefault();

      var load_name = "";
      load_name = $("#load_local_name").val();

      var temp = localStorage.getItem("localsaves");
      if (temp == null){
          localStorage.setItem('localsaves','{}');
          return;
      }

      var localsaves =  JSON.parse(temp);
      Blockly.Xml.domToWorkspace(Blockly.Xml.textToDom(localsaves[load_name]), workspace);
      console.log("LOCAL LOAD: " + load_name);
  });

}



var BlocksToHTML = {

    replaceElmTag: function(elm, new_tag) {
        // Grab the original element
        var original = elm
            // Create a replacement tag of the desired type
        var replacement = document.createElement(new_tag);

        // Grab all of the original's attributes, and pass them to the replacement
        for (var i = 0, l = original.attributes.length; i < l; ++i) {
            var nodeName = original.attributes.item(i).nodeName;
            var nodeValue = original.attributes.item(i).nodeValue;
            replacement.setAttribute(nodeName, nodeValue);
        }

        // Persist contents
        replacement.innerHTML = original.innerHTML;

        // Switch!
        original.parentNode.replaceChild(replacement, original);
    },

    traverse_order: function(xml, selector) {
        var
            x,
            ar = []
            //
        ;

        $(xml).find(selector).each(function() {
            ar.push({
                length: $(this).parents().length,
                elmt: $(this)
            });
        });

        ar.sort(function(a, b) {
            if (a.length - b.length > 0) {
                return -1;
            }

            if (a.length - b.length < 0) {
                return 1;
            }

            return 0;
        });

        for (var i = 0; i < ar.length; i++) {
            x += (ar[i].elmt.attr("type")) + ' - ';
        };

        return {
            "list": ar,
            "string": x
        };
    },

    blocks_to_page: function() {

        var
            blocks,
            statements
            //
        ;

        var xml = Blockly.Xml.workspaceToDom(workspace);

        blocks = BlocksToHTML.traverse_order(xml, "block");
        statements = BlocksToHTML.traverse_order(xml, "statement");

        for (var i = 0; i < blocks["list"].length; i++) {
            $(blocks["list"][i].elmt).replaceWith('<' + blocks["list"][i].elmt.attr("type") + '>' + blocks["list"][i].elmt.html() + '</' + blocks["list"][i].elmt.attr("type") + '>');
        }

        $(xml).remove("next");
        $(xml).remove("shadow");

        for (var i = 0; i < statements["list"].length; i++) {
            $(statements["list"][i].elmt).replaceWith($(statements["list"][i].elmt).html());
        }

        $(xml).find("statement").each(function(index) {
            $(this).after($(this).html());
            $(this).remove();
        })

        console.log($("#output").html($(xml).html()));
    },


};




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
