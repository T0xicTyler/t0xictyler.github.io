import { copyToClipboard } from './copy-to-clipboard.js'

const ipField = $('#mc-ip')
const ipText = $('#mc-ip-text')
const ipCopyText = $('#mc-ip-copy-text')
const oldText = ipCopyText.html()

$(function() {
  ipCopyText.hide()

  ipField.hover(function() {
    ipCopyText.show()
  }, function() {
    ipCopyText.hide()
  })

  ipField.click(function() {
    clipboard()
  })
})

function clipboard() {
  copyToClipboard(document.getElementById('mc-ip-text'))

  ipCopyText.text('IP copied to clipboard!').addClass('accent-text')

  setTimeout(function() {
    ipCopyText.text(oldText).removeClass('accent-text')
  }, 3000)
}
