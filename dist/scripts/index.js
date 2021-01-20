"use strict";

var _copyToClipboard = require("./copy-to-clipboard.js");

var ipField = $('#mc-ip');
var ipText = $('#mc-ip-text');
var ipCopyText = $('#mc-ip-copy-text');
var oldText = ipCopyText.html();
$(function () {
  ipCopyText.hide();
  ipField.hover(function () {
    ipCopyText.show();
  }, function () {
    ipCopyText.hide();
  });
  ipField.click(function () {
    clipboard();
  });
});

function clipboard() {
  (0, _copyToClipboard.copyToClipboard)(document.getElementById('mc-ip-text'));
  ipCopyText.text('IP copied to clipboard!').addClass('accent-text');
  setTimeout(function () {
    ipCopyText.text(oldText).removeClass('accent-text');
  }, 3000);
}