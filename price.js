// Simple pricing table solution for clients to easily update in TinyMCE and WYSIWIG editors.

$(document).ready(function(){
    $('#prices td').wrapInner('<div class="pricing-table" />');
});