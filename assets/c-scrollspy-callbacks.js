/**
* Custom callbacks for c-scrollspy
* Demo purpose only
*/

// Most simple callback (blank)
cScrollspyCallbacks.mostSimple = {
    // options: {
    //     threshold: [0, 0.2, 0.8, 1]
    // },
    /**
    * CALLBACK
    * CALLBACK METHOD
    * @arg {(object)} data event data returned by intersectonObserver
    */
    callback: function(data) {
        console.log('mostSimple', data[0].intersectionRatio, data)
    }
}

// Simple callback avec thresholds personnalisés
// Arrière-plan variable
cScrollspyCallbacks.multipleThesholds = {
    options: {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1]
    },
    /**
    * CALLBACK
    * CALLBACK METHOD
    * @arg {(object)} data event data returned by intersectonObserver
    */
    callback: function(data) {
        data.forEach(function(obj) {
            // console.log('multipleThesholds', obj.intersectionRatio);
            obj.target.style.transition = 'background-color 200ms';
            obj.target.style.backgroundColor = 'rgba(180, 200, 220, '+obj.intersectionRatio+')';
        })
    }
}