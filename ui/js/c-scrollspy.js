/**
* C-SCROLLSPY
* v0.1.0
* JS library dedicated to DOM element position in relation with the viewport
* https://github.com/ita-design-system/c-scrollspy.js
*/
const cScrollspy = {
    callbacks: {
        /**
        * ANCHORS
        * Options for anchors links -> HTML ids
        */
        anchors: {
            options: {
                threshold: [0, 0.2, 0.8, 1]
            },
            /**
            * CALLBACK
            * CALLBACK METHOD
            * @arg {(object)} data event data returned by intersectonObserver
            */
            callback: function(data) {
                // Id of the tracked tracked element
                const id = data[0].target.id;
                // Optional active classes
                let active_class_attribute = data[0].target.dataset.activeClass;
                let origin_class_attribute = data[0].target.getAttribute('class') || '';
                if (active_class_attribute === undefined) {
                    active_class_attribute = 'active';
                } else {
                    // Custom class detected, save once origin class attribute
                    if (data[0].target.dataset.classOrigin === undefined) {
                        data[0].target.dataset.classOrigin = origin_class_attribute;
                    }
                }
                // Write intersection ratio into an custom object
                cScrollspy.callbacks.anchors.intersections[id] = data[0].intersectionRatio;
                // Get current id => intersection values
                const current_intersections = cScrollspy.callbacks.anchors.intersections;
                // Sort intersection values
                const intersections_sorted = Object.keys(current_intersections).sort(function(a,b){return current_intersections[b]-current_intersections[a]});
                // Get the id of the first/highest intersection value
                const first_intersection_id = intersections_sorted[0];
                // Get the id of the second/highest intersection value
                const second_intersection_id = intersections_sorted[1];
                // Iterate all specified tracked ids/elements
                intersections_sorted.forEach(function(id, index) {
                    // Search for all anchors links pointing to this id
                    document.querySelectorAll('[href="#'+id+'"]').forEach(function(el_anchor) {
                        // The value of the first/highest intersection
                        const first_intersection_id_value = cScrollspy.callbacks.anchors.intersections[first_intersection_id];
                        // The value of the second/highest intersection
                        const second_intersection_id_value = cScrollspy.callbacks.anchors.intersections[second_intersection_id];
                        if (Object.keys(intersections_sorted).length > 1) {
                            // If it is the highest intersection, apply active class
                            // Second intersection must be inferior to first intersection value to avoid "active" class mismatch
                            if (first_intersection_id == id && second_intersection_id_value < first_intersection_id_value) {
                                el_anchor.setAttribute('class', origin_class_attribute);
                            } else {
                                el_anchor.setAttribute('class', active_class_attribute);
                            }
                        } else {
                            if (first_intersection_id_value > 0) {
                                el_anchor.setAttribute('class', active_class_attribute);
                            } else {
                                el_anchor.setAttribute('class', origin_class_attribute);
                            }
                        }
                    });
                });
            },
            // To be populated by keys: ids of tracked elements associated to their intersections ratio values
            intersections: {},
            // tracked_elements_y: {}
        }
    },
    // All instances of intersections
    instances: {},
    // Method to invoke at start and each time DOM has changed
    update: function() {
        // Iterate all the scrollspy attributes
        document.querySelectorAll('[c-scrollspy]').forEach(function(el, index) {
            // Value = custom option name for the current tracked element
            const callback_name = el.getAttribute('c-scrollspy');
            let callback_object = cScrollspy.callbacks.anchors;
            if (typeof cScrollspyCallbacks == 'object') {
                if (typeof cScrollspyCallbacks[callback_name] == 'object') {
                    callback_object = cScrollspyCallbacks[callback_name];
                }
            }
            // Set default instance id
            let instance_id = 'cspy_'+index;
            // If tracked element has an id, use it
            if (el.id != '') {
                instance_id = el.id;
            }
            // Create intersection observer as an object into myScrollspy
            cScrollspy.instances[instance_id] = new IntersectionObserver(callback_object.callback, callback_object.options);
            // Track element
            cScrollspy.instances[instance_id].observe(el);
        });
    }
}
cScrollspy.update();