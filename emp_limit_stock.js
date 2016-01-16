/**
 * 在庫が残り 0 のレコードを強調する
 *
 */

(function() {
    "use strict";
    
    kintone.events.on('app.record.index.show', function(event){
        // event zero
        if (!event.size) {
            return;
        }

        var calcParts = kintone.app.getFieldElements('計算');

        for (var i = 0; i< event.records.length; i++) {
            var record = event.records[i];
            if (record['計算']['value'] == 0) {
                calcParts[i].style.backgroundColor = 'pink';
            }
        }
    });
})();
