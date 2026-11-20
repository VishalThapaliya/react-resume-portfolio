// Generated from: tests/features/navigation.feature
import { test } from "playwright-bdd";

test.describe('Website navigation', () => {

  test.beforeEach('Background', async ({ Given, page }, testInfo) => { if (testInfo.error) return;
    await Given('the visitor opens the portfolio website', null, { page }); 
  });
  
  test.describe('Navigate to a page using the main navigation', () => {

    test('Example #1', { tag: ['@navigation', '@smoke'] }, async ({ When, Then, And, page }) => { 
      await When('the visitor selects "About" from the main navigation', null, { page }); 
      await Then('the browser URL should end with "/about"', null, { page }); 
      await And('the "About" navigation link should be active', null, { page }); 
    });

    test('Example #2', { tag: ['@navigation', '@smoke'] }, async ({ When, Then, And, page }) => { 
      await When('the visitor selects "Resume" from the main navigation', null, { page }); 
      await Then('the browser URL should end with "/resume"', null, { page }); 
      await And('the "Resume" navigation link should be active', null, { page }); 
    });

    test('Example #3', { tag: ['@navigation', '@smoke'] }, async ({ When, Then, And, page }) => { 
      await When('the visitor selects "Portfolio" from the main navigation', null, { page }); 
      await Then('the browser URL should end with "/portfolio"', null, { page }); 
      await And('the "Portfolio" navigation link should be active', null, { page }); 
    });

    test('Example #4', { tag: ['@navigation', '@smoke'] }, async ({ When, Then, And, page }) => { 
      await When('the visitor selects "Blog" from the main navigation', null, { page }); 
      await Then('the browser URL should end with "/blog"', null, { page }); 
      await And('the "Blog" navigation link should be active', null, { page }); 
    });

    test('Example #5', { tag: ['@navigation', '@smoke'] }, async ({ When, Then, And, page }) => { 
      await When('the visitor selects "Contact" from the main navigation', null, { page }); 
      await Then('the browser URL should end with "/contact"', null, { page }); 
      await And('the "Contact" navigation link should be active', null, { page }); 
    });

  });

  test('Redirect the root URL to the About page', { tag: ['@navigation', '@smoke'] }, async ({ Then, And, page }) => { 
    await Then('the browser URL should end with "/about"', null, { page }); 
    await And('the "About" navigation link should be active', null, { page }); 
  });

  test('Redirect an unknown route to the About page', { tag: ['@navigation', '@smoke'] }, async ({ When, Then, And, page }) => { 
    await When('the visitor opens an unknown page', null, { page }); 
    await Then('the browser URL should end with "/about"', null, { page }); 
    await And('the "About" navigation link should be active', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests/features/navigation.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":12,"pickleLine":17,"tags":["@navigation","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the visitor opens the portfolio website","isBg":true,"stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the visitor selects \"About\" from the main navigation","stepMatchArguments":[{"group":{"start":20,"value":"\"About\"","children":[{"start":21,"value":"About","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the browser URL should end with \"/about\"","stepMatchArguments":[{"group":{"start":32,"value":"\"/about\"","children":[{"start":33,"value":"/about","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the \"About\" navigation link should be active","stepMatchArguments":[{"group":{"start":4,"value":"\"About\"","children":[{"start":5,"value":"About","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":18,"tags":["@navigation","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the visitor opens the portfolio website","isBg":true,"stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the visitor selects \"Resume\" from the main navigation","stepMatchArguments":[{"group":{"start":20,"value":"\"Resume\"","children":[{"start":21,"value":"Resume","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the browser URL should end with \"/resume\"","stepMatchArguments":[{"group":{"start":32,"value":"\"/resume\"","children":[{"start":33,"value":"/resume","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":21,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the \"Resume\" navigation link should be active","stepMatchArguments":[{"group":{"start":4,"value":"\"Resume\"","children":[{"start":5,"value":"Resume","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":19,"tags":["@navigation","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the visitor opens the portfolio website","isBg":true,"stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the visitor selects \"Portfolio\" from the main navigation","stepMatchArguments":[{"group":{"start":20,"value":"\"Portfolio\"","children":[{"start":21,"value":"Portfolio","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the browser URL should end with \"/portfolio\"","stepMatchArguments":[{"group":{"start":32,"value":"\"/portfolio\"","children":[{"start":33,"value":"/portfolio","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the \"Portfolio\" navigation link should be active","stepMatchArguments":[{"group":{"start":4,"value":"\"Portfolio\"","children":[{"start":5,"value":"Portfolio","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":20,"tags":["@navigation","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the visitor opens the portfolio website","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the visitor selects \"Blog\" from the main navigation","stepMatchArguments":[{"group":{"start":20,"value":"\"Blog\"","children":[{"start":21,"value":"Blog","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the browser URL should end with \"/blog\"","stepMatchArguments":[{"group":{"start":32,"value":"\"/blog\"","children":[{"start":33,"value":"/blog","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":33,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the \"Blog\" navigation link should be active","stepMatchArguments":[{"group":{"start":4,"value":"\"Blog\"","children":[{"start":5,"value":"Blog","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":36,"pickleLine":21,"tags":["@navigation","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the visitor opens the portfolio website","isBg":true,"stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When the visitor selects \"Contact\" from the main navigation","stepMatchArguments":[{"group":{"start":20,"value":"\"Contact\"","children":[{"start":21,"value":"Contact","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":38,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then the browser URL should end with \"/contact\"","stepMatchArguments":[{"group":{"start":32,"value":"\"/contact\"","children":[{"start":33,"value":"/contact","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":39,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"And the \"Contact\" navigation link should be active","stepMatchArguments":[{"group":{"start":4,"value":"\"Contact\"","children":[{"start":5,"value":"Contact","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":44,"pickleLine":23,"tags":["@navigation","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the visitor opens the portfolio website","isBg":true,"stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then the browser URL should end with \"/about\"","stepMatchArguments":[{"group":{"start":32,"value":"\"/about\"","children":[{"start":33,"value":"/about","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"And the \"About\" navigation link should be active","stepMatchArguments":[{"group":{"start":4,"value":"\"About\"","children":[{"start":5,"value":"About","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":49,"pickleLine":27,"tags":["@navigation","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given the visitor opens the portfolio website","isBg":true,"stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"When the visitor opens an unknown page","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then the browser URL should end with \"/about\"","stepMatchArguments":[{"group":{"start":32,"value":"\"/about\"","children":[{"start":33,"value":"/about","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"And the \"About\" navigation link should be active","stepMatchArguments":[{"group":{"start":4,"value":"\"About\"","children":[{"start":5,"value":"About","children":[{}]},{"children":[{}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end