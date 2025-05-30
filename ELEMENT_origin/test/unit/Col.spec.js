import Col from "../../src/components/element/MyCol.vue";
// import Row from "../../src/components/element/MyRow.vue";
import { shallowMount } from "@vue/test-utils";

describe("Col.vue",()=>{
  let wrapper;
  let colEle;
  beforeEach(()=>{
    wrapper = shallowMount(Col);
    colEle = wrapper.vm.$el;
  })
  it("create",()=>{
    expect(colEle.classList).toContain("el-col");
    console.log(wrapper.html());
  })
  it("span",async()=>{
    await wrapper.setProps({span:12});
    await wrapper.vm.$nextTick(); 
    expect(colEle.classList).toContain("el-col-12");
  })
  it("offset",async()=>{
    await wrapper.setProps({offset:6});
    await wrapper.vm.$nextTick(); 
    expect(colEle.classList).toContain("el-col-offset-6");
  })
  it("pull",async()=>{
    await wrapper.setProps({pull:3});
    await wrapper.vm.$nextTick(); 
    expect(colEle.classList).toContain("el-col-pull-3");
  })
  it("push",async()=>{
    await wrapper.setProps({push:5});
    await wrapper.vm.$nextTick(); 
    expect(colEle.classList).toContain("el-col-push-5");
  })
  it("respnsive",async()=>{
    await wrapper.setProps({
      sm:{ span:4,offset:2 },
      md:8,
      lg:{ span:6,offset:3 }
    });
    await wrapper.vm.$nextTick(); 
    expect(colEle.classList).toContain("el-col-sm-4");
    expect(colEle.classList).toContain("el-col-offset-2");
    expect(colEle.classList).toContain("el-col-md-8");
    expect(colEle.classList).toContain("el-col-lg-6");
    expect(colEle.classList).toContain("el-col-lg-offset-3");
  })
  it("gutter",()=>{
    const wrapper = shallowMount(Col,{
      parentComponent:Row
    });
    const colEle = wrapper.vm.$el;
    wrapper.vm.$parent.gutter = 20;
    expect(colEle.style.paddingLeft).toBe("10px");
    expect(colEle.style.paddingRight).toBe("10px");
    //测试属性值
  })
})  