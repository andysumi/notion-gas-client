function testRunner() { // eslint-disable-line no-unused-vars
  if ((typeof GasTap) === 'undefined') { // GasT Initialization. (only if not initialized yet.)
    eval(UrlFetchApp.fetch('https://raw.githubusercontent.com/zixia/gast/master/src/gas-tap-lib.js').getContentText());
  } // Class GasTap is ready for use now!

  const test = new GasTap();
  const common = new TestCommon();

  try {
    /***** Test cases ******************************/
    testDatabaseMethod_(test, common);
    /***********************************************/
  } catch (error) {
    test('Exception occurred', function f(assert) {
      Logger.log(error);
      assert.fail(error);
    });
  }

  test.finish();
}

function testDatabaseMethod_(test, common) {
  test('getDatabases() - paramなし', function (t) {
    const result = common.notion.getDatabases();
    t.ok(result instanceof Object, 'Objectで取得できること');
    t.equal(result.object, 'list', 'objectが"list"であること');
    t.ok(result.results.length > 0, 'resultsが"1件以上"であること');
    t.notOk(result.next_cursor, 'next_cursorが"null"であること');
    t.notOk(result.has_more, 'has_moreが"false"であること');
  });

  test('getDatabases() - paramあり', function (t) {
    const result = common.notion.getDatabases(1);
    t.ok(result instanceof Object, 'Objectで取得できること');
    t.equal(result.object, 'list', 'objectが"list"であること');
    t.equal(result.results.length , 1, 'resultsが"1件"であること');
    t.ok(result.next_cursor, 'next_cursorが設定されること');
    t.ok(result.has_more, 'has_moreが"false"であること');
  });

  test('getSpecificDatabase()', function (t) {
    const result = common.notion.getSpecificDatabase(common.database.id);
    t.ok(result instanceof Object, 'Objectで取得できること');
    t.equal(result.object, 'database', 'objectが"database"であること');
    t.equal(result.id, common.database.id, 'idが正しいこと');
    t.equal(result.title[0].text.content, common.database.title, 'titleが正しいこと');
    t.equal(result.title[0].plain_text, common.database.title, 'titleが正しいこと');
  });
}
