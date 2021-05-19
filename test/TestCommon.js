class TestCommon { // eslint-disable-line
  constructor() {
    const properties = PropertiesService.getScriptProperties();
    this.token_ = properties.getProperty('TOKEN');
    this.version_ = '2021-05-13';
    this.notion_ = new Notion(this.token_, this.version_);
    this.database_ = JSON.parse(properties.getProperty('DATABASE'));
  }

  get notion() {
    return this.notion_;
  }

  get database() {
    return this.database_;
  }
}
