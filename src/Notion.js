class Notion { // eslint-disable-line
  constructor(token, version) {
    this.client_ = new Client(token, version);
  }

  /**
   * データベースを取得する
   * @param {number} pageSize リストの項目数、最大:100
   * @param {string} startCursor 指定されたカーソルの後に始まる結果のページを返す
   * @return {Object} データベースのリスト
   */
  getDatabases(pageSize, startCursor) {
    let param = {};
    if (pageSize) param['page_size'] = pageSize;
    if (startCursor) param['start_cursor'] = startCursor;
    return this.client_.fetchGet('/databases', param);
  }
}
