import React from 'react';
import { Button } from 'antd';
import context from '@/utils/context';

export default ({ code, children, ...rest }) => {
  const { GlobalContext } = context;

  return (
    <GlobalContext.Consumer>
      {global => {
        const { menuPaths } = global;
        if (menuPaths) {
          const item = menuPaths[window.location.pathname];
          if (item && item.actions) {
            const { actions } = item;
            const hasAction = actions.some(action => action.code === code);
            if (hasAction) {
              return <Button {...rest}>{children}</Button>;
            }
          }
        }
        return null;
      }}
    </GlobalContext.Consumer>
  );
};
