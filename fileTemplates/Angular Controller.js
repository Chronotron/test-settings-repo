goog.provide('tcpwe.${app}.controller${namespace}.${name}Controller');

tcpwe.${app}.controller${namespace}.${name}Controller = function (${DS}scope, ${service}) {
    
    //region Properties

    ${DS}scope.config = null;
    ${DS}scope.data = null;
    
    //endregion

    //region Public Methods

    ${DS}scope.initialize = function () {
        var objServiceHandler = ${DS}scope.createServiceHandler(${DS}scope._handleGet${name}InformationReply, ${DS}scope.navigateToDashboard);
        ${service}.get${name}Information(objServiceHandler);
    };

    //endregion

    //region Helper Methods

    ${DS}scope._handleGet${name}InformationReply = function (obj${name}Config, obj${name}Data) {
        ${DS}scope.config = obj${name}Config;
        ${DS}scope.data = obj${name}Data;

        ${DS}scope.applyIfAsynchronous();
    };

    //endregion
};

tcpwe.${app}.controller${namespace}.${name}Controller.${DS}inject = ['${DS}scope', '${service}'];