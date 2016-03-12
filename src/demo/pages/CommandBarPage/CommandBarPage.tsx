import * as React from 'react';
import {
  Link
} from '../../../components/index';
import {
  ExampleCard,
  PropertiesTable
} from '../../components/index';
import {CommandBarProps, ICommandBarItemProps } from './CommandBarProps';

import CommandBarBasicExample from './examples/CommandBar.Basic.Example';
let CommandBarBasicExampleCode = require('./examples/CommandBar.Basic.Example.tsx');

import CommandBarFixedOverflowExample from './examples/CommandBar.FixedOverflow.Example';
let CommandBarFixedOverflowExampleCode = require('./examples/CommandBar.FixedOverflow.Example.tsx');

import CommandBarRandomItemsExample from './examples/CommandBar.RandomItems.Example';
let CommandBarRandomItemsExampleCode = require('./examples/CommandBar.RandomItems.Example.tsx');

export default class CommandBarPage extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h1 className='ms-font-xxl'>CommandBar</h1>
        <div><Link target='_blank' text='CommandBars' url='http://dev.office.com/fabric/components/commandBar' /> provide a menu control to expose application commands. Command bars typically are rendered just below the header.</div>
        <h2 className='ms-font-xl'>Examples</h2>
        <ExampleCard title='CommandBar with search box and overflowing menu items' code={ CommandBarBasicExampleCode }>
          <CommandBarBasicExample />
        </ExampleCard>
        <ExampleCard title='CommandBar with no search box and fixed overflow items' code={ CommandBarFixedOverflowExampleCode }>
          <CommandBarFixedOverflowExample />
        </ExampleCard>
        <ExampleCard title='CommandBar with no search box and dynamically updated items' code={ CommandBarRandomItemsExampleCode }>
          <CommandBarRandomItemsExample />
        </ExampleCard>
        <PropertiesTable properties={ CommandBarProps } />
        <PropertiesTable title='ICommandBarItem Properties' properties={ ICommandBarItemProps } />
      </div>
    );
  }

}
