# LaTeX 详细入门教程

LaTeX 是一种基于 TeX 的排版系统，特别适合生成高质量的科技和数学类文档。不同于 Word 的“所见即所得”，LaTeX 是“所想即所得”，通过编写代码来控制文档的结构和样式。

## 1. 文档基本结构 (Document Structure)

每一个 LaTeX 文档都由**导言区 (Preamble)** 和 **正文区 (Body)** 组成。

### 基础骨架

```latex
% 声明文档类型 (article, report, book, beamer 等)
\documentclass[12pt, a4paper]{article}

% --- 导言区 (Preamble) ---
% 在这里导入宏包、定义命令、设置页边距等

\usepackage[utf8]{inputenc} % 编码设置
\usepackage{amsmath}        % 数学公式宏包
\usepackage{geometry}       % 页面设置宏包

\title{LaTeX 学习笔记}       % 标题
\author{您的名字}            % 作者
\date{\today}               % 日期

% --- 正文区 (Body) ---
\begin{document}

\maketitle % 生成标题页

Hello, World! 这是我的第一个 LaTeX 文档。

\end{document}
```

## 2. 文本排版 (Text Formatting)

### 字体样式与大小

```latex
% 字体样式
\textbf{加粗文本}          % Bold
\textit{斜体文本}          % Italic
\underline{下划线文本}     % Underline
\texttt{等宽字体(代码感)}   % Typewriter

% 字体大小 (从微小到巨大)
\tiny
\scriptsize
\footnotesize
\small
\normalsize (默认)
\large
\Large
\LARGE
\huge
\Huge
```

### 段落与换行

在 LaTeX 中，**一次回车**会被视为空格，**两次回车**（空一行）才会被视为新段落。

```latex
这是第一段的内容。
% 这里的换行不会在输出中体现

这是第二段的内容。% 空一行表示新段落

如果你需要强制换行但不分段，\\
请在行尾使用双反斜杠。\\
```

## 3. 文档章节结构 (Sectioning)

LaTeX 会自动处理章节编号和目录生成。

```latex
\tableofcontents % 自动生成目录
\newpage         % 换页

\section{一级标题}
这里是第一章的内容。

\subsection{二级标题}
这里是子章节的内容。

\subsubsection{三级标题}
更深层级的标题。

\section*{不带编号的标题}
使用星号 * 可以创建不带自动编号的章节（如“前言”）。
```

## 4. 数学公式 (Mathematics)

这是 LaTeX 最强大的功能。你需要确保在导言区加载了 `\usepackage{amsmath}` 和 `\usepackage{amssymb}`。

### 行内与行间公式

```latex
% 行内公式：使用 $ 符号包裹
根据牛顿第二定律，我们知道 $F = ma$ 是基础力学公式。

% 行间公式（不带编号）：使用 \[ \] 或 $$ $$
质量能量方程如下：
\[
  E = mc^2
\]

% 行间公式（带编号，用于引用）：使用 equation 环境
\begin{equation}
  e^{i\pi} + 1 = 0
  \label{eq:euler} % 添加标签以便引用
\end{equation}

如公式 \ref{eq:euler} 所示...
```

### 常用数学符号

```latex
% 上下标
x^{2}       % 上标
a_{i}       % 下标
x_{i}^{2}   % 混合使用

% 分数与根号
\frac{a}{b} % 分数 a/b
\sqrt{x}    % 平方根
\sqrt[3]{x} % 三次方根

% 希腊字母
\alpha, \beta, \gamma, \theta, \pi, \Omega, \Delta

% 积分与求和
\int_{0}^{\infty} f(x) dx
\sum_{i=1}^{n} i^2
\lim_{x \to 0} \frac{\sin x}{x}

% 矩阵
\begin{bmatrix}
  1 & 2 \\
  3 & 4
\end{bmatrix}
```

### 多行公式推导 (Align)

使用 `align` 环境可以对齐多行公式（通常在等号处对齐）。

```latex
\begin{align}
  (a + b)^2 &= (a + b)(a + b) \\  % \\ 表示换行
            &= a^2 + ab + ba + b^2 \\
            &= a^2 + 2ab + b^2
\end{align}
```

## 5. 列表 (Lists)

### 无序列表 (Itemize)

```latex
\begin{itemize}
  \item Python
  \item C/C++
  \item MATLAB
\end{itemize}
```

### 有序列表 (Enumerate)

```latex
\begin{enumerate}
  \item 第一步：初始化
  \item 第二步：数据处理
  \item 第三步：输出结果
\end{enumerate}
```

## 6. 插入图片 (Images)

需要在导言区使用 `\usepackage{graphicx}`。

```latex
\begin{figure}[htbp] % h:here, t:top, b:bottom, p:page
  \centering % 图片居中
  % \includegraphics[width=0.8\textwidth]{filename.png}
  % 实际使用时去掉注释并替换 filename.png 为你的图片路径
  \caption{这是图片的标题} % 图片下方的说明
  \label{fig:my_image}   % 用于文中引用的标签
\end{figure}

如图 \ref{fig:my_image} 所示...
```

## 7. 插入表格 (Tables)

基础表格通常使用 `tabular` 环境。

```latex
\begin{table}[h]
  \centering
  \caption{实验数据对比}
  % |c|c|c| 表示三列，内容居中，列之间有竖线
  \begin{tabular}{|c|c|c|}
    \hline              % 画一条横线
    参数 & 实验组 & 对照组 \\
    \hline
    速度 (m/s) & 1.5 & 1.2 \\
    误差 (\%) & 0.05 & 0.12 \\
    \hline
  \end{tabular}
\end{table}
```

## 8. 代码块高亮 (Code Listing)

要在文档中展示代码，推荐使用 `listings` 宏包。

```latex
% 导言区设置
\usepackage{listings}
\lstset{
  language=C,                % 代码语言
  basicstyle=\ttfamily,      % 字体
  keywordstyle=\color{blue}, % 关键字颜色
  frame=single               % 给代码加边框
}

% 正文区使用
\begin{lstlisting}
#include <stdio.h>

int main() {
    printf("Hello LaTeX\n");
    return 0;
}
\end{lstlisting}
```

## 9. 参考文献 (Bibliography)

学术写作中通常使用 BibTeX 管理文献。

1. 创建一个 `.bib` 文件（例如 `ref.bib`）：

```latex
@article{einstein,
    author = "Albert Einstein",
    title = "{Zur Elektrodynamik bewegter K{\"o}rper}. ({German})
    [{On} the electrodynamics of moving bodies]",
    journal = "Annalen der Physik",
    volume = "322",
    number = "10",
    pages = "891--921",
    year = "1905",
    DOI = "http://dx.doi.org/10.1002/andp.19053221004"
}
```

1. 在主 `.tex` 文件中引用：

```latex
如 Einstein 在其论文中提到的 \cite{einstein} ...

\bibliographystyle{plain} % 参考文献样式 (plain, ieeetr, alpha 等)
\bibliography{ref}        % 导入 ref.bib 文件
```

# 附录：以下是针对不同需求的详细安装指南：

## 方案一：在线使用 (最推荐初学者)

如果您不想下载几 GB 的安装包，或者电脑配置一般，这是最佳选择。

### **Overleaf**

- **安装步骤**：
  1. 访问官网：[www.overleaf.com](https://www.overleaf.com/)
  2. 点击 "Register" 注册账号（支持 Google 邮箱或国内邮箱）。
  3. 登录后点击 "New Project" -> "Blank Project" 即可开始。
- **优点**：零配置，模板丰富，支持多人协作。
- **缺点**：断网无法使用，免费版有编译时长限制（写超大论文时可能会慢）。

------

## 方案二：Windows 本地安装

### 第一步：安装编译器 (TeX Live)

*这是官方推荐的发行版，虽然体积大（约 5-8GB），但最全最稳定。*

1. **下载**：
   - 访问 TUG 官网：[Installing TeX Live over the Internet](https://www.tug.org/texlive/acquire-netinstall.html)
   - 点击下载 `install-tl-windows.exe`。
   - *提示：如果官网慢，推荐使用国内镜像站（如清华大学开源软件镜像站），搜索 "清华镜像 TeX Live" 下载 `.iso` 镜像文件会更快。*
2. **安装**：
   - **如果是 .exe**：右键以管理员身份运行，按照提示一直点击 "Next/Install"。
   - **如果是 .iso**：Windows 10/11 双击挂载镜像，运行里面的 `install-tl-windows.bat`。
   - **注意**：安装过程非常长（可能需要 1-2 小时），请耐心等待直到出现 "Welcome to TeX Live!" 提示。

### 第二步：安装编辑器 (TeXstudio)

*TeXstudio 是专门为 LaTeX 设计的，开箱即用。*

1. 访问官网：[www.texstudio.org](https://www.texstudio.org/)
2. 下载 Windows 安装包并安装。
3. 打开 TeXstudio，点击菜单栏 `Options` -> `Configure TeXstudio` -> `Build`，确认它自动识别到了 TeX Live（通常会自动配置好）。

------

## 方案三：macOS 本地安装

### 第一步：安装编译器 (MacTeX)

MacTeX 是 TeX Live 的 macOS 专用版本。

1. **下载**：
   - 访问官网：[www.tug.org/mactex](https://www.google.com/search?q=https://www.tug.org/mactex)
   - 点击 "MacTeX Download" 下载 `.pkg` 文件（约 5GB+）。
2. **安装**：
   - 双击下载的 `.pkg` 文件，像安装普通 Mac 软件一样一路 "继续"。
3. **附带软件**：安装完成后，你的 "应用程序" 文件夹里会出现一个 `TeX` 文件夹，里面自带一个叫 **TeXShop** 的简易编辑器。

### 第二步：安装编辑器

- 你可以直接使用自带的 TeXShop。
- 或者下载 **TeXstudio** (macOS 版) 获得更好的体验。

------

## 方案四：进阶组合 (VS Code + LaTeX Workshop)

如果您是程序员或喜欢高颜值的界面，**VS Code** 是目前最流行的选择，但配置稍繁琐。

**前提：必须先完成上面的“第一步”，安装好 TeX Live 或 MacTeX。**

1. **安装 VS Code**：
   - 去 [code.visualstudio.com](https://code.visualstudio.com/) 下载并安装。
2. **安装插件**：
   - 打开 VS Code。
   - 点击左侧侧边栏的“扩展 (Extensions)”图标（四个方块）。
   - 搜索 `LaTeX Workshop` (作者是 James Yu)。
   - 点击 Install。
3. **使用方法**：
   - 新建一个文件，保存为 `test.tex`。
   - 输入 LaTeX 代码。
   - 保存文件 (`Ctrl+S` 或 `Cmd+S`)，插件会自动开始编译。
   - 点击右上角的 PDF 图标（View LaTeX PDF），即可在右侧预览。

------

## 总结建议

- **我是纯小白，只想写个作业/简历** $\rightarrow$ **Overleaf** (不用折腾，马上能用)
- **我要写毕业论文，电脑是 Windows** $\rightarrow$ **TeX Live + TeXstudio** (稳定，教程多)
- **我是码农，本来就用 VS Code** $\rightarrow$ **TeX Live + VS Code** (快捷键和插件爽)