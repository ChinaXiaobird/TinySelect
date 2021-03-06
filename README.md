# TinySelect :disappointed: :disappointed: 不好意思，此项目已停止维护 :disappointed: :disappointed:

TinySelect 是一个以灵活为目标的WEB下拉组件。旨在通过灵活的接口和用法，适应各种不同的场景

- 单选/多选
- 支持直接从`select`元素渲染
- 提供过滤框以通过关键字简单过滤数据
- 编程显示/隐藏下拉框
- 编程过滤数据，可以是关键字或函数
- 支持`select`、`unselect`事件
- 支持设置初始值
- 支持后加载数据/重新加载数据
- 编程设置下拉组件只读属性
- 丰富的初始化选项，并且可以通过选项设置样式
- 提供多种渲染器的自定义支持，如：下拉项，header，footer和选中结果
- 可以设置部分数据的显示模板
- 支持数据项的异步渲染
- 支持多种显示模式：下拉(dropdown, 默认)、列表(list)、弹出(popup)
- 支持多种数据项布局：列表(list, 默认)、网格(grid)、表格(table)
- 支持键盘操作移动与选择项

## 快速上手

将`dist`目录复制到你的项目中，然后在页面上添加引用

```html
<link rel="stylesheet" type="text/css" href="dist/tinyselect.min.css" />
<script type="text/javascript" src="dist/tinyselect.min.js" />
```

HTML结构
```html
<div id="tinyselectcontext"></div>
```
或
```html
<select id="tinyselectcontext">
    <optgroup label="1-2">
        <option>1</option>
        <option value="2">二</option>
    </optgroup>
    <optgroup label="3-5">
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="伍">五</option>
    </optgroup>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
</select>
```

数据
```javascript
var data = [{
    "id": 0,
    "text": "一月"
    }, {
        "id": 1,
        "text": "二月"
    }, {
        "id": 2,
        "text": "三月"
    }, {
        "id": 3,
        "text": "四月"
    }, {
        "id": 4,
        "text": "五月"
    }, {
        "id": 5,
        "text": "六月"
    }, {
        "id": 6,
        "text": "七月"
    }, {
        "id": 7,
        "text": "八月"
    }, {
        "id": 8,
        "text": "九月"
    }, {
        "id": 9,
        "text": "十月"
    }, {
        "id": 10,
        "text": "十一月"
    }, {
        "id": 11,
        "text": "十二月"
}];
```

### 最简单的用法

**单选**
```javascript
var ts = tinyselect('#tinyselectcontext', data);
```

**多选**
```javascript
var ts = tinyselect('#tinyselectcontext', data, true);
```

注：参数 `true`仅在第二个参数为数据数组时有效。

### 通过`select`元素创建`TinySelect`

通过`select`元素创建`TinySelect`实例时，传入配置需要注意以下问题:

- 支持读取`select`的以下属性：
    - readonly 生成只读实例
    - disabled 生成只读实例
    - multiple 生成多选实例
- 尽量在配置中通过设置`context`的`css`属性和`style`属性来控制`select`占位元素的样式，如：
    ```javascript
     var option = {
          context:{
              css: '自定义的样式类名称',
              style: {
                // 自定义样式 
              }
          }
     }
    ```
    在设置了这些样式时，占位元素的所有样式都靠自定义，`TinySelect`不会自动生成任何样式。
    否则将应用`select`元素的样式，此时**至少**需要设置`select`元素的**宽度和高度**，
    当然要是再设置个`border`那就更好了。
- 支持`optgroup`分组

> 选中或取消选中时，结果将自动同步至原始的`select`元素上，也就是说，可以直接通过原始`select`取到选中项的结果。
    
### 加点选项的用法

```javascript
var ts = tinyselect('#tinyselectcontext', {
    css: 'custom-select-style',
    style:{
        width: 400
    },
    item:{
        data: data,
        render: function(data, index){
            return (index + 1) + ':' + data.text;
        }
    }
});
```
这里指定了自定义的样式类`custom-select-style`，这个类会被附加到下拉组件的顶层容器上，
可以通过`.tinyselect-container.custom-select-style`这样的方式来重写样式。

更多用法，请看[示例](https://hyjiacan.oschina.io/tinyselect/examples/)。

## 选项

创建下拉组件的默认选项。这里列出了所有可用的项，这些项会被附加到`TinySelect`上面,
可以通过修改`tinyselect.defaults` 来改变这些默认配置，如： `tinyselect.defaults.result.multi = true` 
这样的写法会让页面内之后创建的下拉组件都默认启用多选模式。

```javascript
var option = {
    // 组件初始化完成后，可用时的回调(由`ready`事件变化而来)，其上下文对象指向实例的`this`对象
    ready: null,
    // 组件是否是只读的
    readonly: false,
    // 显示模式，可以设置的值为： dropdown(默认下拉模式), list(列表模式), popup(弹出模式)
    mode: 'dropdown',
    // 是否支持键盘操作，默认为 true
    keyboard: true,
    // 附加的样式类名称
    css: null,
    // 下拉框容器的样式
    style: {
        // 这个行高是必须的，覆盖这些样式时，需要注意，
        // 其值需要是可以转换成整数的类型，因为下拉的项会使用这个作为默认的行高
        // 例外的情况：设置了项的行高(即下面的 item.line-height)
        lineHeight: '28px'
    },
    // 获取远程数据的选项
    ajax:{
        // 获取远程数据的地址
        // 设置了此参数即表示需要从远程加载数据
        url: null,
        // 请求的method
        type: 'get',
        // 请求的参数，可以是对象，字符串(q=v&q=v&q=v)或函数
        // 是对象或字符串时，一般是固定参数
        // 是函数时，用于动态设置参数，过滤框的输入会作为参数传入，返回值将作为请求的参数
        param: null,
        // 过滤数据时，传给后台的关键字参数名称
        // 留空时表示过滤时不从远程重新查询数据
        key: null,
        // 关键字的编码器，当需要传输中文或特殊字符时，参数会被这个编码器编码后再进行传输
        // 这是一个函数，其参数是过滤框内的输入
        // 可以使用浏览器内置的 encodeURI或encodeURIComponent，
        // 当然也可以使用自己写的或第三方诸如 Base64.encode 类的函数
        encoder: NULL,
        // 对请求的预处理函数，其参数为jQuery的ajax选项对象，返回false以阻止查询
        req: null,
        // 对返回数据的处理函数，其参数为: (data, status, xhr)，其返回值将作为组件的数据被加载
        res: null,
        // 是否在初始化时发送请求加载数据
        auto: true
    },
    // 下拉框的头部
    header: {
        // 头部渲染器，其this上下文就是其DOM对象，
        // 直接操作这个对象来改变头部
        // 这个是在执行完其初始化，添加到容器前调用的
        render: false,
        // 过滤框
        filter: {
            // 触发过滤的动作，可以设置为 change 或 enter(默认)。
            // 为change时，输入有变化时执行
            // 为enter时，按下回车时执行
            trigger: 'enter',
            // 此值表示在输入框经过指定时间后没有键盘输入时，触发过滤动作
            // 单位是毫秒，默认值为 618
            // 当 trigger 为change时有效
            // 设置这个是为了防止使用亚洲输入法时（比如：中文，日文等）时，文字输入中将字母上屏导致的事件触发
            delay: 618,
            // 过滤框的提示文字
            placeholder: '输入后按回车过滤',
            // 过滤时是否区分大小写，默认为 false
            matchCase: false,
            // 过滤框支持输入的最大长度
            maxlength: 32,
            // 附加的样式类名称
            css: null,
            // 过滤框的样式
            style: {}
        },
        // 附加的样式类名称
        css: null,
        // 头部样式
        style: {}
    },
    // 下拉项容器
    box: {
        // 下拉列表没有数据时显示的文字
        empty: '没有数据',
        // 数据项的布局方式
        // 可设置的值有： list(列表布局，默认值), grid(网格布局), table(表格布局)
        layout: layout_list,
        // 附加的样式类名称
        css: null,
        // 下拉项容器的样式
        style: {},
        // 当layout为表格布局时，列的定义
        columns: null
    },
    // 数据项分组设置
    group: {
        // 分组值字段
        // 设置此值时才会分组
        valueField: false,
        // 分组文本字段，不设置时使用 valueField
        // 相同的 valueField 而 textField不同时，只会取第一个 textField的值
        textField: false,
        // 数据项不包含指定的 valueField字段时的分组名称
        unknown: '未分组',
        // 分组的渲染器
        render: false,
        // 附加的样式类名称
        css: null,
        // 下拉项容器的样式
        style: {}
    },
    // 下拉项
    item: {
        // 下拉项数据的数组，每一项需要对象结构的数据
        data: [],
        // 默认选中的项
        value: false,
        // 数据对象的值字段，在获取/设置值时，会使用这个字段
        valueField: 'id',
        // 数据对象的文本字段，下拉项的显示文字
        textField: 'text',
        // 可见项的数量，数据数量多余此值时出现滚动条
        visible: 5,
        // 下拉项的渲染器，使用返回值设置项的内容
        // render: function(itemdata, index, alldata){}  this 指向即将渲染的网页元素对象。
        // itemdata:这一项的数据 
        // index: 这一项数据的索引
        // alldata:下拉的所有数据
        // 设置为false 禁用渲染器
        render: false,
        // 是否在数据项比设定的 visible 多时使用异步渲染(true)，
        // 在数据较多时建议设置为true，以避免大量的dom操作阻塞页面执行
        async: true,
        // 附加的样式类名称
        css: null,
        // 每一个下拉项的样式
        style: {}
    },
    // 下拉底部DOM
    footer: {
        // 底部渲染器，其this上下文就是其DOM对象，
        // 直接操作这个对象来改变底部
        // 需要注意的是，底部分了“左”、“右”两个区域，以放置不同的东西
        // 这个是在执行完其初始化，添加到容器前调用的
        render: false,
        /**
         * 下拉项数量
         */
        totalTpl: '共' + str_placeholder + '项',
        /**
         * 选中的下拉项数据
         */
        selectedTpl: '选中' + str_placeholder + '项/',
        // 附加的样式类名称
        css: null,
        // 底部的样式
        style: {}
    },
    result: {
        // 是否启用多选模式
        multi: false,
        // 是否显示下拉指示器
        // false    始终不显示
        // true     始终显示
        // null     单选时显示  多选时不显示
        arrow: null, 
        // 当从select创建实例时，是否需要将TinySelect的选中值同步到select上，默认为 true
        sync: true,
        // 选中结果框的渲染器，可以通过这个来改变选中结果框的渲染
        render: false,
        // 多选结果展示方式，可以设置为 0（显示选中的数量，默认值） 或者 1（显示 选中的项列表）
        // 这是一个预留配置项
        type: 0,
        // 多选结果框附加的样式类名称
        css: null,
        // 多选结果框的样式
        style: {},
        // 多选结果选项
        item:{            
            // 选中结果的渲染器，可以通过这个来改变选中结果的渲染
            // 上下文指`this`向下拉组件
            render: false,
            // 结果项的样式
            style: null,
            // 附加的样式类名称
            css: null
        }
    }
}
```
注：

- 以上选项中所有的`style`项可以使用所有的`css`样式，名称中有连字符的时候可以写成`font-size`或者`fontSize`
- 多选的结果框始终不会显示下拉指示器

### 键盘支持

通过选项`option.keyboard` 设置是否支持键盘操作，默认为`true`
当为`true`时，可以通过以下键操作组件：

- `↑` 上方向键，项向上移动一位
- `↓` 下方向键，项向下移动一位
- `Space` 空格键，选中/取消选中当前项
- `Esc` Esc键，关闭组件

### 显示模式选项

目前组件提供了三种显示模式：

- `dropdown` 下拉模式（默认） [示例](examples/#mode-dropdown-single.html)
- `list` 列表模式，此模式没有选择结果框 [示例](examples/#mode-list-single.html)
- `popup` 弹出模式，这项会弹出框的方式显示数据项，在弹出框后面，有一个mask层 [示例](examples/#mode-popup-single.html)

### 数据项布局选项

**布局**是指数据项的排列方式，通过参数`option.box.layout`来设置，可以设置为

- `list` 列表布局，默认值 [示例](examples/#layout-list-single.html)
- `grid` 网格布局 [示例](examples/#layout-grid-single.html)
- `table` 表格布局 [示例](examples/#layout-table-single.html)

布局`grid`与`table`不同之处在于:
- `grid`是所有项以网格方式显示，每一行显示的项的数量与每项占用的宽度相关,如果要控制每一行显示项的数量，那么请设置项的宽度和下拉框的宽度
- `table`的一行显示的是一项数据的多个字段

不同的布局基本上都是通过不同的样式来实现的。

### 表格布局选项

当使用参数`option.box.layout: 'table'`时，下拉会通过表格的方式呈现。

此时，需要通过选项`option.box.columns`来定义显示的列，如：

```javascript
var option = {
    box:{
        layout: 'table',
        columns: [{
            type: 'index',
            width: 40,
            align: 'center'
        }, {
            field: 'name',
            width: 120,
            style:{
                color: 'red'
            },
            css: 'name-css',
            render: function(val){
                var info = this;
                return val;
            }
        }, {
            type: 'status',
            width: 40
        }]
    }
}
```

以上为表格布局时可用的列定义。其中，columns 是一个数组，每一项描述一列；每一列可用的属性如下：
- type 内置的列类型，可选 `index`和`status`，分别对应 **索引列** 和 **选中状态** 列，普通列不传此参数
- width 列的宽度，这个属性，要么所有列都设置，要么所有列都不设置（此时所有列平分宽度），当仅有部分列设置时，列宽度可能出现意外，强烈建议对每一列都指定宽度
- style 这是一个对象，列的样式描述，用法与 jQuery 的 `.css` 方法一致
- css 给列附加的样式类，多个类间使用空格分隔
- align 列的对齐方式，可选值为 `center`、`left`、`right`
- render 列渲染器，这是一个回调函数，它有一个参数`e`，其结构如下：
    ```javascript
    var e = {
        rowIndex: '行索引',
        columnIndex: '列索引',
        data: '行的数据对象',
        value: '列的值'
    }
    ```
    其返回值会作为显示的内容。

## 属性

`TinySelect`将一些常用的东西放到了实例的属性上:

|名称|类型|描述|
|:-:|:-:|:-|
|ready|boolean|初级初始化是否完成，如果有初始化数据，此属性将会在数据渲染完成后才为`true`|
|source|jQuery|创建实例的元素|
|context|jQuery|当从`select`创建时，是新创建的占位元素，否则为创建实例的元素 |
|result|jQuery|存放选中结果项的容器|
|dom|jQuery|整个下拉框元素|
|header|jQuery|下拉部分的头部|
|box|jQuery|下拉项的列表容器|
|footer|jQuery|下拉部分的底部|
|placeholder|jQuery|未选择元素时的占位符|
|events|Object|注册的事件集合|
|fromSelect|boolean|是否从`select`元素创建的实例|

## 接口

`TinySelect` 提供了一组易用的操作接口。这些接口除了取值类的，其它都返回了下拉组件的实例，也就是说非取值类的接口可以进行链式调用。

|签名|描述|参数|返回值|
|:-|:-|:-|:-|
|show(callback: Function)|显示下拉框|**callback** 下拉组件显示后的回调函数。这个回调函数没有参数，其上下文`this`对象指向下拉组件的弹出框DOM对象|TinySelect|
|hide(callback: Function)|隐藏下拉框|**callback** 下拉组件隐藏后的回调函数。这个回调函数没有参数，其上下文`this`对象指向下拉组件的弹出框DOM对象|TinySelect|
|value(value: Any, trigger: Boolean)|设置/获取下拉组件的选中值。<br/>注意:在初始化下拉组件后立即调用 `.value()` 设置值的时候，需要确保渲染已经完成，即选项中的`ready`回调已经被调用。|**value** 第一个参数是要设置的值，单选时传入单个值，多选时传入值数组。<br/>**trigger** 是否触发事件。`true`触发，`false`不触发。在设置值时，如果希望结果框中显示设置的值，这个参数需要传入`true`。默认为`false`。|TinySelect/Any<br/>当传了参数时是设置值；不传参数时，是获取值，此时若是单选则返回选中的值，多选则返回选中的值的数组。|
|filter(keyOrFn: String/Function, toggle: Boolean)|根据关键字或函数过滤数据项。|**keyOrFn** 关键字或过滤器函数。当传入字符串的时候，会在下拉项中查找匹配的文本，若有匹配则返回这项的数据；传入函数时，通过函数的返回值决定是否命中（返回`true`表示命中），这个函数的上下文`this`对象是某一个下拉项的DOM对象，并且有一个参数`data`，`data`是这个数据项的数据。<br/>**toggle** 是否切换显示状态，即隐藏未命中项，显示命中项。默认为`false`。|Array<br/>返回所有命中项的数据组成的数组。|
|clear()|清除下拉组件的选中项。||TinySelect|
|load(data: Array)|加载数据，重新渲染下拉项。<br/>注意：调用这个函数前的所有数据项都会在重新渲染前被清空。|**data** 组件会根据这个数据重新渲染所有的下拉项|TinySelect|
|readonly(readonly: Boolean)|设置/获取下拉组件的只读模式。当传了参数时是设置模式，不传参数时为获取模式。|**readonly** 为`true`时设置下拉组件只读，为`false`取消下拉组件的只读模式；不传时为获取当前是否是只读模式|Boolean/TinySelect|
|on(eventType: String, handler: Function)|绑定事件到下拉组件上。|**eventType** 事件类型名。目前支持`select`,`unselect`，传入其它值无效。<br/>**handler** 事件的处理函数。详见下方 [事件](#事件) 部分|TinySelect|
|off(eventType: String, handler: Function)|从下拉组件上取消事件的绑定。<br/>注意：在调用`off`的时候，`handler`需要是函数引用，这个函数引用应该与调用`on`的时候是同一个引用，所以，调用`on`时使用了匿名函数，那么在这里无法解除绑定。|参数同上面的**on**函数|TinySelect|

## 事件

TinySelect 目前提供了两个事件：`select`, `unselect`。

### select: Function

下拉项被选中时触发的事件。上下文`this`指向下拉组件，处理函数有一个参数`e`，其结构如下：

```javascript
e = {
    data: Object,
    index: Number,
    target: HtmlElement,
    type: String
}
```

，其中，`data`是下拉项的数据，`index`是下拉项的索引，`target`是下拉项的DOM元素，`type`是事件类型。

### unselect: Function

下拉项被取消选中时触发的事件。上下文`this`指向下拉组件，参数与用法与`select`事件相同。

## 自定义样式

可以通过重写这些样式来实现不同的效果。
如果仅仅想要重设配色，那么可以直接通过修改*src/colors.less*文件，然后重新编译。这个文件里面提供了目前组件中的大部分颜色变量。

### 上下文元素

- tinyselect-context 用来创建下拉组件的元素
- tinyselect-context-result 存放选中结果的容器
- tinyselect-result-item 选中结果项
- tinyselect-result-item-text 选中结果项的文本
- tinyselect-result-item-link 选中结果项的移除按钮
- tinyselect-context-with-arrow 带有下拉指示器时候的样式
- tinyselect-context-arrow 下拉指示器
- tinyselect-readonly 下拉框处于只读模式的样式

### 弹出框mask层

> 仅在`popup`模式时存在

- tinyselect-mask 弹出框的mask层，container的父级元素，默认以`position: fixed`撑满窗口

### 弹出框

- tinyselect-container 下拉框最顶级容器
- tinyselect-empty 没有数据项时顶级容器的样式
- tinyselect-mode-dropdown 下拉组件作为下拉框显示时的样式(默认)
- tinyselect-mode-list 下拉组件作为列表显示时的样式
- tinyselect-mode-popup 下拉组件作为弹出框显示时的样式

#### 头部

- tinyselect-header 下拉框头部元素，过滤框就是放这里面的
- tinyselect-filter 下拉框的过滤输入框

#### 底部

- tinyselect-footer 下拉框底部元素
- tinyselect-footer-left 底部左侧容器
- tinyselect-footer-right 底部右侧容器
- tinyselect-count-total 底部右侧显示下拉项数量
- tinyselect-count-selected 底部右侧显示下拉项选中的数量

#### 下拉项

- tinyselect-box 下拉项的容器
- tinyselect-box-layout-list 下拉项列表布局
- tinyselect-box-layout-grid 下拉项网格布局
- tinyselect-box-layout-table 下拉项表格布局
- tinyselect-scroll-proxy 列表项滚动的代理元素
- tinyselect-item 下拉项
- tinyselect-item-selected 下拉项选中状态
- tinyselect-item-before 下拉项文字前的元素
- tinyselect-item-text 下拉项文字元素
- tinyselect-item-after 下拉项文字后的元素
- tinyselect-group-content 分组项的容器，同一组的项会被放到一起