# 对话记录

## 用户

按照implementation tip做吧。请教给我应该怎么写。这是我当前的代码：

```scss
/* Your SCSS here. */
$ui_color: #3c5629;
$main_color: #cbdeb3;

body{
    margin: 0px;
    padding: 0px;

    header{
        margin: 0px;
        position: sticky;
        top: 0;
        nav{
            background-color: $ui_color;
            height: 60px;
            color: azure;
            display: flex;
            justify-content: space-between;
            margin-top: 0px;
            margin-bottom: 0px;
            align-items: center;

            .navigate{
                color: azure;
                font-weight: bold;

                &.active{
                    color:#d2a915;
                }
            }
        }

    }

    div, h1, h3, p{
        margin-top: 0px;
        margin-bottom: 0px;
    }

    .intro{
        background-color: $main_color;
        img{
            width: 30%;
            height: auto;
        }
        scroll-margin-top: 60px;
    }

    .description{
        background-color: azure;
        scroll-margin-top: 60px;
    }

    .genetics{
        background-color: $main_color;
        scroll-margin-top: 60px;
    }

    .uses{
        background-color: azure;
        scroll-margin-top: 60px;
    }

    footer{
        background-color: $ui_color;
        text-align: center;
        color: azure;
    }
}
```

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>MP1</title>
    </head>

    <body>
        <header>
            <nav>
                <h1>Maize</h1>
                <div class="navigate">
                    <a class="navigate" href="#intro">Introduction</a>
                    <a class="navigate" href="#description">Description</a>
                    <a class="navigate" href="#genetics">Genetics</a>
                    <a class="navigate" href="#uses">Uses</a>
                </div>
            </nav>
        </header>

        <div class="intro" id="intro">
            <h1>MAIZE</h1>
            <img src="assets/head.jpg">
            <p>Maize, also known as corn, is a tall stout grass that produces cereal grain. The leafy stalk of the plant gives rise to male inflorescences or tassels which produce pollen, and female inflorescences called ears. The ears yield grain, known as kernels or seeds. In modern commercial varieties, these are usually yellow or white; other varieties can be of many colors. Maize was domesticated by indigenous peoples in southern Mexico about 9,000 years ago from wild teosinte.[2] Native Americans planted it alongside beans and squashes in the Three Sisters polyculture.</p>
            <p>Maize relies on humans for its propagation. Since the Columbian exchange, it has become a staple food in many parts of the world, with the total production of maize surpassing that of wheat and rice. Much maize is used for animal feed, whether as grain (fodder) or as the whole plant, which can either be baled as forage or made into the more palatable silage. Sugar-rich varieties called sweet corn are grown for human consumption, while field corn varieties are used for animal feed, for uses such as cornmeal or masa, corn starch, corn syrup, pressing into corn oil, alcoholic beverages like bourbon whiskey, and as chemical feedstocks including ethanol and other biofuels.</p>
        </div>

        <div class="description" id="description">
            <h3>Description</h3>
            <p>Maize is a tall annual grass with a single stem, ranging in height from 1.2 to 4 m (4 to 13 ft).[3] The long narrow leaves arise from the nodes or joints, alternately on opposite sides on the stalk.[3] Maize is monoecious, with separate male and female flowers on the same plant.[3] At the top of the stem is the tassel, an inflorescence of male flowers; their anthers release pollen, which is dispersed by wind.[3] The female inflorescence, some way down the stem from the tassel, is first seen as a silk, a bundle of soft tubular hairs, one for the carpel in each female flower, which develops into a kernel (often called a seed. Botanically, as in all grasses, it is a fruit, fused with the seed coat to form a caryopsis)[4] when it is pollinated.[3] A whole female inflorescence develops into an ear or corncob, enveloped by multiple leafy layers or husks.[3] The ear leaf is the leaf most closely associated with a particular developing ear. This leaf and those above it contribute over three quarters of the carbohydrate (starch) that fills the grain.[5]</p>
            <p>The grains are usually yellow or white in modern varieties; other varieties have orange, red, brown, blue, purple, or black grains. They are arranged in 8 to 32 rows around the cob; there can be up to 1200 grains on a large cob.[6] Yellow maizes derive their color from carotenoids; red maizes are colored by anthocyanins and phlobaphenes; and orange and green varieties may contain combinations of these pigments.[7]</p>
            <p>Maize has short-day photoperiodism, meaning that it requires nights of a certain length to flower. Flowering further requires enough warm days above 10 °C (50 °F). The control of flowering is set genetically; the physiological mechanism involves the phytochrome system. Tropical cultivars can be problematic if grown in higher latitudes, as the longer days can make the plants grow tall instead of setting seed before winter comes. On the other hand, growing tall rapidly could be convenient for producing biofuel.[</p>
            <p>Immature maize shoots accumulate a powerful antibiotic substance, 2,4-dihydroxy-7-methoxy-1,4-benzoxazin-3-one (DIMBOA), which provides a measure of protection against a wide range of pests.[8] Because of its shallow roots, maize is susceptible to droughts, intolerant of nutrient-deficient soils, and prone to being uprooted by severe winds.[9]</p>
        </div>

        <div class="genetics" id="genetics">
            <h3>Genetics</h3>
            <p>Maize is diploid with 20 chromosomes. 83% of allelic variation within the genome derives from its teosinte ancestors, primarily due to the freedom of Zea species to outcross.[11] Barbara McClintock used maize to validate her transposon theory of "jumping genes", for which she won the 1983 Nobel Prize in Physiology or Medicine.[12] Maize remains an important model organism for genetics and developmental biology.[13] The MADS-box motif is involved in the development of maize flowers.</p>
            <img src="assets/GEM_corn.jpg">
            <p>The Maize Genetics and Genomics Database is funded by the United States Department of Agriculture (USDA) to support maize research.[15] The International Maize and Wheat Improvement Center maintains a large collection of maize accessions tested and cataloged for insect resistance.[16] In 2005, the U.S. National Science Foundation, the USDA, and the Department of Energy formed a consortium to sequence the maize genome. The resulting DNA sequence data was deposited immediately into GenBank, a public repository for genome-sequence data.[17] Sequencing of the maize genome was completed in 2008.[18] In 2009, the consortium published results of its sequencing effort.[19] The genome, 85% of which is composed of transposons, contains 32,540 genes. Much of it has been duplicated and reshuffled by helitrons, a group of transposable elements within maize's DNA</p>
        </div>

        <div class="uses" id="uses">
            <h3>Uses</h3>
            <p>uses</p>

        </div>

        <footer>
            <p>Source: <a href="https://en.wikipedia.org/wiki/Maize">https://en.wikipedia.org/wiki/Maize</a></p>
        </footer>
    </body>
</html>
```

## Assistant

可以。按题目的 implementation tip，你现在要写的 JavaScript 逻辑是：

1. 找到导航栏、四个导航链接和四个内容区域。
2. 滚动时取得导航栏下边缘的位置。
3. 依次检查哪个区域包含这条边缘。
4. 清除原来的 `active`。
5. 给对应导航链接添加 `active`。
6. 到达页面底部时，强制高亮最后一个链接。

先看完整结构，然后我们逐段拆开：

```js
const nav = document.querySelector("nav");

const links = document.querySelectorAll("a.navigate");

const sections = document.querySelectorAll(
    "#intro, #description, #genetics, #uses"
);

function updateNavigation() {
    const navBottom = nav.getBoundingClientRect().bottom;
    let activeIndex = 0;

    sections.forEach(function(section, index) {
        const sectionPosition = section.getBoundingClientRect();

        if (
            sectionPosition.top <= navBottom &&
            sectionPosition.bottom > navBottom
        ) {
            activeIndex = index;
        }
    });

    const atPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 1;

    if (atPageBottom) {
        activeIndex = links.length - 1;
    }

    links.forEach(function(link) {
        link.classList.remove("active");
    });

    links[activeIndex].classList.add("active");
}

window.addEventListener("scroll", updateNavigation);
window.addEventListener("resize", updateNavigation);

updateNavigation();
```

### 1. 找到需要使用的 HTML 元素

```js
const nav = document.querySelector("nav");
```

找到你的 `<nav>`，因为之后需要取得它的下边缘位置。

```js
const links = document.querySelectorAll("a.navigate");
```

找到四个导航链接。

这里要写 `a.navigate`，而不是只写 `.navigate`。因为你的 HTML 中外层 `<div>` 也有 `navigate`：

```html
<div class="navigate">
    <a class="navigate">...</a>
</div>
```

如果只写：

```js
document.querySelectorAll(".navigate");
```

就会找到五个元素：一个 `<div>` 加四个 `<a>`，序号就会错位。

`a.navigate` 的意思是：

> 找到所有具有 `navigate` class 的 `<a>` 元素。

然后找到四个内容区域：

```js
const sections = document.querySelectorAll(
    "#intro, #description, #genetics, #uses"
);
```

逗号表示同时选择这四个元素。它们会按照 HTML 中出现的顺序保存：

```text
sections[0] → intro
sections[1] → description
sections[2] → genetics
sections[3] → uses
```

导航链接也正好是相同顺序：

```text
links[0] → Introduction
links[1] → Description
links[2] → Genetics
links[3] → Uses
```

因此可以用相同的 `index` 把它们对应起来。

---

### 2. 创建更新导航栏的函数

```js
function updateNavigation() {
    // 每次滚动时要做的事情
}
```

先取得导航栏下边缘：

```js
const navBottom = nav.getBoundingClientRect().bottom;
```

你的导航栏虽然设置了 `height: 60px`，但这里没有直接写死 `60`。这样以后即使导航栏高度改变，JavaScript 仍然能够正常工作。

再准备一个变量，记录应该高亮第几个链接：

```js
let activeIndex = 0;
```

`let` 表示这个变量之后可以改变。最开始设置为 `0`，也就是默认高亮第一个链接。

---

### 3. 检查每一个 section

```js
sections.forEach(function(section, index) {
    // 检查当前这个 section
});
```

`forEach` 表示依次处理集合中的每一个元素。

每次执行时：

- `section` 是当前正在检查的内容区域；
- `index` 是它的序号：`0`、`1`、`2` 或 `3`。

取得当前 section 的位置：

```js
const sectionPosition = section.getBoundingClientRect();
```

然后进行你前面总结的判断：

```js
if (
    sectionPosition.top <= navBottom &&
    sectionPosition.bottom > navBottom
) {
    activeIndex = index;
}
```

意思是：

```text
section 顶部在导航栏下边缘上方
并且
section 底部在导航栏下边缘下方
```

如果成立，导航栏下边缘就在这个 section 里面，于是把它的序号保存下来。

---

### 4. 单独判断页面底部

```js
const atPageBottom =
    window.scrollY + window.innerHeight >=
    document.documentElement.scrollHeight - 1;
```

这里分别是：

```text
window.scrollY
页面已经向下滚动的距离

window.innerHeight
浏览器窗口可见区域的高度

document.documentElement.scrollHeight
整个页面的总高度
```

`- 1` 是留出一个像素的误差，避免浏览器的小数计算导致判断失败。

如果已经到底：

```js
if (atPageBottom) {
    activeIndex = links.length - 1;
}
```

`links.length` 是链接数量，也就是 `4`。但是 JavaScript 的序号从 `0` 开始：

```text
第一个：0
第二个：1
第三个：2
第四个：3
```

所以最后一个链接的序号是：

```js
links.length - 1
```

也就是 `3`。

---

### 5. 移动 `active`

先从所有链接上移除 `active`：

```js
links.forEach(function(link) {
    link.classList.remove("active");
});
```

然后给当前链接添加：

```js
links[activeIndex].classList.add("active");
```

假设 `activeIndex` 是 `2`，这句话操作的就是：

```js
links[2]
```

也就是 `Genetics` 链接。

此时浏览器中的 HTML 状态相当于：

```html
<a class="navigate active" href="#genetics">Genetics</a>
```

你的 SCSS 就会匹配：

```scss
.navigate {
    color: azure;

    &.active {
        color: #d2a915;
    }
}
```

---

### 6. 让它在滚动时执行

```js
window.addEventListener("scroll", updateNavigation);
```

意思是：

> 每次窗口发生滚动，就执行 `updateNavigation`。

再监听窗口尺寸变化：

```js
window.addEventListener("resize", updateNavigation);
```

因为窗口大小变化可能改变 section 的位置和页面是否到底。

最后主动执行一次：

```js
updateNavigation();
```

否则它只会在第一次滚动以后才开始高亮。主动调用一次可以确保页面刚打开时，`Introduction` 就已经处于高亮状态。

如果你使用单独的 JavaScript 文件，需要确认它已经被 HTML 引入。普通 HTML 项目可以在 `</body>` 前添加：

```html
<script src="你的JavaScript文件路径"></script>
```

如果作业模板已经通过 Webpack 自动导入 JavaScript，就把这段逻辑放进模板现有的 JS 入口文件，不需要再手动添加 `<script>`。


User:

Smooth Scrolling: Smooth scrolling when navigating to a different section using the navigation bar
The example is here:5.gif (800×435)
We need to scroll to the position instead of directly move to the section

Assistant:

对，这个要求就是：点击导航链接后，页面不要瞬间跳到目标 section，而是以动画方式滚动过去。

你目前的 HTML 已经具备锚点导航所需的对应关系：

<a href="#genetics">Genetics</a>

对应：

<div id="genetics">

因此不需要自己用 JavaScript 计算滚动过程，只需在 SCSS 最外层加入：

html {
    scroll-behavior: smooth;
}

注意把它放在 body 外面：

html {
    scroll-behavior: smooth;
}

body {
    margin: 0px;
    padding: 0px;

    // 你原来的样式
}

之后点击：

<a class="navigate" href="#genetics">Genetics</a>

浏览器就会平滑滚动到：

<div class="genetics" id="genetics">

你已经给 section 设置了：

scroll-margin-top: 60px;

这个也要保留。它的作用是给目标位置预留导航栏高度，避免滚动完成后，section 标题被固定的导航栏挡住。

整个过程是：

点击链接
→ 浏览器读取 href="#genetics"
→ 找到 id="genetics" 的元素
→ 根据 scroll-behavior 平滑滚动
→ 根据 scroll-margin-top 在导航栏下面留出 60px

所以这个功能只需要新增：

html {
    scroll-behavior: smooth;
}

不需要新的 JavaScript。你现有的 Position Indicator 和 Navbar Resizing 会在平滑滚动过程中继续接收 scroll 事件，所以高亮和导航栏大小也会随滚动自动更新。
