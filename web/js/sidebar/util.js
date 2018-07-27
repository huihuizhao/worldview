export function getDefaultProps() {
  var compareModel;
  activeTab = models.naturalEvents.active
    ? 'events'
    : models.data.active
      ? 'download'
      : 'layers';
  if (config.features.compare) {
    compareModel = models.compare;
    if (models.compare.active) {
      compareObj = getCompareObjects(models);
      compareModeType = compareModel.mode;
    }
  }
  return {
    activeTab: activeTab,
    isCompareMode:
      compareModel && compareModel.active ? compareModel.active : false,
    isCollapsed: isCollapsed,
    layers: model.get({ group: 'all' }),
    onTabClick: self.selectTab,
    toggleSidebar: toggleSidebar,
    toggleLayerVisibility: toggleLayerVisibility,
    tabTypes: getActiveTabs(),
    getNames: model.getTitles,
    firstDateObject: compareObj.a,
    secondDateObject: compareObj.b,
    getAvailability: getAvailability,
    toggleComparisonObject: toggleComparisonObject,
    toggleMode: toggleComparisonMode,
    isCompareA:
      compareModel && compareModel.isCompareA ? compareModel.isCompareA : true,
    updateLayer: updateLayer,
    addLayers: onAddLayerCLick,
    comparisonType: compareModeType,
    changeCompareMode: compareModel.setMode,
    checkerBoardPattern: getCheckerboard(),
    palettePromise: palettePromise,
    getLegend: models.palettes.getLegends,
    replaceSubGroup: model.replaceSubGroup,
    runningLayers: null,
    selectedDataProduct: models.data.selectedProduct,
    isMobile: util.browser.small,
    localStorage: util.browser.localStorage,
    zotsObject: getZotsForActiveLayers(config, models, ui),
    eventsData: { sources: [], events: [] },
    visibleEvents: { all: true },
    filterEventList: null,
    selectEvent: null,
    deselectEvent: null,
    selectedEvent: models.naturalEvents.selected || {},
    getDataSelectionCounts: models.data.getSelectionCounts,
    selectDataProduct: models.data.selectProduct,
    showListAllButton: true,
    getDataSelectionSize: models.data.getSelectionSize,
    onGetData: null,
    showDataUnavailableReason: null
  };
}
