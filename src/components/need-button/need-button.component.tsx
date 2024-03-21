import { Button, f7 } from 'framework7-react';
import React, { useCallback } from 'react';
import './need-button.style.less';

const NeedButton = ({ name }: { name: string }) => {
  const triggerAlert = useCallback(() => {
    f7.dialog.alert('Type: ' + name, 'Alert sent');
  }, [name]);
  return (
    <Button className="need-button" onClick={triggerAlert} large fill>
      {name}
    </Button>
  );
};

export default NeedButton;
