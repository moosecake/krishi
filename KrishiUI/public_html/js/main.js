requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: 'jquery',
        bootstrap: 'bootstrap/js/bootstrap.min',
        ko: 'knockout',
        ReservationVM: '../../viewmodel/ReservationVM',
        searchVM: '../../viewmodel/searchVM'
    },
    shim: {
        'bootstrap': {deps: ['jquery']}
    }
});
require(['bootstrap','jquery', 'ko', 'ReservationVM', 'searchVM'], function (bs,$, ko, ReservationVM, svm) {
    console.log('Piya Inc.');
   
    ko.applyBindings(new svm());
    
});

