import { FC } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import { useStyles } from '../../pages/SignIn/styles';

interface Props {
  visible?: boolean;
  title: string;
  onClose: () => void;
  styles?: ReturnType<typeof useStyles>;
}

const ModalBlock: FC<Props> = ({ visible, children, title, onClose }) => {
  if (!visible) {
    return null;
  }
  return (
    <Dialog open={visible} onClose={onClose}>
      <DialogTitle id="form-dialog-title">
        <IconButton color="secondary" onClick={onClose}>
          <CloseIcon color="secondary" style={{ fontSize: 26 }} />
        </IconButton>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default ModalBlock;
