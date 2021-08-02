import { FC } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';

import CloseIcon from '@material-ui/icons/Close';

interface Props {
  visible?: boolean;
  title?: string;
  onClose: () => void;
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
