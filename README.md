# Jasmine
## VS Code JavaScript testing framework snippets
-------------------

<!-- [![Version](https://vsmarketplacebadge.apphb.com/version/JaredE.javascript-test-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=JaredE.javascript-test-snippets)
[![Installs](https://vsmarketplacebadge.apphb.com/installs/JaredE.javascript-test-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=JaredE.javascript-test-snippets)
[![Ratings](https://vsmarketplacebadge.apphb.com/rating/JaredE.javascript-test-snippets.svg)](https://marketplace.visualstudio.com/items?itemName=JaredE.javascript-test-snippets) -->

This extension contains code snippets for the three main JavaScript testing frameworks: Jasmine, Jest and Mocha.  You can switch between the code snippets available by setting your preferred framework at a User or Workspace level in the settings page.  You can also choose the quote style (*"*, *'* or *\`*) you prefer at a User or Workspace level for your `desc` methods.

[Original][original] credit should goto [xabikos][xabikos] for writing this extension which was based off of the [Jasmine][jasmine] test framework and is based on the awesome [sublime-jasmine][sublime-jusmine] package by [@NicoSantangelo][NicoSantangelo].

## Supported languages (file extensions)
* JavaScript (.js)
* TypeScript (.ts)

## Snippets

Below is a list of all available snippets and the triggers of each one. The **→** means the `TAB` key.

### Jest Commands
| Trigger      | Content |
| -------:     | ------- |
| `aa→` | afterAll method |
| `aaa→` | afterAllAsync method |
| `ae→` | afterEach method |
| `aea→` | afterEachAsync method |
| `ba→` | beforeAll method |
| `baa→` | beforeAllAsync method |
| `be→` | beforeEach method |
| `bea→` | beforeEachAsync method |
| `desc→` | describe method |
| `it→` | it method |
| `ait→` | itAsync method |
| `aat→` | afterAllTimeout method |
| `aet→` | afterEachTimeout method |
| `bat→` | beforeAllTimeout method |
| `bet→` | beforeEachTimeout method |
| `desce→` | describeEach method |
| `desco→` | describeOnly method |
| `desceo→` | describeOnlyEach method |
| `descsk→` | describeSkip method |
| `descse→` | describeSkipEach method |
| `exp→` | expect method |
| `expe→` | expect.extend method |
| `expa→` | expect.anything method |
| `exy→` | expect.any method |
| `ac→` | expect.arrayContaining method |
| `ass→` | expect.assertions method |
| `ha→` | expect.hasAssertions method |
| `nac→` | expect.not.arrayContaining method |
| `noc→` | expect.not.objectContaining(object) method |
| `nsc→` | expect.not.stringContaining method |
| `nsm→` | expect.not.stringMatching method |
| `oc→` | expect.objectContaining method |
| `sc→` | expect.stringContaining method |
| `sm→` | expect.stringMatching method |
| `ass→` | expect.addSnapshotSerializer method |
| `ito→` | itOnly method |
| `itsk→` | itSkip method |
| `not→` | not method |
| `res→` | resolves method |
| `rej→` | rejects method |
| `te→` | test method |
| `tea→` | testAsync method |
| `tee→` | testEach method |
| `teo→` | testOnly method |
| `teoe→` | testOnlyEach method |
| `tsk→` | testSkip method |
| `tske→` | testSkipEach method |
| `ttodo→` | testToDo method |
| `tb→` | toBe method |
| `tbc→` | toHaveBeenCalled method |
| `bct→` | toHaveBeenCalledTimes method |
| `bcw→` | toHaveBeenCalledWith method |
| `bclw→` | toHaveBeenLastCalledWith method |
| `bncw→` | toHaveBeenNthCalledWith method |
| `hr→` | toHaveReturned method |
| `hrt→` | toHaveReturnedTimes method |
| `hrw→` | toHaveReturnedWith method |
| `hlrw→` | toHaveLastReturnedWith method |
| `tnrw→` | toHaveNthReturnedWith method |
| `hl→` | toHaveLength method |
| `hp→` | toHaveProperty method |
| `bclt→` | toBeCloseTo method |
| `tbd→` | toBeDefined method |
| `tbf→` | toBeFalsy method |
| `gt→` | toBeGreaterThan method |
| `gte→` | toBeGreaterThanOrEqual method |
| `lt→` | toBeLessThan method |
| `lte→` | toBeLessThanOrEqual method |
| `bio→` | toBeInstanceOf method |
| `bnu→` | toBeNull method |
| `btr→` | toBeTruthy method |
| `bund→` | toBeUndefined method |
| `bnan→` | toBeNaN method |
| `tcon→` | toContain method |
| `tce→` | toContainEqual method |
| `te→` | toEqual method |
| `tm→` | toMatch method |
| `tmo→` | toMatchObject method |
| `tms→` | toMatchSnapshot method |
| `tmis→` | toMatchInlineSnapshot method |
| `tse→` | toStrictEqual method |
| `ttr→` | toThrow method |
| `ttrer→` | toThrowErrorMatchingSnapshot method |
| `tterrin→` | toThrowErrorMatchingInlineSnapshot method |

### Jasmine Commands

| Trigger      | Content |
| -------:     | ------- |
| `aa→` | afterAll method |
| `aaa→` | afterAllAsync method |
| `ae→` | afterEach method |
| `aea→` | afterEachAsync method |
| `ba→` | beforeAll method |
| `baa→` | beforeAllAsync method |
| `be→` | beforeEach method |
| `bea→` | beforeEachAsync method |
| `desc→` | describe method |
| `it→` | it method |
| `ait→` | itAsync method |
| `aat→` | afterAllTimeout method |
| `aet→` | afterEachTimeout method |
| `bat→` | beforeAllTimeout method |
| `bet→` | beforeEachTimeout method |
| `exp→` | expect method |
| `expa→` | expectAsync method |
| `fa→` | fail method |
| `fdesc→` | focusDescribe method |
| `fit→` | focusedIt method |
| `pen→` | pending method |
| `ssp→` | setSpecProperty method |
| `ssup→` | setSuiteProperty method |
| `so→` | spyOn method |
| `soaf→` | spyOnAllFunctions method |
| `spg→` | spyOnProperty get method |
| `sps→` | spyOnProperty set method |
| `xdesc→` | xDescribe method |
| `xit→` | xIt method |
| `xait→` | xItAsync method |

### mocha commands

| Trigger      | Content |
| -------:     | ------- |
| `aa→` | afterAll method |
| `aaa→` | afterAllAsync method |
| `ae→` | afterEach method |
| `aea→` | afterEachAsync method |
| `ba→` | beforeAll method |
| `baa→` | beforeAllAsync method |
| `be→` | beforeEach method |
| `bea→` | beforeEachAsync method |
| `desc→` | describe method |
| `it→` | it method |
| `ait→` | itAsync method |
| `desco→` | describeOnly method |
| `descsk→` | describeSkip method |
| `ito→` | itOnly method |
| `itsk→` | itSkip method |

[jasmine]: http://jasmine.github.io
[sublime-jusmine]: https://github.com/NicoSantangelo/sublime-jasmine
[NicoSantangelo]: https://github.com/NicoSantangelo
[xabikos]: https://github.com/xabikos/
[original]: https://github.com/xabikos/vscode-jasmine
