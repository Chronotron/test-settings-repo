goog.provide('tcpwe.manager.controller.${entityLower}s.${entity}Controller');

tcpwe.manager.controller.${entityLower}s.${entity}Controller = function (${DS}scope, obj${entity}Service) {

    //region Properties

    ${DS}scope.config = null;
    ${DS}scope.data = null;

    ${DS}scope.objGridHelper = null;

    //endregion

    //region Public Methods

    ${DS}scope.add${entity} = function () {
        ${DS}scope.showModal(tcpwe.common.uiDomain.urlConstants.modalUrls.ADD_${entityUpper}, ${DS}scope.select${entity});
    };

    ${DS}scope.cancelUpdate${entity} = function () {
        var objServiceHandler = ${DS}scope.createServiceHandler(${DS}scope._handleUpdate${entity}Reply);
        obj${entity}sService.cancelUpdate${entity}(objServiceHandler);
    };

    ${DS}scope.delete${entity} = function () {
        var objServiceHandler = ${DS}scope.createServiceHandler(${DS}scope._handleUpdate${entity}Reply);
        obj${entity}Service.delete${entity}(objServiceHandler);
    };

    ${DS}scope.filter${entity}s = function () {
        var objServiceHandler = ${DS}scope.createServiceHandler(${DS}scope._handleFilter${entity}sReply);
        obj${entity}Service.filter${entity}s(${DS}scope.data.objFilterData, objServiceHandler);
    };

    ${DS}scope.initialize = function () {
        ${DS}scope.objGridHelper = new tcpwe.common.helper.GridHelper(${DS}scope.filter${entity}s);
        var objServiceHandler = ${DS}scope.createServiceHandler(${DS}scope._handleGet${entity}sInformationReply, ${DS}scope.navigateToDashboard);
        obj${entity}Service.get${entity}sInformation(objServiceHandler);
    };

    ${DS}scope.select${entity} = function (intRecordId) {
        var fncNavigate = function () {
            var objServiceHandler = ${DS}scope.createServiceHandler(${DS}scope._handleUpdate${entity}Reply);
            obj${entity}Service.select${entity}(intRecordId, objServiceHandler);
        };

        ${DS}scope.attemptNavigate(fncNavigate, ${DS}scope.isFeatureFormDirty());
    };

    ${DS}scope.update${entity} = function () {
        var objServiceHandler = ${DS}scope.createServiceHandler(${DS}scope._handleUpdate${entity}Reply);
        obj${entity}Service.update${entity}(${DS}scope.data.obj${entity}, objServiceHandler);
    };

    //endregion

    //region Helper Methods

    ${DS}scope._handleFilter${entity}sReply = function (obj${entity}sData) {
        ${DS}scope.data.objFilterData = obj${entity}sData.objFilterData;
        ${DS}scope.data.arr${entity}s = obj${entity}sData.arr${entity}s;
        ${DS}scope.applyIfAsynchronous();
    };

    ${DS}scope._handleGet${entity}sInformationReply = function (obj${entity}sConfig, obj${entity}sData) {
        ${DS}scope.config = obj${entity}sConfig;
        ${DS}scope.data = obj${entity}sData;

        ${DS}scope.initializeFeature(${DS}scope.config.strTitle, ${DS}scope.update${entity});
        ${DS}scope.setFeatureContent("featureData");
        ${DS}scope.setFeatureToolbar("featureToolBar");
        ${DS}scope.setFeatureOption("featureOption");
        ${DS}scope.setNavigationListSort("navigationListSort");
        ${DS}scope.setNavigationListSearch("navigationListSearch");
        ${DS}scope.setNavigationList("navigationList");
        ${DS}scope.setFeatureContentButtons("featureContentButtons");

        ${DS}scope.applyIfAsynchronous();
    };

    ${DS}scope._handleUpdate${entity}Reply = function (obj${entity}sData) {
        ${DS}scope.data = obj${entity}sData;
        ${DS}scope.setFeatureFormPristine();
        ${DS}scope.applyIfAsynchronous();
    };

    //endregion
};

tcpwe.manager.controller.${entityLower}s.${entity}Controller.${DS}inject = ['${DS}scope', 'obj${entity}sService'];