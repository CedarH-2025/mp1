# 对话记录

## 用户
Modal: A section which uses modal windows with additional content 这个要怎么做？


## assisiant
最简单、最标准的做法是使用 HTML 自带的 <dialog> 元素。比如在 Genetics section 中放一个按钮，点击后弹出包含额外内容的 modal。

1. 修改 HTML

在 .genetics 中加入按钮和 <dialog>：

<div class="genetics" id="genetics">
    <h2>Genetics</h2>

    <p>
        Maize is diploid with 20 chromosomes. Barbara McClintock
        used maize to study jumping genes.
    </p>

    <button id="open-modal" type="button">
        Learn More
    </button>

    <dialog id="genetics-modal">
        <div class="modal-content">
            <h3>Additional Genetics Information</h3>

            <p>
                Barbara McClintock discovered transposable elements
                through her research on maize chromosomes. She received
                the Nobel Prize in Physiology or Medicine in 1983.
            </p>

            <button id="close-modal" type="button">
                Close
            </button>
        </div>
    </dialog>
</div>

Learn More 按钮是入口；<dialog> 里的文字就是题目所说的 additional content。

2. 添加 SCSS

可以放在 .genetics 中：

.genetics {
    // 你原来的其他样式……

    #open-modal {
        margin-top: 20px;
        padding: 10px 20px;
        cursor: pointer;
    }

    dialog {
        width: min(500px, 80%);
        padding: 0;
        border: none;
        border-radius: 10px;

        .modal-content {
            padding: 30px;

            p {
                width: auto;
                margin: 20px 0;
            }
        }

        #close-modal {
            padding: 8px 18px;
            cursor: pointer;
        }
    }

    dialog::backdrop {
        background-color: rgba(0, 0, 0, 0.6);
    }
}

这里：

dialog::backdrop

控制弹窗后面的半透明黑色遮罩。

width: min(500px, 80%);

表示弹窗最大宽度为 500px，小屏幕上最多占窗口宽度的 80%。

3. 添加 JavaScript

在你的 JavaScript 文件中加入：

const modal = document.querySelector("#genetics-modal");
const openModalButton = document.querySelector("#open-modal");
const closeModalButton = document.querySelector("#close-modal");

openModalButton.addEventListener("click", () => {
    modal.showModal();
});

closeModalButton.addEventListener("click", () => {
    modal.close();
});

关键是：

modal.showModal();

打开模态窗口，并阻止用户操作后面的页面内容。

modal.close();

关闭模态窗口。

不要使用：

modal.show();

因为 show() 只会显示普通 dialog，不会真正进入 modal 状态。作业要求的是 modal，所以应该使用 showModal()。

4. 点击黑色背景关闭

这是可选功能，但体验更完整：

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.close();
    }
});

浏览器本身已经支持按 Esc 关闭 <dialog>，所以不需要额外监听键盘。

如何验证

刷新网页后检查：

页面正常显示，弹窗默认不可见。
点击 Learn More，弹窗出现在窗口中央。
弹窗后面的页面变暗。
弹窗打开时，不能点击后面的页面内容。
点击 Close 可以关闭。
按键盘 Esc 可以关闭。
改变浏览器尺寸后，弹窗仍在窗口中央，并且不会超出屏幕。