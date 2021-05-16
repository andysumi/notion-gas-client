class Client {  // eslint-disable-line
  constructor(token, version) {
    if (!token) throw new Error('"token" must be specified');
    if (!version) throw new Error('"version" must be specified');

    this.baseUrl_ = 'https://api.notion.com/v1';
    this.headers_ = {
      'Authorization': 'Bearer ' + token,
      'Notion-Version': version,
    };
  }

  /**
   * Getリクエストを送信する
   * @param {string} path
   * @param {Object} params
   * @returns {Object} リクエスト結果
   */
  fetchGet(path, params) {
    params = params ? params : {};
    return this.fetch_('get', path, params);
  }

  fetch_(method, path, params) {
    const url = this.getApiUrl_(path, params);
    const option = {
      method: method,
      contentType: 'application/json',
      headers: this.headers_,
      muteHttpExceptions: true
    };
    const response = UrlFetchApp.fetch(url, option);
    const statusCode = response.getResponseCode();
    const content = response.getContentText('utf-8');

    if (statusCode !== 200) {
      console.log(`${statusCode}: ${content}`);
      return false;
    }

    return JSON.parse(response.getContentText('utf-8'));
  }

  getApiUrl_(path, params) {
    let url = this.baseUrl_ + path;

    if (params) {
      const temp = [];
      for (var key in params) {
        temp.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
      }
      url += '?' + temp.join('&');
    }
    return url;
  }
}
