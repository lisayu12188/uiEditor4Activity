const allForms = [
  {
    type: 'inputForm',
    name: 'inputForm',
    title: '输入框',
    options: [{
      lable: '',
      value: ''
    }]
  },
  {
    type: 'textarea',
    name: 'textareaForm',
    title: '文本框',
    options: [{
      lable: '',
      value: ''
    }]
  },
  {
    type: 'commonForms',
    name: 'commonForms',
    title: '文本样式',
    options: [{
      lable: '',
      value: ''
    }]
  },

  {
    type: 'uploadImg',
    name: 'headerBannerImg1',
    title: '上传图片',
    options: [{
      lable: '',
      value: ''
    }]
  },
]


const allComponents = [
  {
    name: 'headerBannerImg1',
    forms: ['uploadImg']

  },


  {
    name: 'whiteFooter',
    forms: ['uploadImg']
  },
  {
    name: 'blackFooter',
    forms: ['uploadImg']
  },
  {
    name: 'paragraph1',
    forms: ['textareaForm']
  },
  {
    name: 'title1',
    forms: ['inputForm']
  },
  {
    name: 'picTitle',
    forms: ['uploadImg']
  },

  {
    name: 'img702',
    forms: ['uploadImg']
  },


]

// 组件对应的表单
const components_forms = {
  headerBannerImg1:['uploadImg'],
  paragraph1:['textareaForm'],
  picTitle:['uploadImg'],
  title1:['textareaForm'],
  blackFooter:['backgroundColor'],
  whiteFooter:['backgroundColor'],
  img702:['uploadImg']
}

export default {
  allForms, //暂时没用
  allComponents,
  components_forms
}
