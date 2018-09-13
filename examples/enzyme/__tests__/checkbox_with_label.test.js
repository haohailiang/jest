// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */

import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

import CheckboxWithLabel from '../CheckboxWithLabel';

it('CheckboxWithLabel changes the text after click', () => {
  // Render a checkbox with label in the document
  // 从父组件传递过来的属性就 labelOn 和 labelOff 2个
  // 渲染组件到 dom 中
  const checkbox = shallow(<CheckboxWithLabel labelOn="On" labelOff="Off" />);

  // 测试文本节点
  expect(checkbox.text()).toEqual('Off');

  // 暴露的操作属性为 change
  checkbox.find('input').simulate('change');

  expect(checkbox.text()).toEqual('On');
});
