# Python Matplotlib 入门指南

## 1. Matplotlib 简介与核心概念

Matplotlib 是 Python 生态中最基础且功能强大的 2D 绘图库。为了严谨地使用它，我们需要首先理解其核心架构中的两个关键概念：

- **Figure (画布)**: 整个图形的容器，可以理解为一张白纸。它包含了所有的子图、标题、图例等元素。
- **Axes (坐标系/子图)**: 实际绘图的区域。一个 Figure 可以包含一个或多个 Axes。大多数绘图操作（如画线、设置标题、设置坐标轴）都是在 Axes 对象上进行的。

> **注意**：初学者常混淆 `plt.plot()`（状态机模式）和 `ax.plot()`（面向对象模式）。本教程将严格使用 **面向对象模式**，因为它在处理复杂图表时逻辑更清晰，控制力更强。

## 2. 环境准备

确保已安装 `matplotlib` 和 `numpy`（用于生成数据）。

```powershell
pip install matplotlib numpy
```

在代码中引入标准缩写：

```python
import matplotlib.pyplot as plt
import numpy as np
```

## 3. 标准绘图流程

一个严谨的绘图脚本通常遵循以下五个步骤：

1. **准备数据** (Prepare Data)
2. **创建画布与坐标系** (Setup Plot)
3. **绘制图形** (Plot)
4. **定制样式** (Customize)
5. **保存或显示** (Save/Show)

### 示例代码：绘制基础折线图

下面的代码展示了如何绘制一个包含正弦和余弦波形的图表，并添加图例、网格和标题。

```python
import matplotlib.pyplot as plt
import numpy as np

# 1. 准备数据
x = np.linspace(0, 10, 100)  # 在 0 到 10 之间生成 100 个点
y_sin = np.sin(x)
y_cos = np.cos(x)

# 2. 创建画布 (Figure) 和 坐标系 (Axes)
# figsize 定义画布大小 (宽, 高)，单位为英寸
# dpi 定义分辨率 (dots per inch)
fig, ax = plt.subplots(figsize=(10, 6), dpi=100)

# 3. 绘制图形
# label 参数用于后续生成图例
ax.plot(x, y_sin, label='Sin(x)', color='blue', linewidth=2, linestyle='-')
ax.plot(x, y_cos, label='Cos(x)', color='red', linewidth=2, linestyle='--')

# 4. 定制样式
ax.set_title("Trigonometric Functions Example", fontsize=16)  # 设置标题
ax.set_xlabel("Time (s)", fontsize=12)                        # 设置 X 轴标签
ax.set_ylabel("Amplitude", fontsize=12)                       # 设置 Y 轴标签
ax.set_xlim(0, 10)                                            # 设置 X 轴范围
ax.set_ylim(-1.5, 1.5)                                        # 设置 Y 轴范围
ax.grid(True, linestyle=':', alpha=0.6)                       # 添加网格 (虚线, 透明度 0.6)
ax.legend(loc='upper right', frameon=True)                    # 显示图例

# 5. 显示或保存
# plt.savefig('my_plot.png', dpi=300)  # 保存为高分辨率图片
plt.show()                             # 在窗口显示
```

------

## 4. 多子图绘制 (Subplots)

在数据分析中，我们经常需要对比多个图表。`plt.subplots()` 是管理多子图布局的最佳工具。

### 示例代码：2x2 子图布局

```python
import matplotlib.pyplot as plt
import numpy as np

# 数据准备
x = np.arange(0, 5, 0.1)

# 创建 2 行 2 列的子图布局
# ax 是一个包含 4 个 Axes 对象的 numpy 数组
fig, axes = plt.subplots(nrows=2, ncols=2, figsize=(12, 8))

# 调整子图之间的间距，防止标签重叠
plt.subplots_adjust(wspace=0.3, hspace=0.3)

# --- 绘制子图 1 (左上) ---
# axes[0, 0] 访问第一行第一列
axes[0, 0].plot(x, x**2, 'g-')
axes[0, 0].set_title('Quadratic')
axes[0, 0].set_ylabel('y = x^2')

# --- 绘制子图 2 (右上) ---
axes[0, 1].plot(x, x**3, 'm--')
axes[0, 1].set_title('Cubic')
axes[0, 1].set_ylabel('y = x^3')

# --- 绘制子图 3 (左下) ---
axes[1, 0].scatter(x, x + np.random.normal(0, 0.5, len(x)), color='orange', s=10)
axes[1, 0].set_title('Scatter Plot')

# --- 绘制子图 4 (右下) ---
categories = ['A', 'B', 'C', 'D']
values = [10, 24, 36, 18]
axes[1, 1].bar(categories, values, color='skyblue', edgecolor='black')
axes[1, 1].set_title('Bar Chart')

# 统一设置所有子图的字体大小 (可选)
for ax in axes.flat:
    ax.tick_params(labelsize=10)

plt.show()
```

------

## 5. 高级定制与严谨性建议

### 5.1 支持中文显示

Matplotlib 默认不支持中文，需要手动设置字体。

```python
plt.rcParams['font.sans-serif'] = ['SimHei']  # 用来正常显示中文标签
plt.rcParams['axes.unicode_minus'] = False    # 用来正常显示负号
```

### 5.2 双坐标轴 (Twin Axis)

当两个变量量纲不同（例如：温度和降雨量）时，需要使用双 Y 轴。

```python
fig, ax1 = plt.subplots()

color = 'tab:red'
ax1.set_xlabel('X axis')
ax1.set_ylabel('Exp Data', color=color)
ax1.plot(x, np.exp(x), color=color)
ax1.tick_params(axis='y', labelcolor=color)

# 实例化第二个坐标轴，共享同一个 X 轴
ax2 = ax1.twinx()  

color = 'tab:blue'
ax2.set_ylabel('Log Data', color=color)
ax2.plot(x, np.log(x + 1), color=color)
ax2.tick_params(axis='y', labelcolor=color)

fig.tight_layout()  # 自动调整布局
plt.show()
```

------

## 6. 总结

要熟练且严谨地使用 Matplotlib，请遵循以下原则：

1. **始终使用 `fig, ax = plt.subplots()`**：这能让你明确地区分“画布”和“绘图区”，在处理多子图时不会混乱。
2. **数据与绘图分离**：先处理好 Numpy/Pandas 数据，再传入绘图函数，不要在绘图代码中进行复杂的数据清洗。
3. **显式设置参数**：尽量显式地设置颜色 (`color`)、线型 (`linestyle`) 和 标签 (`label`)，这会提高代码的可读性和可维护性。