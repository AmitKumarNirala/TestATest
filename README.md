import React from 'react';
import { Grid } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import {TaskProgress} from '../components';
import {FundGroupPageData} from '../../DataInput';
import UseClickPreventionOnDoubleClick from './useClickPreventionOnDoubleClick'
import Summary from './Summary'


function GroupFund(props) {

    const [open, setOpen] = React.useState(false);
    const [openSummary, setOpenSummary] = React.useState(false);
    const [scroll, setScroll] = React.useState('paper');
    const handleClickOpen = (scrollType) => () => {
      setOpen(true);
      setScroll(scrollType);
    };
    const handleClickOpenSummary = (scrollType) => () => {
      setOpenSummary(true);
      setScroll(scrollType);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleCloseSummary = () => {
      setOpenSummary(false);
    };

    function nextPage(props) {
      if (open) {
        return <FundGroupPageData/>;
      }
      else if (openSummary) {
        return <FundGroupPageData />;
      }
    }
    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
      if (open) {
        const { current: descriptionElement } = descriptionElementRef;
        if (descriptionElement !== null) {
          descriptionElement.focus();
        }
      }
    }, [open,openSummary]);

    const ClickableBox = ({ onClick, onDoubleClick }) => {
      const [handleClick, handleDoubleClick] = UseClickPreventionOnDoubleClick(onClick, onDoubleClick);
    
      return (
        <TaskProgress data={props.data} expTime={props.expTime} userName={props.userName} fundGroupName={props.fundGroupName} onClick={handleClick} onDoubleClick={handleDoubleClick}/>
      );
    };
    return (
            <Grid
item
lg={3}
sm={6}
xl={3}
xs={12}
>

<ClickableBox onClick={handleClickOpenSummary('paper')} onDoubleClick={handleClickOpen('paper')}/>
<Dialog
open={open}
onClose={handleClose}
scroll={scroll}
aria-labelledby="scroll-dialog-title"
aria-describedby="scroll-dialog-description"
maxWidth='lg'
>
---------------------------------------------------------------------------------------------------------------------------------

<FundGroupPageData/>


<DialogActions>
<Button onClick={handleClose} color="primary">
  Cancel
</Button>
   </DialogActions>
</Dialog>

<Dialog
open={openSummary}
onClose={handleCloseSummary}
scroll={scroll}
aria-labelledby="scroll-dialog-title"
aria-describedby="scroll-dialog-description"
maxWidth='lg'
>


<Summary/>


<DialogActions>
<Button onClick={handleClose} color="primary">
  Cancel
</Button>
   </DialogActions>
</Dialog>
</Grid>
    )
}

export default GroupFund;



