/**
 * インスタンスを作成する
 * @param {string} token
 * @param {string} version
 * @return {NotionClient}
 */
function create(token, version) { // eslint-disable-line no-unused-vars
  return new Notion(token, version);
}

/**
 * データベースを取得する
 * @param {number} pageSize リストの項目数、最大:100
 * @param {string} startCursor 指定されたカーソルの後に始まる結果のページを返す
 * @return {Object} データベースのリスト
 */
function getDatabases(pageSize, startCursor) { // eslint-disable-line no-unused-vars
  throw new Error('このメソッドは直接呼び出せません。createメソッドで取得したインスタンスより呼び出してください。');
}
