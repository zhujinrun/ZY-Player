module.exports = {
  pages: {
    index: 'src/main.js',
    mini: 'src/mini/main.js'
  },
  pluginOptions: {
    electronBuilder: {
      nodeIntegration: true,
      builderOptions: {
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true
        },
        appId: 'com.zhujinrun.zy',
        copyright: 'Copyright @ 2020 zhujinrun',
        productName: 'ZY Player',
        publish: [
          {
            provider: 'github',
            repo: 'ZY-Player',
            owner: 'zhujinrun',
            // token: 'xxxxxxxxxxxxxxx',
            releaseType: 'release',
            publishAutoUpdate: true
          }
        ],
        mac: {
          icon: 'public/icons/icon.icns',
          category: 'public.app-category.developer-tools',
          target: 'default',
          extendInfo: {
            LSUIElement: 1
          }
        },
        win: {
          icon: 'public/icons/icon.ico',
          target: 'nsis'
        },
        linux: {
          icon: 'public/icons/'
        },
        snap: {
          publish: ['github']
        }
      }
    }
  }
}
