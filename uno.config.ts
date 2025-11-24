import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetWebFonts,
  presetWind4,
  transformerDirectives,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    // ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    // ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
  ],
  presets: [
    presetWind4(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  theme: {
    colors: {
      primary: '#3498db', // 主要色，通常用于品牌色或高亮色
      secondary: '#2ecc71', // 次要色，辅助色
      accent: '#f39c12', // 强调色，用于按钮、链接等重要元素
      background: '#ecf0f1', // 背景色，通常为浅色或中性色
      surface: '#ffffff', // 表面色，用于卡片、面板等浮动元素
      error: '#e74c3c', // 错误色，用于表示错误的状态
      warning: '#f1c40f', // 警告色，用于警告或提醒信息
      info: '#8e44ad', // 信息色，用于显示信息类的内容
      success: '#27ae60', // 成功色，用于表示成功、完成等状态
      dark: '#2c3e50', // 深色，通常用于深色背景或文字
      light: '#f5f5f5', // 浅色，用于背景或容器色
      muted: '#7f8c8d', // 淡化色，用于次要信息的文字或元素
      link: '#3498db', // 链接色，通常和primary一样
    },
  },
})
