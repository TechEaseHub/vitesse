# daisyUI 5

daisyUI 5 是一个用于 Tailwind CSS 4 的 CSS 库 daisyUI 5 提供了常见 UI 组件的类名

- [daisyUI 5 文档](http://daisyui.com)
- [指南：如何在 LLMs 和代码编辑器中使用此文件](https://daisyui.com/docs/editor/)
- [daisyUI 5 发布说明](https://daisyui.com/docs/v5/)
- [daisyUI 4 到 5 升级指南](https://daisyui.com/docs/upgrade/)

## daisyUI 5 安装说明

[安装指南](https://daisyui.com/docs/install/)

1.  daisyUI 5 需要 Tailwind CSS 4
2.  `tailwind.config.js` 文件在 Tailwind CSS v4 中已弃用，不要使用 `tailwind.config.js` 。如果它是 node 依赖项，Tailwind CSS v4 的 CSS 文件中只需要 `@import "tailwindcss";` 。
3.  daisyUI 5 可以使用 `npm i -D daisyui@latest` 安装，然后在 CSS 文件中添加 `@plugin "daisyui";` 。
4.  建议将 daisyUI 作为依赖项安装，但如果您确实想从 CDN 使用它，可以使用 Tailwind CSS 和 daisyUI CDN 文件：

```html
<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

5.  一个包含 Tailwind CSS 和 daisyUI 的 CSS 文件看起来像这样（如果它是 node 依赖项）

```css
@import 'tailwindcss';
@plugin "daisyui";
```

## daisyUI 5 使用规则

1.  我们可以通过向 HTML 元素添加 daisyUI 类名来给它添加样式。通过添加组件类名、部分类名（如果该组件有可用的部分类名）和修饰类名（如果该组件有可用的修饰类名）
2.  如果无法使用现有的 daisyUI 类进行定制，可以使用 Tailwind CSS 工具类来定制组件。例如 `btn px-10` 为 `btn` 设置自定义水平填充
3.  如果使用 Tailwind CSS 工具类自定义 daisyUI 样式因 CSS 特异性问题无效，可以在 Tailwind CSS 工具类末尾使用 `!` 来覆盖现有样式。例如 `btn bg-red-500!` 强制为 `btn` 设置自定义背景颜色。这是一种最后的解决方案，应该谨慎使用。
4.  如果 daisyUI 中不存在特定的组件或类似组件，可以使用 Tailwind CSS 工具类创建自己的组件。
5.  在使用 Tailwind CSS `flex` 和 `grid` 进行布局时，应使用 Tailwind CSS 响应式工具类前缀使其具有响应性。
6.  仅允许的类名是现有的 daisyUI 类名或 Tailwind CSS 工具类。
7.  理想情况下，你不需要编写任何自定义 CSS。推荐使用 daisyUI 类名或 Tailwind CSS 工具类。
8.  建议 - 如果你需要占位图像，使用 https://picsum.photos/200/300 并指定你想要的尺寸
9.  建议 - 在设计时，除非有必要，否则不要添加自定义字体
10. 除非有必要，否则不要给 body 添加 `bg-base-100 text-base-content`
11. 对于设计决策，使用 Refactoring UI 书籍的最佳实践

daisyUI 5 的类名属于以下类别之一。这些类型名称仅用于参考，实际代码中不使用

- `component` : 组件的必需类
- `part` : 组件的子部分
- `style` : 为组件或部分设置特定样式
- `behavior` : 改变组件或部分的行为
- `color` : 为组件或部分设置特定颜色
- `size` : 为组件或部分设置特定尺寸
- `placement` : 为组件或部分设置特定位置
- `direction` : 为组件或部分设置特定方向
- `modifier` : 以特定方式修改组件或部分

## 配置

daisyUI 5 配置文档：https://daisyui.com/docs/config/ 不带配置的 daisyUI：

```css
@plugin "daisyui";
```

仅使用 `light` 主题的 daisyUI 配置：

```css
@plugin "daisyui" {
  themes: light --default;
}
```

使用所有默认配置的 daisyUI：

```css
@plugin "daisyui" {
  themes:
    light --default,
    dark --prefersdark;
  root: ':root';
  include:;
  exclude:;
  prefix:;
  logs: true;
}
```

一个配置示例：在以下配置中，所有内置主题都已启用，而 bumblebee 是默认主题，synthwave 是 prefersdark 主题（默认暗黑模式）。所有其他主题也已启用，可以通过在 `<html>` 元素根目录添加 `data-theme="THEME_NAME"` 来使用。排除了滚动条。使用 `daisy-` 前缀为所有 daisyUI 类，并禁用了 console.log。

```css
@plugin "daisyui" {
  themes:
    light,
    dark,
    cupcake,
    bumblebee --default,
    emerald,
    corporate,
    synthwave --prefersdark,
    retro,
    cyberpunk,
    valentine,
    halloween,
    garden,
    forest,
    aqua,
    lofi,
    pastel,
    fantasy,
    wireframe,
    black,
    luxury,
    dracula,
    cmyk,
    autumn,
    business,
    acid,
    lemonade,
    night,
    coffee,
    winter,
    dim,
    nord,
    sunset,
    caramellatte,
    abyss,
    silk;
  root: ':root';
  include:;
  exclude: rootscrollgutter, checkbox;
  prefix: daisy-;
  logs: false;
}
```

## daisyUI 5 种颜色

### daisyUI 颜色名称

- `primary` : 主要品牌颜色，您品牌的主色调
- `primary-content` : 主要颜色上的前景内容颜色
- `secondary` : 辅助品牌颜色，您品牌的可选次要颜色
- `secondary-content` : 在辅助颜色上使用的前景内容颜色
- `accent` : 强调品牌颜色，您品牌的可选强调颜色
- `accent-content` : 在强调颜色上使用的 foreground 内容颜色
- `neutral` : 中性暗色，用于 UI 中未饱和的部分
- `neutral-content` : 用于中性色背景的前景色
- `base-100` :-100 页面的基础表面色，用于空白背景
- `base-200` :-200 基础色，较深的色调，用于创建阴影效果
- `base-300` :-300 基础颜色，更深的色调，用于创建阴影效果
- `base-content` : 用于在基础颜色上的前景内容颜色
- `info` : 信息颜色，用于提示/帮助信息
- `info-content` : 用于在信息颜色上的前景内容颜色
- `success` : 成功颜色，用于成功/安全消息
- `success-content` : 成功颜色上的前景内容颜色
- `warning` : 警告颜色，用于警告/注意消息
- `warning-content` : 警告颜色上的前景内容颜色
- `error` : 错误颜色，用于错误/危险/破坏性消息
- `error-content` : 在错误颜色上使用的前景内容颜色

### daisyUI 颜色规则

1.  daisyUI 为 Tailwind CSS 颜色添加了语义颜色名称
2.  daisyUI 颜色名称可以在实用类中使用，就像其他 Tailwind CSS 颜色名称一样。例如， `bg-primary` 将使用主要颜色作为背景
3.  daisyUI 颜色名称包含变量作为值，因此它们可以根据主题变化
4.  无需使用 `dark:` 作为 daisyUI 颜色名称
5.  理想情况下，颜色应该只使用 daisyUI 颜色名称，以便颜色可以根据主题自动变化
6.  如果使用 Tailwind CSS 颜色名称（如 `red-500` ），在所有主题中都会呈现相同的红色
7.  如果使用 daisyUI 颜色名称（如 `primary` ），颜色会根据主题变化
8.  应避免使用 Tailwind CSS 颜色名称作为文本颜色，因为 Tailwind CSS 颜色 `text-gray-800` 在 `bg-base-100` 上在暗主题下会难以阅读——因为在暗主题中， `bg-base-100` 是深色
9.  `*-content` 颜色应与其关联颜色有良好的对比度
10. 建议 - 在设计页面时，使用 `base-*` 颜色作为页面主体的颜色。使用 `primary` 颜色突出重要元素。

### daisyUI 自定义主题与自定义颜色

一个包含 Tailwind CSS、daisyUI 和自定义 daisyUI 主题的 CSS 文件如下所示：

```css
@import 'tailwindcss';
@plugin "daisyui";
@plugin "daisyui/theme" {
  name: 'mytheme';
  default: true; /* set as default */
  prefersdark: false; /* set as default dark mode (prefers-color-scheme:dark) */
  color-scheme: light; /* color of browser-provided UI */

  --color-base-100: oklch(98% 0.02 240);
  --color-base-200: oklch(95% 0.03 240);
  --color-base-300: oklch(92% 0.04 240);
  --color-base-content: oklch(20% 0.05 240);
  --color-primary: oklch(55% 0.3 240);
  --color-primary-content: oklch(98% 0.01 240);
  --color-secondary: oklch(70% 0.25 200);
  --color-secondary-content: oklch(98% 0.01 200);
  --color-accent: oklch(65% 0.25 160);
  --color-accent-content: oklch(98% 0.01 160);
  --color-neutral: oklch(50% 0.05 240);
  --color-neutral-content: oklch(98% 0.01 240);
  --color-info: oklch(70% 0.2 220);
  --color-info-content: oklch(98% 0.01 220);
  --color-success: oklch(65% 0.25 140);
  --color-success-content: oklch(98% 0.01 140);
  --color-warning: oklch(80% 0.25 80);
  --color-warning-content: oklch(20% 0.05 80);
  --color-error: oklch(65% 0.3 30);
  --color-error-content: oklch(98% 0.01 30);

  --radius-selector: 1rem; /* border radius of selectors (checkbox, toggle, badge) */
  --radius-field: 0.25rem; /* border radius of fields (button, input, select, tab) */
  --radius-box: 0.5rem; /* border radius of boxes (card, modal, alert) */

  --size-selector: 0.25rem; /* base size of selectors (checkbox, toggle, badge) */
  --size-field: 0.25rem; /* base size of fields (button, input, select, tab) */

  --border: 1px; /* border size */

  --depth: 1; /* only 0 or 1 – Adds a shadow and subtle 3D effect to components */
  --noise: 0; /* only 0 or 1 - Adds a subtle noise effect to components */
}
```

#### 规则

- 以上所有 CSS 变量都是必需的
- 颜色可以是 OKLCH 或十六进制或其他格式

您可以使用 https://daisyui.com/theme-generator/来创建自己的主题

## daisyUI 5 组件

### 手风琴

手风琴用于显示和隐藏内容，但一次只能有一个项目处于打开状态

[手风琴文档](https://daisyui.com/components/accordion/)

#### 类名

- component: `collapse`
- part: `collapse-title`, `collapse-content`
- modifier: `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

#### 语法

```html
<div class="collapse {MODIFIER}">{CONTENT}</div>
```

内容为：

```html
<input type="radio" name="{name}" checked="{checked}" />
<div class="collapse-title">{title}</div>
<div class="collapse-content">{CONTENT}</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰类名
- 手风琴使用单选输入。具有相同名称的所有单选输入协同工作，一次只能打开一个
- 如果你在页面上有多个手风琴项集，请为每个集合并用不同的单选输入名称
- 将{name}替换为手风琴组的唯一名称
- 如果你想让手风琴默认展开，请将 `{checked}` 替换为 `checked="checked"`

### alert

警告通知用户重要事件

[警告文档](https://daisyui.com/components/alert/)

#### 类名

- 组件: `alert`
- 样式： `alert-outline` , `alert-dash` , `alert-soft`
- 颜色： `alert-info` , `alert-success` , `alert-warning` , `alert-error`
- 方向： `alert-vertical` , `alert-horizontal`

#### 语法

```html
<div role="alert" class="alert {MODIFIER}">{CONTENT}</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个样式/颜色/方向类名
- 为响应式布局添加 `sm:alert-horizontal`

### avatar

头像用于显示缩略图

[头像文档](https://daisyui.com/components/avatar/)

#### 类名

- 组件: `avatar` , `avatar-group`
- 修饰符: `avatar-online` , `avatar-offline` , `avatar-placeholder`

#### 语法

```html
<div class="avatar {MODIFIER}">
  <div>
    <img src="{image-url}" />
  </div>
</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰符类名
- 使用 `avatar-group` 来包含多个头像
- 您可以使用 `w-*` 和 `h-*` 设置自定义大小
- 您可以使用 `mask-squircle` 、 `mask-hexagon` 、 `mask-triangle` 等遮罩类

### 徽章

徽章用于告知用户特定数据的状态

[徽章文档](https://daisyui.com/components/badge/)

#### 类名

- 组件: `badge`
- 样式： `badge-outline` , `badge-dash` , `badge-soft` , `badge-ghost`
- 颜色： `badge-neutral` , `badge-primary` , `badge-secondary` , `badge-accent` , `badge-info` , `badge-success` , `badge-warning` , `badge-error`
- 大小： `badge-xs` , `badge-sm` , `badge-md` , `badge-lg` , `badge-xl`

#### 语法

```html
<span class="badge {MODIFIER}">Badge</span>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个样式/颜色/尺寸类名
- 可用于文本或按钮内
- 要创建一个空徽章，只需删除 span 标签之间的文本

### 面包屑

面包屑帮助用户导航

[面包屑文档](https://daisyui.com/components/breadcrumbs/)

#### 类名

- 组件: `breadcrumbs`

#### 语法

```html
<div class="breadcrumbs">
  <ul>
    <li><a>Link</a></li>
  </ul>
</div>
```

#### 规则

- 面包屑只有一个主要类名
- 链接内可以包含图标
- 如果设置为 `max-width` 或者列表比容器大，它将滚动

### 按钮

按钮允许用户执行操作

[按钮文档](https://daisyui.com/components/button/)

#### 类名

- 组件: `btn`
- 颜色: `btn-neutral` , `btn-primary` , `btn-secondary` , `btn-accent` , `btn-info` , `btn-success` , `btn-warning` , `btn-error`
- 样式： `btn-outline` , `btn-dash` , `btn-soft` , `btn-ghost` , `btn-link`
- 行为： `btn-active` , `btn-disabled`
- 尺寸： `btn-xs` , `btn-sm` , `btn-md` , `btn-lg` , `btn-xl`
- 修饰符： `btn-wide` , `btn-block` , `btn-square` , `btn-circle`

#### 语法

```html
<button class="btn {MODIFIER}">Button</button>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个颜色/样式/行为/大小/修饰类名称
- btn 可以用于任何 HTML 标签，如 `<button>` 、 `<a>` 、 `<input>`
- 按钮可以在文本之前或之后有一个图标
- 如果你想使用类名禁用按钮，请设置 `tabindex="-1" role="button" aria-disabled="true"`

### 日历

日历包括不同日历库的样式

[日历文档](https://daisyui.com/components/calendar/)

#### 类名

- 组件
  - `cally (for Cally web component)`
  - `pika-single (for the input field that opens Pikaday calendar)`
  - `react-day-picker (for the DayPicker component)`

#### 语法

为 Cally：

```html
<calendar-date class="cally">{CONTENT}</calendar-date>
```

为 Pikaday：

```html
<input type="text" class="input pika-single" />
```

为 React Day Picker：

```html
<DayPicker className="react-day-picker"> </DayPicker>
```

#### 规则

- daisyUI 支持 Cally、Pikaday、React Day Picker

### 卡片

卡片用于分组和显示内容

[卡片文档](https://daisyui.com/components/card/)

#### 类名

- 组件: `card`
- 部分: `card-title` , `card-body` , `card-actions`
- 样式: `card-border` , `card-dash`
- 修饰符: `card-side` , `image-full`
- 尺寸: `card-xs` , `card-sm` , `card-md` , `card-lg` , `card-xl`

#### 语法

```html
<div class="card {MODIFIER}">
  <figure><img src="{image-url}" alt="{alt-text}" /></figure>
  <div class="card-body">
    <h2 class="card-title">{title}</h2>
    <p>{CONTENT}</p>
    <div class="card-actions">{actions}</div>
  </div>
</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰器类名和一个尺寸类名
- `<figure>` 和 `<div class="card-body">` 是可选的
- 可以使用 `sm:card-horizontal` 进行响应式布局
- 如果图片放置在 `card-body` 之后，图片将被放置在底部

### 轮播图

在可滚动区域内显示图片或内容

[轮播图文档](https://daisyui.com/components/carousel/)

#### 类名

- component: `carousel`
- part: `carousel-item`
- modifier: `carousel-start`, `carousel-center`, `carousel-end`
- direction: `carousel-horizontal`, `carousel-vertical`

#### 语法

```html
<div class="carousel {MODIFIER}">{CONTENT}</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰符/方向类名
- 内容是一个 `carousel-item` div 列表： `<div class="carousel-item"></div>`
- 要创建全宽轮播图，在每个轮播项中添加 `w-full`

### chat

聊天气泡用于显示一行对话及其所有数据，包括作者头像、作者名称、时间等

[chat docs](https://daisyui.com/components/chat/)

#### 类名

- 组件: `chat`
- 部分: `chat-image` , `chat-header` , `chat-footer` , `chat-bubble`
- 位置: `chat-start` , `chat-end`
- 颜色: `chat-bubble-neutral` , `chat-bubble-primary` , `chat-bubble-secondary` , `chat-bubble-accent` , `chat-bubble-info` , `chat-bubble-success` , `chat-bubble-warning` , `chat-bubble-error`

#### 语法

```html
<div class="chat {PLACEMENT}">
  <div class="chat-image"></div>
  <div class="chat-header"></div>
  <div class="chat-bubble {COLOR}">Message text</div>
  <div class="chat-footer"></div>
</div>
```

#### 规则

- {PLACEMENT} 是必需的，必须是 `chat-start` 或 `chat-end`
- {COLOR} 是可选的，可以是颜色类名之一
- 要添加头像，使用 `<div class="chat-image avatar">` 并将头像内容嵌套在里面

### 复选框

复选框用于选择或取消选择一个值

[checkbox 文档](https://daisyui.com/components/checkbox/)

#### 类名

- 组件: `checkbox`
- 颜色: `checkbox-primary` , `checkbox-secondary` , `checkbox-accent` , `checkbox-neutral` , `checkbox-success` , `checkbox-warning` , `checkbox-info` , `checkbox-error`
- size: `checkbox-xs`, `checkbox-sm`, `checkbox-md`, `checkbox-lg`, `checkbox-xl`

#### 语法

```html
<input type="checkbox" class="checkbox {MODIFIER}" />
```

#### 规则

- {MODIFIER} 是可选的，可以有一个每种颜色/尺寸类别的名称

### 折叠

折叠用于显示和隐藏内容

[折叠文档](https://daisyui.com/components/collapse/)

#### 类名

- component: `collapse`
- part: `collapse-title`, `collapse-content`
- modifier: `collapse-arrow`, `collapse-plus`, `collapse-open`, `collapse-close`

#### 语法

```html
<div tabindex="0" class="collapse {MODIFIER}">
  <div class="collapse-title">{title}</div>
  <div class="collapse-content">{CONTENT}</div>
</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰类名
- 可以用 `<input type="checkbox">` 代替 `tabindex="0"` 作为第一个子元素
- 也可以是 details/summary 标签

### 倒计时

倒计时在您在 0 到 99 之间更改数字时为您提供过渡效果

[倒计时文档](https://daisyui.com/components/countdown/)

#### 类名

- 组件: `countdown`

#### 语法

```html
<span class="countdown">
  <span style="--value:{number};">number</span>
</span>
```

#### 规则

- `--value` CSS 变量和文本必须是 0 到 99 之间的数字
- 你需要使用 JS 更改 span 文本和 `--value` CSS 变量
- 你需要添加 `aria-live="polite"` 和 `aria-label="{number}"` ，以便屏幕阅读器可以正确读取更改

### 差异

Diff 组件显示两个项目的并排比较

[diff 文档](https://daisyui.com/components/diff/)

#### 类名

- 组件: `diff`
- 部分: `diff-item-1` , `diff-item-2` , `diff-resizer`

#### 语法

```html
<figure class="diff">
  <div class="diff-item-1">{item1}</div>
  <div class="diff-item-2">{item2}</div>
  <div class="diff-resizer"></div>
</figure>
```

#### 规则

- 为保持宽高比，向 `<figure class="diff">` 元素添加 `aspect-16/9` 或其他宽高比类

### 分隔符

分隔符将用于垂直或水平分隔内容

[divider docs](https://daisyui.com/components/divider/)

#### 类名

- component: `divider`
- 颜色: `divider-neutral` , `divider-primary` , `divider-secondary` , `divider-accent` , `divider-success` , `divider-warning` , `divider-info` , `divider-error`
- 方向: `divider-vertical` , `divider-horizontal`
- 位置: `divider-start` , `divider-end`

#### 语法

```html
<div class="divider {MODIFIER}">{text}</div>
```

#### 规则

- {MODIFIER} 是可选的，可以包含每个方向/颜色/位置类名中的一个
- 省略文本以创建空白分隔符

### dock

Dock（也称为底部导航或底部栏）是一种 UI 元素，为用户提供导航选项。Dock 固定在屏幕底部

[dock docs](https://daisyui.com/components/dock/)

#### 类名

- component: `dock`
- part: `dock-label`
- modifier: `dock-active`
- size: `dock-xs`, `dock-sm`, `dock-md`, `dock-lg`, `dock-xl`

#### 语法

```html
<div class="dock {MODIFIER}">{CONTENT}</div>
```

内容是一个按钮列表：

```html
<button>
  <svg>{icon}</svg>
  <span class="dock-label">Text</span>
</button>
```

#### 规则

- {MODIFIER} 是可选的，可以是以下尺寸类名之一
- 要使按钮处于激活状态，请为按钮添加 `dock-active` 类
- 添加 `<meta name="viewport" content="viewport-fit=cover">` 是 iOS 中 dock 响应式布局所必需的

### 抽屉

抽屉是一种网格布局，可以在页面的左侧或右侧显示/隐藏侧边栏

[抽屉文档](https://daisyui.com/components/drawer/)

#### 类名

- 组件: `drawer`
- 部分: `drawer-toggle` , `drawer-content` , `drawer-side` , `drawer-overlay`
- 位置: `drawer-end`
- 修饰符: `drawer-open`

#### 语法

```html
<div class="drawer {MODIFIER}">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">{CONTENT}</div>
  <div class="drawer-side">{SIDEBAR}</div>
</div>
```

其中 {CONTENT} 可以是导航栏、网站内容、页脚等，而 {SIDEBAR} 可以是如下菜单：

```html
<ul class="menu p-4 w-80 min-h-full bg-base-100 text-base-content">
  <li><a>Item 1</a></li>
  <li><a>Item 2</a></li>
</ul>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个 modifier/placement 类名
- `id` 是 `drawer-toggle` 输入的必需项。根据你的需求将 `my-drawer` 更改为唯一 ID
- `lg:drawer-open` 可用于在大屏幕上显示侧边栏
- `drawer-toggle` 是一个隐藏的复选框。使用带有 "for" 属性的标签来切换状态
- 如果你想在按钮点击时打开抽屉，请使用 `<label for="my-drawer" class="btn drawer-button">Open drawer</label>` ，其中 `my-drawer` 是 `drawer-toggle` 输入的 id
- 使用抽屉时，每个页面内容都必须在 `drawer-content` 元素内。例如，navbar、footer 等不应在 `drawer` 外部

### 下拉菜单

下拉菜单可以在按钮点击时打开菜单或任何其他元素

[下拉菜单文档](https://daisyui.com/components/dropdown/)

#### 类名

- 组件: `dropdown`
- 部分: `dropdown-content`
- 位置: `dropdown-start` , `dropdown-center` , `dropdown-end` , `dropdown-top` , `dropdown-bottom` , `dropdown-left` , `dropdown-right`
- 修饰符: `dropdown-hover` , `dropdown-open`

#### 语法

使用详情和摘要

```html
<details class="dropdown">
  <summary>Button</summary>
  <ul class="dropdown-content">
    {CONTENT}
  </ul>
</details>
```

使用 popover API

```html
<button popovertarget="{id}" style="anchor-name:--{anchor}">{button}</button>
<ul class="dropdown-content" popover id="{id}" style="position-anchor:--{anchor}">
  {CONTENT}
</ul>
```

使用 CSS 焦点

```html
<div class="dropdown">
  <div tabindex="0" role="button">Button</div>
  <ul tabindex="0" class="dropdown-content">
    {CONTENT}
  </ul>
</div>
```

#### 规则

- {MODIFIER} 是可选的，可以是修饰符/位置类名之一
- 替换 `{id}` 和 `{anchor}` 为唯一名称
- 对于 CSS 焦点下拉菜单，在按钮上使用 `tabindex="0"` 和 `role="button"`
- 内容可以是任何 HTML 元素（不仅仅是 `<ul>` ）

### fieldset

字段集是一个用于分组相关表单元素的容器。它包括字段集标题（fieldset-legend）和描述（label）。

[字段集文档](https://daisyui.com/components/fieldset/)

#### 类名

- 组件： `fieldset` ， `label`
- 部件： `fieldset-legend`

#### 语法

```html
<fieldset class="fieldset">
  <legend class="fieldset-legend">{title}</legend>
  {CONTENT}
  <p class="label">{description}</p>
</fieldset>
```

#### 规则

- 你可以使用任何元素作为 fieldset 的直接子元素来添加表单元素

### file-input

File Input 是一个用于上传文件的输入字段

[file-input docs](https://daisyui.com/components/file-input/)

#### 类名：

- 组件: `file-input`
- 样式: `file-input-ghost`
- 颜色: `file-input-neutral` , `file-input-primary` , `file-input-secondary` , `file-input-accent` , `file-input-info` , `file-input-success` , `file-input-warning` , `file-input-error`
- 尺寸: `file-input-xs` , `file-input-sm` , `file-input-md` , `file-input-lg` , `file-input-xl`

#### 语法

```html
<input type="file" class="file-input {MODIFIER}" />
```

#### 规则

- {MODIFIER} 是可选的，可以有一个样式/颜色/大小类名

### 过滤器

Filter 是一组单选按钮。选择其中一个选项将隐藏其他选项，并在所选选项旁边显示一个重置按钮

[filter docs](https://daisyui.com/components/filter/)

#### 类名

- component: `filter`
- part: `filter-reset`

#### 语法

使用 HTML 表单

```html
<form class="filter">
  <input class="btn btn-square" type="reset" value="×" />
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 1 title" />
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 2 title" />
</form>
```

不使用 HTML 表单

```html
<div class="filter">
  <input class="btn filter-reset" type="radio" name="{NAME}" aria-label="×" />
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 1 title" />
  <input class="btn" type="radio" name="{NAME}" aria-label="Tab 2 title" />
</div>
```

#### 规则

- 根据过滤器上下文，将 `{NAME}` 替换为适当值
- 每组单选输入必须具有唯一的 `name` 属性以避免冲突
- 尽可能使用 `<form>` 标签，如果因为某些原因无法使用 HTML 表单，则只使用 `<div>`
- 使用 `filter-reset` 类为重置按钮

### footer

Footer 可以包含标志、版权声明和其他页面的链接

[footer docs](https://daisyui.com/components/footer/)

#### 类名

- 组件: `footer`
- 部分: `footer-title`
- 位置: `footer-center`
- 方向： `footer-horizontal` , `footer-vertical`

#### 语法

```html
<footer class="footer {MODIFIER}">{CONTENT}</footer>
```

其中内容可以包含多个 `<nav>` 标签，带有 `footer-title` 和链接

#### 规则

- {MODIFIER} 是可选的，可以有一个每种放置/方向类名
- 尝试使用 `sm:footer-horizontal` 使页脚响应式
- 建议 - 使用 `base-200` 作为背景颜色

### 英雄

Hero 是一个用于展示带有标题和描述的大盒子或图片的组件

[hero docs](https://daisyui.com/components/hero/)

#### 类名

- component: `hero`
- part: `hero-content`, `hero-overlay`

#### 语法

```html
<div class="hero {MODIFIER}">{CONTENT}</div>
```

#### 规则

- {MODIFIER} 是可选的
- 使用 `hero-content` 作为文本内容
- 在英雄区域中使用 `hero-overlay` 将背景图像与颜色叠加
- 内容可以包含一个图形

### 指示器

指示器用于将元素放置在另一个元素的角落上

[指示器文档](https://daisyui.com/components/indicator/)

#### 类名

- 组件: `indicator`
- part: `indicator-item`
- placement: `indicator-start`, `indicator-center`, `indicator-end`, `indicator-top`, `indicator-middle`, `indicator-bottom`

#### 语法

```html
<div class="indicator">
  <span class="indicator-item">{indicator content}</span>
  <div>{main content}</div>
</div>
```

#### 规则

- 在主内容之前添加所有指示元素（带 `indicator-item` 类）
- {placement} 是可选的，可以是水平/垂直类名之一。默认是 `indicator-end indicator-top`

### input

文本输入是一个简单的输入字段

[input docs](https://daisyui.com/components/input/)

#### 类名

- 组件: `input`
- 样式: `input-ghost`
- 颜色: `input-neutral` , `input-primary` , `input-secondary` , `input-accent` , `input-info` , `input-success` , `input-warning` , `input-error`
- 尺寸: `input-xs` , `input-sm` , `input-md` , `input-lg` , `input-xl`

#### 语法

```html
<input type="{type}" placeholder="Type here" class="input {MODIFIER}" />
```

#### 规则

- {MODIFIER} 是可选的，可以有一个样式/颜色/尺寸类名
- 可用于任何输入字段类型（文本、密码、电子邮件等）
- 当输入内有多个元素时，使用 `input` 类名作为父级

### 连接

Join 是一个用于分组多个项目的容器，可用于分组按钮、输入等。Join 会将边框半径应用于第一个和最后一个项目。Join 可用于创建水平或垂直的项目列表

[join docs](https://daisyui.com/components/join/)

#### 类名

- component: `join`, `join-item`
- 方向: `join-vertical` , `join-horizontal`

#### 语法

```html
<div class="join {MODIFIER}">{CONTENT}</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个方向类名
- join 元素的任何直接子元素将会合并在一起
- 带有 `join-item` 的任何元素都会受到影响
- 使用 `lg:join-horizontal` 进行响应式布局

### kbd

Kbd 用于显示键盘快捷键

[kbd 文档](https://daisyui.com/components/kbd/)

#### 类名

- 组件: `kbd`
- size: `kbd-xs`, `kbd-sm`, `kbd-md`, `kbd-lg`, `kbd-xl`

#### 语法

```html
<kbd class="kbd {MODIFIER}">K</kbd>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个尺寸类名

### 标签

标签用于为输入字段提供名称或标题。标签可以放在字段之前或之后

[标签文档](https://daisyui.com/components/label/)

#### 类名

- 组件: `label` , `floating-label`

#### 语法

对于常规标签：

```html
<label class="input">
  <span class="label">{label text}</span>
  <input type="text" placeholder="Type here" />
</label>
```

对于浮动标签：

```html
<label class="floating-label">
  <input type="text" placeholder="Type here" class="input" />
  <span>{label text}</span>
</label>
```

#### 规则

- `input` 类用于样式化包含输入字段和标签的父元素，因此标签不会具有 'input' 类
- 使用 `floating-label` 表示输入字段的父级，并在字段聚焦时浮动在输入字段上方的 span 元素

### 链接

链接为链接添加缺失的下划线样式

[链接文档](https://daisyui.com/components/link/)

#### 类名

- 组件: `link`
- 样式: `link-hover`
- 颜色: `link-neutral` , `link-primary` , `link-secondary` , `link-accent` , `link-success` , `link-info` , `link-warning` , `link-error`

#### 语法

```html
<a class="link {MODIFIER}">Click me</a>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰符类名

### 列表

列表是一个垂直布局，用于按行显示信息

[列表文档](https://daisyui.com/components/list/)

#### 类名：

- 组件： `list` ， `list-row`
- 修饰符： `list-col-wrap` , `list-col-grow`

#### 语法

```html
<ul class="list">
  <li class="list-row">{CONTENT}</li>
</ul>
```

#### 规则

- 使用 `list-row` 为列表中的每个项目
- 默认情况下， `list-row` 的第二个子元素将填充剩余空间。您可以在另一个子元素上使用 `list-col-grow` 来让它填充剩余空间
- 使用 `list-col-wrap` 强制一个元素换行到下一行

### loading

Loading 显示一个动画来指示正在加载

[加载文档](https://daisyui.com/components/loading/)

#### 类名

- 组件: `loading`
- 样式: `loading-spinner` , `loading-dots` , `loading-ring` , `loading-ball` , `loading-bars` , `loading-infinity`
- size: `loading-xs`, `loading-sm`, `loading-md`, `loading-lg`, `loading-xl`

#### 语法

```html
<span class="loading {MODIFIER}"></span>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个样式/尺寸类名称

### 遮罩

遮罩将元素的内容裁剪为常见形状

[遮罩文档](https://daisyui.com/components/mask/)

#### 类名

- component: `mask`
- style: `mask-squircle`, `mask-heart`, `mask-hexagon`, `mask-hexagon-2`, `mask-decagon`, `mask-pentagon`, `mask-diamond`, `mask-square`, `mask-circle`, `mask-star`, `mask-star-2`, `mask-triangle`, `mask-triangle-2`, `mask-triangle-3`, `mask-triangle-4`
- modifier: `mask-half-1`, `mask-half-2`

#### 语法

```html
<img class="mask {MODIFIER}" src="{image-url}" />
```

#### 规则

- {MODIFIER} 是必需的，并且可以是样式/修饰类名称之一
- 您可以使用 `mask` 类名更改任何元素的外形
- 您可以使用 `w-*` 和 `h-*` 设置自定义尺寸

### 菜单

菜单用于垂直或水平显示链接列表

[菜单文档](https://daisyui.com/components/menu/)

#### 类名

- component: `menu`
- part: `menu-title`, `menu-dropdown`, `menu-dropdown-toggle`
- modifier: `menu-disabled`, `menu-active`, `menu-focus`, `menu-dropdown-show`
- size: `menu-xs`, `menu-sm`, `menu-md`, `menu-lg`, `menu-xl`
- 方向: `menu-vertical` , `menu-horizontal`

#### 语法

垂直菜单:

```html
<ul class="menu">
  <li><button>Item</button></li>
</ul>
```

水平菜单:

```html
<ul class="menu menu-horizontal">
  <li><button>Item</button></li>
</ul>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰符/尺寸/方向类名
- 使用 `lg:menu-horizontal` 进行响应式布局
- 使用 `menu-title` 作为列表项标题
- 使用 `<details>` 标签使子菜单可折叠
- 使用 `menu-dropdown` 和 `menu-dropdown-toggle` 通过 JS 切换下拉菜单

### mockup-browser

浏览器模拟图展示了一个看起来像浏览器窗口的方框

[mockup-browser 文档](https://daisyui.com/components/mockup-browser/)

#### 类名

- 组件: `mockup-browser`
- 部分: `mockup-browser-toolbar`

#### 语法

```html
<div class="mockup-browser">
  <div class="mockup-browser-toolbar">{toolbar content}</div>
  <div>{CONTENT}</div>
</div>
```

#### 规则

- 对于默认的模版，只需使用 `mockup-browser` 类名
- 要在工具栏中设置 URL，添加一个带有 `input` 类名的 div

### mockup-code

代码模拟用于在一个看起来像代码编辑器的框中显示代码块

[mockup-code 文档](https://daisyui.com/components/mockup-code/)

#### 类名

- 组件: `mockup-code`

#### 语法

```html
<div class="mockup-code">
  <pre data-prefix="$"><code>npm i daisyui</code></pre>
</div>
```

#### 规则

- 使用 `<pre data-prefix="{prefix}">` 在每一行的前面显示前缀
- 使用 `<code>` 标签添加代码语法高亮（需要额外的库）
- 要突出显示一行，添加背景/文本颜色

### mockup-phone

手机模型展示了一个 iPhone 的模型

[mockup-phone 文档](https://daisyui.com/components/mockup-phone/)

#### 类名

- 组件: `mockup-phone`
- 部分: `mockup-phone-camera` , `mockup-phone-display`

#### 语法

```html
<div class="mockup-phone">
  <div class="mockup-phone-camera"></div>
  <div class="mockup-phone-display">{CONTENT}</div>
</div>
```

#### 规则

- 在 `mockup-phone-display` 内可以添加任何内容

### mockup-window

窗口模型展示了一个看起来像操作系统窗口的方框

[模型窗口文档](https://daisyui.com/components/mockup-window/)

#### 类名

- 组件: `mockup-window`

#### 语法

```html
<div class="mockup-window">
  <div>{CONTENT}</div>
</div>
```

### 模态框

模态框用于在点击按钮时显示对话框或框

[模态框文档](https://daisyui.com/components/modal/)

#### 类名

- 组件: `modal`
- 部分: `modal-box` , `modal-action` , `modal-backdrop` , `modal-toggle`
- 修饰符: `modal-open`
- 位置： `modal-top` , `modal-middle` , `modal-bottom` , `modal-start` , `modal-end`

#### 语法

使用 HTML 对话框元素

```html
<button onclick="my_modal.showModal()">Open modal</button>
<dialog id="my_modal" class="modal">
  <div class="modal-box">{CONTENT}</div>
  <form method="dialog" class="modal-backdrop"><button>close</button></form>
</dialog>
```

使用复选框（旧版）

```html
<label for="my-modal" class="btn">Open modal</label>
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">{CONTENT}</div>
  <label class="modal-backdrop" for="my-modal">Close</label>
</div>
```

使用锚链接（传统方式）

```html
<a href="#my-modal" class="btn">Open modal</a>
<div class="modal" id="my-modal">
  <div class="modal-box">{CONTENT}</div>
</div>
```

#### 规则

- {MODIFIER} 是可选的，可以是修饰类/位置类名称之一
- 添加 `tabindex="0"` 使模态可聚焦
- 为每个模态使用唯一的 ID
- 对于 HTML 对话框元素的模态，添加 `<form method="dialog">` 以通过提交关闭模态

### navbar

导航栏用于在页面顶部显示导航栏

[navbar 文档](https://daisyui.com/components/navbar/)

#### 类名

- 组件: `navbar`
- 部分: `navbar-start` , `navbar-center` , `navbar-end`

#### 语法

```html
<div class="navbar">{CONTENT}</div>
```

#### 规则

- 使用 `navbar-start` , `navbar-center` , `navbar-end` 水平定位内容
- 将任何内容放入每个部分
- 建议 - 使用 `base-200` 作为背景颜色

### 分页

分页是一组按钮

[分页文档](https://daisyui.com/components/pagination/)

#### 类名

- 组件: `join`
- 部分: `join-item`
- 方向: `join-vertical` , `join-horizontal`

#### 语法

```html
<div class="join">{CONTENT}</div>
```

#### 规则

- 分页中的每个按钮或链接使用 `join-item`
- 使用 `btn` 类来样式化分页项

### 进度条

进度条可用于显示任务进度或时间的流逝

[进度条文档](https://daisyui.com/components/progress/)

#### 类名

- 组件: `progress`
- 颜色: `progress-neutral` , `progress-primary` , `progress-secondary` , `progress-accent` , `progress-info` , `progress-success` , `progress-warning` , `progress-error`

#### 语法

```html
<progress class="progress {MODIFIER}" value="50" max="100"></progress>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个颜色类名
- 你必须指定 value 和 max 属性

### radial-progress

径向进度可以用来显示任务进度或时间的流逝

[径向进度条文档](https://daisyui.com/components/radial-progress/)

#### 类名

- 组件: `radial-progress`

#### 语法

```html
<div class="radial-progress" style="--value: 70" aria-valuenow="70" role="progressbar">70%</div>
```

#### 规则

- `--value` CSS 变量和文本必须是 0 到 100 之间的数字
- 你需要添加 `aria-valuenow="{value}"` 、 `aria-valuenow={value}` ，以便屏幕阅读器能够正确读取值，并向他们显示这是一个进度元素
- 使用 `div` 代替 progress，因为浏览器不能在 progress 标签内显示文本
- 使用 `--size` 设置大小（默认 5rem），使用 `--thickness` 设置指示器的厚度

### radio

单选按钮允许用户选择一个选项

[radio 文档](https://daisyui.com/components/radio/)

#### 类名

- 组件: `radio`
- 颜色: `radio-neutral` , `radio-primary` , `radio-secondary` , `radio-accent` , `radio-success` , `radio-warning` , `radio-info` , `radio-error`
- 尺寸: `radio-xs` , `radio-sm` , `radio-md` , `radio-lg` , `radio-xl`

#### 语法

```html
<input type="radio" name="{name}" class="radio {MODIFIER}" />
```

#### 规则

- {MODIFIER} 是可选的，可以有一个尺寸/颜色类名
- 将 {name} 替换为单选组的唯一名称
- 每组单选输入应有唯一的 `name` 属性，以避免与同一页面上其他单选输入组发生冲突

### 范围

范围滑块用于通过滑动手柄选择一个值

[范围文档](https://daisyui.com/components/range/)

#### 类名

- 组件: `range`
- 颜色: `range-neutral` , `range-primary` , `range-secondary` , `range-accent` , `range-success` , `range-warning` , `range-info` , `range-error`
- 尺寸: `range-xs` , `range-sm` , `range-md` , `range-lg` , `range-xl`

#### 语法

```html
<input type="range" min="0" max="100" value="40" class="range {MODIFIER}" />
```

#### 规则

- {MODIFIER} 是可选的，可以有一个颜色/大小类名
- 你必须指定 `min` 和 `max` 属性

### 评分

评分是一组单选按钮，允许用户对某物进行评分

[评分文档](https://daisyui.com/components/rating/)

#### 类名

- component: `rating`
- modifier: `rating-half`, `rating-hidden`
- size: `rating-xs`, `rating-sm`, `rating-md`, `rating-lg`, `rating-xl`

#### 语法

```html
<div class="rating {MODIFIER}">
  <input type="radio" name="rating-1" class="mask mask-star" />
</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰符/尺寸类名
- 每组评分输入应该有唯一的 `name` 属性，以避免与同一页面上的其他评分冲突
- 为第一个单选按钮添加 `rating-hidden` 使其隐藏，以便用户可以清除评分

### select

Select 用于从选项列表中选择一个值

[select docs](https://daisyui.com/components/select/)

#### 类名

- component: `select`
- style: `select-ghost`
- color: `select-neutral`, `select-primary`, `select-secondary`, `select-accent`, `select-info`, `select-success`, `select-warning`, `select-error`
- size: `select-xs`, `select-sm`, `select-md`, `select-lg`, `select-xl`

#### 语法

```html
<select class="select {MODIFIER}">
  <option>Option</option>
</select>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个样式/颜色/大小类名

### 骨架

骨架屏是一个可以用来显示加载状态的组件

[骨架屏文档](https://daisyui.com/components/skeleton/)

#### 类名

- 组件: `skeleton`

#### 语法

```html
<div class="skeleton"></div>
```

#### 规则

- 添加 `h-*` 和 `w-*` 实用类来设置高度和宽度

### 堆叠

堆叠元素在视觉上将其放置在彼此之上

[堆叠文档](https://daisyui.com/components/stack/)

#### 类名：

- 组件： `stack`
- 修饰符: `stack-top` , `stack-bottom` , `stack-start` , `stack-end`

#### 语法

```html
<div class="stack {MODIFIER}">{CONTENT}</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰符类名
- 你可以使用 `w-*` 和 `h-*` 类来设置堆叠的宽度和高度，使所有项目大小相同

### stat

Stat 用于在块中显示数字和数据

[stat docs](https://daisyui.com/components/stat/)

#### 类名

- 组件: `stats`
- 部分: `stat` , `stat-title` , `stat-value` , `stat-desc` , `stat-figure` , `stat-actions`
- 方向: `stats-horizontal` , `stats-vertical`

#### 语法

```html
<div class="stats {MODIFIER}">
  <div class="stat">{CONTENT}</div>
</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个方向类名
- 它默认是水平的，但你可以用 `stats-vertical` 类将其设置为垂直的
- 内容中包含 `stat-title` 、 `stat-value` 、 `stat-desc` ，位于 `stat` 内

### 状态

状态是一个非常小的图标，用于直观地显示元素当前的状态，如在线、离线、错误等

[状态文档](https://daisyui.com/components/status/)

#### 类名：

- 组件： `status`
- 颜色： `status-neutral` , `status-primary` , `status-secondary` , `status-accent` , `status-info` , `status-success` , `status-warning` , `status-error`
- 尺寸： `status-xs` , `status-sm` , `status-md` , `status-lg` , `status-xl`

#### 语法

```html
<span class="status {MODIFIER}"></span>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个颜色/尺寸类名
- 这个组件不会渲染任何可见内容

### 步骤

步骤可用于显示流程中的步骤列表

[步骤文档](https://daisyui.com/components/steps/)

#### 类名：

- 组件: `steps`
- 部分: `step` , `step-icon`
- 颜色: `step-neutral` , `step-primary` , `step-secondary` , `step-accent` , `step-info` , `step-success` , `step-warning` , `step-error`
- 方向: `steps-vertical` , `steps-horizontal`

#### 语法

```html
<ul class="steps {MODIFIER}">
  <li class="step">{step content}</li>
</ul>
```

#### 规则

- {MODIFIER} 是可选的，可以包含每个方向/颜色类名中的一个
- 要使步骤变为活动状态，请添加 `step-primary` 类
- 您可以在每个步骤中添加一个图标，使用 `step-icon` 类
- 要在 `data-content` 中显示数据，请在 `<li>` 使用 `data-content="{value}"`

### 交换

交换允许您使用复选框或类名切换两个元素的可见性

[交换文档](https://daisyui.com/components/swap/)

#### 类名：

- 组件： `swap`
- 部分： `swap-on` , `swap-off` , `swap-indeterminate`
- 修饰符: `swap-active`
- 样式: `swap-rotate` , `swap-flip`

#### 语法

使用复选框

```html
<label class="swap {MODIFIER}">
  <input type="checkbox" />
  <div class="swap-on">{content when active}</div>
  <div class="swap-off">{content when inactive}</div>
</label>
```

使用类名

```html
<div class="swap {MODIFIER}">
  <div class="swap-on">{content when active}</div>
  <div class="swap-off">{content when inactive}</div>
</div>
```

#### 规则

- {MODIFIER} 是可选的，可以是修饰符/样式类名之一
- 仅使用隐藏的复选框来控制交换状态，或使用 JS 添加/移除 `swap-active` 类来控制状态
- 当复选框处于不确定状态时显示内容，使用 `swap-indeterminate` 类

### tab

标签页可用于以标签形式显示链接列表

[tab docs](https://daisyui.com/components/tab/)

#### 类名：

- 组件： `tabs`
- 部分： `tab` , `tab-content`
- 样式： `tabs-box` , `tabs-border` , `tabs-lift`
- 修饰符: `tab-active` , `tab-disabled`
- 位置: `tabs-top` , `tabs-bottom`

#### 语法

使用按钮:

```html
<div role="tablist" class="tabs {MODIFIER}">
  <button role="tab" class="tab">Tab</button>
</div>
```

使用单选按钮输入：

```html
<div role="tablist" class="tabs tabs-box">
  <input type="radio" name="my_tabs" class="tab" aria-label="Tab" />
</div>
```

#### 规则

- {MODIFIER} 是可选的，可以是样式/尺寸类名之一
- 单选按钮输入是标签内容与标签点击配合工作的必要条件
- 如果选项卡获得背景，则它内部的每个选项卡从两个顶部角都变得圆滑

### table

表格可用于以表格格式显示数据列表

[table docs](https://daisyui.com/components/table/)

#### 类名：

- 组件： `table`
- 修饰： `table-zebra` , `table-pin-rows` , `table-pin-cols`
- 尺寸： `table-xs` , `table-sm` , `table-md` , `table-lg` , `table-xl`

#### 语法

```html
<div class="overflow-x-auto">
  <table class="table {MODIFIER}">
    <thead>
      <tr>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th></th>
      </tr>
    </tbody>
  </table>
</div>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰符/尺寸类名
- 给包装 div 添加 `overflow-x-auto` 类，使表格在小屏幕上水平滚动

### textarea

Textarea 允许用户在多行中输入文本

[textarea docs](https://daisyui.com/components/textarea/)

#### 类名：

- 组件: `textarea`
- 样式: `textarea-ghost`
- 颜色: `textarea-neutral` , `textarea-primary` , `textarea-secondary` , `textarea-accent` , `textarea-info` , `textarea-success` , `textarea-warning` , `textarea-error`
- 尺寸: `textarea-xs` , `textarea-sm` , `textarea-md` , `textarea-lg` , `textarea-xl`

#### 语法

```html
<textarea class="textarea {MODIFIER}" placeholder="Bio"></textarea>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个样式/颜色/大小类名

### theme-controller

如果一个页面中存在一个带 theme-controller 类的已勾选的复选框输入或已勾选的带 theme-controller 类的单选框输入，那么页面的主题将与该输入的值相同

[theme-controller 文档](https://daisyui.com/components/theme-controller/)

#### 类名

- component: `theme-controller`

#### 语法

```html
<input type="checkbox" value="{theme-name}" class="theme-controller" />
```

#### 规则

- input 元素的 value 属性应该是有效的 daisyUI 主题名称

### timeline

时间轴组件按时间顺序显示一系列事件

[时间轴文档](https://daisyui.com/components/timeline/)

#### 类名：

- 组件： `timeline`
- 部分： `timeline-start` , `timeline-middle` , `timeline-end`
- 修饰符： `timeline-snap-icon` , `timeline-box` , `timeline-compact`
- 方向： `timeline-vertical` , `timeline-horizontal`

#### 语法

```html
<ul class="timeline {MODIFIER}">
  <li>
    <div class="timeline-start">{start}</div>
    <div class="timeline-middle">{icon}</div>
    <div class="timeline-end">{end}</div>
  </li>
</ul>
```

#### 规则

- {MODIFIER} 是可选的，可以有一个修饰符/方向类名
- 要创建垂直时间线，将 `timeline-vertical` 类添加到 `ul` 元素中，或者什么都不做（因为这是默认样式。）
- 将 `timeline-snap-icon` 添加到将图标吸附到开始而不是中间
- 为所有项目添加 `timeline-compact` 类以强制它们位于一侧

### toast

Toast 是一个用于堆叠元素的包装器，位于页面角落

[toast 文档](https://daisyui.com/components/toast/)

#### 类名：

- 组件： `toast`
- 位置： `toast-start` , `toast-center` , `toast-end` , `toast-top` , `toast-middle` , `toast-bottom`

#### 语法

```html
<div class="toast {MODIFIER}">{CONTENT}</div>
```

#### 规则

- {MODIFIER} 是可选的，可以是放置类名称之一

### 切换

切换是一个样式化为开关按钮的复选框

[切换文档](https://daisyui.com/components/toggle/)

#### 类名：

- 组件： `toggle`
- 颜色： `toggle-primary` , `toggle-secondary` , `toggle-accent` , `toggle-neutral` , `toggle-success` , `toggle-warning` , `toggle-info` , `toggle-error`
- 尺寸： `toggle-xs` , `toggle-sm` , `toggle-md` , `toggle-lg` , `toggle-xl`

#### 语法

```html
<input type="checkbox" class="toggle {MODIFIER}" />
```

#### 规则

- {MODIFIER} 是可选的，可以有一个每种颜色/尺寸类别的名称

### 验证器

验证器类根据输入的验证规则改变表单元素的颜色为错误或成功

[验证器文档](https://daisyui.com/components/validator/)

#### 类名

- 组件: `validator`
- 部分: `validator-hint`

#### 语法

```html
<input type="{type}" class="input validator" required />
<p class="validator-hint">Error message</p>
```

#### 规则

- 与 `input` 、 `select` 、 `textarea` 一起使用
