# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

# astro-template-daisyui

```
astro-template-daisyui
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ HEAD
│  ├─ config
│  ├─ description
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           └─ main
│  ├─ objects
│  │  ├─ 02
│  │  │  └─ d7e8281f92abf3e8f8890aafdafbd8928be2a4
│  │  ├─ 03
│  │  │  ├─ 7503c930d72bbafbfc696b69564ac6845e80c8
│  │  │  └─ a8d6ae7347dacc72a6834093e7bdd52deba166
│  │  ├─ 04
│  │  │  ├─ 007ee653dc227a6c79c7ddc010f3993b2d271c
│  │  │  └─ 88020ccad8ce8a6b82a5143412bbec09f53059
│  │  ├─ 06
│  │  │  └─ 3758d93d9789bf454f7343f50d28671c76552d
│  │  ├─ 0b
│  │  │  ├─ c50c5e36aee3ff9843edb6d78c07cd9a6215f0
│  │  │  └─ f5b3275a37c0bcc907d844e5bbda8e9ce934b0
│  │  ├─ 0c
│  │  │  ├─ 33c7c3c06928c95be8c68f9f15a508c844a3dc
│  │  │  └─ f239fe13be909226688b9b12bd55b47db2a647
│  │  ├─ 14
│  │  │  └─ 184acf2ce9577957f62b6a16651cccce8495b6
│  │  ├─ 19
│  │  │  └─ 4525679654ac4f739df849cffb0d65b2b89abe
│  │  ├─ 1a
│  │  │  ├─ 1123aafb4d711f0a74bdcbf2bfb65d6899fdf4
│  │  │  └─ 8a6f4f41c0a59a8d97bfee9f06a46665ad8d03
│  │  ├─ 1b
│  │  │  ├─ 1e7c9b2dfbafef4db1f9e74f89969a8bd55022
│  │  │  ├─ 37d8fcf5e548ca368ddd259a72aefa7e69b942
│  │  │  └─ 6457c5cacb4b180f03a70d7893fa88140139b9
│  │  ├─ 1d
│  │  │  └─ b3fb3991a8968a9505a8972b3d9a503eaa43f9
│  │  ├─ 1e
│  │  │  └─ ad2ff4a40c89598fc92ea06da97e1e3fcb74e1
│  │  ├─ 20
│  │  │  └─ 04da5f4cd251e5f29bc786a857208a253d5cc6
│  │  ├─ 21
│  │  │  └─ 9444a4f0db418932919fad4064b9447ccdb04d
│  │  ├─ 22
│  │  │  ├─ 8db003c0fa2a64e057851eac91c4fe57624c6b
│  │  │  └─ a15055d638988eb33bb61536d27f623df92e4a
│  │  ├─ 23
│  │  │  └─ ea74c72de01365447ff60815faa3d5efe3e8b3
│  │  ├─ 28
│  │  │  ├─ cefd07056bab6fd49dfd830eb30ded67b9d2d8
│  │  │  └─ fae091afb0881aac0c42c9463a61bed8896aa5
│  │  ├─ 2c
│  │  │  └─ 4a74b634a68e8b102c5976f1605f2a0b01d858
│  │  ├─ 30
│  │  │  └─ 553c0438fbe18830db2595b2be7f0a7c031ee3
│  │  ├─ 31
│  │  │  └─ a2b70592a8c591c82381cbccbd5c61a4cc9213
│  │  ├─ 32
│  │  │  └─ 51332c15545530bb749a5b39d5086b9ec42b23
│  │  ├─ 35
│  │  │  └─ 5221815b2a337f9fcf773406645429766fd002
│  │  ├─ 37
│  │  │  └─ 353fe213c0eb54dbdb2ae62cd7bba13c79524f
│  │  ├─ 39
│  │  │  └─ 68a4498516f23ec6991d3f40a76da28c98fe44
│  │  ├─ 3a
│  │  │  └─ 44f244d649a03c74350677e81866733e9327d0
│  │  ├─ 41
│  │  │  └─ 3d7efee0f317ff3cd30e1676037209744b53ef
│  │  ├─ 42
│  │  │  └─ c4f8f70a779f6a395174d9014d87e26de8fcdd
│  │  ├─ 49
│  │  │  └─ 9d2ee0089a276d9f6fb23de44cda3fb9e121a5
│  │  ├─ 4b
│  │  │  └─ feef5878b9db6a64b8471c126fa0916efc1fd2
│  │  ├─ 4f
│  │  │  └─ 67749f22d20cd3e0cfba0442de8a8888866269
│  │  ├─ 54
│  │  │  └─ 6a1c560b8c0b39d155f6c844d46a497ead6605
│  │  ├─ 5c
│  │  │  ├─ 7386bf3f7b291000978c1b8a605d346203f273
│  │  │  └─ c6b62e61ad70c35492ccfd4da2a18419abd6ce
│  │  ├─ 5f
│  │  │  └─ b1d0de4cee204f4c5188d5eca037a09649f316
│  │  ├─ 62
│  │  │  └─ 051e1add52c4f2f1a3e32fa5fb2738e3063b43
│  │  ├─ 6a
│  │  │  └─ e2ca38b78e881ed0ea2bd54217edbd6fd9d265
│  │  ├─ 6d
│  │  │  └─ 4c0aa066aa2bf781830e8eb3dd46a4693024f3
│  │  ├─ 73
│  │  │  ├─ 4949ee4cc0c1b9bf671933556f02cf279cdbb7
│  │  │  └─ 534402f5f83add5f9e86b2fbb8765787f9e5b0
│  │  ├─ 78
│  │  │  └─ 55fc9401c9228a8d2446bae75302ad0be8874b
│  │  ├─ 7b
│  │  │  └─ 552be19bcad5b72bc347318763b63f2298c76e
│  │  ├─ 7c
│  │  │  ├─ 1ff3b976045660b1f1385e461a34ee91e1168d
│  │  │  └─ 9019270dd5a510850598c7e8b0ef82c72f74fb
│  │  ├─ 80
│  │  │  └─ edf7acb2e63cfaa37b1b982cdc197e0c4bf57c
│  │  ├─ 83
│  │  │  └─ fb8a4714f09099122377c9ce28577b3cd6cc06
│  │  ├─ 85
│  │  │  └─ 6af04a5ccdeb13d1281126597b0b977040b4e4
│  │  ├─ 88
│  │  │  └─ 2e6515a67e0057999c181c5fb0c8a5aa2f9873
│  │  ├─ 8a
│  │  │  └─ 132309d4fddd9d877805b0e151ca529cd75910
│  │  ├─ 8d
│  │  │  └─ 91548a1b3cd362182b282e4f3c8d0c059ccaab
│  │  ├─ 93
│  │  │  └─ 5ea8b99337923d2607adc50f3e2d585aba90fd
│  │  ├─ 97
│  │  │  └─ 5123a0d9500843d3e2146811745fd3369d36b1
│  │  ├─ 9a
│  │  │  └─ 87a067cbad3a2ae76bdc66b908f4ed362aa9b8
│  │  ├─ 9d
│  │  │  ├─ 8db0508b09a9668eb342e9bfe2c0e07d269384
│  │  │  └─ 9f64bc9868c7f3e91197b528537782254582de
│  │  ├─ a5
│  │  │  └─ 17d180e7715ddf6a8e1c74f95e6df1660657a1
│  │  ├─ a6
│  │  │  ├─ 112609bbac1a1ddbefe019378ac1f81442085a
│  │  │  └─ ee8a49107baabe9459ae8d5bca8fb16c7672cd
│  │  ├─ a8
│  │  │  └─ d5290ce8d8de6090607262d9a2807874cdd76e
│  │  ├─ a9
│  │  │  ├─ 6a7f0707d5357131bfc6ec68ad80fda55cd45c
│  │  │  └─ d23f13d8345de6477db4d5fc42bc3d4b2cd7bd
│  │  ├─ ab
│  │  │  └─ ef4ad7717424cccb81ddcdcb461ac8cc0728fa
│  │  ├─ ac
│  │  │  └─ ef35f175aae528d22fdc6b91e819aa52837fd9
│  │  ├─ ad
│  │  │  └─ b90a42a311095f53e8ad7d1732d71dea0f6009
│  │  ├─ ae
│  │  │  └─ 9310d7412537fcee6c577e9ffd1d6fef0673a0
│  │  ├─ af
│  │  │  └─ e233c3407a0caee6bc31695c32ad682dd2d97a
│  │  ├─ b1
│  │  │  └─ 738959345468058434c74ac49c164467b4df2e
│  │  ├─ b2
│  │  │  ├─ cca18372a00c0f1b6c1a557c474ecfa6ccc3c5
│  │  │  └─ cdf32ca441a94b969c0e45260aeb25f3d24c37
│  │  ├─ b7
│  │  │  ├─ 326c182a65be363a7b94b4eb99893ffd5f40fb
│  │  │  └─ 8dfdd5d436758058cdcd44bdc900326ee1c3dc
│  │  ├─ b9
│  │  │  └─ ebdab971108a1e5a99c29896950731579f6b17
│  │  ├─ bb
│  │  │  └─ e072a81c715533b419f8ceed70e48f8e6e7eb9
│  │  ├─ bc
│  │  │  └─ 7f51d2570d9593b98b2e23cb7946d72fbf5770
│  │  ├─ bd
│  │  │  ├─ 6d5971ebf32f148203a99919c7df9db1b6b93d
│  │  │  └─ c4026990876ed218c198cb9ed0c86feff7533d
│  │  ├─ c1
│  │  │  └─ 5c37f67eaed1ebfdda3074d57069ae71c4cc9a
│  │  ├─ c2
│  │  │  └─ 982aede15568cc42d28cd21b1e6882edc7e3b8
│  │  ├─ c3
│  │  │  └─ 266784942f7aacc739f276d3428dc8f4ed9dac
│  │  ├─ ca
│  │  │  └─ 36f0b9e2e42d601b619cdcc99a4649c2a6adc0
│  │  ├─ cb
│  │  │  ├─ 9d9eb4b9df8bcdec02e02444fc2138c1a0c043
│  │  │  └─ e3c554f8313cf5e27bffd937d06935e9491d76
│  │  ├─ cf
│  │  │  ├─ c5ba1c7ea7214923b03e220d9520f654c588a2
│  │  │  └─ da5f864024e39fd098e411704a4cd6742bae12
│  │  ├─ d1
│  │  │  └─ 3c4f804feeff268a24100da73773408a5dd40b
│  │  ├─ d6
│  │  │  └─ 422097621fd7c1b1ccc6daa670c46aed7ef5b7
│  │  ├─ d7
│  │  │  ├─ 3546ebffc858bb3e33bffa227bc28b3a7b5c40
│  │  │  └─ 8f81ec4e8e98ee05c06ee754e17fc255d3b646
│  │  ├─ dc
│  │  │  ├─ 06e2ea431d3e35e8fcc8949a03fb4b7946d2ad
│  │  │  └─ 9fd3f2812345f085342edb78b68ca835294d7b
│  │  ├─ e0
│  │  │  └─ bd6917b6b109d015ed441881711460d50596cd
│  │  ├─ e5
│  │  │  └─ 4dfe7ae1b5bb06cfddbfa9946128eb75a8f3f0
│  │  ├─ e6
│  │  │  └─ 7fd00d5b581ed1de957a7a157443df04fd4bab
│  │  ├─ e9
│  │  │  ├─ 33e52d5b05eb0f07c87bedc6e04a0b16fc6cf5
│  │  │  └─ b889d2cf83173deef0eb3616dc4da4eb06007c
│  │  ├─ ec
│  │  │  └─ b1010d1a3deea9adc54fbf50257df230c48ea0
│  │  ├─ ed
│  │  │  └─ 13418ea6dfbbe178c14262c0f442fa08926f8e
│  │  ├─ ee
│  │  │  ├─ 0da9a35d25fbc027341de0c42904d56173d0eb
│  │  │  └─ cfc1a0761b228dfb06ee1485ae9699f5d06c0a
│  │  ├─ ef
│  │  │  └─ c518ee9b7974d84213caa225ab963f0d7d65a4
│  │  ├─ f0
│  │  │  └─ 127159a2fdac4ca6288aec40ec2edf819c1fbd
│  │  ├─ f1
│  │  │  └─ 57bd1c5e287c70a508a98a13f538491aa4dafc
│  │  ├─ f6
│  │  │  ├─ 798524e0c87a0b3772eafeb69b5c89480f1903
│  │  │  └─ b2db80b7e6b840591db6a2e2e53d99fb67f334
│  │  ├─ f7
│  │  │  └─ 78271f457adf9ed5e04767414ea45ea0f19597
│  │  ├─ f9
│  │  │  ├─ 052cdfa99374413ce3d4f1c969da0466281fcd
│  │  │  ├─ 64fe0cffd88ccb9fcc20bd3c22e848c879d78a
│  │  │  └─ bceee75af1a23a2bfa2a8e92eba3de5f032bc1
│  │  ├─ fa
│  │  │  └─ 2ec1e37618ccb28aeb2d76723bc092a7d016ed
│  │  ├─ fb
│  │  │  └─ 6262872d0ec905e150d994fe82b838739948f5
│  │  ├─ fd
│  │  │  └─ 4e3228979a395a91dbd68ee60d2889d854f11d
│  │  ├─ fe
│  │  │  └─ 2194ce4994176830cd603c9abf0e8846cfc1ba
│  │  ├─ info
│  │  └─ pack
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ .prettierignore
├─ .prettierrc
├─ .vscode
│  ├─ extensions.json
│  ├─ launch.json
│  └─ settings.json
├─ README.md
├─ astro.config.mjs
├─ package.json
├─ pnpm-lock.yaml
├─ public
│  ├─ favicon.svg
│  └─ stars.svg
├─ src
│  ├─ assets
│  │  └─ img
│  ├─ components
│  │  ├─ Container.astro
│  │  ├─ Footer.astro
│  │  ├─ Header.astro
│  │  ├─ Menu.astro
│  │  └─ MenuMobile.astro
│  ├─ env.d.ts
│  ├─ icons
│  │  ├─ cloud-download.svg
│  │  ├─ github.svg
│  │  ├─ link-out.svg
│  │  └─ round-menu.svg
│  ├─ layouts
│  │  └─ Layout.astro
│  ├─ pages
│  │  ├─ contact.astro
│  │  └─ index.astro
│  └─ styles
│     └─ global.css
├─ tailwind.config.js
└─ tsconfig.json

```