// cpreview Templates
let cScrollspyCallbacks = {
    /**
     * CUSTOM TEMPLATE FOR "REMOVE ALL" FILES BUTTON
     * @param {Object} data 
     * @param {Object} data.el_target_container DOM element if the file item
     * @param {String} data.id input type file id to reset
     */
    myCallback: {
        options: {
            threshold: [0, 0.2, 0.8, 1]
        },
        /**
        * CALLBACK
        * CALLBACK METHOD
        * @arg {(object)} data event data returned by intersectonObserver
        */
        callback: function(data) {
        }

    }
}