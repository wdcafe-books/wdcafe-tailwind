/**
 * plugins/webfontloader.js *
 * webfontloader documentation: https://github.com/typekit/webfontloader * 
 * 구글 웹폰트 호출해서 사용 * 
 */

export async function loadFonts () {
  const webFontLoader = await import(/* webpackChunkName: "webfontloader" */'webfontloader')

  webFontLoader.load({
    google: {
      families: [
        'Roboto:100,300,400,500,700,900&display=swap',
        'Noto Sans KR:100,300,400,500,700,900&display=swap',
      ],
    },
  })
}
