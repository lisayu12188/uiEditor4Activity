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
    forms: ['textareaForm', 'fontSet','commonForms']
  },
  {
    name: 'title1',
    forms: ['inputForm', 'fontSet','commonForms']
  },
  {
    name: 'picTitle',
    forms: ['uploadImg','commonForms']
  },


]

export default {
  allForms,
  allComponents
}
