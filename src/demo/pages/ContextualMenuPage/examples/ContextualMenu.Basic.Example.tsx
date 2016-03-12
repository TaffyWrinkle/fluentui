import * as React from 'react';
import { ContextualMenu } from '../../../../components/index';

export default class ContextualMenuBasicExample extends React.Component<any, any> {
  public render() {
    return (
      <ContextualMenu
        shouldFocusOnMount={ false }
        items={
          [
            {
              key: 'newItem',
              name: 'New',
              icon: 'circlePlus',
              items: [
                {
                  key: 'emailMessage',
                  name: 'Email message',
                },
                {
                  key: 'calendarEvent',
                  name: 'Calendar event',
                }
              ]
            },
            {
              key: 'upload',
              name: 'Upload',
              icon: 'upload'
            },
            {
              key: 'rename',
              name: 'Rename',
            },
            {
              key: '-',
              name: '-',
            },
            {
              key: 'share',
              name: 'Share',
              icon: 'share',
              items: [
                {
                  key: 'sharetoemail',
                  name: 'Share to Email',
                  icon: 'mail'
                },
                {
                  key: 'sharetofacebook',
                  name: 'Share to Facebook',
                },
                {
                  key: 'sharetotwitter',
                  name: 'Share to Twitter',
                  icon: 'share'
                },
              ]
            },
            {
              key: 'print',
              name: 'Print',
              icon: 'print'
            },
          ]
        }
      />
    );
  }

}
