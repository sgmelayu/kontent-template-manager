# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.9.0](https://github.com/Kentico/kontent-template-manager/compare/v1.8.0...v1.9.0) (2021-08-04)


### Features

* implements strict templates, uses new prod build script syntax ([b2aa716](https://github.com/Kentico/kontent-template-manager/commit/b2aa7169f59bd9b9647f2c2b6cade45fea3f2c1a))
* redesigns template manager to match new redesigned kontent app ([c37ec11](https://github.com/Kentico/kontent-template-manager/commit/c37ec11a5cb8245136bb5752a7110f7c16ebab96))
* sets angular compiler options ([fd7774f](https://github.com/Kentico/kontent-template-manager/commit/fd7774f766de751dd80b7f4101f75b53655c6ddb))
* update to Angular 12, update to new CM API & Backup manager, update all other deps ([3c47fce](https://github.com/Kentico/kontent-template-manager/commit/3c47fce5ededcbff988eaa474ebf0ad1cf19f57b))
* working update to Angular 12 with all necessary changes ([592e80a](https://github.com/Kentico/kontent-template-manager/commit/592e80a56d63ad943dba5dd34b23547aebbfccf1))


### Bug Fixes

* fixes font face declaration ([d78ad64](https://github.com/Kentico/kontent-template-manager/commit/d78ad64de23772b6b1ae1bc161f3783b6cf5c6b2))
* removes double publish and use backup manager publish functionality only ([d493512](https://github.com/Kentico/kontent-template-manager/commit/d4935125f49d09cc861c3657be8484f965189ec8))

## [1.8.0](https://github.com/Kentico/kontent-template-manager/compare/v1.7.0...v1.8.0) (2021-01-08)


### Features

* prepares deps for ng update ([533f21b](https://github.com/Kentico/kontent-template-manager/commit/533f21b917972aa9fb4a6ffcc8d34b95fe930abe))
* update to angular 11 & all other dependencies ([a466696](https://github.com/Kentico/kontent-template-manager/commit/a466696b8912c3a56d909d9af620af682ba5e235))


### Bug Fixes

* fixes template url in prod environment ([e87a1f1](https://github.com/Kentico/kontent-template-manager/commit/e87a1f1c8c026bbf7b4332ed19e7dde9a81db75b))

## [1.7.0](https://github.com/Kentico/kontent-template-manager/compare/v1.6.0...v1.7.0) (2020-10-21)


### Features

* updates deps ([fdd2b0a](https://github.com/Kentico/kontent-template-manager/commit/fdd2b0a0a43387f988d5e939527c9410c19aa11c))

## [1.6.0](https://github.com/Kentico/kontent-template-manager/compare/v1.5.0...v1.6.0) (2020-10-07)


### Features

* adds ability to directly import templates, stores template's list locally as well as data packages (required due to CORS), improves templates list layout & adds import preview for selected template ([a7279ea](https://github.com/Kentico/kontent-template-manager/commit/a7279ea54a7da93f228ec3eec8c46326b91086c6))
* displays project title & verifies project validity when setting project id (fixes https://github.com/Kentico/kontent-template-manager/issues/23) & api key, fixes click event for disabled buttons ([a8e1ffd](https://github.com/Kentico/kontent-template-manager/commit/a8e1ffd41ead9fa2da93f2777d18e36e0086a2c5))
* improves warning message when project ID or API key is invalid + shows project status when importing from template ([f29e387](https://github.com/Kentico/kontent-template-manager/commit/f29e387a60fde8ccb9f7cf3b17c1c3f624f6a284))
* updates app design ([092917c](https://github.com/Kentico/kontent-template-manager/commit/092917c55908333c6465f97ab277577256090468))
* updates dependencies & improves design of project status indicator ([7d23ebb](https://github.com/Kentico/kontent-template-manager/commit/7d23ebb405e3632641b8c6b01554f64111364c38))
* updates deps ([48a7e97](https://github.com/Kentico/kontent-template-manager/commit/48a7e974422d9084b9bb841665b5f65efba648ab))


### Bug Fixes

* decorates Angular base classes with @Directive ([3393276](https://github.com/Kentico/kontent-template-manager/commit/3393276a14bdb7cbc896a49c09d7a4617305151e))

## [1.5.0](https://github.com/Kentico/kontent-template-manager/compare/v1.4.0...v1.5.0) (2020-08-31)


### Features

* updates project to angular 10, updates other deps + fixes update related issues ([88524c4](https://github.com/Kentico/kontent-template-manager/commit/88524c4b169004299651dddc2e69efdc505cbfbd))

## [1.4.0](https://github.com/Kentico/kontent-template-manager/compare/v1.3.0...v1.4.0) (2020-06-02)


### Features

* adds support for dev mode & extra logging into console ([b3af431](https://github.com/Kentico/kontent-template-manager/commit/b3af431d7fdec041f693bc52a5fcf9aeb5452449))


### Bug Fixes

* adds artificial delay to publish requests and updates retry strategy for publish service ([e7da4dc](https://github.com/Kentico/kontent-template-manager/commit/e7da4dc3694b2caf2a38aae7dd26d215c235a0d7))

## [1.3.0](https://github.com/Kentico/kontent-template-manager/compare/v1.2.0...v1.3.0) (2020-05-20)


### Features

* adds support for publishing variants, makes processing items more generic ([3c38f97](https://github.com/Kentico/kontent-template-manager/commit/3c38f979ebdbc5976209ec15e490930c2095a0c6))
* uses more prominent button in master layout ([8cbeeed](https://github.com/Kentico/kontent-template-manager/commit/8cbeeede823851d0dface8852dfcfde6b92460c5))

## [1.2.0](https://github.com/Kentico/kontent-template-manager/compare/v1.1.1...v1.2.0) (2020-05-19)


### Features

* Makes API key labels more clear ([24673bc](https://github.com/Kentico/kontent-template-manager/commit/24673bc97eeddcad79441ccdce1fa7d8ff7c0529))
* updates deps & removes obsolete code ([a4ca4f0](https://github.com/Kentico/kontent-template-manager/commit/a4ca4f0c9a1ee4552f6521adae1c4440f912644a))

### [1.1.1](https://github.com/Kentico/kontent-template-manager/compare/v1.1.0...v1.1.1) (2020-05-12)


### Bug Fixes

* prevents clean / import actions if button is disabled ([fb41058](https://github.com/Kentico/kontent-template-manager/commit/fb410589ee9b5845ea6f568c9118617ee163e82b))

## [1.1.0](https://github.com/Kentico/kontent-template-manager/compare/v0.1.2...v1.1.0) (2020-05-12)


### Features

* adds icon and increases button icon gap ([03f9fe8](https://github.com/Kentico/kontent-template-manager/commit/03f9fe8df214fb07ff7f064d5ae3e561fcb5f4bf))
* displays proper error message for validation errors & updates kontent-backup-manager ([74d80c8](https://github.com/Kentico/kontent-template-manager/commit/74d80c897f153cfa6d9097c424d13fbf2b048f56))


### Bug Fixes

* resets errors when input data changes ([9dc9a6d](https://github.com/Kentico/kontent-template-manager/commit/9dc9a6dc0cb4baff0c3d7f2b6278818a6ab984d5))

### 1.0.0 (2020-05-11)


### Features

* adds error support in master layout ([6174610](https://github.com/Kentico/kontent-template-manager/commit/61746105d1f0e45407be4fadb38952f2be9455cb))
* adds gatsby lumen template ([a674ff3](https://github.com/Kentico/kontent-template-manager/commit/a674ff3756aab5e8d287a68f31f1a3672fde4376))
* adds home page ([1c3da73](https://github.com/Kentico/kontent-template-manager/commit/1c3da7376fa44e50cd10419b39e03972f37a2a60))
* adds missing dep ([eca00f0](https://github.com/Kentico/kontent-template-manager/commit/eca00f0c63cb17730addc28ab1d11860ff569cb8))
* adds notice when different versions of kontent-backup-manager is used to import data ([0f46da1](https://github.com/Kentico/kontent-template-manager/commit/0f46da187c77ea959bfe71d54b2322635aab4324))
* adds standard-version support ([fb06c57](https://github.com/Kentico/kontent-template-manager/commit/fb06c57c6c6468eadcb6108deac07e59c13cfcac))
* collapses json objects by default ([1670d9d](https://github.com/Kentico/kontent-template-manager/commit/1670d9def759a1c3b96e2ab289bcc44d926fcacf))
* improves design of master layout ([f2e2b02](https://github.com/Kentico/kontent-template-manager/commit/f2e2b028d6f5ba03a27b3656784ccfba48950222))
* improves master layout + design, adds search and other minor fixes ([b4c703a](https://github.com/Kentico/kontent-template-manager/commit/b4c703abd03bb948b27e0784078b660cf246943a))
* refactors most code & uses backup manager to export / restore / clean data ([e5fd6c9](https://github.com/Kentico/kontent-template-manager/commit/e5fd6c9bcc14424b9f2e939daaa7b927bc6a9e6f))
* refactors theming & adds UI components ([c976df1](https://github.com/Kentico/kontent-template-manager/commit/c976df11ca0d7f0eecddc15153d2a1f041d1e3c0))
* sets up prettier & adheres to tslint rules, improves import file preview ([f43d63a](https://github.com/Kentico/kontent-template-manager/commit/f43d63a9ad151c959f9200aad6cd0e4e5a5cd254))
* updates deps ([35c0457](https://github.com/Kentico/kontent-template-manager/commit/35c0457e43806f6b8818b3011f8a03d71f841d7a))


### Bug Fixes

* fixes prod environment props ([75e59c4](https://github.com/Kentico/kontent-template-manager/commit/75e59c4202fec7a559a8e397a38b63fdac3d6813))
* fixes technology search filter ([7610334](https://github.com/Kentico/kontent-template-manager/commit/76103348359a5b03919d02f68ef8f60fcd20fe51))
* fixes type issues ([71d7310](https://github.com/Kentico/kontent-template-manager/commit/71d7310a6162ef7b31bf4172a7f34d5d26a3a188))
