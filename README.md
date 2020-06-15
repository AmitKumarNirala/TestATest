<Dialog
open={open}
onClose={handleClose}
scroll={scroll}
aria-labelledby="scroll-dialog-title"
aria-describedby="scroll-dialog-description"
maxWidth='lg'
>


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
