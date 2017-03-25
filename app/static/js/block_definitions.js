/**

CSS =========================================================
*/

Blockly.Blocks['css_file'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("CSS :")
        .appendField(new Blockly.FieldTextInput("file name"), "file_name");
    this.appendStatementInput("rules")
        .setCheck(null);
    this.setColour(90);
    this.setTooltip('CSS file');
    this.setHelpUrl('https://spaboilerplate2017.zinglax.com/');
  }
};


Blockly.Blocks['css_rule'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("rule :")
        .appendField(new Blockly.FieldTextInput("css_selector"), "rule");
    this.appendStatementInput("properties")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('CSS rule');
    this.setHelpUrl('https://spaboilerplate2017.zinglax.com/');
  }
};


Blockly.Blocks['css_property'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldTextInput("css-property"), "property")
        .appendField(":")
        .appendField(new Blockly.FieldTextInput("property value"), "name")
        .appendField(";");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['css_include'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("    ")
        .appendField("Include CSS :")
        .appendField(new Blockly.FieldTextInput("file name"), "file_name");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(90);
    this.setTooltip('CSS include');
    this.setHelpUrl('https://spaboilerplate2017.zinglax.com/');
  }
};


/**

boiler ========================================================
*/


Blockly.Blocks['boiler_page'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Page :")
        .appendField(new Blockly.FieldTextInput("project_name"), "name");
    this.appendStatementInput("inner")
        .setCheck(null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


Blockly.Blocks['is_home'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("is_home :")
        .appendField(new Blockly.FieldCheckbox("TRUE"), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(230);
    this.setTooltip('Is this page the home page? will only take one, use carefully.');
    this.setHelpUrl('https://spaboilerplate2017.zinglax.com/');
  }
};




/**

HTML ========================================================
*/

Blockly.Blocks['html_text'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldTextInput("Text..."), "value");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};

Blockly.Blocks['attr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("     ")
        .appendField(new Blockly.FieldTextInput("attr-name"), "attr_name")
        .appendField("= \"")
        .appendField(new Blockly.FieldTextInput("value"), "attr_value")
        .appendField("\" ");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - !DOCTYPE
 */
Blockly.Blocks['!DOCTYPE'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+!DOCTYPE');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-!DOCTYPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/!DOCTYPE');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - a
 */
Blockly.Blocks['a'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+a');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-a');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/a');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - abbr
 */
Blockly.Blocks['abbr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+abbr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-abbr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/abbr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - acronym
 */
Blockly.Blocks['acronym'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+acronym');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-acronym');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/acronym');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - address
 */
Blockly.Blocks['address'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+address');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-address');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/address');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - applet
 */
Blockly.Blocks['applet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+applet');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-applet');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/applet');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - area
 */
Blockly.Blocks['area'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+area');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-area');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/area');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - article
 */
Blockly.Blocks['article'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+article');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-article');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/article');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - aside
 */
Blockly.Blocks['aside'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+aside');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-aside');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/aside');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - audio
 */
Blockly.Blocks['audio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+audio');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-audio');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/audio');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - b
 */
Blockly.Blocks['b'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+b');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-b');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/b');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - base
 */
Blockly.Blocks['base'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+base');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-base');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/base');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - basefont
 */
Blockly.Blocks['basefont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+basefont');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-basefont');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/basefont');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - bdi
 */
Blockly.Blocks['bdi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+bdi');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-bdi');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/bdi');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - bdo
 */
Blockly.Blocks['bdo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+bdo');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-bdo');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/bdo');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - big
 */
Blockly.Blocks['big'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+big');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-big');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/big');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - blockquote
 */
Blockly.Blocks['blockquote'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+blockquote');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-blockquote');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/blockquote');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - body
 */
Blockly.Blocks['body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+body');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-body');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/body');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - br
 */
Blockly.Blocks['br'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+br');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-br');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/br');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - button
 */
Blockly.Blocks['button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+button');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-button');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/button');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - canvas
 */
Blockly.Blocks['canvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+canvas');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-canvas');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/canvas');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - caption
 */
Blockly.Blocks['caption'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+caption');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-caption');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/caption');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - center
 */
Blockly.Blocks['center'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+center');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-center');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/center');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - cite
 */
Blockly.Blocks['cite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+cite');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-cite');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/cite');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - code
 */
Blockly.Blocks['code'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+code');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-code');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/code');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - col
 */
Blockly.Blocks['col'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+col');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-col');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/col');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - colgroup
 */
Blockly.Blocks['colgroup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+colgroup');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-colgroup');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/colgroup');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - datalist
 */
Blockly.Blocks['datalist'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+datalist');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-datalist');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/datalist');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dd
 */
Blockly.Blocks['dd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dd');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dd');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dd');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - del
 */
Blockly.Blocks['del'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+del');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-del');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/del');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - details
 */
Blockly.Blocks['details'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+details');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-details');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/details');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dfn
 */
Blockly.Blocks['dfn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dfn');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dfn');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dfn');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dialog
 */
Blockly.Blocks['dialog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dialog');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dialog');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dialog');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dir
 */
Blockly.Blocks['dir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dir');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dir');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dir');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - div
 */
Blockly.Blocks['div'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+div');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-div');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/div');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dl
 */
Blockly.Blocks['dl'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dl');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dl');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dl');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dt
 */
Blockly.Blocks['dt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dt');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dt');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dt');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - em
 */
Blockly.Blocks['em'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+em');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-em');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/em');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - embed
 */
Blockly.Blocks['embed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+embed');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-embed');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/embed');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - fieldset
 */
Blockly.Blocks['fieldset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+fieldset');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-fieldset');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/fieldset');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - figcaption
 */
Blockly.Blocks['figcaption'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+figcaption');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-figcaption');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/figcaption');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - figure
 */
Blockly.Blocks['figure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+figure');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-figure');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/figure');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - font
 */
Blockly.Blocks['font'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+font');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-font');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/font');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - footer
 */
Blockly.Blocks['footer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+footer');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-footer');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/footer');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - form
 */
Blockly.Blocks['form'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+form');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-form');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/form');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - frame
 */
Blockly.Blocks['frame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+frame');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-frame');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/frame');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - frameset
 */
Blockly.Blocks['frameset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+frameset');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-frameset');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/frameset');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h1
 */
Blockly.Blocks['h1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h1');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h1');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h1');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h2
 */
Blockly.Blocks['h2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h2');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h2');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h2');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h3
 */
Blockly.Blocks['h3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h3');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h3');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h3');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h4
 */
Blockly.Blocks['h4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h4');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h4');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h4');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h5
 */
Blockly.Blocks['h5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h5');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h5');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h5');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h6
 */
Blockly.Blocks['h6'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h6');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h6');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h6');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - head
 */
Blockly.Blocks['head'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+head');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-head');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/head');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - header
 */
Blockly.Blocks['header'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+header');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-header');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/header');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - hr
 */
Blockly.Blocks['hr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+hr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-hr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/hr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - html
 */
Blockly.Blocks['html'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+html');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-html');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/html');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - i
 */
Blockly.Blocks['i'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+i');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-i');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/i');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - iframe
 */
Blockly.Blocks['iframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+iframe');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-iframe');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/iframe');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - img
 */
Blockly.Blocks['img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+img');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-img');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/img');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - input
 */
Blockly.Blocks['input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+input');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-input');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/input');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ins
 */
Blockly.Blocks['ins'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ins');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ins');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ins');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - kbd
 */
Blockly.Blocks['kbd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+kbd');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-kbd');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/kbd');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - keygen
 */
Blockly.Blocks['keygen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+keygen');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-keygen');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/keygen');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - label
 */
Blockly.Blocks['label'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+label');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-label');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/label');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - legend
 */
Blockly.Blocks['legend'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+legend');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-legend');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/legend');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - li
 */
Blockly.Blocks['li'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+li');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-li');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/li');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - link
 */
Blockly.Blocks['link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+link');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-link');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/link');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - main
 */
Blockly.Blocks['main'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+main');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-main');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/main');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - map
 */
Blockly.Blocks['map'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+map');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-map');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/map');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - mark
 */
Blockly.Blocks['mark'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+mark');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-mark');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/mark');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - menu
 */
Blockly.Blocks['menu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+menu');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-menu');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/menu');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - menuitem
 */
Blockly.Blocks['menuitem'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+menuitem');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-menuitem');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/menuitem');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - meta
 */
Blockly.Blocks['meta'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+meta');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-meta');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/meta');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - meter
 */
Blockly.Blocks['meter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+meter');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-meter');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/meter');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - nav
 */
Blockly.Blocks['nav'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+nav');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-nav');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/nav');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - noframes
 */
Blockly.Blocks['noframes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+noframes');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-noframes');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/noframes');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - noscript
 */
Blockly.Blocks['noscript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+noscript');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-noscript');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/noscript');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - object
 */
Blockly.Blocks['object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+object');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-object');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/object');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ol
 */
Blockly.Blocks['ol'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ol');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ol');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ol');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - optgroup
 */
Blockly.Blocks['optgroup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+optgroup');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-optgroup');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/optgroup');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - option
 */
Blockly.Blocks['option'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+option');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-option');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/option');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - output
 */
Blockly.Blocks['output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+output');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-output');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/output');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - p
 */
Blockly.Blocks['p'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+p');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-p');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/p');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - param
 */
Blockly.Blocks['param'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+param');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-param');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/param');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - picture
 */
Blockly.Blocks['picture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+picture');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-picture');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/picture');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - pre
 */
Blockly.Blocks['pre'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+pre');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-pre');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/pre');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - progress
 */
Blockly.Blocks['progress'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+progress');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-progress');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/progress');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - q
 */
Blockly.Blocks['q'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+q');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-q');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/q');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - rp
 */
Blockly.Blocks['rp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+rp');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-rp');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/rp');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - rt
 */
Blockly.Blocks['rt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+rt');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-rt');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/rt');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ruby
 */
Blockly.Blocks['ruby'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ruby');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ruby');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ruby');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - s
 */
Blockly.Blocks['s'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+s');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-s');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/s');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - samp
 */
Blockly.Blocks['samp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+samp');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-samp');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/samp');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - script
 */
Blockly.Blocks['script'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+script');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-script');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/script');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - section
 */
Blockly.Blocks['section'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+section');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-section');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/section');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - select
 */
Blockly.Blocks['select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+select');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-select');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/select');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - small
 */
Blockly.Blocks['small'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+small');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-small');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/small');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - source
 */
Blockly.Blocks['source'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+source');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-source');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/source');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - span
 */
Blockly.Blocks['span'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+span');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-span');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/span');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - strike
 */
Blockly.Blocks['strike'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+strike');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-strike');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/strike');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - strong
 */
Blockly.Blocks['strong'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+strong');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-strong');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/strong');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - style
 */
Blockly.Blocks['style'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+style');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-style');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/style');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - sub
 */
Blockly.Blocks['sub'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+sub');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-sub');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/sub');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - summary
 */
Blockly.Blocks['summary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+summary');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-summary');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/summary');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - sup
 */
Blockly.Blocks['sup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+sup');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-sup');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/sup');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - table
 */
Blockly.Blocks['table'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+table');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-table');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/table');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tbody
 */
Blockly.Blocks['tbody'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tbody');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tbody');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tbody');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - td
 */
Blockly.Blocks['td'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+td');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-td');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/td');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - textarea
 */
Blockly.Blocks['textarea'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+textarea');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-textarea');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/textarea');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tfoot
 */
Blockly.Blocks['tfoot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tfoot');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tfoot');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tfoot');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - th
 */
Blockly.Blocks['th'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+th');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-th');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/th');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - thead
 */
Blockly.Blocks['thead'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+thead');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-thead');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/thead');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - time
 */
Blockly.Blocks['time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+time');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-time');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/time');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - title
 */
Blockly.Blocks['title'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+title');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-title');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/title');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tr
 */
Blockly.Blocks['tr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - track
 */
Blockly.Blocks['track'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+track');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-track');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/track');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tt
 */
Blockly.Blocks['tt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tt');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tt');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tt');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - u
 */
Blockly.Blocks['u'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+u');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-u');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/u');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ul
 */
Blockly.Blocks['ul'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ul');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ul');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ul');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - var
 */
Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+var');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-var');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/var');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - video
 */
Blockly.Blocks['video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+video');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-video');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/video');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - wbr
 */
Blockly.Blocks['wbr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+wbr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-wbr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/wbr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - !DOCTYPE
 */
Blockly.Blocks['!DOCTYPE'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+!DOCTYPE');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-!DOCTYPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/!DOCTYPE');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - a
 */
Blockly.Blocks['a'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+a');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-a');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/a');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - abbr
 */
Blockly.Blocks['abbr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+abbr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-abbr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/abbr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - acronym
 */
Blockly.Blocks['acronym'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+acronym');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-acronym');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/acronym');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - address
 */
Blockly.Blocks['address'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+address');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-address');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/address');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - applet
 */
Blockly.Blocks['applet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+applet');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-applet');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/applet');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - area
 */
Blockly.Blocks['area'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+area');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-area');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/area');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - article
 */
Blockly.Blocks['article'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+article');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-article');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/article');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - aside
 */
Blockly.Blocks['aside'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+aside');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-aside');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/aside');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - audio
 */
Blockly.Blocks['audio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+audio');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-audio');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/audio');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - b
 */
Blockly.Blocks['b'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+b');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-b');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/b');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - base
 */
Blockly.Blocks['base'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+base');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-base');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/base');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - basefont
 */
Blockly.Blocks['basefont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+basefont');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-basefont');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/basefont');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - bdi
 */
Blockly.Blocks['bdi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+bdi');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-bdi');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/bdi');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - bdo
 */
Blockly.Blocks['bdo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+bdo');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-bdo');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/bdo');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - big
 */
Blockly.Blocks['big'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+big');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-big');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/big');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - blockquote
 */
Blockly.Blocks['blockquote'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+blockquote');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-blockquote');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/blockquote');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - body
 */
Blockly.Blocks['body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+body');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-body');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/body');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - br
 */
Blockly.Blocks['br'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+br');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-br');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/br');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - button
 */
Blockly.Blocks['button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+button');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-button');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/button');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - canvas
 */
Blockly.Blocks['canvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+canvas');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-canvas');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/canvas');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - caption
 */
Blockly.Blocks['caption'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+caption');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-caption');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/caption');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - center
 */
Blockly.Blocks['center'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+center');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-center');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/center');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - cite
 */
Blockly.Blocks['cite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+cite');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-cite');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/cite');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - code
 */
Blockly.Blocks['code'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+code');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-code');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/code');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - col
 */
Blockly.Blocks['col'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+col');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-col');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/col');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - colgroup
 */
Blockly.Blocks['colgroup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+colgroup');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-colgroup');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/colgroup');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - datalist
 */
Blockly.Blocks['datalist'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+datalist');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-datalist');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/datalist');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dd
 */
Blockly.Blocks['dd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dd');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dd');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dd');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - del
 */
Blockly.Blocks['del'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+del');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-del');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/del');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - details
 */
Blockly.Blocks['details'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+details');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-details');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/details');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dfn
 */
Blockly.Blocks['dfn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dfn');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dfn');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dfn');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dialog
 */
Blockly.Blocks['dialog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dialog');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dialog');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dialog');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dir
 */
Blockly.Blocks['dir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dir');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dir');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dir');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - div
 */
Blockly.Blocks['div'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+div');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-div');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/div');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dl
 */
Blockly.Blocks['dl'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dl');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dl');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dl');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dt
 */
Blockly.Blocks['dt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dt');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dt');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dt');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - em
 */
Blockly.Blocks['em'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+em');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-em');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/em');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - embed
 */
Blockly.Blocks['embed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+embed');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-embed');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/embed');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - fieldset
 */
Blockly.Blocks['fieldset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+fieldset');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-fieldset');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/fieldset');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - figcaption
 */
Blockly.Blocks['figcaption'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+figcaption');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-figcaption');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/figcaption');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - figure
 */
Blockly.Blocks['figure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+figure');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-figure');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/figure');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - font
 */
Blockly.Blocks['font'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+font');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-font');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/font');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - footer
 */
Blockly.Blocks['footer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+footer');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-footer');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/footer');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - form
 */
Blockly.Blocks['form'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+form');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-form');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/form');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - frame
 */
Blockly.Blocks['frame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+frame');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-frame');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/frame');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - frameset
 */
Blockly.Blocks['frameset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+frameset');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-frameset');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/frameset');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h1
 */
Blockly.Blocks['h1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h1');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h1');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h1');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h2
 */
Blockly.Blocks['h2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h2');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h2');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h2');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h3
 */
Blockly.Blocks['h3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h3');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h3');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h3');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h4
 */
Blockly.Blocks['h4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h4');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h4');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h4');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h5
 */
Blockly.Blocks['h5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h5');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h5');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h5');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h6
 */
Blockly.Blocks['h6'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h6');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h6');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h6');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - head
 */
Blockly.Blocks['head'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+head');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-head');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/head');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - header
 */
Blockly.Blocks['header'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+header');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-header');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/header');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - hr
 */
Blockly.Blocks['hr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+hr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-hr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/hr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - html
 */
Blockly.Blocks['html'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+html');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-html');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/html');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - i
 */
Blockly.Blocks['i'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+i');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-i');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/i');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - iframe
 */
Blockly.Blocks['iframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+iframe');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-iframe');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/iframe');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - img
 */
Blockly.Blocks['img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+img');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-img');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/img');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - input
 */
Blockly.Blocks['input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+input');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-input');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/input');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ins
 */
Blockly.Blocks['ins'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ins');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ins');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ins');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - kbd
 */
Blockly.Blocks['kbd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+kbd');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-kbd');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/kbd');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - keygen
 */
Blockly.Blocks['keygen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+keygen');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-keygen');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/keygen');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - label
 */
Blockly.Blocks['label'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+label');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-label');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/label');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - legend
 */
Blockly.Blocks['legend'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+legend');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-legend');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/legend');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - li
 */
Blockly.Blocks['li'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+li');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-li');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/li');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - link
 */
Blockly.Blocks['link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+link');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-link');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/link');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - main
 */
Blockly.Blocks['main'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+main');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-main');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/main');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - map
 */
Blockly.Blocks['map'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+map');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-map');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/map');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - mark
 */
Blockly.Blocks['mark'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+mark');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-mark');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/mark');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - menu
 */
Blockly.Blocks['menu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+menu');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-menu');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/menu');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - menuitem
 */
Blockly.Blocks['menuitem'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+menuitem');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-menuitem');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/menuitem');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - meta
 */
Blockly.Blocks['meta'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+meta');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-meta');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/meta');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - meter
 */
Blockly.Blocks['meter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+meter');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-meter');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/meter');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - nav
 */
Blockly.Blocks['nav'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+nav');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-nav');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/nav');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - noframes
 */
Blockly.Blocks['noframes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+noframes');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-noframes');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/noframes');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - noscript
 */
Blockly.Blocks['noscript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+noscript');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-noscript');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/noscript');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - object
 */
Blockly.Blocks['object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+object');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-object');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/object');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ol
 */
Blockly.Blocks['ol'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ol');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ol');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ol');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - optgroup
 */
Blockly.Blocks['optgroup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+optgroup');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-optgroup');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/optgroup');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - option
 */
Blockly.Blocks['option'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+option');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-option');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/option');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - output
 */
Blockly.Blocks['output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+output');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-output');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/output');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - p
 */
Blockly.Blocks['p'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+p');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-p');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/p');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - param
 */
Blockly.Blocks['param'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+param');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-param');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/param');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - picture
 */
Blockly.Blocks['picture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+picture');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-picture');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/picture');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - pre
 */
Blockly.Blocks['pre'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+pre');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-pre');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/pre');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - progress
 */
Blockly.Blocks['progress'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+progress');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-progress');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/progress');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - q
 */
Blockly.Blocks['q'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+q');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-q');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/q');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - rp
 */
Blockly.Blocks['rp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+rp');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-rp');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/rp');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - rt
 */
Blockly.Blocks['rt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+rt');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-rt');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/rt');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ruby
 */
Blockly.Blocks['ruby'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ruby');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ruby');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ruby');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - s
 */
Blockly.Blocks['s'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+s');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-s');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/s');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - samp
 */
Blockly.Blocks['samp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+samp');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-samp');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/samp');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - script
 */
Blockly.Blocks['script'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+script');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-script');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/script');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - section
 */
Blockly.Blocks['section'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+section');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-section');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/section');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - select
 */
Blockly.Blocks['select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+select');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-select');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/select');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - small
 */
Blockly.Blocks['small'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+small');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-small');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/small');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - source
 */
Blockly.Blocks['source'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+source');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-source');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/source');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - span
 */
Blockly.Blocks['span'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+span');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-span');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/span');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - strike
 */
Blockly.Blocks['strike'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+strike');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-strike');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/strike');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - strong
 */
Blockly.Blocks['strong'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+strong');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-strong');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/strong');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - style
 */
Blockly.Blocks['style'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+style');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-style');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/style');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - sub
 */
Blockly.Blocks['sub'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+sub');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-sub');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/sub');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - summary
 */
Blockly.Blocks['summary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+summary');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-summary');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/summary');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - sup
 */
Blockly.Blocks['sup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+sup');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-sup');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/sup');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - table
 */
Blockly.Blocks['table'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+table');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-table');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/table');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tbody
 */
Blockly.Blocks['tbody'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tbody');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tbody');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tbody');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - td
 */
Blockly.Blocks['td'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+td');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-td');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/td');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - textarea
 */
Blockly.Blocks['textarea'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+textarea');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-textarea');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/textarea');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tfoot
 */
Blockly.Blocks['tfoot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tfoot');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tfoot');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tfoot');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - th
 */
Blockly.Blocks['th'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+th');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-th');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/th');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - thead
 */
Blockly.Blocks['thead'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+thead');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-thead');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/thead');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - time
 */
Blockly.Blocks['time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+time');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-time');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/time');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - title
 */
Blockly.Blocks['title'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+title');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-title');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/title');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tr
 */
Blockly.Blocks['tr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - track
 */
Blockly.Blocks['track'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+track');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-track');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/track');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tt
 */
Blockly.Blocks['tt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tt');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tt');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tt');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - u
 */
Blockly.Blocks['u'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+u');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-u');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/u');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ul
 */
Blockly.Blocks['ul'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ul');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ul');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ul');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - var
 */
Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+var');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-var');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/var');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - video
 */
Blockly.Blocks['video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+video');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-video');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/video');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - wbr
 */
Blockly.Blocks['wbr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+wbr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-wbr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/wbr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - !DOCTYPE
 */
Blockly.Blocks['!DOCTYPE'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+!DOCTYPE');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-!DOCTYPE');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/!DOCTYPE');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - a
 */
Blockly.Blocks['a'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+a');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-a');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/a');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - abbr
 */
Blockly.Blocks['abbr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+abbr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-abbr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/abbr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - acronym
 */
Blockly.Blocks['acronym'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+acronym');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-acronym');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/acronym');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - address
 */
Blockly.Blocks['address'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+address');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-address');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/address');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - applet
 */
Blockly.Blocks['applet'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+applet');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-applet');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/applet');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - area
 */
Blockly.Blocks['area'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+area');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-area');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/area');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - article
 */
Blockly.Blocks['article'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+article');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-article');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/article');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - aside
 */
Blockly.Blocks['aside'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+aside');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-aside');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/aside');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - audio
 */
Blockly.Blocks['audio'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+audio');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-audio');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/audio');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - b
 */
Blockly.Blocks['b'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+b');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-b');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/b');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - base
 */
Blockly.Blocks['base'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+base');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-base');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/base');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - basefont
 */
Blockly.Blocks['basefont'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+basefont');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-basefont');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/basefont');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - bdi
 */
Blockly.Blocks['bdi'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+bdi');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-bdi');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/bdi');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - bdo
 */
Blockly.Blocks['bdo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+bdo');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-bdo');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/bdo');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - big
 */
Blockly.Blocks['big'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+big');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-big');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/big');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - blockquote
 */
Blockly.Blocks['blockquote'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+blockquote');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-blockquote');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/blockquote');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - body
 */
Blockly.Blocks['body'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+body');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-body');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/body');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - br
 */
Blockly.Blocks['br'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+br');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-br');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/br');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - button
 */
Blockly.Blocks['button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+button');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-button');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/button');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - canvas
 */
Blockly.Blocks['canvas'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+canvas');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-canvas');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/canvas');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - caption
 */
Blockly.Blocks['caption'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+caption');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-caption');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/caption');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - center
 */
Blockly.Blocks['center'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+center');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-center');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/center');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - cite
 */
Blockly.Blocks['cite'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+cite');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-cite');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/cite');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - code
 */
Blockly.Blocks['code'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+code');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-code');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/code');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - col
 */
Blockly.Blocks['col'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+col');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-col');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/col');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - colgroup
 */
Blockly.Blocks['colgroup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+colgroup');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-colgroup');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/colgroup');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - datalist
 */
Blockly.Blocks['datalist'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+datalist');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-datalist');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/datalist');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dd
 */
Blockly.Blocks['dd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dd');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dd');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dd');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - del
 */
Blockly.Blocks['del'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+del');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-del');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/del');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - details
 */
Blockly.Blocks['details'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+details');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-details');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/details');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dfn
 */
Blockly.Blocks['dfn'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dfn');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dfn');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dfn');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dialog
 */
Blockly.Blocks['dialog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dialog');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dialog');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dialog');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dir
 */
Blockly.Blocks['dir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dir');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dir');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dir');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - div
 */
Blockly.Blocks['div'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+div');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-div');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/div');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dl
 */
Blockly.Blocks['dl'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dl');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dl');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dl');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - dt
 */
Blockly.Blocks['dt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+dt');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-dt');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/dt');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - em
 */
Blockly.Blocks['em'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+em');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-em');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/em');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - embed
 */
Blockly.Blocks['embed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+embed');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-embed');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/embed');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - fieldset
 */
Blockly.Blocks['fieldset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+fieldset');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-fieldset');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/fieldset');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - figcaption
 */
Blockly.Blocks['figcaption'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+figcaption');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-figcaption');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/figcaption');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - figure
 */
Blockly.Blocks['figure'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+figure');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-figure');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/figure');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - font
 */
Blockly.Blocks['font'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+font');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-font');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/font');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - footer
 */
Blockly.Blocks['footer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+footer');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-footer');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/footer');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - form
 */
Blockly.Blocks['form'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+form');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-form');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/form');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - frame
 */
Blockly.Blocks['frame'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+frame');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-frame');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/frame');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - frameset
 */
Blockly.Blocks['frameset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+frameset');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-frameset');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/frameset');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h1
 */
Blockly.Blocks['h1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h1');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h1');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h1');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h2
 */
Blockly.Blocks['h2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h2');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h2');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h2');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h3
 */
Blockly.Blocks['h3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h3');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h3');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h3');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h4
 */
Blockly.Blocks['h4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h4');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h4');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h4');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h5
 */
Blockly.Blocks['h5'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h5');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h5');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h5');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - h6
 */
Blockly.Blocks['h6'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+h6');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-h6');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/h6');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - head
 */
Blockly.Blocks['head'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+head');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-head');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/head');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - header
 */
Blockly.Blocks['header'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+header');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-header');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/header');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - hr
 */
Blockly.Blocks['hr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+hr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-hr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/hr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - html
 */
Blockly.Blocks['html'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+html');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-html');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/html');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - i
 */
Blockly.Blocks['i'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+i');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-i');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/i');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - iframe
 */
Blockly.Blocks['iframe'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+iframe');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-iframe');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/iframe');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - img
 */
Blockly.Blocks['img'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+img');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-img');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/img');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - input
 */
Blockly.Blocks['input'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+input');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-input');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/input');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ins
 */
Blockly.Blocks['ins'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ins');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ins');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ins');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - kbd
 */
Blockly.Blocks['kbd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+kbd');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-kbd');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/kbd');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - keygen
 */
Blockly.Blocks['keygen'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+keygen');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-keygen');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/keygen');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - label
 */
Blockly.Blocks['label'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+label');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-label');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/label');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - legend
 */
Blockly.Blocks['legend'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+legend');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-legend');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/legend');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - li
 */
Blockly.Blocks['li'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+li');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-li');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/li');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - link
 */
Blockly.Blocks['link'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+link');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-link');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/link');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - main
 */
Blockly.Blocks['main'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+main');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-main');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/main');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - map
 */
Blockly.Blocks['map'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+map');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-map');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/map');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - mark
 */
Blockly.Blocks['mark'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+mark');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-mark');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/mark');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - menu
 */
Blockly.Blocks['menu'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+menu');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-menu');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/menu');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - menuitem
 */
Blockly.Blocks['menuitem'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+menuitem');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-menuitem');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/menuitem');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - meta
 */
Blockly.Blocks['meta'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+meta');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-meta');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/meta');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - meter
 */
Blockly.Blocks['meter'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+meter');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-meter');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/meter');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - nav
 */
Blockly.Blocks['nav'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+nav');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-nav');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/nav');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - noframes
 */
Blockly.Blocks['noframes'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+noframes');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-noframes');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/noframes');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - noscript
 */
Blockly.Blocks['noscript'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+noscript');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-noscript');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/noscript');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - object
 */
Blockly.Blocks['object'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+object');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-object');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/object');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ol
 */
Blockly.Blocks['ol'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ol');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ol');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ol');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - optgroup
 */
Blockly.Blocks['optgroup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+optgroup');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-optgroup');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/optgroup');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - option
 */
Blockly.Blocks['option'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+option');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-option');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/option');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - output
 */
Blockly.Blocks['output'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+output');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-output');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/output');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - p
 */
Blockly.Blocks['p'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+p');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-p');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/p');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - param
 */
Blockly.Blocks['param'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+param');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-param');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/param');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - picture
 */
Blockly.Blocks['picture'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+picture');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-picture');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/picture');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - pre
 */
Blockly.Blocks['pre'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+pre');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-pre');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/pre');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - progress
 */
Blockly.Blocks['progress'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+progress');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-progress');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/progress');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - q
 */
Blockly.Blocks['q'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+q');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-q');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/q');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - rp
 */
Blockly.Blocks['rp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+rp');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-rp');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/rp');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - rt
 */
Blockly.Blocks['rt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+rt');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-rt');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/rt');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ruby
 */
Blockly.Blocks['ruby'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ruby');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ruby');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ruby');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - s
 */
Blockly.Blocks['s'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+s');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-s');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/s');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - samp
 */
Blockly.Blocks['samp'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+samp');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-samp');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/samp');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - script
 */
Blockly.Blocks['script'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+script');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-script');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/script');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - section
 */
Blockly.Blocks['section'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+section');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-section');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/section');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - select
 */
Blockly.Blocks['select'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+select');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-select');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/select');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - small
 */
Blockly.Blocks['small'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+small');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-small');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/small');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - source
 */
Blockly.Blocks['source'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+source');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-source');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/source');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - span
 */
Blockly.Blocks['span'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+span');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-span');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/span');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - strike
 */
Blockly.Blocks['strike'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+strike');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-strike');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/strike');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - strong
 */
Blockly.Blocks['strong'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+strong');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-strong');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/strong');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - style
 */
Blockly.Blocks['style'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+style');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-style');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/style');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - sub
 */
Blockly.Blocks['sub'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+sub');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-sub');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/sub');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - summary
 */
Blockly.Blocks['summary'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+summary');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-summary');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/summary');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - sup
 */
Blockly.Blocks['sup'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+sup');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-sup');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/sup');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - table
 */
Blockly.Blocks['table'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+table');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-table');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/table');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tbody
 */
Blockly.Blocks['tbody'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tbody');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tbody');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tbody');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - td
 */
Blockly.Blocks['td'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+td');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-td');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/td');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - textarea
 */
Blockly.Blocks['textarea'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+textarea');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-textarea');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/textarea');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tfoot
 */
Blockly.Blocks['tfoot'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tfoot');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tfoot');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tfoot');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - th
 */
Blockly.Blocks['th'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+th');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-th');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/th');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - thead
 */
Blockly.Blocks['thead'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+thead');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-thead');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/thead');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - time
 */
Blockly.Blocks['time'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+time');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-time');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/time');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - title
 */
Blockly.Blocks['title'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+title');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-title');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/title');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tr
 */
Blockly.Blocks['tr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tr');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - track
 */
Blockly.Blocks['track'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+track');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-track');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/track');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - tt
 */
Blockly.Blocks['tt'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+tt');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-tt');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/tt');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - u
 */
Blockly.Blocks['u'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+u');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-u');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/u');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - ul
 */
Blockly.Blocks['ul'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+ul');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-ul');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/ul');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - var
 */
Blockly.Blocks['var'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+var');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-var');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/var');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - video
 */
Blockly.Blocks['video'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+video');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-video');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/video');
  }
};


/**
 * BLOCKLY LANGUAGE CODE: HTML TAG - wbr
 */
Blockly.Blocks['wbr'] = {
  init: function() {
    this.appendDummyInput()
        .appendField('+wbr');
    this.appendStatementInput("innerHtml")
        .setCheck(null);
    this.appendDummyInput()
        .appendField('-wbr');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('/ref/wbr');
  }
};