module.exports = RouteConfig

RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider']
    
function RouteConfig($stateProvider, $urlRouterProvider) {       
    //Rota padrão
    $urlRouterProvider.otherwise("/");
    
    $stateProvider
        .state('lista', {
            url:'/',
            templateUrl: 'app/lista/view-lista.html',
            controller: require('./lista/lista.controller'),
            controllerAs: 'vm'
        })
        .state('entradas', {
            url:'/entradas',
            templateUrl: 'app/entradas/view-entradas.html',
            controller: require('./entradas/entradas.controller'),
            controllerAs: 'vm'
        })    
        .state('saidas', {
            url:'/saidas',
            templateUrl: 'app/saidas/view-saidas.html',
            controller: require('./saidas/saidas.controller'),
            controllerAs: 'vm'
        })         
        .state('itens', {
            url:'/itens',
            templateUrl: 'app/itens/view-itens.html',
            controller: require('./itens/itens.controller'),
            controllerAs: 'vm'
        })                                        
}