import Row from "../../src/components/element/MyRow.vue";
import { shallowMount } from "@vue/test-utils";

describe("Row.vue",()=>{
  let wrapper;
  let rowEle;
  beforeEach(()=>{
    wrapper = shallowMount(Row);
    rowEle = wrapper.vm.$el;
  })
  it("create",()=>{
    expect(rowEle.classList).toContain("el-row");
  })
  it("gutter",async()=>{
    await wrapper.setProps({gutter:20});
    await wrapper.vm.$nextTick(); 
    expect(rowEle.style.marginLeft).toBe("-10px");
    expect(rowEle.style.marginRight).toBe("-10px");
  })
  it("type",async()=>{
    await wrapper.setProps({type:"flex"});
    await wrapper.vm.$nextTick(); 
    expect(rowEle.classList).toContain("el-row--flex");
  })
  it("justify",async()=>{
    await wrapper.setProps({justify:"end"});
    await wrapper.vm.$nextTick(); 
    expect(rowEle.classList).toContain("is-justify-end");
  })
  it("align",async()=>{
    await wrapper.setProps({align:"bottom"});
    await wrapper.vm.$nextTick();
    expect(rowEle.classList).toContain("is-align-bottom");
  })
})  



// 逐行解析
// 1. 导入语句
// import Row from "@element/row.vue";
// 含义：从 @element/row.vue 路径导入 Row.vue 组件（Element Plus 库中的 Row 组件）。
// 作用：将 Row 组件引入测试文件中，以便后续测试其行为。
// 注意：@element 通常是项目中配置的路径别名，可能指向 node_modules/element-plus 或本地组件目录。
// import { shallowMount } from "@vue/test-utils";
// 含义：从 @vue/test-utils 导入 shallowMount 函数。
// 作用：shallowMount 是 Vue Test Utils 提供的一个方法，用于“浅渲染” Vue 组件。浅渲染只渲染指定组件本身，不渲染其子组件（避免子组件的干扰）。
// 用途：创建组件实例以便测试其 DOM 结构、类名、样式等。
// import { it } from "element-plus/es/locales.mjs";
// 含义：从 element-plus/es/locales.mjs 导入 it 函数。
// 作用：it 是 Jest 的测试用例定义函数，用于定义单个测试用例。注意，这里从 Element Plus 导入 it 可能是一个错误或特殊配置，通常 it 直接由 Jest 提供（全局可用，无需导入）。可能是项目中重定义了 it 或有特殊配置。
// 建议：检查是否需要从 Element Plus 导入 it，通常直接用 Jest 的全局 it 即可（无需显式导入）。
// 2. 测试套件定义
// describe("Row.vue", () => {
// 含义：使用 Jest 的 describe 函数定义一个测试套件（test suite），用于分组相关测试用例。
// 参数：
// "Row.vue"：测试套件的名称，表示测试的是 Row.vue 组件。
// () => { ... }：回调函数，包含具体的测试用例和初始化逻辑。
// 作用：组织测试代码，将所有与 Row.vue 相关的测试用例放在一个分组中，便于管理和报告。
// 3. 初始化设置
// beforeEach(() => {
//   wrapper = shallowMount(Row);
//   rowEle = wrapper.vm.$el;
// })
// 含义：使用 Jest 的 beforeEach 钩子，在每个测试用例（it 块）运行前执行初始化逻辑。
// 作用：确保每个测试用例开始时有一个干净的组件实例，避免测试之间相互干扰。
// 具体语句：
// wrapper = shallowMount(Row);
// 含义：通过 shallowMount 渲染 Row 组件，生成一个组件实例（wrapper）。
// wrapper：Vue Test Utils 返回的包装器对象，包含组件的实例、DOM 结构和测试工具方法。
// 作用：创建 Row 组件的浅渲染实例，供后续测试访问其 DOM 和状态。
// rowEle = wrapper.vm.$el;
// 含义：获取 Row 组件的根 DOM 元素。
// wrapper.vm：访问组件的 Vue 实例（vm 是 Vue 实例的缩写）。
// $el：Vue 实例的属性，表示组件的根 DOM 元素（通常是一个 HTML 元素）。
// 作用：将组件的根元素存储在 rowEle 变量中，便于后续测试检查其类名和样式。
// 4. 测试用例
// 每个 it 块定义一个具体的测试用例，验证 Row 组件在不同配置下的行为。以下逐个解析：

// 测试用例 1：验证类名
// it("create", () => {
//   expect(rowEle.classList).toContain("el-row");
// })
// 含义：定义一个名为 "create" 的测试用例，检查 Row 组件的根元素是否包含类名 el-row。
// 语句解析：
// it("create", () => { ... })：定义测试用例，名称为 "create"，表示测试组件的基本创建。
// rowEle.classList：访问组件根元素的 classList 属性（DOM 元素的类名集合）。
// expect(rowEle.classList).toContain("el-row")：
// expect：Jest 的断言函数，用于设置测试期望。
// toContain：Jest 提供的匹配器，检查数组或集合是否包含指定项。
// 作用：验证 rowEle 的类名列表中是否包含 el-row（Element Plus 的 Row 组件默认类名）。
// 目的：确保 Row 组件渲染后，其根元素正确应用了 el-row 类名。
// 测试用例 2：验证 gutter 属性
// it("gutter", () => {
//   wrapper.setProps({ gutter: 20 });
//   expect(rowEle.style.marginLeft).toBe("-10px");
//   expect(rowEle.style.marginRight).toBe("-10px");
// })
// 含义：测试 Row 组件的 gutter 属性（用于设置列间距）是否正确影响根元素的样式。
// 语句解析：
// wrapper.setProps({ gutter: 20 });：
// setProps：Vue Test Utils 的方法，用于动态设置组件的 props。
// { gutter: 20 }：将 gutter 属性设置为 20。
// 作用：模拟给 Row 组件传递 gutter="20" 的 props，触发组件重新渲染。
// expect(rowEle.style.marginLeft).toBe("-10px");：
// 检查根元素的 margin-left 样式是否为 -10px。
// 逻辑：Element Plus 的 Row 组件会将 gutter 值均分到左右两侧的负边距（gutter / 2 = 20 / 2 = 10），因此 margin-left 应为 -10px。
// expect(rowEle.style.marginRight).toBe("-10px");：
// 类似地，检查 margin-right 是否为 -10px。
// 目的：验证 gutter 属性正确生成负边距样式，用于实现列间距。
// 测试用例 3：验证 type 属性
// it("type", () => {
//   wrapper.setProps({ type: "flex" });
//   expect(rowEle.classList).toContain("el-row--flex");
// })
// 含义：测试 Row 组件的 type 属性设置为 flex 时，是否正确添加类名 el-row--flex。
// 语句解析：
// wrapper.setProps({ type: "flex" });：设置 type 属性为 "flex"，模拟 <el-row type="flex">。
// expect(rowEle.classList).toContain("el-row--flex");：验证根元素的类名是否包含 el-row--flex。
// 目的：确保 type="flex" 触发了 Flexbox 布局的类名（el-row--flex），用于实现弹性布局。
// 测试用例 4：验证 justify 属性
// it("justify", () => {
//   wrapper.setProps({ justify: "end" });
//   expect(rowEle.classList).toContain("is-justify-end");
// })
// 含义：测试 Row 组件的 justify 属性设置为 end 时，是否正确添加类名 is-justify-end。
// 语句解析：
// wrapper.setProps({ justify: "end" });：设置 justify 属性为 "end"，模拟 <el-row justify="end">。
// expect(rowEle.classList).toContain("is-justify-end");：验证根元素的类名是否包含 is-justify-end。
// 目的：确保 justify="end" 正确应用类名（通常对应 CSS 的 justify-content: flex-end）。
// 测试用例 5：验证 align 属性
// it("align", () => {
//   wrapper.setProps({ align: "bottom" });
//   expect(rowEle.classList).toContain("is-align-bottom");
// })
// 含义：测试 Row 组件的 align 属性设置为 bottom 时，是否正确添加类名 is-align-bottom。
// 语句解析：
// wrapper.setProps({ align: "bottom" });：设置 align 属性为 "bottom"，模拟 <el-row align="bottom">。
// expect(rowEle.classList).toContain("is-align-bottom");：验证根元素的类名是否包含 is-align-bottom。
// 目的：确保 align="bottom" 正确应用类名（通常对应 CSS 的 align-items: flex-end 或类似样式）。

// 补充：wrapper变量存储的内容可以理解为组件实例本身，其中提供了众多的组件测试相关的方法，而rowEle变量则是正常情况下进行