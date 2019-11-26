import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import '../src/index.css';  

const req = requireContext('../src/Components', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
