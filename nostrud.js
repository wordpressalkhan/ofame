function create_module() {
    let module = {}; // Create an empty object to serve as our module
    
    // Private variables or functions can be declared inside create_module()
    let privateVariable = 'This is private';

    function privateFunction() {
        console.log('This is a private function');
    }

    // Public interface of the module (methods accessible from outside)
    module.publicMethod = function() {
        console.log('Public method called');
        console.log(privateVariable); // Accessing private variables
        privateFunction(); // Calling private functions
    };

    return module; // Return the module object
}

// Usage:
let myModule = create_module();
myModule.publicMethod(); // Output: Public method called
                         //         This is private
                         //         This is a private function
