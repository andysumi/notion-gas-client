class Notion { // eslint-disable-line
  constructor(token) {
    this.client_ = new Client(token);
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

  /**
   * 指定したデータベースを取得する
   * https://developers.notion.com/reference/get-database
   * @param {string} databaseId データベースのID
   * @return {Object} 処理結果
   */
  getSpecificDatabase(databaseId) {
    if (!databaseId) throw new Error('"databaseId" must be specified');
    return this.client_.fetchGet(`/databases/${databaseId}`);
  }
}
