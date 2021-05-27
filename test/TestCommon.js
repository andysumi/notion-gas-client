class TestCommon { // eslint-disable-line
  constructor() {
    const properties = PropertiesService.getScriptProperties();
    this.token_ = properties.getProperty('TOKEN');
    this.notion_ = new Notion(this.token_);
    this.database_ = JSON.parse(properties.getProperty('DATABASE'));
  }

  get notion() {
    return this.notion_;
  }

  get database() {
    return this.database_;
  }
}
